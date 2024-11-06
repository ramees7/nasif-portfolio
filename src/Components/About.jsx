import React, { useContext } from "react";
import { ColorContext } from "../context/ColorContextShare";
import { useTranslation } from "react-i18next";

export default function About() {
  const { textColor } = useContext(ColorContext);
  const { t } = useTranslation();

  const statistics = [
    {
      count: "1+",
      desc: t("about.statistics.experience"),
    },
    {
      count: "5+",
      desc: t("about.statistics.clients"),
    },
    {
      count: "5+",
      desc: t("about.statistics.projects"),
    },
    {
      count: "5+",
      desc: t("about.statistics.awards"),
    },
  ];

  return (
    <div className="text-white bg-black  p-10 md:px-20 ">
      {/* Header Section */}
      <div className="relative flex flex-col items-center justify-center h-48">
        {/* Large Background Text */}
        <h1
          className="absolute text-7xl md:text-9xl font-bold opacity-20 uppercase"
          style={{ color: textColor }}
        >
          {t("about.mainHead.head")}
        </h1>

        {/* Foreground Title with Underline */}
        <h2 className="relative text-2xl md:text-3xl font-semibold z-10 text-white">
          {t("about.mainHead.subHead")}
          <span
            className="block w-12 h-1 md:mt-2 mt-1 mx-auto"
            style={{ backgroundColor: textColor }}
          ></span>
        </h2>
      </div>

      {/* Main About Section */}
      <div className="md:flex mt-10 gap-10">
        {/* Left Column: Introduction */}
        <div className="md:w-2/3">
          <h3 className="text-3xl font-semibold text-white">
            {t("about.aboutDesc.iam")}{" "}
            <span style={{ color: textColor }}>
              {t("about.aboutDesc.name")}
            </span>
            ,{t("about.aboutDesc.category")}
          </h3>
          <p className="mt-4 text-gray-400">
            {t("about.aboutDesc.description")}
          </p>
        </div>

        {/* Right Column: Contact Information */}
        <div className="md:w-1/3 mt-10 md:mt-0 rounded-lg shadow-md">
          <ul className="space-y-3 text-gray-400">
            <li>
              <span className="font-semibold text-white">
                {t("about.details.nameHead")}:
              </span>{" "}
              {t("about.details.nameCont")}
            </li>
            <li>
              <span className="font-semibold text-white">
                {t("about.details.emailHead")}:
              </span>{" "}
              <a href="mailto:connect.tonasif@gmail.com" style={{ color: textColor }}>
                {t("about.details.emailCont")}
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">
                {t("about.details.ageHead")}:
              </span>{" "}
              {t("about.details.ageCont")}
            </li>
            <li>
              <span className="font-semibold text-white">
                {t("about.details.fromHead")}:
              </span>{" "}
              {t("about.details.fromCont")}
            </li>
          </ul>
          <button
            className="mt-6 w-fit px-6 py-2 rounded-md text-white font-semibold"
            style={{ backgroundColor: textColor }}
          >
            {t("about.details.download")}
          </button>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="flex flex-wrap justify-between items-center mt-10 text-center text-white border-t border-gray-700 pt-10">
        {statistics?.map((item, ind) => (
          <div className="w-1/2 md:w-1/4 mb-6 md:mb-0" key={ind}>
            <h4 className="text-4xl font-bold" style={{ color: textColor }}>
              {item.count}
            </h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
