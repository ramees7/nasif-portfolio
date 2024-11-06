// src/ColorContext.js
import React, { createContext, useEffect, useState } from "react";

export const ColorContext = createContext();

export function ColorProvider({ children }) {
//   const [textColor, setTextColor] = useState("#808080");
const [textColor, setTextColor] = useState(() => {
    return localStorage.getItem("textColor") || "#808080";
  });

  // Save the color to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("textColor", textColor);
  }, [textColor]);
  return (
    <ColorContext.Provider value={{ textColor, setTextColor }}>
      {children}
    </ColorContext.Provider>
  );
}
