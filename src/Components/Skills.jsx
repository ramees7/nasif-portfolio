import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ColorContext } from "../context/ColorContextShare";

export default function Skills() {
  const { textColor } = useContext(ColorContext);

  const { t } = useTranslation();

  const skills = [
    { name: "Web Design", level: 65 },
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 80 },
    { name: "React JS", level: 70 },
    { name: "Angular JS", level: 80 },
    { name: "Bootstrap", level: 99 },
  ];

  return (
    <div className="text-white bg-black p-10 md:px-20">
      {/* Header Section */}
      <div className="relative flex flex-col items-center justify-center h-48">
        <h1
          className="absolute text-7xl md:text-9xl font-bold opacity-20 uppercase"
          style={{ color: textColor }}
        >
          {t("skills.mainHead.head")}
        </h1>
        <h2 className="relative text-2xl md:text-3xl font-semibold z-10 text-white">
          {t("skills.mainHead.subHead")}
          <span
            className="block w-12 h-1 md:mt-2 mt-1 mx-auto"
            style={{ backgroundColor: textColor }}
          ></span>
        </h2>
      </div>

      <section className=" text-white py-12">
        <div className=" mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-[#111827] rounded-full h-2.5">
                  <div
                    className=" bg-gray-400 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
