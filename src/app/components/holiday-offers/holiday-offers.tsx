"use client";

import AppProvider from "@/app/providers/AppProvider";
import Preloader from "../preloader/preloader";
import Header from "../header/header";
import { useState } from "react";
import HolidayBanner from "./components/holiday-banner/holiday-banner";
import { TypeOfProduct } from "@/app/types/product";
import { ProductsList } from "./components/products-list/products-list";
import { SelectionButtons } from "./components/selection-buttons/selection-buttons";

export const metadata = {
  title: "Пропозиції до Дня Закоханих | Sun Flower",
  description: "Знайдіть ідеальний букет до Дня Закоханих у Sun Flower.",
  openGraph: {
    title: "Пропозиції до Дня Закоханих | Sun Flower",
    description:
      "Обирайте найкращі святкові букети для коханих на 8 Березня.",
    url: "https://www.sun-flower.shop/holiday-offers",
    siteName: "Sun Flower",
    type: "website",
  },
};

export default function HolidayOffers() {
  const [selectedType, setSelectedType] =
    useState<TypeOfProduct>("tulips");

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
