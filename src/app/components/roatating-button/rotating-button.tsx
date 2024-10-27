import CurvedText from "@/app/assets/img/svg/curved-text.svg";

export const RotatingButton = () => {
  return (
    <a
      href="https://www.instagram.com/sun.flower.kyiv"
      target="_blank"
      className="w-fit h-fit block"
    >
      <div className="w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] md:w-[168px] md:h-[168px]">
        <div className="animate-rotation">
          <CurvedText />
        </div>
      </div>
    </a>
  );
};
