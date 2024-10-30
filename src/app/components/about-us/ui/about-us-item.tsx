import { useCallback, useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";

import Roze from "@/app/assets/img/svg/roze.svg";
import Eucalipt from "@/app/assets/img/svg/eucalipt.svg";
import Chamomile from "@/app/assets/img/svg/chamomile.svg";
import Leaves from "@/app/assets/img/svg/leaves.svg";
import HeroImage from "@/app/assets/img/heroImage.jpg";
import RedRozes from "@/app/assets/img/red-rozes.jpeg";
import Legs from "@/app/assets/img/legs.jpeg";
import BlueHydrangea from "@/app/assets/img/blue-hydrangea.jpeg";
import Mix from "@/app/assets/img/mix.jpeg";
import Image from "next/image";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import { useMediaQuery } from "@/app/hooks";
import { BREAKPOINTS } from "@/app/constants/breakpoints";

interface Props {
  iconName: string;
  title: string;
  description: string;
  mainImage: string;
  isReversed: boolean;
}

export const AboutUsItem = ({
  iconName,
  title,
  description,
  mainImage,
  isReversed,
}: Props) => {
  const { t } = useTranslation();

  const getIcon = useCallback(() => {
    switch (iconName) {
      case "roze": {
        return <Roze />;
      }
      case "eucalipt": {
        return <Eucalipt />;
      }
      case "chamomile": {
        return <Chamomile />;
      }
      case "leaves": {
        return <Leaves />;
      }

      default: {
        return <Roze />;
      }
    }
  }, [iconName]);

  const getMainImagePath = useCallback(() => {
    switch (mainImage) {
      case "individual": {
        return Legs;
      }
      case "delivery": {
        return BlueHydrangea;
      }
      case "care": {
        return RedRozes;
      }
      case "budget": {
        return Mix;
      }

      default: {
        return HeroImage;
      }
    }
  }, [mainImage]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const md = useMediaQuery(BREAKPOINTS.md);

  return (
    <motion.li
      className="flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-[30px] lg:gap-[80px]"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={
        md
          ? {
              hidden: {
                opacity: 0,
                x: isReversed ? 100 : -100,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                },
              },
            }
          : fadeInUp
      }
    >
      <div
        className={classNames("flex flex-col gap-5 order-1", {
          "md:order-2": isReversed,
        })}
      >
        <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]">
          {getIcon()}
        </div>

        <div className="flex flex-col gap-[10px]">
          <h3 className="font-gilroy italic font-medium text-mainBlack text-[18px] md:text-[22px]">
            {t(title)}
          </h3>

          <Trans>
            <p className="text-mainBlack font-normal text-[14px] md:text-[16px]">
              {t(description)}
            </p>
          </Trans>
        </div>
      </div>

      <div
        className={classNames(
          "w-full min-h-[257px] md:min-h-[435px] relative order-1",
          {
            "md:order-1": isReversed,
          }
        )}
      >
        <Image
          alt="main-image"
          src={getMainImagePath()}
          fill
        />
      </div>
    </motion.li>
  );
};
