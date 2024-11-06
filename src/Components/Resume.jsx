import React, { useContext } from "react";
import { ColorContext } from "../context/ColorContextShare";
import { useTranslation } from "react-i18next";

export default function Resume() {
  const { textColor } = useContext(ColorContext);
  const { t } = useTranslation();

  const education=[

  ]

  const experience=[
    
  ]
  return (
    <div className="text-white bg-black  p-10 md:px-20  ">
      {/* Header Section */}
      <div className="relative flex flex-col items-center justify-center h-48">
        {/* Large Background Text */}
        <h1
          className="absolute text-7xl md:text-9xl font-bold opacity-20 uppercase"
          style={{ color: textColor }}
        >
          Summary
        </h1>

        {/* Foreground Title with Underline */}
        <h2 className="relative text-2xl md:text-3xl font-semibold z-10 text-white">
          Resume
          <span
            className="block w-12 h-1 md:mt-2 mt-1 mx-auto"
            style={{ backgroundColor: textColor }}
          ></span>
        </h2>
      </div>
    </div>
  );
}
