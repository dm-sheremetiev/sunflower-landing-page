import { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { sendGAEvent } from "@next/third-parties/google";
import { useAnimation, motion } from "framer-motion";

import CopyIcon from "@/app/assets/img/svg/copy-icon.svg";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  isHoliday?: boolean;
}

export default function DiscountBanner({ isHoliday }: Props) {
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

  // return (
  //   <motion.div
  //     ref={refDisc}
  //     className="w-full mt-[100px] sm:mt-[150px] md:mt-[200px] px-[25px] md:px-[45px] xl:px-[0px] bg-mainPink flex flex-col py-[35px] items-center"
  //     initial="hidden"
  //     id="showcase"
  //     animate={discountControls}
  //     variants={{
  //       hidden: {
  //         opacity: 0,
  //         y: 20,
  //       },
  //       visible: {
  //         opacity: 1,
  //         y: 0,
  //         transition: {
  //           duration: 1,
  //           ease: "easeInOut",
  //         },
  //       },
  //     }}
  //   >
  //     <div className="mt-[25px] md:mt-[35px] flex flex-col gap-3 md:gap-5 items-center px-5">
  //       <Trans
  //         i18nKey="discount.mono-hydr-35"
  //         components={{
  //           customComp: (
  //             <span className="text-mainRed text-[15px] sm:text-[25px] md:text-[35px] font-semibold italic text-center" />
  //           ),
  //           h2: (
  //             <h2 className="text-black text-[15px] sm:text-[25px] md:text-[35px] font-medium text-center" />
  //           ),
  //         }}
  //       >
  //         {t("discount.mono-hydr-35")}
  //       </Trans>

  //       <Trans
  //         i18nKey="discount.mono-roses-10"
  //         components={{
  //           customComp: (
  //             <span className="text-mainRed text-[15px] sm:text-[25px] md:text-[35px] font-semibold italic text-center" />
  //           ),
  //           h2: (
  //             <h2 className="text-black text-[15px] sm:text-[25px] md:text-[35px] font-medium text-center" />
  //           ),
  //         }}
  //       >
  //         {t("discount.mono-roses-10")}
  //       </Trans>
  //     </div>
  //   </motion.div>
  // );

  return (
    <motion.div
      ref={refDisc}
      className="w-full mt-[100px] sm:mt-[150px] md:mt-[200px] px-[25px] md:px-[45px] xl:px-[0px] bg-mainPink flex flex-col py-[35px] items-center"
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
          i18nKey={
            isHoliday
              ? "discount.discount-heading-mothers-day"
              : "discount.discount-percents"
          }
          components={{
            customComp: (
              <span className="text-mainRed text-[25px] sm:text-[35px] md:text-[45px] font-semibold italic text-center" />
            ),
            h2: (
              <h2 className="text-black text-[25px] sm:text-[35px] md:text-[45px] font-medium text-center" />
            ),
          }}
        >
          {t(
            isHoliday
              ? "discount.discount-heading-mothers-day"
              : "discount.discount-percents"
          )}
        </Trans>
      </div>

      <div className="mt-[25px] md:mt-[35px] flex flex-col gap-3 md:gap-5 items-center">
        <Trans
          i18nKey={
            isHoliday
              ? "discount.order-in-instagram-mothers-day"
              : "discount.order-in-instagram"
          }
          components={{
            customComp: <span className="text-black italic font-semibold" />,
            h2: (
              <h2 className="text-black text-[14px] sm:text-[16px] md:text-[25px] font-medium text-center" />
            ),
          }}
        >
          {t(
            isHoliday
              ? "discount.order-in-instagram-mothers-day"
              : "discount.order-in-instagram"
          )}
        </Trans>

        {!isHoliday ? (
          <>
            <div className="flex items-center gap-[10px] md:gap-[15px]">
              <h2
                className="text-[31px] sm:text-[35px] md:text-[50px] font-semibold text-center text-mainRed"
                onSelect={() => sendGAEvent("event", "discount_select")}
              >
                SNFLWR
              </h2>

              <button
                className="w-[25px] h-[25px] md:w-[35px] md:h-[35px]"
                onClick={() => {
                  navigator.clipboard.writeText("SNFLWR");
                  toast.success(t("discount.discount-copied-successfully"), {
                    position: "top-center",
                  });
                }}
              >
                <CopyIcon />
              </button>
            </div>
            <div className="w-full flex justify-center">
              <p className="self-start text-left">
                {t("discount.discount-off")}
              </p>
            </div>
          </>
        ) : null}

        <Toaster />
      </div>
    </motion.div>
  );
}
