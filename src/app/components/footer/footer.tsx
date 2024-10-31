"use client";

import { useTranslation } from "react-i18next";

import LongLogo from "@/app/assets/img/svg/long-logo.svg";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

export default function Footer() {
  const { t } = useTranslation();

  const onClick = () => {
    sendGAEvent("event", "nav_link_click");
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.footer
      ref={ref}
      className="w-full bg-mainPink flex justify-center"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1, // длительность анимации
            ease: "easeInOut", // эффект easing
          },
        },
      }}
    >
      <div className="xl:container w-full px-[15px] md:px-[45px] xl:px-[0px] flex flex-col gap-10 md:gap-[50px] lg:gap-[60px] items-center py-[30px] md:py-[50px] lg:py-[70px]">
        <ul className="items-center gap-5 md:gap-[30px] lg:gap-[95px] flex flex-col md:flex-row">
          <li onClick={onClick}>
            <a
              href="#showcase"
              className="text-black text-[14px] md:text-[16px] lg:text-[25px] hover:text-mainRed transition-all"
            >
              {t("info.showcase")}
            </a>
          </li>

          <li onClick={onClick}>
            <a
              href="#about-us"
              className="text-black text-[14px] md:text-[16px] lg:text-[25px] hover:text-mainRed transition-all"
            >
              {t("info.about-us")}
            </a>
          </li>

          <li onClick={onClick}>
            <a
              href="#our-studios"
              className="text-black text-[14px] md:text-[16px] lg:text-[25px] hover:text-mainRed transition-all"
            >
              {t("info.our-studios")}
            </a>
          </li>

          <li onClick={onClick}>
            <a
              href="#delivery"
              className="text-black text-[14px] md:text-[16px] lg:text-[25px] hover:text-mainRed transition-all"
            >
              {t("info.delivery")}
            </a>
          </li>

          <li onClick={onClick}>
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
    </motion.footer>
  );
}
