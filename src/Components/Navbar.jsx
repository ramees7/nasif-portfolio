// import React, { useContext, useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link as RouterLink } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
// import { ColorContext } from "../context/ColorContextShare";

// export default function Navbar() {
//     const [showMenu, setShowMenu] = useState(false);
//   const { t, i18n } = useTranslation();
//   const roles = [t("landing.roles.freelancer"), t("landing.roles.developer")];
//   const { textColor } = useContext(ColorContext);
//   const navLists = [
//     { name: t("landing.navbar.about"), link: "about" },
//     { name: t("landing.navbar.service"), link: "Service" },
//     { name: t("landing.navbar.resume"), link: "resume" },
//     { name: t("landing.navbar.skills"), link: "skills" },
//     { name: t("landing.navbar.portfolio"), link: "/portfolio" },
//     { name: t("landing.navbar.contact"), link: "contact" },
//   ];

//   // const changeLanguage = (lang) => i18n.changeLanguage(lang);
//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//     localStorage.setItem("selectedLanguage", lang); // Store the selected language in localStorage
//   };

//   useEffect(() => {
//     const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
//     i18n.changeLanguage(savedLanguage);
//   }, []);
//   return (
//     <>
//       <nav className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50">
//         {/* <img
//           src="https://harnishdesign.net/demo/html/simone/images/logo-light.png"
//           alt="logo"
//           className="w-[80px]"
//         /> */}
//         <h1 className="text-2xl">Nasif</h1>
//         <div className="hidden md:flex space-x-6 text-sm uppercase items-center">
//           {navLists.map((item, ind) =>
//             item.link.startsWith("/") ? (
//               <RouterLink
//                 key={`nav-${ind}`}
//                 to={item.link}
//                 className="cursor-pointer hover:text-gray-500"
//               >
//                 {item.name}
//               </RouterLink>
//             ) : (
//               <ScrollLink
//                 key={`nav-${ind}`}
//                 to={item.link}
//                 smooth={true}
//                 duration={1000}
//                 className="cursor-pointer hover:text-gray-500"
//               >
//                 {item.name}
//               </ScrollLink>
//             )
//           )}
//         </div>
//         {/* Off-Canvas Menu Toggle Button */}
//         <button
//           onClick={() => setShowMenu(!showMenu)}
//           className="text-2xl md:hidden focus:outline-none"
//         >
//           {showMenu ? <FaTimes /> : <FaBars />}
//         </button>
//       </nav>
//       {/* Off-Canvas Sidebar */}
//       <div
//         className={`fixed top-0 left-0 w-[250px] h-full bg-black text-white  transform transition-transform duration-300 z-50 ${
//           showMenu ? "translate-x-0" : "-translate-x-full"
//         } md:hidden`}
//       >
//         <div className="flex flex-col justify-between h-full  p-8 ">
//           <div className="flex flex-col space-y-6">
//             {navLists.map((item, ind) => (
//               <ScrollLink
//                 key={`offcanvas-nav-${ind}`}
//                 to={item.link}
//                 smooth={true}
//                 duration={1000}
//                 onClick={() => setShowMenu(false)}
//                 className="text-lg cursor-pointer hover:text-gray-500"
//               >
//                 {item.name}
//               </ScrollLink>
//             ))}
//           </div>
//           <div className="mt-6 flex flex-col items-start space-y-4 text-lg">
//             {/* Language Selector */}
//             <button onClick={() => changeLanguage("en")}>ENG</button>
//             <button onClick={() => changeLanguage("ja")}>JAP</button>
//             <button onClick={() => changeLanguage("ar")}>ARA</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
