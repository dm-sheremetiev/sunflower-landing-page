/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleSpreadsheet } from "google-spreadsheet";
import { NextRequest, NextResponse } from "next/server";
import { JWT } from "google-auth-library";
import { TypeOfProduct } from "@/app/types/product";
import { typesOfProduct } from "@/app/components/products-content/components/selection-buttons/typesOfProducts";

const sheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID || "";
const clientEmail = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL || "";
const privateKey = (process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY || "").replace(
  /\\n/g,
  "\n"
); // Убираем \n, если ключ сохранён неправильно

const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets.readonly",
  "https://www.googleapis.com/auth/drive.readonly",
];

const jwt = new JWT({
  email: clientEmail,
  key: privateKey,
  scopes: SCOPES,
});

interface SheetRow {
  "Google Drive ID"?: string;
  арт?: string;
  категорія: string;
  "кол во": string;
  назва: string;
  "ціна букет": string;
}

interface Variety {
  quantity: string | number;
  price: string | number;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    
    let type: TypeOfProduct = "roses";

    const bareType: TypeOfProduct =
      (searchParams.get("type") as TypeOfProduct) ||"roses";

      if (!typesOfProduct.map(t => t.typeOfProduct).includes(bareType)) {
        type = "roses";
      } else {
        type = bareType;
      }


    const doc = new GoogleSpreadsheet(sheetId, jwt);

    await doc.loadInfo();

    const sheetIndexMap: Record<TypeOfProduct, number> = {
      tulips: 0,
      roses: 0,
      "mono-bouquet": 1,
      "mono-box": 2,
      "mono-bucket": 3,
      "mixed-bouquet": 4,
      "mixed-box": 5,
      "mixed-bucket": 6,
      xxl: 7,
      test: 8,
    };

    // Используем соответствующий индекс или 0 по умолчанию
    const sheetIndex = sheetIndexMap[type] ?? 1;

    const sheet = doc.sheetsByIndex[sheetIndex]; // Берём нужный

    const rows = await sheet.getRows<SheetRow>(); // Указываем тип данных

    const formattedData: Record<string, any> = {};

    rows.forEach((row) => {
      const name = row.get("назва") as string; // Используем row.get()
      const category = row.get("категорія") as string;
      const art = row.get("арт") as string | null;
      const quantity = row.get("кол во") as string;
      const price = parseFloat(row.get("ціна букет") as string);
      const photoId = row.get("Google Drive ID") as string;
      const formattedPhotoId = photoId?.split("&")[0];

      const formattedPrice = price.toLocaleString("uk-UA", {
        style: "currency",
        currency: "UAH",
        minimumFractionDigits: 0,
      });

      const photo = photoId
        ? `https://lh3.googleusercontent.com/d/${formattedPhotoId}=s1000`
        : null;

      if (formattedData[name]) {
        formattedData[name].variety.push({ quantity, price: formattedPrice });
      } else {
        formattedData[name] = {
          name,
          category,
          art,
          photo,
          variety: [{ quantity, price: formattedPrice }],
        };
      }
    });

    // Сортируем variety по возрастанию цены
    Object.values(formattedData).forEach((item) => {
      item.variety.sort(
        (a: Variety, b: Variety) => Number(a.price) - Number(b.price)
      );
    });

    const result = Object.values(formattedData);

    return NextResponse.json({ data: result });
  } catch (error) {
    console.error("Ошибка при получении данных из Google Sheets:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
