import React, { useContext } from "react";
import { ColorContext } from "../context/ColorContextShare";

export default function About() {
  const { textColor } = useContext(ColorContext);

  return (
    <div
      className={`relative flex flex-col items-center justify-center h-48 bg-black`}
    >
      {/* Large Background Text */}
      <h1 className="absolute text-7xl md:text-9xl font-bold  opacity-10" style={{color:textColor}}>
        ABOUT ME
      </h1>

      {/* Foreground Title with Underline */}
      <h2 className="relative text-2xl md:text-3xl font-semibold z-10 text-white">
        Know Me More
        <span className="block w-12 h-1  mt-2 mx-auto" style={{backgroundColor:textColor}}></span>
      </h2>
    </div>
  );
}
