"use client";

import AppProvider from "@/app/providers/AppProvider";
import { Trans } from "react-i18next";

export default function PaymentDetails() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <AppProvider>
        <div className="min-w-full min-h-full xl:container w-full my-[60px] px-[15px] md:px-[45px]">
          <Trans i18nKey="documents.payment-details" />
        </div>
      </AppProvider>
    </div>
  );
}
