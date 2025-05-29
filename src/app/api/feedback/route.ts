import { NextRequest, NextResponse } from "next/server";

const telegramToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN!;
const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_FEEDBACK_CHAT_ID!;

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const text = formData.get("text")?.toString();

    if (!text) {
      return NextResponse.json({ error: "Missing text" }, { status: 400 });
    }

    await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text,
      }),
    });

    // Отправка фото, если есть
    const photo = formData.get("photo") as File | null;
    if (photo && photo.size > 0) {
      const photoForm = new FormData();
      photoForm.append("chat_id", telegramChatId);
      photoForm.append("caption", "📷 Фото з форми зворотного зв’язку");
      photoForm.append("photo", photo);

      await fetch(`https://api.telegram.org/bot${telegramToken}/sendPhoto`, {
        method: "POST",
        body: photoForm,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Telegram error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
