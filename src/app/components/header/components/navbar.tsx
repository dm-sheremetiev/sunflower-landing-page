"use client";

import SunflowerLogo from "@/app/assets/img/svg/sunflowerLogo.svg";
import PhoneIcon from "@/app/assets/img/svg/phoneIcon.svg";
import MenuIcon from "@/app/assets/img/svg/menuIcon.svg";
import CrossIcon from "@/app/assets/img/svg/crossIcon.svg";
import Link from "next/link";
import { NavList } from "./navlist";
import i18n from "@/app/i18n/i18n";
import { LanguageSelector } from "./language-selector";
import { sendGAEvent } from "@next/third-parties/google";

interface Props {
  isMenuVisible: boolean;
  isExternal?: boolean;
  isHoliday?: boolean;
  showMenu: () => void;
  hideMenu: () => void;
}

export const Navbar = ({
  isMenuVisible,
  showMenu,
  hideMenu,
  isExternal,
  isHoliday,
}: Props) => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div className="w-full flex items-center justify-between h-fit">
        <Link
          href="/"
          className="w-[54px] h-[60px] sm:w-[73px] sm:h-[80px] 2xl:w-[95px] 2xl:h-[110px] object-fit relative"
        >
          <SunflowerLogo className="absolute left-0 top-0 w-full h-full" />
        </Link>

        <div className="md:block hidden">
          <NavList
            hideMenu={hideMenu}
            isMenuVisible={isMenuVisible}
            changeLanguage={changeLanguage}
            isExternal={isExternal}
            isHoliday={isHoliday}
          />
        </div>

        <div className="flex items-center gap-[30px]">
          <div className="cursor-pointer">
            <a
              href="tel:+380669928410"
              onClick={() => sendGAEvent("event", "main_phone_click")}
            >
              <PhoneIcon />
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <LanguageSelector changeLanguage={changeLanguage} />
          </div>

          <div
            onClick={isMenuVisible ? hideMenu : showMenu}
            className="w-[25px] h-[25px] flex items-center justify-center cursor-pointer md:hidden"
          >
            {isMenuVisible ? (
              <CrossIcon className="flex items-center justify-center cursor-pointer" />
            ) : (
              <MenuIcon className="flex items-center justify-center cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <NavList
          isMenuVisible={isMenuVisible}
          hideMenu={hideMenu}
          changeLanguage={changeLanguage}
          isExternal={isExternal}
          isHoliday={isHoliday}
        />
      </div>
    </div>
  );
};
