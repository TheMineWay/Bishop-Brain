import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Language } from "./language.enum";
import { Translation } from "./translation.enum";

// Locales
// - en_US
import en_US_layout from "./locales/en_US/layout.json";

export const setupI18n = () => {
  i18n.use(initReactI18next).init({
    resources: {
      [Language.en_US]: {
        [Translation.LAYOUT]: en_US_layout,
      },
    },
    lng: Language.en_US,
    fallbackLng: Language.en_US,
  });
};
