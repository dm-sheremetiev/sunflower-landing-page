import classNames from "classnames";
import { useTranslation } from "react-i18next";

interface Props {
  changeLanguage: (lng: string) => void;
}

export const LanguageSelector = ({ changeLanguage }: Props) => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  return (
    <div className="flex gap-2 items-center">
      <button onClick={() => changeLanguage("ua")}>
        <p
          className={classNames(
            "text-mainGrey text-[14px] md:text-[24px] md:leading-[30px] leading-[16px]",
            {
              "text-[14px]": language === "ua",
            }
          )}
          style={{ color: language === "ua" ? "#313131" : "#9D9D9D" }}
        >
          {t("languages.ua")}
        </p>
      </button>

      <div className="h-[17px] md:h-[24px] w-[1.5px] bg-[#313131]"></div>

      <button onClick={() => changeLanguage("en")}>
        <p
          className={classNames(
            "text-mainGrey text-[14px] md:text-[24px] md:leading-[30px] leading-[16px]",
            {
              "text-[14px]": language === "en",
            }
          )}
          style={{ color: language === "en" ? "#313131" : "#9D9D9D" }}
        >
          {t("languages.en")}
        </p>
      </button>
    </div>
  );
};
