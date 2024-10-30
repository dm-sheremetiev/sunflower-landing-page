import { useTranslation } from "react-i18next";

import Line from "@/app/assets/img/svg/line.svg";
import { cn } from "@/app/utils/styles";
import classNames from "classnames";
import { sendGAEvent } from "@next/third-parties/google";

interface Props {
  isRed?: boolean;
  location: string;
}

export const Button = ({ isRed, location }: Props) => {
  const { t } = useTranslation();

  return (
    <a href="https://www.instagram.com/sun.flower.kyiv" target="_blank" className="w-fit h-fit block">
      <button
        className="flex gap-[16px] group relative"
        onClick={() => sendGAEvent("event", "order_bouquet", { location })}
      >
        <span
          className={classNames(
            "text-mainPink text-[18px] sm:text-[24px] md:text-[35px] italic leading-[19.8px] sm:leading-[26.4px] md:leading-[38.5px]",
            {
              "text-mainRed": isRed,
            }
          )}
        >
          {t("info.order-bouquet")}
        </span>

        <div
          className={cn(
            "w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px] rounded-full filter border-[2px] border-mainPink backdrop-blur-sm bg-opacity-10 blurred-backdrop transition-all group-hover:scale-[1.2]",
            {
              "border-mainRed": isRed,
            }
          )}
        />

        <div className="h-[14px] absolute top-[37px] sm:top-[47px] md:top-[57px] sm:pr-[55px] pr-[45px] md:pr-[65px] w-full">
          <Line
            className="w-full flex items-center"
            color={isRed ? "#F9462F" : "#FFE4EE"}
          />
        </div>
      </button>
    </a>
  );
};
