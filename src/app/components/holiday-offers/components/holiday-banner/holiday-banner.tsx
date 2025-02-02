import { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

export default function HolidayBanner() {
  const { t } = useTranslation();

  const [refDisc, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const discountControls = useAnimation();

  useEffect(() => {
    if (inView) {
      discountControls.start("visible");
    } else {
      discountControls.start("hidden");
    }
  }, [discountControls, inView]);

  return (
    <motion.div
      ref={refDisc}
      className="mt-[100px] md:mt-[120px] w-full px-[25px] md:px-[45px] xl:px-[0px] bg-mainPink flex flex-col py-[15px] md:py-[20px] items-center"
      initial="hidden"
      id="showcase"
      animate={discountControls}
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
      <div>
        <Trans
          i18nKey="holiday.holiday-find"
          components={{
            customComp: (
              <span className="text-mainRed text-[20px] sm:text-[35px] md:text-[35px] font-semibold italic text-center" />
            ),
            h2: (
              <h2 className="text-black text-[20px] sm:text-[35px] md:text-[35px] font-medium text-center" />
            ),
          }}
        >
          {t("holiday.holiday-find")}
        </Trans>
      </div>

      <div className="mt-[15px] md:mt-[25px] flex flex-col gap-3 md:gap-5 items-center text-black text-[14px] sm:text-[16px] md:text-[25px] font-medium text-center">
        {t("holiday.holiday-scroll")}
      </div>
    </motion.div>
  );
}
