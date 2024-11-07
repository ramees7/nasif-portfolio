import React, { useContext } from "react";
import { ColorContext } from "../context/ColorContextShare";
import { useTranslation } from "react-i18next";

export default function Resume() {
  const { textColor } = useContext(ColorContext);
  const { t } = useTranslation();

  const education = [
    {
      startYear: "Mar 2024",
      endYear: "Apr 2024",
      dept: "Flutter Developer Intern",
      university: "Doctosmart Enterprises, CyberPark Calicut",
      desc: "Developed Flutter apps, integrated APIs, and optimized performance.",
    },
    {
      startYear: "Sep 2023",
      endYear: "Dec 2023",
      dept: "Flutter Developer Intern",
      university: "CodmeHub International Pvt Ltd, Calicut",
      desc: "Built responsive Flutter UI and collaborated on team projects.",
    },
    {
      startYear: 2017,
      endYear: 2020,
      dept: "Computer Science",
      university: "University of Calicut",
      desc: "Bachelor's degree in Computer Science, focused on software development and algorithms.",
    },
    {
      startYear: 2015,
      endYear: 2017,
      dept: "Computer Science +2",
      university: "Kerala State",
      desc: "Higher secondary education with a focus on programming and problem-solving.",
    },
  ];

  const experience = [
    {
      startYear: "Mar 2024",
      endYear: "Present",
      dept: "Jr Flutter Developer & Trainer",
      company: "Doctosmart Enterprises Pvt Ltd, Calicut",
      desc: "Sharpened my expertise in the Flutter framework and Dart programming language",
    },
    {
      startYear: "May 2022",
      endYear: "May 2023",
      dept: "Flutter Developer",
      company: "Repadtech Pvt Ltd, Malappuram",
      desc: "Contribute to the development of software applications or components",
    },
    {
      startYear: "Sep 2023",
      endYear: "Feb 2024",
      dept: "Flutter Developer - Intern",
      company: "Vitez Software Pvt Ltd, Calicut",
      desc: "Contribute to the development of software applications or components",
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
          {t("resume.mainHead.head")}
        </h1>

        {/* Foreground Title with Underline */}
        <h2 className="relative text-2xl md:text-3xl font-semibold z-10 text-white">
          {t("resume.mainHead.head")}
          <span
            className="block w-12 h-1 md:mt-2 mt-1 mx-auto"
            style={{ backgroundColor: textColor }}
          ></span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div>
          <h1 className="mb-3 text-2xl font-semibold">Education</h1>
          {education?.map((item, ind) => (
            <div
              className="bg-[#111827] mb-10 w-full p-8 min-h-[200px]"
              key={ind}
            >
              <div
                className="px-2 rounded-sm w-fit font-semibold"
                style={{ backgroundColor: textColor }}
              >
                <span>
                  {item.startYear}-{item.endYear}
                </span>
              </div>
              <h1 className="text-3xl font-semibold my-3">{item.dept}</h1>
              <h3 className="text-lg" style={{ color: textColor }}>
                {item.university}
              </h3>
              <h5 className="text-sm text-gray-400">{item.desc}</h5>
            </div>
          ))}
        </div>
        <div>
          <h1 className="mb-3 text-2xl font-semibold">Experience</h1>
          {experience?.map((item, ind) => (
            <div
              className="bg-[#111827] mb-10 w-full p-8 min-h-[200px]"
              key={ind}
            >
              <div
                className="px-2 rounded-sm w-fit font-semibold"
                style={{ backgroundColor: textColor }}
              >
                <span>
                  {item.startYear}-{item.endYear}
                </span>
              </div>
              <h1 className="text-3xl font-semibold my-3">{item.dept}</h1>
              <h3 className="text-lg" style={{ color: textColor }}>
                {item.company}
              </h3>
              <h5 className="text-sm text-gray-400">{item.desc}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
