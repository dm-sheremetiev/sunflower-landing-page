"use client";

import { H2 } from "@/app/ui/h2/h2";
import { useTranslation } from "react-i18next";
import PhoneIcon from "@/app/assets/img/svg/phone-icon.svg";
import InstagramIcon from "@/app/assets/img/svg/instagram-icon.svg";
import TelegramIcon from "@/app/assets/img/svg/telegram-icon.svg";
import ContactsImage from "@/app/assets/img/contacts-image.png";
import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { fadeInUp } from "@/app/utils/animations";

export const ContactsSection = () => {
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
      className="xl:container w-full px-[15px] md:px-[45px] xl:px-[0px] mb-[100px] md:mb-[150px] lg:mb-[200px] flex flex-col md:flex-row md:gap-[200px] md:items-start md:grid md:grid-cols-2"
      id="contacts"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
    >
      <div className="flex flex-col gap-10 md:gap-[50px] lg:gap-[60px]">
        <H2>{t("contacts.contacts")}</H2>

        <div className="flex flex-col gap-5 md:gap-[30px] lg:gap-[40px]">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[12px] md:text-[14px] lg:text-[20px] text-mainGrey">
              {t("contacts.for-orders")}
            </p>

            <div className="flex flex-col gap-[10px] md:gap-4">
              <div className="cursor-pointer max-w-fit">
                <a
                  href={`tel:+380669928410`}
                  className="flex flex-row gap-[10px] items-center w-fit"
                >
                  <div className="w-5 h-5 md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[25px] mb-1">
                    <PhoneIcon />
                  </div>

                  <p className="text-[14px] md:text-[16px] lg:text-[25px] text-mainBlack hover:text-mainRed transition-all">
                    <span className="font-medium">+380 66 992 84 10</span> -{" "}
                    {t("contacts.french-quarter")}
                  </p>
                </a>
              </div>

              <div className="cursor-pointer max-w-fit">
                <a
                  href={`tel:+380636778996`}
                  className="flex flex-row gap-[10px] items-center w-fit"
                >
                  <div className="w-5 h-5 md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[25px] mb-1">
                    <PhoneIcon />
                  </div>

                  <p className="text-[14px] md:text-[16px] lg:text-[25px] text-mainBlack hover:text-mainRed transition-all">
                    <span className="font-medium">+380 63 677 89 96</span> -{" "}
                    {t("contacts.fayna-town")}
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <p className="text-[12px] md:text-[14px] lg:text-[20px] text-mainGrey">
              {t("contacts.for-cooperation")}
            </p>

            <div>
              <a
                href={`tel:+380636778957`}
                className="flex flex-row gap-[10px] items-center w-fit"
              >
                <div className="w-5 h-5 md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[25px] mb-1">
                  <PhoneIcon />
                </div>

                <p className="text-[14px] md:text-[16px] lg:text-[25px] text-mainBlack hover:text-mainRed transition-all font-medium">
                  +380 63 677 89 57
                </p>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <p className="text-[12px] md:text-[14px] lg:text-[20px] text-mainGrey">
              {t("contacts.social-networks")}
            </p>

            <div className="flex flex-row items-center gap-5">
              <a
                href="https://www.instagram.com/sun.flower.kyiv"
                target="_blank"
                className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px]"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://t.me/sun_flower_kyiv"
                target="_blank"
                className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px]"
              >
                <TelegramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[30px] md:mt-0 md:pt-[100px] lg:pt-0 w-full flex items-center justify-center">
        <Image
          src={ContactsImage}
          alt="flowers-contacts"
          className="max-h-[500px]"
        />
      </div>
    </motion.section>
  );
};
