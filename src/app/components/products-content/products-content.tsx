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
  "balloons",
];

export default function HolidayOffers() {
  const [selectedType, setSelectedType] = useState<TypeOfProduct>("roses");

  const updateTypeFromQuery = () => {
    const searchParams = new URLSearchParams(window.location.search);
    let typeFromQuery = searchParams.get("type") || "roses";
    if (!validTypes.includes(typeFromQuery as TypeOfProduct)) {
      typeFromQuery = "roses";
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

      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,t,u,c){
                var s=d.createElement(t),j=d.getElementsByTagName(t)[0];
                s.src=u;
                s["async"]=true;
                s.defer=true;
                s.onload=function(){KeyCRM.render(c);};
                j.parentNode.insertBefore(s,j)
              })(window, document, "script","https://chat.key.live/bundles/widget.min.js",{token:"ad043bcc-dc46-4deb-8088-9d5e24bb92f5"});`,
        }}
      />

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
