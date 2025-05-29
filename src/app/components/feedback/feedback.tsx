"use client";

import AppProvider from "@/app/providers/AppProvider";
import { useTranslation } from "react-i18next";
import { FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import imageCompression from "browser-image-compression";
import heic2any from "heic2any";

const telegramToken = process.env.TELEGRAM_BOT_TOKEN || "";
const telegramChatId = process.env.TELEGRAM_FEEDBACK_CHAT_ID || "";

export default function PaymentDetails() {
  const { t } = useTranslation();
  const MAX_FILE_SIZE_MB = 5;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const orderNumber = (
      form.elements.namedItem("order-number") as HTMLInputElement
    ).value;
    const contacts = (form.elements.namedItem("contacts") as HTMLInputElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;
    const photoFile = (form.elements.namedItem("photo") as HTMLInputElement)
      ?.files?.[0];

    const textMessage = `
📝 Нова форма зворотного зв’язку:
👤 Ім’я: ${name}
📦 Номер замовлення: ${orderNumber}
📞 Контакти: ${contacts}
💬 Повідомлення: ${message}
    `;

    try {
      // 1. Отправка текста
      await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: textMessage,
        }),
      });

      // 2. Обработка и отправка фото
      if (photoFile) {
        let processedFile: File = photoFile;

        try {
          // HEIC → JPEG
          if (
            photoFile.type === "image/heic" ||
            photoFile.name.endsWith(".heic")
          ) {
            const convertedBlob = await heic2any({
              blob: photoFile,
              toType: "image/jpeg",
              quality: 0.8,
            });

            processedFile = new File(
              [convertedBlob as BlobPart],
              "converted.jpg",
              {
                type: "image/jpeg",
                lastModified: Date.now(),
              }
            );
          }

          // Сжатие
          const compressed = await imageCompression(processedFile, {
            maxSizeMB: 1.5,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
          });

          const sizeMB = compressed.size / (1024 * 1024);

          if (sizeMB <= MAX_FILE_SIZE_MB) {
            const formData = new FormData();
            formData.append("chat_id", telegramChatId);
            formData.append("caption", "📷 Фото з форми зворотного зв’язку");
            formData.append("photo", compressed);

            await fetch(
              `https://api.telegram.org/bot${telegramToken}/sendPhoto`,
              {
                method: "POST",
                body: formData,
              }
            );
          } else {
            toast.error(
              "Фото занадто велике навіть після стиснення і не було надіслане."
            );
          }
        } catch (error) {
          toast.error("Не вдалося обробити фото. Спробуйте інший формат.");
          console.error("Image processing error:", error);
        }
      }

      toast.success("Форму надіслано успішно!");
      form.reset();
    } catch (err) {
      toast.error("Щось пішло не так. Спробуйте ще раз пізніше.");
      console.error(err);
    }
  };

  return (
    <AppProvider>
      <div className="w-full h-full min-h-screen flex flex-col items-center justify-center px-6 my-10">
        <div className="shadow-xl rounded-lg p-5 w-full md:w-[50%] border">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
            {t("feedback.feedback-title")}
          </h2>

          <p className="text-sm py-2">{t("feedback.feedback-description")}</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                {t("feedback.your-name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:border-mainPink focus:ring-mainPink"
              />
            </div>

            <div>
              <label
                htmlFor="order-number"
                className="block text-sm font-medium text-gray-700"
              >
                {t("feedback.order-number")}
              </label>
              <input
                type="text"
                id="order-number"
                name="order-number"
                required
                placeholder={t("feedback.order-number-placeholder")}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:border-mainPink focus:ring-mainPink"
              />
            </div>

            <div>
              <label
                htmlFor="contacts"
                className="block text-sm font-medium text-gray-700"
              >
                {t("feedback.your-contacts")}
              </label>
              <input
                type="text"
                id="contacts"
                name="contacts"
                required
                placeholder={t("feedback.contacts-placeholder")}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:border-mainPink focus:ring-mainPink"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                {t("feedback.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder={t("feedback.message-placeholder")}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:border-mainPink focus:ring-mainPink"
              />
            </div>

            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                {t("feedback.photo-optional")}
              </label>
              <input
                type="file"
                name="photo"
                id="photo"
                accept="image/*"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
              />
              <p className="text-xs text-gray-500 mt-1">
                {t("feedback.max-size")}
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black border hover:border-mainPink hover:bg-mainPink hover:text-mainRed font-semibold py-2 px-4 rounded-xl transition duration-200"
            >
              {t("feedback.button-send")}
            </button>
          </form>
        </div>
      </div>
      <Toaster position="top-right" />
    </AppProvider>
  );
}
