"use client";

import AppProvider from "@/app/providers/AppProvider";
import { Trans, useTranslation } from "react-i18next";
import Preloader from "../preloader/preloader";
import Header from "../header/header";

export default function PublicOffer() {
  const { t } = useTranslation();


  return (
    <main className="w-full h-full flex flex-col items-center">
      <Preloader />

      <AppProvider>
        <Header isExternal isHoliday />
      </AppProvider>
    </main>
  );
}
