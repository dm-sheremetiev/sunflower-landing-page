import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ua from "../translations/ua.json";
import en from "../translations/en.json";

const resources = {
  ua: { translation: ua },
  en: { translation: en },
};

i18n.use(initReactI18next).init({
  fallbackLng: "ua",
  compatibilityJSON: "v3",
  resources,
  lng: "ua",
  interpolation: {
    escapeValue: false,
  },
  react: {
    transSupportBasicHtmlNodes: true,
  },
});

export default i18n;
