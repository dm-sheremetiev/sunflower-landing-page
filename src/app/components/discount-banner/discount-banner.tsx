import { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { sendGAEvent } from "@next/third-parties/google";
import { useAnimation, motion } from "framer-motion";

import CopyIcon from "@/app/assets/img/svg/copy-icon.svg";
import toast, { Toaster } from "react-hot-toast";

export default function DiscountBanner() {
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
      className="w-full mt-[100px] sm:mt-[150px] md:mt-[200px] px-[25px] md:px-[45px] xl:px-[0px] bg-mainPink flex flex-col py-[35px] md:py-[47px] items-center"
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
          // className="text-black text-[25px] sm:text-[35px] md:text-[45px] font-medium text-center"
          i18nKey="discount.discount-percents"
          components={{
            customComp: (
              <span className="text-mainRed text-[25px] sm:text-[35px] md:text-[45px] font-semibold italic text-center" />
            ),
            h2: (
              <h2 className="text-black text-[25px] sm:text-[35px] md:text-[45px] font-medium text-center" />
            ),
          }}
        >
          {t("discount.discount-percents")}
        </Trans>
      </div>

      <div className="mt-[25px] md:mt-[50px] flex flex-col gap-3 md:gap-5 items-center">
        <Trans
          i18nKey="discount.order-in-instagram"
          components={{
            customComp: <span className="text-black italic font-semibold" />,
            h2: (
              <h2 className="text-black text-[14px] sm:text-[16px] md:text-[25px] font-medium text-center" />
            ),
          }}
        >
          {t("discount.order-in-instagram")}
        </Trans>

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
        <Toaster />
      </div>
    </motion.div>
  );
}
