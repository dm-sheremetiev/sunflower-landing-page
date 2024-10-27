"use client";

import { useTranslation } from "react-i18next";

import MainLogo from "@/app/assets/img/svg/mainPinkLogo.svg";
import { Button } from "@/app/ui/button/button";


export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full bg-[url("/heroImage.png")] bg-no-repeat bg-cover bg-top flex flex-col items-center gap-[290px] pt-[376px] sm:pt-[557px] md:pt-[447px] pb-[95px] sm:pb-[135px] md:pb-[100px]'>
      <div className="flex flex-col gap-[50px] items-center px-[15px] md:px-[45px] xl:px-[60px]">
        <MainLogo className="w-full h-[37px] sm:h-[80px] md:h-[113px] max-w-[754px] xl:max-w-[1060px]" />

        <h2 className="text-white sm:text-[35px] text-[28px] md:text-[55px] text-center">
          {t("hero.history")}
        </h2>

        <div className="mt-[174px]">
          <Button size="large" />
        </div>
      </div>
    </div>
  );
};
