import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useContext, useEffect, useRef, useState } from "react";
import { FaCog } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { ColorContext } from "./context/ColorContextShare";
import "./App.css";

export default function App() {
  const { textColor, setTextColor } = useContext(ColorContext);
  const [isOpen, setIsOpen] = useState(false);
  const colorBoxRef = useRef(null);

  const colors = [
    { name: "purple", code: "#808080" },
    { name: "red", code: "#e74c3c" },
    { name: "blue", code: "#3498db" },
    { name: "yellow", code: "#f1c40f" },
    { name: "pink", code: "#e91e63" },
    { name: "purple", code: "#8e44ad" },
    { name: "green", code: "#2ecc71" },
    { name: "Indigo", code: "#4B0082" },
    { name: "orange", code: "#e67e22" },
    { name: "magenta", code: "#c71585" },
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
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {!isOpen && (
          <div
            className="fixed right-2 top-1/2 transform -translate-y-1/2  cursor-pointer"
            style={{ color: textColor }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaCog size={24} />
          </div>
        )}
        {isOpen && (
          <div
            ref={colorBoxRef}
            className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg px-7 py-4 delay-500 rounded-lg"
          >
            <div className="flex justify-between items-center mb-4 border-b text-lg font-semibold">
              <h2>Color Switcher</h2>
              <span
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              >
                <IoClose />
              </span>
            </div>
            <div className="grid grid-cols-5 gap-4 mt-2">
              {colors.map((color) => (
                <FaDroplet
                  className="md:text-2xl text-xl cursor-pointer"
                  style={{ color: color.code }}
                  key={color.name}
                  onClick={() => setTextColor(color.code)}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}
