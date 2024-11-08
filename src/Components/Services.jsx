import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ColorContext } from "../context/ColorContextShare";
import { FaChartBar, FaCode, FaMobileAlt, FaPalette } from "react-icons/fa";

export default function Services() {
  const { textColor } = useContext(ColorContext);
  const { t } = useTranslation();

  const services = [
    {
      title: t("service.serviceTitleApp"),
      icon: <FaMobileAlt />,
      desc: t("service.descApp"),
    },
    {
      title: t("service.serviceTitleDM"),
      icon: <FaChartBar />,
      desc: t("service.descDM"),
    },
    {
      title: t("service.serviceTitleWeb"),
      icon: <FaCode />,
      desc: t("service.descWeb"),
    },
    {
      title: t("service.serviceTitleGraphic"),
      icon: <FaPalette />,
      desc: t("service.descGraphic"),
    },
  ];

  return (
    <div className="text-white bg-black  p-10 md:px-20  ">
      {/* Header Section */}
      <div className="relative flex flex-col items-center justify-center h-48">
        {/* Large Background Text */}
        <h1
          className="absolute text-7xl md:text-9xl font-bold opacity-20 uppercase"
          style={{ color: textColor }}
        >
          {t("service.mainHead.head")}
        </h1>

        {/* Foreground Title with Underline */}
        <h2 className="relative text-2xl md:text-3xl font-semibold z-10 text-white">
          {t("service.mainHead.subHead")} ?
          <span
            className="block w-12 h-1 md:mt-2 mt-1 mx-auto"
            style={{ backgroundColor: textColor }}
          ></span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:gap-10 gap-x-2 gap-y-5 md:mt-14 mt-10">
        {services.map((item, ind) => (
          <div className="flex items-center md:p-4 p-1 md:gap-5 gap-2" key={ind}>
            <div className="bg-[#111827] p-3 rounded-md">
              <span className="md:text-4xl text-2xl" style={{ color: textColor }}>
                {item.icon}
              </span>
            </div>
            <div>
              <h1 className="md:text-2xl text-base font-semibold">{item.title}</h1>
              <h3 className="md:text-base text-xs mt-1 text-gray-400">{item.desc}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
