"use client";

import { BREAKPOINTS } from "@/app/constants/breakpoints";
import { useMediaQuery, useModal } from "@/app/hooks";
import { useEffect, useState } from "react";
import { Navbar } from "./components/navbar";
import classNames from "classnames";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  isExternal?: boolean;
  isHoliday?: boolean;
}

export default function Header({ isExternal }: Props) {
  const [prevScrollOffsetValue, setPrevScrollOffsetValue] = useState(0);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  const [isMenuVisible, showMenu, hideMenu] = useModal();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const l = useMediaQuery(BREAKPOINTS.lg);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window?.scrollY;
      const isHidden = currentOffset > prevScrollOffsetValue;

      if ((!isHeaderHidden && isHidden) || (isHeaderHidden && !isHidden)) {
        setIsHeaderHidden(isHidden);
      }

      setPrevScrollOffsetValue(currentOffset);
    };

    window?.addEventListener("scroll", handleScroll);

    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, [isHeaderHidden, prevScrollOffsetValue]);

  return (
    <motion.header
      ref={ref}
      className={classNames(
        "fixed z-50 flex w-full justify-center bg-transparent bg-white px-[15px] py-5 transition-transform duration-700 sm:px-10 md:px-[45px] xl:px-[60px]",
        {
          "-translate-y-full": isHeaderHidden && !isMenuVisible,
          "h-full": isMenuVisible && !l,
        }
      )}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 1, // длительность анимации
            ease: "easeInOut", // эффект easing
            delay: 1,
          },
        },
      }}
    >
      <div className="xl:container w-full">
        <Navbar
          isMenuVisible={isMenuVisible}
          showMenu={showMenu}
          hideMenu={hideMenu}
          isExternal={isExternal}
          isHoliday={false}
        />
      </div>
    </motion.header>
  );
}
