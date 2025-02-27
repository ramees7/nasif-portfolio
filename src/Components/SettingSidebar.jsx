// components/SettingsSidebar.js
import { useContext, useRef, useState, useEffect } from "react";
import { FaCog } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { SettingsContext } from "../context/SettingsContext";
import { useTranslation } from "react-i18next";


export default function SettingSidebar() {
    const { textColor, updateTextColor } = useContext(SettingsContext);
    const [isOpen, setIsOpen] = useState(false);
    const colorBoxRef = useRef(null);
    const { t } = useTranslation();
  
    const colors = [
      { name: "Gray", code: "#808080" },
      { name: "red", code: "#f72b1c" },
      { name: "blue", code: "#4169e1" },
      { name: "yellow", code: "#f1c40f" },
      { name: "pink", code: "#e91e63" },
      { name: "BlueViolet", code: "#6957af" },
      { name: "green", code: "#72b626" },
      { name: "Indigo", code: "#4B0082" },
      { name: "orange", code: "#fa5b0f" },
      { name: "magenta", code: "#ee6192" },
    ];
  
    // Close color box on clicking outside
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (colorBoxRef.current && !colorBoxRef.current.contains(e.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  
    return (
      <>
        {!isOpen && (
          <div
            className="fixed right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            style={{ color: textColor }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaCog size={24} />
          </div>
        )}
        {isOpen && (
          <div
            ref={colorBoxRef}
            className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg px-7 py-4 rounded-lg"
          >
            <div className="flex justify-between items-center mb-4 border-b text-lg font-semibold">
              <h2>{t("landing.colorSwitcher")}</h2>
              <span onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                <IoClose />
              </span>
            </div>
            <div className="grid grid-cols-5 gap-4 mt-2">
              {colors.map((color) => (
                <FaDroplet
                  key={color.name}
                  className="md:text-2xl text-xl cursor-pointer"
                  style={{ color: color.code }}
                  onClick={() => updateTextColor(color.code)}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
  