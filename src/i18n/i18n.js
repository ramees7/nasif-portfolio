import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "../Locals/en.json";
import jaTranslations from "../Locals/ja.json"; // Add more languages as needed
import arTranslations from "../Locals/ar.json"; // Add more languages as needed

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    ja: { translation: jaTranslations },
    ar: { translation: arTranslations },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
