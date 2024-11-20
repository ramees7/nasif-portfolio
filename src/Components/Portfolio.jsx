// import React, { useState, useContext } from "react";
// import { ColorContext } from "../context/ColorContextShare";
// import { useTranslation } from "react-i18next";
// import { FaChevronLeft } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function Portfolio() {
//   const { textColor } = useContext(ColorContext);
//   const { t } = useTranslation();
//   const [activeTab, setActiveTab] = useState("All");

//   // Sample portfolio items (replace with actual data)
//   const portfolioItems = [
//     {
//       title: "Project A",
//       category: "Brand",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0H9XfFEqC3TbHWJRtGKK-4rulQ45KHsFfug&s",
//     },
//     {
//       title: "Project B",
//       category: "Brand",
//       img: "https://gaadiwale.com/wp-content/uploads/2021/10/modified-Mahindra-Thar-Accessories-the-shoppe-img3.jpeg",
//     },
//     {
//       title: "Project C",
//       category: "Photos",
//       img: "https://fastwaybicycles.com/wp-content/uploads/2023/12/man-img3.jpg",
//     },
//   ];

//   return (
//     <div className="text-white bg-black p-10 md:px-20 min-h-screen">
//       {/* Header Section */}
//       <div className="relative flex flex-col items-center justify-center h-48">
//         <h1
//           className="absolute text-7xl md:text-9xl font-bold opacity-20 uppercase"
//           style={{ color: textColor }}
//         >
//           {t("portfolio.mainHead.head")}
//         </h1>
//         <h2 className="relative text-2xl md:text-3xl font-semibold z-10 text-white">
//           {t("portfolio.mainHead.subHead")}
//           <span
//             className="block w-12 h-1 md:mt-2 mt-1 mx-auto"
//             style={{ backgroundColor: textColor }}
//           ></span>
//         </h2>
//       </div>
//       <Link
//         to={"/"}
//         className="flex items-center gap-1  mt-10 mb-3 cursor-pointer"
//       >
//         <FaChevronLeft />
//         <h1>Back to Home</h1>
//       </Link>

//       {/* Portfolio Items */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {portfolioItems.map((item, index) => (
//           <div
//             key={index}
//             className="relative group overflow-hidden rounded-lg h-[350px]"
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-80"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <h3 className="text-xl font-bold" style={{ color: textColor }}>
//                 {item.title}
//               </h3>
//               <p className="text-sm mt-2">{item.category}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SettingsContext } from "../context/SettingsContext";

export default function Portfolio() {
  const { textColor } = useContext(SettingsContext);
  const { t } = useTranslation();
  const [hoverDirection, setHoverDirection] = useState("");



  // Sample portfolio items (replace with actual data)
  const portfolioItems = [
    {
      title: "Project A",
      category: "Brand",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0H9XfFEqC3TbHWJRtGKK-4rulQ45KHsFfug&s",
    },
    {
      title: "Project B",
      category: "Brand",
      img: "https://gaadiwale.com/wp-content/uploads/2021/10/modified-Mahindra-Thar-Accessories-the-shoppe-img3.jpeg",
    },
    {
      title: "Project C",
      category: "Photos",
      img: "https://fastwaybicycles.com/wp-content/uploads/2023/12/man-img3.jpg",
    },
  ];

  const detectDirection = (e, index) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const w = rect.width;
    const h = rect.height;
    const fromLeft = x / w;
    const fromTop = y / h;

    if (fromTop <= 0.25) setHoverDirection("top");
    else if (fromTop >= 0.75) setHoverDirection("bottom");
    else if (fromLeft <= 0.25) setHoverDirection("left");
    else if (fromLeft >= 0.75) setHoverDirection("right");
  };

  return (
    <div className="text-white bg-black p-10 md:px-20 min-h-screen">
      {/* Header Section */}
      <div className="relative flex flex-col items-center justify-center h-48">
        <h1
          className="absolute text-7xl md:text-9xl font-bold opacity-20 uppercase"
          style={{ color: textColor }}
        >
          {t("portfolio.mainHead.head")}
        </h1>
        <h2 className="relative text-2xl md:text-3xl font-semibold z-10 text-white">
          {t("portfolio.mainHead.subHead")}
          <span
            className="block w-12 h-1 md:mt-2 mt-1 mx-auto"
            style={{ backgroundColor: textColor }}
          ></span>
        </h2>
      </div>
      <Link
        to={"/"}
        className="flex items-center gap-1 mt-10 mb-3 cursor-pointer"
      >
        <FaChevronLeft />
        <h1>{t("portfolio.backtoHome")}</h1>
      </Link>

      {/* Portfolio Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            onMouseEnter={(e) => detectDirection(e, index)}
            onMouseLeave={() => setHoverDirection("")}
            className="relative group overflow-hidden rounded-lg h-[350px]"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-80"
            />
            <div
              className={`absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-70 transition-opacity duration-300
              ${
                hoverDirection === "left"
                  ? "animate-slide-left"
                  : hoverDirection === "right"
                  ? "animate-slide-right"
                  : hoverDirection === "top"
                  ? "animate-slide-top"
                  : hoverDirection === "bottom"
                  ? "animate-slide-bottom"
                  : ""
              }`}
              style={{ backgroundColor: textColor }}
            >
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
