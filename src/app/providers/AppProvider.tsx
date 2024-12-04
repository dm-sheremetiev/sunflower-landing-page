"use client";

import { ReactNode, useEffect, useState } from "react";
import { TranslationsProvider } from "./TranslationProvider";

export default function AppProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return <TranslationsProvider>{children}</TranslationsProvider>;
}
