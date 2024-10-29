import Logo from "@/app/assets/img/svg/logo-icon.svg";

export const Divider = () => {
  return (
    <div className="w-full flex items-center justify-center gap-[17px] md:gap-[20px] lg:gap-[30px]">
      <div className="w-full h-[1px] bg-mainGrey" />

      <div className="w-[50px] h-[50px] flex items-center justify-center scale-[0.7] md:scale-100">
        <Logo />
      </div>

      <div className="w-full h-[1px] bg-mainGrey" />
    </div>
  );
};
