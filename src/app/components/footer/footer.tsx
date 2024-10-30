"use client";

import { useTranslation } from "react-i18next";

import LongLogo from "@/app/assets/img/svg/long-logo.svg";
import Link from "next/link";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-mainPink flex justify-center">
      <div className="xl:container w-full px-[15px] md:px-[45px] xl:px-[0px] flex flex-col gap-10 md:gap-[50px] lg:gap-[60px] items-center py-[30px] md:py-[50px] lg:py-[70px]">
        <ul className="items-center gap-5 md:gap-[30px] lg:gap-[95px] flex flex-col md:flex-row">
          <li>
            <a
              href="#showcase"
              className="text-black text-[14px] md:text-[16px] lg:text-[25px] hover:text-mainRed transition-all"
            >
              {t("info.showcase")}
            </a>
          </li>

          <li>
            <a
              href="#about-us"
              className="text-black text-[14px] md:text-[16px] lg:text-[25px] hover:text-mainRed transition-all"
            >
              {t("info.about-us")}
            </a>
          </li>

          <li>
            <a
              href="#our-studios"
              className="text-black text-[14px] md:text-[16px] lg:text-[25px] hover:text-mainRed transition-all"
            >
              {t("info.our-studios")}
            </a>
          </li>

          <li>
            <a
              href="#delivery"
              className="text-black text-[14px] md:text-[16px] lg:text-[25px] hover:text-mainRed transition-all"
            >
              {t("info.delivery")}
            </a>
          </li>

          <li>
            <a
              href="#contacts"
              className="text-black text-[14px] md:text-[16px] lg:text-[25px] hover:text-mainRed transition-all"
            >
              {t("info.contacts")}
            </a>
          </li>
        </ul>

        <div className="h-[25px] w-[235px] md:h-[30px] md:w-[275px] lg:h-[35px] lg:w-[328px]">
          <Link href="/">
            <LongLogo />
          </Link>
        </div>
      </div>
    </footer>
  );
};
