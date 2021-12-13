import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./english";
import spanish from "./spanish";

const resources = {
  en: {
    translation: english,
  },

  es: {
    translation: spanish,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
