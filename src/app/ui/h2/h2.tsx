import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const H2 = ({ children, className }: Props) => {
  return (
    <h2
      className={`font-medium text-[25px] leading-[30px] sm:text-[30px] sm:leading-[36px] md:text-[45px] md:leading-[54px] text-mainBlack ${className}`}
    >
      {children}
    </h2>
  );
};
