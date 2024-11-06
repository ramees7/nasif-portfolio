import React, { useContext } from "react";
import { ColorContext } from "../context/ColorContextShare";

export default function About() {
  const { textColor } = useContext(ColorContext);

  const statistics = [
    {
      count: "1+",
      desc: "Year Experience",
    },
    {
      count: "5+",
      desc: "Happy Clients",
    },
    {
      count: "5+",
      desc: "Projects Done",
    },
    {
      count: "5+",
      desc: "Get Awards",
    },
  ];

  return (
    <div className="text-white bg-black  p-10 md:p-20 ">
      {/* Header Section */}
      <div className="relative flex flex-col items-center justify-center h-48">
        {/* Large Background Text */}
        <h1
          className="absolute text-7xl md:text-9xl font-bold opacity-20"
          style={{ color: textColor }}
        >
          ABOUT ME
        </h1>

        {/* Foreground Title with Underline */}
        <h2 className="relative text-2xl md:text-3xl font-semibold z-10 text-white">
          Know Me More
          {/* <span
            className="block w-12 h-1 mt-2 mx-auto"
            style={{ backgroundColor: textColor }}
          ></span> */}
        </h2>
      </div>

      {/* Main About Section */}
      <div className="md:flex mt-10 gap-10">
        {/* Left Column: Introduction */}
        <div className="md:w-2/3">
          <h3 className="text-3xl font-semibold text-white">
            I'm <span style={{ color: textColor }}>Nasif</span>, a Flutter
            Developer
          </h3>
          <p className="mt-4 text-gray-400">
            As a dedicated Flutter Developer at Doctosmart Enterprises Pvt.
            Ltd., I specialize in crafting innovative and user-centric mobile
            applications. With a keen eye for detail and a passion for
            technology, I am committed to delivering high-quality solutions that
            exceed expectations. Leveraging the power of Flutter, I create
            cross-platform apps that are both visually stunning and functionally
            robust.
          </p>
        </div>

        {/* Right Column: Contact Information */}
        <div className="md:w-1/3 mt-10 md:mt-0 rounded-lg shadow-md">
          <ul className="space-y-3 text-gray-400">
            <li>
              <span className="font-semibold text-white">Name:</span> Nasif
            </li>
            <li>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a href="mailto:chat@simone.com" style={{ color: textColor }}>
                chat@simone.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Age:</span> 28
            </li>
            <li>
              <span className="font-semibold text-white">From:</span> Los
              Angeles, California
            </li>
          </ul>
          <button
            className="mt-6 w-fit px-6 py-2 rounded-md text-white font-semibold"
            style={{ backgroundColor: textColor }}
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="flex flex-wrap justify-between items-center mt-10 text-center text-white border-t border-gray-700 pt-10">
        {statistics?.map((item, ind) => (
          <div className="w-1/2 md:w-1/4 mb-6 md:mb-0" key={ind}>
            <h4 className="text-4xl font-bold" style={{color:textColor}}>{item.count}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
