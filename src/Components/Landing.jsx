import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import nasifBg from "../assets/nasif-bg.png";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";

export default function Landing() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  // const roles = ["Freelancer", "Developer"];
  const { t, i18n } = useTranslation();
  const roles = [t("landing.roles.freelancer"), t("landing.roles.developer")];

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  useEffect(() => {
    const handleTextTransition = () => {
      // Control text display character by character
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, prev.length - 1));
      } else {
        setDisplayText(roles[index].slice(0, displayText.length + 1));
      }

      // Toggle deleting/adding based on text length
      if (!isDeleting && displayText === roles[index]) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length); // Move to next role
      }
    };

    const interval = setInterval(handleTextTransition, 100);
    return () => clearInterval(interval);
  }, [displayText, isDeleting, index]);

  const navLists = [
    { name: t("landing.navbar.about"), link: "about" },
    { name: t("landing.navbar.resume"), link: "resume" },
    { name: t("landing.navbar.portfolio"), link: "portfolio" },
    { name: t("landing.navbar.contact"), link: "contact" },
  ];

  const socialIcons = [
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaFacebook />, link: "#" },
    { icon: <FaLinkedin />, link: "#" },
    { icon: <FaGithub />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
  ];

  return (
    <div
      className="relative w-full h-screen bg-black text-white font-sans bg-custom bg-no-repeat md:bg-[length:400px] bg-[length:350px] md:bg-[75%] bg-[100%]"
      style={{
        backgroundImage: `url(${nasifBg})`,
      }}
    >
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50">
        <img
          src="https://harnishdesign.net/demo/html/simone/images/logo-light.png"
          alt="logo"
          className="w-[80px]"
        />
        <div className="hidden md:flex space-x-6 text-sm uppercase items-center">
          {navLists.map((item, ind) => (
            <ScrollLink
              key={`nav-${ind}`}
              to={item.link}
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-gray-500"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col justify-center h-full pr-10 md:pl-32 lg:pl-48 xl:pl-64">
        <h1 className="text-6xl font-bold mb-4">{t("landing.name")}</h1>
        <p className="text-2xl">
          {t("landing.greeting")}{" "}
          <span className="text-gray-500 font-semibold">{displayText}</span>
        </p>
      </div>

      {/* Language Selector */}
      {/* <div className="absolute bottom-8 left-8 text-lg flex flex-col space-y-4">
        {languageData.map((item, ind) => (
          <button key={ind} className="tracking-widest rotate-90">
            {item.name}
          </button>
        ))}
      </div> */}
      <div className="absolute bottom-8 left-8 text-lg flex flex-col space-y-4">
        <button
          onClick={() => changeLanguage("en")}
          className="tracking-widest rotate-90"
        >
          ENG
        </button>
        <button
          onClick={() => changeLanguage("ja")}
          className="tracking-widest rotate-90"
        >
          JAP
        </button>
        <button
          onClick={() => changeLanguage("ar")}
          className="tracking-widest rotate-90"
        >
          ARA
        </button>
      </div>

      {/* Social Icons */}
      <div className="absolute bottom-8 right-8 flex flex-col space-y-4 text-2xl">
        {socialIcons.map((item, ind) => (
          <a key={ind} href={item.link} className="hover:text-gray-500">
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
