import CurvedText from "@/app/assets/img/svg/curved-text.svg";
import CurvedTextEng from "@/app/assets/img/svg/view-all.svg";
import i18n from "@/app/i18n/i18n";

import { sendGAEvent } from '@next/third-parties/google'


export const RotatingButton = () => {
  const { language } = i18n;

  return (
    <a
      href="https://www.instagram.com/sun.flower.kyiv"
      target="_blank"
      className="w-fit h-fit block"
      onClick={() => sendGAEvent("event", "view_all_instagram")}
    >
      <div className="w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] md:w-[168px] md:h-[168px]">
        <div className="animate-rotation">
          {language === "en" ? <CurvedTextEng /> : <CurvedText />}
        </div>
      </div>
    </a>
  );
};
