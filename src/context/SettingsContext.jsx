// context/SettingsContext.js
import { createContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [textColor, setTextColor] = useState("#808080");
  const { i18n } = useTranslation();

  // Load language and color from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    const savedColor = localStorage.getItem("selectedColor") || "#808080";

    i18n.changeLanguage(savedLanguage);
    setTextColor(savedColor);
  }, [i18n]);

  // Save color and language to localStorage
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);
  };

  const updateTextColor = (color) => {
    setTextColor(color);
    localStorage.setItem("selectedColor", color);
  };

  return (
    <SettingsContext.Provider value={{ textColor, changeLanguage, updateTextColor }}>
      {children}
    </SettingsContext.Provider>
  );
};
