"use client";

import { H2 } from "@/app/ui/h2/h2";
import { Trans, useTranslation } from "react-i18next";

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-mainPink flex items-center justify-center">
      <div className="w-full xl:container mt-10 mb-[30px] md:mt-[50px] md:mb-[30px] lg:mt-[70px] lg:mb-[50px] flex flex-col items-center px-[15px] md:px-[40px]">
        <H2>{t("about-us.about-us")}</H2>
        
        <Trans>
          <p className="mt-[40px] text-[14px] md:text-[16px] lg:text-[25px] text-mainBlack text-center font-normal">
            {t("about-us.description")}
          </p>

          <p className="mt-[40px] text-[14px] md:text-[16px] lg:text-[25px] text-mainBlack text-center font-normal">
            {t("about-us.description-2")}
          </p>
        </Trans>

        <div className="flex flex-col items-end self-end mt-[30px] md:mt-[40px] lg:mt-[50px]">
          <p className="font-cassandra text-right text-mainRed lg:text-[35px] text-[18px] md:text-[22px]">
            {t("about-us.with-love")}
          </p>

          <p className="font-cassandra text-right text-mainRed lg:text-[35px] text-[18px] md:text-[22px]">
            {t("about-us.team-sunflower")}
          </p>
        </div>
      </div>
    </section>
  );
};
