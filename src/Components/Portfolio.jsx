// import React, { useContext } from "react";
// import { ColorContext } from "../context/ColorContextShare";
// import { useTranslation } from "react-i18next";

// export default function Portfolio() {
//   const { textColor } = useContext(ColorContext);

//   const { t } = useTranslation();
//   return (
//     <div className="text-white bg-black p-10 md:px-20">
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
//     </div>
//   );
// }

import React, { useState, useContext } from "react";
import { ColorContext } from "../context/ColorContextShare";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { textColor } = useContext(ColorContext);
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("All");

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

  const categories = ["All", "Design", "Brand", "Photos"];

  // Filter items based on active tab
  const filteredItems =
    activeTab === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <div className="text-white bg-black p-10 md:px-20">
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

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mt-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`uppercase font-semibold transition ${
              activeTab === category ? "" : "text-gray-400"
            }`}
            style={{
              color: activeTab === category ? textColor : undefined,
            }}
            onMouseEnter={(e) => {
              if (activeTab !== category) {
                e.target.style.color = textColor;
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== category) {
                e.target.style.color = "";
              }
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg h-[350px]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold" style={{ color: textColor }}>
                  {item.title}
                </h3>
                <p className="text-sm mt-2">{item.category}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="h-[350px] flex justify-center items-center col-span-full">
            <h1 className="text-2xl">Working On It!</h1>
          </div>
        )}
      </div>
    </div>
  );
}
