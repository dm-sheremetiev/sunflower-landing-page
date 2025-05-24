"use client";

import AppProvider from "@/app/providers/AppProvider";
import Preloader from "../preloader/preloader";
import Header from "../header/header";
import { useEffect, useState } from "react";
import { TypeOfProduct } from "@/app/types/product";
import { ProductsList } from "./components/products-list/products-list";
import { SelectionButtons } from "./components/selection-buttons/selection-buttons";
import DiscountBanner from "../discount-banner/discount-banner";

export const metadata = {
  title: "Онлайн-вітрина | Sun Flower",
  description: "Оберіть найкращі букети та композиції у Sun Flower.",
  openGraph: {
    title: "Онлайн-вітрина | Sun Flower",
    description: "Перегляньте широкий вибір квіткових композицій та букетів.",
    url: "https://www.sun-flower.shop/products",
    siteName: "Sun Flower",
    type: "website",
  },
};

const validTypes: TypeOfProduct[] = [
  "tulips",
  "mono-bouquet",
  "mono-bucket",
  "mono-box",
  "mixed-bouquet",
  "mixed-bucket",
  "roses",
  "mixed-box",
  "xxl",
];

export default function HolidayOffers() {
  const [selectedType, setSelectedType] = useState<TypeOfProduct>("tulips");

  const updateTypeFromQuery = () => {
    const searchParams = new URLSearchParams(window.location.search);
    let typeFromQuery = searchParams.get("type") || "tulips";
    if (!validTypes.includes(typeFromQuery as TypeOfProduct)) {
      typeFromQuery = "tulips";
    }
    setSelectedType(typeFromQuery as TypeOfProduct);
  };

  useEffect(() => {
    // Устанавливаем значение при первой загрузке
    updateTypeFromQuery();

    // Если нужно отслеживать изменения query-параметров при навигации
    window.addEventListener("popstate", updateTypeFromQuery);

    return () => {
      window.removeEventListener("popstate", updateTypeFromQuery);
    };
  }, []);

  return (
    <main className="w-full h-full flex flex-col items-center">
      <Preloader />

      <AppProvider>
        <Header isExternal />

        <DiscountBanner />

        <SelectionButtons
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />

        <ProductsList selectedType={selectedType} />
      </AppProvider>
    </main>
  );
}
