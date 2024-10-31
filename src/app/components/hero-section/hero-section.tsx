"use client";

import { useTranslation } from "react-i18next";

import MainLogo from "@/app/assets/img/svg/mainPinkLogo.svg";
import { Button } from "@/app/ui/button/button";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const { t } = useTranslation();

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
    <motion.div
      ref={ref}
      className="w-full relative bg-no-repeat bg-cover bg-top flex flex-col items-center gap-[290px] pt-[376px] sm:pt-[557px] md:pt-[447px] pb-[95px] sm:pb-[135px] md:pb-[100px]"
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
            duration: 1,
            ease: "easeInOut",
          },
        },
      }}
    >
      <div className="absolute top-0 right-0 left-0 bottom-0 -z-[1]">
        <Image
          src={"/heroImage.png"}
          alt="hero-image"
          layout="fill"
          objectFit="cover"
          quality={45}
          priority={true}
        />
      </div>

      <motion.div
        className="flex flex-col gap-[50px] items-center px-[15px] md:px-[45px] xl:px-[60px]"
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
              duration: 1,
              ease: "easeInOut", // эффект easing
              delay: 0.5,
            },
          },
        }}
      >
        <MainLogo className="w-full h-[37px] sm:h-[80px] md:h-[113px] max-w-[754px] xl:max-w-[1060px]" />

        <h2 className="text-white sm:text-[35px] text-[28px] md:text-[55px] text-center">
          {t("hero.history")}
        </h2>

        <div className="mt-[174px]">
          <Button location="hero" />
        </div>
      </motion.div>
    </motion.div>
  );
}
