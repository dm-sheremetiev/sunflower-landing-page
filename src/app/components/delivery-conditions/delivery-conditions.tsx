"use client";

import { H2 } from "@/app/ui/h2/h2";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import DeliveryConditionsPhoto from "@/app/assets/img/delivery-conditions.png";
import Logo from "@/app/assets/img/svg/logo-icon.svg";
import { Button } from "@/app/ui/button/button";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { fadeInUp } from "@/app/utils/animations";

export const DeliveryConditions = () => {
  const { t } = useTranslation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.section
      className="xl:container w-full px-[15px] md:px-[45px] xl:px-[0px] mb-[100px] md:mb-[150px] lg:mb-[200px] flex flex-col"
      id="delivery"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
    >
      <H2 className="mb-[40px] md:mb-[50px] lg:mb-[60px] text-center md:text-start">
        {t("delivery-conditions.delivery-conditions")}
      </H2>

      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 lg:gap-[60px] md:items-center">
        <Image src={DeliveryConditionsPhoto} alt="delivery-conditions" />

        <p className="text-[14px] md:text-[16px] lg:text-[25px] text-center  mt-[30px] md:text-left">
          {t("delivery-conditions.how-we-deliver")}
        </p>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-5 gap-5 items-center md:justify- mt-5 md:mt-10">
        <div className="flex flex-col text-center">
          <p className="text-[14px] md:text-[16px] lg:text-[25px] ">
            {t("delivery-conditions.in-residental-complex")}
          </p>

          <p className="text-[14px] md:text-[16px] lg:text-[25px] font-semibold italic">
            {t("delivery-conditions.50-uah")}
          </p>
        </div>

        <div className="w-[50px] h-[50px] flex items-center justify-center scale-[0.7] md:scale-100 text-center md:mx-auto">
          <Logo />
        </div>

        <div className="flex flex-col text-center">
          <p className="text-[14px] md:text-[16px] lg:text-[25px] ">
            {t("delivery-conditions.urgent-taxi")}
          </p>

          <p className="text-[14px] md:text-[16px] lg:text-[25px] font-semibold italic">
            {t("delivery-conditions.by-taxi-rate")}
          </p>
        </div>

        <div className="w-[50px] h-[50px] flex items-center justify-center scale-[0.7] md:scale-100 text-center md:mx-auto">
          <Logo />
        </div>

        <div className="flex flex-col text-center">
          <p className="text-[14px] md:text-[16px] lg:text-[25px] ">
            {t("delivery-conditions.region")}
          </p>

          <p className="text-[14px] md:text-[16px] lg:text-[25px] font-semibold italic">
            {t("delivery-conditions.by-taxi-rate-2")}
          </p>
        </div>
      </div>

      <div className="mx-auto md:mx-0 mt-[40px] md:mt-[50px] lg:mt-[60px] md:self-end">
        <Button isRed location="delivery_conditions" />
      </div>
    </motion.section>
  );
};
