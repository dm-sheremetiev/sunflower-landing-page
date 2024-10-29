"use client";

import { H2 } from "@/app/ui/h2/h2";
import { useTranslation } from "react-i18next";
import { StudioItem } from "./components/studio-item";
import { Divider } from "../divider/divider";

export const OurStudios = () => {
  const { t } = useTranslation();

  return (
    <section className="xl:container w-full px-[15px] md:px-[45px] xl:px-[0px] mb-[100px] md:mb-[150px] lg:mb-[200px]">
      <div className="flex flex-col md:flex-row md:justify-between gap-[10px] md:items-center mb-[40px] md:mb-[50px] lg:mb-[60px]">
        <H2>{t("our-studios.our-studios")}</H2>

        <h4 className="font-normal text-[14px] text-mainRed md:text-[16px] lg:text-[25px] md:text-right">
          {t("our-studios.be-happy")}
        </h4>
      </div>

      <ul className="flex flex-col gap-5 md:gap-10">
        <StudioItem
          title={t("our-studios.sunflower-predslavynska")}
          location={t("our-studios.french-quarter")}
          number="+380 66 992 84 10"
          description={t("our-studios.french-location")}
          locationLink="https://maps.app.goo.gl/tkZGMdteJKqL5hn67"
          isFrench
        />

        <Divider />

        <StudioItem
          title={t("our-studios.sunflower-fayna")}
          location={t("our-studios.fayna-town")}
          number="+380 63 677 89 96"
          description={t("our-studios.fayna-location")}
          locationLink="https://maps.app.goo.gl/LF5ZPdKcrJA2K2k88"
          reversed
        />
      </ul>
    </section>
  );
};
