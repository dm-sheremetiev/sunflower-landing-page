import { Trans, useTranslation } from "react-i18next";

import LocationIcon from "@/app/assets/img/svg/location-icon.svg";
import ClockIcon from "@/app/assets/img/svg/clock-icon.svg";
import PhoneIcon from "@/app/assets/img/svg/phone-icon.svg";

import FrenchFacade from "@/app/assets/img/french-facade.jpg";
import FaynaFacade from "@/app/assets/img/fayna-facade.jpeg";
import FrenchMap from "@/app/assets/img/french-map.png";
import FaynaMap from "@/app/assets/img/fayna-map.png";
import Image from "next/image";
import classNames from "classnames";
import { sendGAEvent } from "@next/third-parties/google";

interface Props {
  title: string;
  location: string;
  locationLink: string;
  locationForGA: string;
  number: string;
  description: string;
  isFrench?: boolean;
  reversed?: boolean;
}

export const StudioItem = ({
  title,
  location,
  locationLink,
  number,
  description,
  isFrench,
  reversed,
  locationForGA,
}: Props) => {
  const { t } = useTranslation();

  return (
    <li className="flex flex-col gap-[15px] lg:gap-[20px] lg:grid lg:grid-cols-2">
      <div
        className={classNames("", {
          "lg:order-2": reversed,
          "lg:order-1": !reversed,
        })}
      >
        <a
          href={locationLink}
          target="_blank"
          className="max-w-fit"
          onClick={() => sendGAEvent("event", `maps_click_${locationForGA}`)}
        >
          <p className="text-[18px] italic text-mainBlack mb-5 md:text-[22px] lg:text-[35px] hover:text-mainRed transition-all">
            {title}
          </p>
        </a>

        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-row gap-[10px] items-center">
            <div className="w-5 h-5 md:w-6 md:h-6">
              <LocationIcon />
            </div>

            <p className="text-[14px] md:text-[16px] lg:text-[25px] text-mainBlack">
              {location}
            </p>
          </div>

          <div className="flex flex-row gap-[10px] items-center">
            <div className="w-5 h-5 md:w-6 md:h-6">
              <ClockIcon />
            </div>

            <p className="text-[14px] md:text-[16px] lg:text-[25px] text-mainBlack">
              {t("our-studios.mon-sun")} 8.00-21.00
            </p>
          </div>

          <a
            href={`tel:${number}`}
            onClick={() => sendGAEvent("event", `phone_click_${locationForGA}`)}
            className="flex flex-row gap-[10px] items-center max-w-fit"
          >
            <div className="w-5 h-5 md:w-6 md:h-6">
              <PhoneIcon />
            </div>

            <p className="text-[14px] md:text-[16px] lg:text-[25px] text-mainBlack hover:text-mainRed transition-all">
              {number}
            </p>
          </a>
        </div>

        <Trans>
          <p className="mt-[15px] text-mainGrey text-[12px] md:text-[14px] lg:text-[20px]">
            {description}
          </p>
        </Trans>

        <div className="mt-5 w-full hover:shadow-md transition-all">
          <a
            href={locationLink}
            target="_blank"
            onClick={() => sendGAEvent("event", `maps_click_${locationForGA}`)}
          >
            <Image src={isFrench ? FrenchMap : FaynaMap} alt="map" />
          </a>
        </div>
      </div>

      <div
        className={classNames("w-full", {
          "lg:order-1": reversed,
          "lg:order-2": !reversed,
        })}
      >
        <Image src={isFrench ? FrenchFacade : FaynaFacade} alt="building" />
      </div>
    </li>
  );
};
