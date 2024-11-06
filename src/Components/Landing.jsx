import { useContext, useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import nasifBg from "../assets/nasif.jpg";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";
import { ColorContext } from "../context/ColorContextShare";

export default function Landing() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const { textColor } = useContext(ColorContext);

  const { t, i18n } = useTranslation();
  const roles = [t("landing.roles.freelancer"), t("landing.roles.developer")];

  // const changeLanguage = (lang) => i18n.changeLanguage(lang);
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("selectedLanguage", lang); // Store the selected language in localStorage
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    i18n.changeLanguage(savedLanguage);

    const handleTextTransition = () => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, prev.length - 1));
      } else {
        setDisplayText(roles[index].slice(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === roles[index]) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
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
        {/* Off-Canvas Menu Toggle Button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-2xl md:hidden focus:outline-none"
        >
          {showMenu ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Off-Canvas Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[250px] h-full bg-black text-white  transform transition-transform duration-300 z-50 ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col justify-between h-full  p-8 ">
          <div className="flex flex-col space-y-6">
            {navLists.map((item, ind) => (
              <ScrollLink
                key={`offcanvas-nav-${ind}`}
                to={item.link}
                smooth={true}
                duration={1000}
                onClick={() => setShowMenu(false)}
                className="text-lg cursor-pointer hover:text-gray-500"
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
          <div className="mt-6 flex flex-col items-start space-y-4 text-lg">
            {/* Language Selector */}
            <button onClick={() => changeLanguage("en")}>ENG</button>
            <button onClick={() => changeLanguage("ja")}>JAP</button>
            <button onClick={() => changeLanguage("ar")}>ARA</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:justify-center justify-end pb-10 sm:pb-0 h-full px-16 md:px-32 lg:px-48 xl:px-64">
        <h1 className="md:text-7xl text-5xl font-bold mb-4">
          {t("landing.name")}
        </h1>
        <p className="md:text-3xl text-2xl">
          {t("landing.greeting")}{" "}
          <span className=" font-semibold" style={{color:textColor}}>{displayText}</span>
        </p>
      </div>

      <div className="md:block hidden">
        <div className="absolute bottom-8 left-8 text-lg flex flex-col space-y-4 ">
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
      </div>

      {/* Social Icons */}
      <div className={`absolute bottom-8 right-8 flex flex-col space-y-4 text-2xl`}>
        {socialIcons.map((item, ind) => (
          <a key={ind} href={item.link} className="hover:text-gray-500">
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
