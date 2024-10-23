"use client";

import SunflowerLogo from "@/app/assets/img/svg/sunflowerLogo.svg";
import PhoneIcon from "@/app/assets/img/svg/phoneIcon.svg";
import MenuIcon from "@/app/assets/img/svg/menuIcon.svg";
import CrossIcon from "@/app/assets/img/svg/crossIcon.svg";
import Link from "next/link";
import { NavList } from "./navlist";
import i18n from "@/app/i18n/i18n";
import { LanguageSelector } from "./language-selector";

interface Props {
  isMenuVisible: boolean;
  showMenu: () => void;
  hideMenu: () => void;
}

export const Navbar = ({ isMenuVisible, showMenu, hideMenu }: Props) => {
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
          />
        </div>

        <div className="flex items-center gap-[30px]">
          <div className="cursor-pointer">
            <a href="tel:+380989797617">
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
        />
      </div>

      {/* <div className="flex items-center gap-8 ">
          <a href="tel:+380669928410" className="hidden l:flex">
            <Typography
              variant="comforta-s-regular"
              as="span"
              className="text-silver-surfer transition-all duration-500 hover:text-fluorescent-red"
            >
              {t("info.number")}
            </Typography>
          </a>

          <a
            href="https://maps.app.goo.gl/AiXx4BQMP79iLTh67"
            target="_blank"
            rel="noreferrer"
            className="hidden l:flex"
          >
            <Typography
              variant="comforta-s-regular"
              as="span"
              className="text-silver-surfer transition-all duration-500 hover:text-fluorescent-red"
            >
              {t("info.address")}
            </Typography>
          </a>

          <div className="flex items-center gap-7 l:gap-4">
            <FavoritesLink
              containerClassName="hidden l:flex"
              className="h-[22px] w-[22px]"
            />

            <CartLink
              containerClassName="hidden l:flex"
              className="h-[22px] w-[22px]"
            />

            {isMenuVisible ? (
              <CrossIcon
                className="h-6 w-6 cursor-pointer l:hidden"
                color="white"
                onClick={hideMenu}
              />
            ) : (
              <MenuIcon
                className="h-8 w-8 cursor-pointer l:hidden"
                color="white"
                onClick={showMenu}
              />
            )}
          </div>
        </div> */}

      {/* <NavList isMenuVisible={isMenuVisible} /> */}
    </div>
  );
};
