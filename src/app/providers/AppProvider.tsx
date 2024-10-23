import { ReactNode } from "react";
import { TranslationsProvider } from "./TranslationProvider";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return <TranslationsProvider>{children}</TranslationsProvider>;
};
