import { LanguageSelector } from "./language-selector";
import { useTranslation } from "react-i18next";
import { cn } from "@/app/utils/styles";

import { sendGAEvent } from "@next/third-parties/google";
import { links } from "../constants/links";
import classNames from "classnames";

interface Props {
  isMenuVisible: boolean;
  isExternal?: boolean;
  isHoliday?: boolean;
  hideMenu: () => void;
  changeLanguage: (lng: string) => void;
}

export const NavList = ({
  isMenuVisible,
  hideMenu,
  changeLanguage,
  isExternal,
  isHoliday,
}: Props) => {
  const { t } = useTranslation();

  const onClick = () => {
    hideMenu();

    sendGAEvent("event", "nav_link_click");
  };

  return (
    <nav className="relative">
      <ul
        className={classNames(
          "hidden items-center gap-4 xl:gap-[55px] md:flex",
          { "xl:gap-[58px]": isHoliday }
        )}
      >
        {links.map((link, index) =>
          isHoliday && index === 3 ? (
            <li
              className={classNames(
                "hidden items-center gap-4 xl:gap-[58px] md:flex",
                { "xl:gap-[55px]": isHoliday }
              )}
              key={link.url}
            >
              <div onClick={onClick}>
                <a
                  href={`${isExternal ? "/" : ""}${"holiday-offers"}`}
                  className={classNames(
                    "hover:text-mainRed transition-all neon-text text-mainRed",
                    {
                      "text-[12px] md:text-[13px] lg:text-[20px] xl:text-[22px]": isHoliday,
                      "text-[16px] lg:text-[22px]": !isHoliday,
                    }
                  )}
                >
                  {t("info.holiday-offers")}
                </a>
              </div>

              <div onClick={onClick} key={link.url}>
                <a
                  href={`${isExternal ? "/" : ""}${link.url}`}
                  className={classNames(
                    "hover:text-mainRed transition-all text-black",
                    {
                      "text-[12px] md:text-[13px] lg:text-[20px] xl:text-[22px]": isHoliday,
                      "text-[16px] lg:text-[22px]": !isHoliday,
                    }
                  )}
                >
                  {link.title}
                </a>
              </div>
            </li>
          ) : (
            <li onClick={onClick} key={link.url}>
              <a
                href={`${isExternal ? "/" : ""}${link.url}`}
                className={classNames(
                  "hover:text-mainRed transition-all text-black",
                  {
                    "text-[12px] md:text-[13px] lg:text-[20px] xl:text-[22px]": isHoliday,
                    "text-[16px] lg:text-[22px]": !isHoliday,
                  }
                )}
              >
                {link.title}
              </a>
            </li>
          )
        )}
      </ul>

      <div
        className={cn("w-full transition-all md:hidden h-fit mt-0", {
          "opacity-1 translate-x-0 mt-10": isMenuVisible,
          "opacity-0 h-0 -z-[99] pointer-events-none": !isMenuVisible,
        })}
      >
        <ul className="flex self-start flex-col items-start gap-4 md:flex">
          {links.map((link, index) =>
            isHoliday && index === 3 ? (
              <li
                className="flex self-start flex-col items-start gap-4 md:flex"
                key={link.url}
              >
                <div onClick={onClick}>
                  <a
                    href={`${isExternal ? "/" : ""}${"holiday-offers"}`}
                    className="text-black text-[16px] hover:text-mainRed transition-all neon-text"
                  >
                    {t("info.holiday-offers")}
                  </a>
                </div>

                <div onClick={onClick}>
                  <a
                    href={`${isExternal ? "/" : ""}${link.url}`}
                    className="text-black text-[16px] hover:text-mainRed transition-all"
                  >
                    {link.title}
                  </a>
                </div>
              </li>
            ) : (
              <li onClick={onClick} key={link.url}>
                <a
                  href={`${isExternal ? "/" : ""}${link.url}`}
                  className="text-black text-[16px] hover:text-mainRed transition-all"
                >
                  {link.title}
                </a>
              </li>
            )
          )}
          {/* <li onClick={onClick}>
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
          </li> */}
        </ul>

        <div className="mt-[30px]">
          <LanguageSelector changeLanguage={changeLanguage} />
        </div>
      </div>
    </nav>
  );
};
