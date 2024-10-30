import { LanguageSelector } from "./language-selector";
import { useTranslation } from "react-i18next";
import { cn } from "@/app/utils/styles";

import { sendGAEvent } from "@next/third-parties/google";

interface Props {
  isMenuVisible: boolean;
  hideMenu: () => void;
  changeLanguage: (lng: string) => void;
}

export const NavList = ({ isMenuVisible, hideMenu, changeLanguage }: Props) => {
  const { t } = useTranslation();

  const onClick = () => {
    hideMenu();

    sendGAEvent("event", "nav_link_click");
  };

  return (
    <nav className="relative">
      <ul className="hidden items-center gap-5 xl:gap-[95px] md:flex">
        <li onClick={onClick}>
          <a
            href="#showcase"
            className="text-black text-[16px] lg:text-[25px] hover:text-mainRed transition-all"
          >
            {t("info.showcase")}
          </a>
        </li>

        <li onClick={onClick}>
          <a
            href="#about-us"
            className="text-black text-[16px] lg:text-[25px] hover:text-mainRed transition-all"
          >
            {t("info.about-us")}
          </a>
        </li>

        <li onClick={onClick}>
          <a
            href="#our-studios"
            className="text-black text-[16px] lg:text-[25px] hover:text-mainRed transition-all"
          >
            {t("info.our-studios")}
          </a>
        </li>

        <li onClick={onClick}>
          <a
            href="#delivery"
            className="text-black text-[16px] lg:text-[25px] hover:text-mainRed transition-all"
          >
            {t("info.delivery")}
          </a>
        </li>

        <li onClick={onClick}>
          <a
            href="#contacts"
            className="text-black text-[16px] lg:text-[25px] hover:text-mainRed transition-all"
          >
            {t("info.contacts")}
          </a>
        </li>
      </ul>

      <div
        className={cn("w-full transition-all md:hidden h-fit mt-0", {
          "opacity-1 translate-x-0 mt-10": isMenuVisible,
          "opacity-0 h-0 -z-[99] pointer-events-none": !isMenuVisible,
        })}
      >
        <ul className="flex self-start flex-col items-start gap-5 md:flex">
          <li onClick={onClick}>
            <a
              href="#showcase"
              className="text-black text-[16px] hover:text-mainRed transition-all"
            >
              {t("info.showcase")}
            </a>
          </li>

          <li onClick={onClick}>
            <a
              href="#about-us"
              className="text-black text-[16px] hover:text-mainRed transition-all"
            >
              {t("info.about-us")}
            </a>
          </li>

          <li onClick={onClick}>
            <a
              href="#our-studios"
              className="text-black text-[16px] hover:text-mainRed transition-all"
            >
              {t("info.our-studios")}
            </a>
          </li>

          <li onClick={onClick}>
            <a
              href="#delivery"
              className="text-black text-[16px] hover:text-mainRed transition-all"
            >
              {t("info.delivery")}
            </a>
          </li>

          <li onClick={onClick}>
            <a
              href="#contacts"
              className="text-black text-[16px] hover:text-mainRed transition-all"
            >
              {t("info.contacts")}
            </a>
          </li>
        </ul>

        <div className="mt-[30px]">
          <LanguageSelector changeLanguage={changeLanguage} />
        </div>
      </div>
    </nav>
  );
};
