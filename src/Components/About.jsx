
import React, { useContext } from "react";
import { ColorContext } from "../context/ColorContextShare";
import { useTranslation } from "react-i18next";
import cvPDF from "../assets/nasif-cv.pdf";

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

  const education = [
    {
      startYear: `${t("resume.dates.mar")} 2024`,
      endYear: `${t("resume.dates.apr")} 2024`,
      dept: t("resume.education.dept.flutterDeveloperIntern"),
      university: t("resume.education.university.doctosmartEnterprises"),
      desc: t("resume.education.desc.flutterAppsApiOptimization"),
    },
    {
      startYear: `${t("resume.dates.sep")} 2023`,
      endYear: `${t("resume.dates.dec")} 2023`,
      dept: t("resume.education.dept.flutterDeveloperIntern"),
      university: t("resume.education.university.codmeHub"),
      desc: t("resume.education.desc.responsiveUI"),
    },
    {
      startYear: "2017",
      endYear: "2020",
      dept: t("resume.education.dept.computerScience"),
      university: t("resume.education.university.universityOfCalicut"),
      desc: t("resume.education.desc.bachelorsDegreeCS"),
    },
    {
      startYear: "2015",
      endYear: "2017",
      dept: t("resume.education.dept.computerSciencePlus2"),
      university: t("resume.education.university.keralaState"),
      desc: t("resume.education.desc.higherSecondaryEducation"),
    },
  ];

  const experience = [
    {
      startYear: `${t("resume.dates.mar")} 2024`,
      endYear: `${t("resume.dates.present")}`,
      dept: t("resume.experience.dept.jrFlutterDeveloperTrainer"),
      company: t("resume.experience.company.doctosmartEnterprises"),
      desc: t("resume.experience.desc.flutterExpertise"),
    },
    {
      startYear: `${t("resume.dates.may")} 2022`,
      endYear: `${t("resume.dates.may")} 2023`,
      dept: t("resume.experience.dept.flutterDeveloper"),
      company: t("resume.experience.company.repadtech"),
      desc: t("resume.experience.desc.contributeSoftwareApplications"),
    },
    {
      startYear: `${t("resume.dates.sep")} 2023`,
      endYear: `${t("resume.dates.feb")} 2024`,
      dept: t("resume.experience.dept.flutterDeveloperIntern"),
      company: t("resume.experience.company.vitezSoftware"),
      desc: t("resume.experience.desc.contributeSoftwareApplications"),
    },
  ];

  // const education = [
  //   {
  //     startYear: "Mar 2024",
  //     endYear: "Apr 2024",
  //     dept: "Flutter Developer Intern",
  //     university: "Doctosmart Enterprises, CyberPark Calicut",
  //     desc: "Developed Flutter apps, integrated APIs, and optimized performance.",
  //   },
  //   {
  //     startYear: "Sep 2023",
  //     endYear: "Dec 2023",
  //     dept: "Flutter Developer Intern",
  //     university: "CodmeHub International Pvt Ltd, Calicut",
  //     desc: "Built responsive Flutter UI and collaborated on team projects.",
  //   },
  //   {
  //     startYear: 2017,
  //     endYear: 2020,
  //     dept: "Computer Science",
  //     university: "University of Calicut",
  //     desc: "Bachelor's degree in Computer Science, focused on software development and algorithms.",
  //   },
  //   {
  //     startYear: 2015,
  //     endYear: 2017,
  //     dept: "Computer Science +2",
  //     university: "Kerala State",
  //     desc: "Higher secondary education with a focus on programming and problem-solving.",
  //   },
  // ];

  // const experience = [
  //   {
  //     startYear: "Mar 2024",
  //     endYear: "Present",
  //     dept: "Jr Flutter Developer & Trainer",
  //     company: "Doctosmart Enterprises Pvt Ltd, Calicut",
  //     desc: "Sharpened my expertise in the Flutter framework and Dart programming language",
  //   },
  //   {
  //     startYear: "May 2022",
  //     endYear: "May 2023",
  //     dept: "Flutter Developer",
  //     company: "Repadtech Pvt Ltd, Malappuram",
  //     desc: "Contribute to the development of software applications or components",
  //   },
  //   {
  //     startYear: "Sep 2023",
  //     endYear: "Feb 2024",
  //     dept: "Flutter Developer - Intern",
  //     company: "Vitez Software Pvt Ltd, Calicut",
  //     desc: "Contribute to the development of software applications or components",
  //   },
  // ];

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
              <a
                href="mailto:connect.tonasif@gmail.com"
                style={{ color: textColor }}
              >
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
          <div className="mt-6">
            <a
              href={cvPDF}
              target="_blank"
              download="Nasif_CV.pdf"
              className=" w-fit px-6 py-2 rounded-md text-white font-semibold"
              style={{ backgroundColor: textColor }}
            >
              {t("about.details.download")}
            </a>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 mt-20">
        <div>
          <h1 className="mb-3 text-2xl font-semibold">Education</h1>
          {education?.map((item, ind) => (
            <div
              className="bg-[#111827] md:mb-10 mb-5 w-full md:p-8 p-5 md:min-h-[200px]"
              key={ind}
            >
              <div className="flex justify-between gap-x-2 md:mb-0 mb-2">
                <h1 className=" text-lg font-semibold  md:hidden ">
                  {item.dept}
                </h1>
                <div
                  className="px-2 rounded-sm w-fit text-xs py-1 font-semibold flex items-center"
                  style={{ backgroundColor: textColor }}
                >
                  <span>
                    {item.startYear}-{item.endYear}
                  </span>
                </div>
              </div>
              <h1 className="text-3xl font-semibold my-3 md:block hidden">
                {item.dept}
              </h1>
              <h3 className="md:text-lg text-base" style={{ color: textColor }}>
                {item.university}
              </h3>
              <h5 className="md:text-sm text-xs text-gray-400">{item.desc}</h5>
            </div>
          ))}
        </div>
        <div>
          <h1 className="mb-3 text-2xl font-semibold">Experience</h1>
          {experience?.map((item, ind) => (
            <div
              className="bg-[#111827] md:mb-10 mb-5 w-full md:p-8 p-5 md:min-h-[200px]"
              key={ind}
            >
              <div className="flex justify-between gap-x-2 md:mb-0 mb-2">
                <h1 className=" text-lg font-semibold  md:hidden ">
                  {item.dept}
                </h1>
                <div
                  className="px-2 rounded-sm w-fit text-xs py-1 font-semibold flex items-center"
                  style={{ backgroundColor: textColor }}
                >
                  <span>
                    {item.startYear}-{item.endYear}
                  </span>
                </div>
              </div>
              <h1 className="text-3xl font-semibold my-3 md:block hidden">
                {item.dept}
              </h1>
              <h3 className="md:text-lg text-base" style={{ color: textColor }}>
                {item.company}
              </h3>
              <h5 className="md:text-sm text-xs text-gray-400">{item.desc}</h5>
            </div>
          ))}
        </div>
      </div>
      {/* Statistics Section */}
      {/* <div className="flex flex-wrap justify-between items-center mt-10 text-center text-white border-t border-gray-700 pt-10">
        {statistics?.map((item, ind) => (
          <div className="w-1/2 md:w-1/4 mb-6 md:mb-0" key={ind}>
            <h4 className="text-4xl font-bold">{item.count}</h4>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
