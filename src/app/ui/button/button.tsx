import classNames from "classnames";
import { useTranslation } from "react-i18next";

import Line from "@/app/assets/img/svg/line.svg";
import { cn } from "@/app/utils/styles";

type ButtonSize = "small" | "medium" | "large";

interface Props {
  size: ButtonSize;
}

export const Button = ({ size }: Props) => {
  const { t } = useTranslation();

  return (
    <button className="flex gap-[16px] group relative">
      <span className="text-mainPink text-[18px] sm:text-[24px] md:text-[35px] italic leading-[19.8px] sm:leading-[26.4px] md:leading-[38.5px]">
        {t("info.order-bouquet")}
      </span>

      <div
        className={cn(
          "w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px] rounded-full filter border-[2px] border-mainPink backdrop-blur-sm bg-opacity-10 blurred-backdrop transition-all",
          {
            "group-hover:scale-[1.2]": size === "large",
          }
        )}
      />

      <div className="h-[14px] absolute top-[37px] sm:top-[47px] md:top-[57px] sm:pr-[55px] pr-[45px] md:pr-[65px] w-full">
        <Line className="w-full flex items-center" />
      </div>
    </button>
  );
};
