import CurvedText from "@/app/assets/img/svg/curved-text.svg";
import CurvedTextEng from "@/app/assets/img/svg/view-all.svg";
import i18n from "@/app/i18n/i18n";

export const RotatingButton = () => {
  const { language } = i18n;

  return (
    <a
      href="https://www.instagram.com/sun.flower.kyiv"
      target="_blank"
      className="w-fit h-fit block"
    >
      <div className="w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] md:w-[168px] md:h-[168px]">
        <div className="animate-rotation">
          {language === "en" ? <CurvedTextEng /> : <CurvedText />}
        </div>
      </div>
    </a>
  );
};
