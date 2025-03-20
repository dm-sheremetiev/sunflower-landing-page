"use client";

import AppProvider from "@/app/providers/AppProvider";
import Preloader from "../preloader/preloader";
import Header from "../header/header";
import { useEffect, useState } from "react";
import HolidayBanner from "./components/holiday-banner/holiday-banner";
import { TypeOfProduct } from "@/app/types/product";
import { ProductsList } from "./components/products-list/products-list";
import { SelectionButtons } from "./components/selection-buttons/selection-buttons";

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

  const handleHashChange = () => {
    let hashValue = window.location.hash.slice(1); // Убираем символ "#"
    // Если hash не задан или его значение не входит в список допустимых, устанавливаем значение по умолчанию
    if (!hashValue || !validTypes.includes(hashValue as TypeOfProduct)) {
      hashValue = "tulips";
    }
    setSelectedType(hashValue as TypeOfProduct);
  };

  useEffect(() => {
    // При первой загрузке
    handleHashChange();

    // Если необходимо отслеживать изменения hash (например, при навигации "назад"/"вперёд")
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <main className="w-full h-full flex flex-col items-center">
      <Preloader />

      <AppProvider>
        <Header isExternal isHoliday />

        <HolidayBanner />

        <SelectionButtons
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />

        <ProductsList selectedType={selectedType} />
      </AppProvider>
    </main>
  );
}
