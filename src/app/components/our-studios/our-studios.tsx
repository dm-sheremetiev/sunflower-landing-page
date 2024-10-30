"use client";

import { H2 } from "@/app/ui/h2/h2";
import { useTranslation } from "react-i18next";
import { StudioItem } from "./components/studio-item";
import { Divider } from "../divider/divider";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { fadeInUp } from "@/app/utils/animations";

export const OurStudios = () => {
  const { t } = useTranslation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  //
  const [refStudio, inViewStudio] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const studioControls = useAnimation();

  useEffect(() => {
    if (inViewStudio) {
      studioControls.start("visible");
    } else {
      studioControls.start("hidden");
    }
  }, [inViewStudio, studioControls]);

  return (
    <section
      className="xl:container w-full px-[15px] md:px-[45px] xl:px-[0px] mb-[100px] md:mb-[150px] lg:mb-[200px]"
      id="our-studios"
    >
      <motion.div
        className="flex flex-col md:flex-row md:justify-between gap-[10px] md:items-center mb-[40px] md:mb-[50px] lg:mb-[60px]"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <H2>{t("our-studios.our-studios")}</H2>

        <h4 className="font-normal text-[14px] text-mainRed md:text-[16px] lg:text-[25px] md:text-right">
          {t("our-studios.be-happy")}
        </h4>
      </motion.div>

      <motion.ul
        className="flex flex-col gap-5 md:gap-10"
        ref={refStudio}
        initial="hidden"
        animate={studioControls}
        variants={fadeInUp}
      >
        <StudioItem
          title={t("our-studios.sunflower-predslavynska")}
          location={t("our-studios.french-quarter")}
          number="+380 66 992 84 10"
          description={t("our-studios.french-location")}
          locationLink="https://maps.app.goo.gl/tkZGMdteJKqL5hn67"
          isFrench
        />

        <Divider />

        <StudioItem
          title={t("our-studios.sunflower-fayna")}
          location={t("our-studios.fayna-town")}
          number="+380 63 677 89 96"
          description={t("our-studios.fayna-location")}
          locationLink="https://maps.app.goo.gl/LF5ZPdKcrJA2K2k88"
          reversed
        />
      </motion.ul>
    </section>
  );
};
