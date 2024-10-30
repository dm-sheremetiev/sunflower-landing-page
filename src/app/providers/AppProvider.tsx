"use client";

import { ReactNode } from "react";
import { TranslationsProvider } from "./TranslationProvider";

export default function AppProvider({ children }: { children: ReactNode }) {
  return <TranslationsProvider>{children}</TranslationsProvider>;
}
