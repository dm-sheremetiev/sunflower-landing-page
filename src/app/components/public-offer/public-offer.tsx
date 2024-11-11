"use client";

import AppProvider from "@/app/providers/AppProvider";
import { Trans, useTranslation } from "react-i18next";

export default function PublicOffer() {
  const { t } = useTranslation();

  const companyName = t("documents.companyName");
  const address = t("documents.address");
  const mfo = t("documents.mfo");
  const ipn = t("documents.ipn");
  const phone = t("documents.phone");

  return (
    <div className="w-full h-full flex flex-col items-center">
      <AppProvider>
        <div className="min-w-full min-h-full xl:container w-full my-[60px] px-[15px] md:px-[45px]">
          <Trans
            i18nKey="documents.public-offer"
            values={{
              companyName,
              address,
              mfo,
              ipn,
              phone,
            }}
          />
        </div>
      </AppProvider>
    </div>
  );
}
