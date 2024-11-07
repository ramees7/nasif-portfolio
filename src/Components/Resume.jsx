import React, { useContext } from "react";
import { ColorContext } from "../context/ColorContextShare";
import { useTranslation } from "react-i18next";

export default function Resume() {
  const { textColor } = useContext(ColorContext);
  const { t } = useTranslation();

  const education = [
    {
      startYear: 2020,
      endYear: 2020,
      dept: "Computer Science",
      university: "International University",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      startYear: 2020,
      endYear: 2020,
      dept: "Computer Science",
      university: "International University",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      startYear: 2020,
      endYear: 2020,
      dept: "Computer Science",
      university: "International University",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      startYear: 2020,
      endYear: 2020,
      dept: "Computer Science",
      university: "International University",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];

  const experience = [
    {
      startYear: 2020,
      endYear: 2020,
      dept: "Computer Science",
      company: "International University",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      startYear: 2020,
      endYear: 2020,
      dept: "Computer Science",
      company: "International University",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      startYear: 2020,
      endYear: 2020,
      dept: "Computer Science",
      company: "International University",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
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
