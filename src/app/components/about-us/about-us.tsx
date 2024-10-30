"use client";

import { H2 } from "@/app/ui/h2/h2";
import { Trans, useTranslation } from "react-i18next";
import { AboutUsItem } from "./ui/about-us-item";
import { aboutUsData } from "./constants/data";
import { Button } from "@/app/ui/button/button";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { fadeInUp } from "@/app/utils/animations";

export const AboutUs = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [refH, hInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [refButton, buttonInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const hControls = useAnimation();
  const controls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    if (buttonInView) {
      buttonControls.start("visible");
    } else {
      buttonControls.start("hidden");
    }
  }, [buttonControls, buttonInView]);

  useEffect(() => {
    if (hInView) {
      hControls.start("visible");
    } else {
      hControls.start("hidden");
    }
  }, [hControls, hInView]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section
      className="w-full flex flex-col gap-[100px] md:gap-[150px] lg:gap-[200px] mb-[100px] md:mb-[150px] lg:mb-[200px]"
      id="about-us"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="bg-mainPink flex items-center justify-center"
      >
        <div className="w-full xl:container mt-10 mb-[30px] md:mt-[50px] md:mb-[30px] lg:mt-[70px] lg:mb-[50px] flex flex-col items-center px-[15px] md:px-[40px]">
          <H2>{t("about-us.about-us")}</H2>

          <Trans>
            <p className="mt-[40px] text-[14px] md:text-[16px] lg:text-[25px] text-mainBlack text-center font-normal">
              {t("about-us.description")}
            </p>

            <p className="mt-[40px] text-[14px] md:text-[16px] lg:text-[25px] text-mainBlack text-center font-normal">
              {t("about-us.description-2")}
            </p>
          </Trans>

          <div className="flex flex-col items-end self-end mt-[30px] md:mt-[40px] lg:mt-[50px]">
            <p className="font-cassandra text-right text-mainRed lg:text-[35px] text-[18px] md:text-[22px]">
              {t("about-us.with-love")}
            </p>

            <p className="font-cassandra text-right text-mainRed lg:text-[35px] text-[18px] md:text-[22px]">
              {t("about-us.team-sunflower")}
            </p>
          </div>
        </div>
      </motion.div>

      <div className="mx-auto w-full xl:container px-[15px] md:px-[45px] xl:px-[0px] flex flex-col gap-[40px] md:gap-[50px] lg:gap-[60px] items-center">
        <motion.div
          ref={refH}
          initial="hidden"
          animate={hControls}
          variants={fadeInUp}
        >
          <H2 className="text-center">{t("about-us.why-should-order")}</H2>
        </motion.div>

        <ul className="w-full flex flex-col gap-[30px] md:gap-[60px] lg:gap-[90px]">
          {aboutUsData.map(
            ({ title, iconName, description, mainImage }, index) => (
              <AboutUsItem
                key={title}
                iconName={iconName}
                title={title}
                description={description}
                mainImage={mainImage}
                isReversed={index % 2 === 0 || index === 0}
              />
            )
          )}
        </ul>
      </div>

      <motion.div
        ref={refButton}
        initial="hidden"
        animate={buttonControls}
        variants={fadeInUp}
        className="w-full flex items-center justify-center scale-[1]"
      >
        <Button isRed />
      </motion.div>
    </section>
  );
};
