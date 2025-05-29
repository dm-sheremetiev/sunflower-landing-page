"use client";

import AppProvider from "@/app/providers/AppProvider";
import { useTranslation } from "react-i18next";
import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import imageCompression from "browser-image-compression";
import heic2any from "heic2any";

export default function PaymentDetails() {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);

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

    const textMessage = `📝 Новий відгук\n\n👤Ім’я: ${name}\n📦Номер замовлення: ${orderNumber}\n📞Контакти: ${contacts}\n\n💬 Повідомлення: ${message}
    `;

    try {
      const MAX_FILE_SIZE_MB = 5;
      let compressedFile: File | null = null;

      if (photoFile) {
        let processedFile: File = photoFile;

        // HEIC → JPEG
        if (
          photoFile.type === "image/heic" ||
          photoFile.name.toLowerCase().endsWith(".heic")
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
          compressedFile = new File([compressed], compressed.name, {
            type: compressed.type,
            lastModified: Date.now(),
          });
        } else {
          toast.error(
            "Фото занадто велике навіть після стиснення і не було надіслане."
          );
        }
      }

      // Подготовка и отправка на API-роут
      const formDataToSend = new FormData();
      formDataToSend.append("text", textMessage);
      if (compressedFile) {
        formDataToSend.append("photo", compressedFile);
      }

      const res = await fetch("/api/feedback", {
        method: "POST",
        body: formDataToSend,
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      toast.success("Форму надіслано успішно!");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Щось пішло не так. Спробуйте ще раз пізніше.");
    } finally {
      setIsLoading(false);
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
              disabled={isLoading}
              className="w-full disabled:opacity-50 bg-white text-black border hover:border-mainPink hover:bg-mainPink hover:text-mainRed font-semibold py-2 px-4 rounded-xl transition duration-200"
            >
              {isLoading ? t("feedback.loading") : t("feedback.button-send")}
            </button>
          </form>
        </div>
      </div>
      <Toaster position="top-right" />
    </AppProvider>
  );
}
