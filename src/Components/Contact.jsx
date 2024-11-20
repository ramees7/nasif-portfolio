// import {
//   FaTwitter,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaPaperPlane,
//   FaFacebook,
//   FaLinkedin,
//   FaGithub,
//   FaInstagram,
// } from "react-icons/fa";
// import { ColorContext } from "../context/ColorContextShare";
// import { useContext } from "react";
// import { useTranslation } from "react-i18next";

// export default function Contact() {
//   const { textColor } = useContext(ColorContext);
//   const { t } = useTranslation();

//   const socialIcons = [
//     { icon: <FaTwitter />, link: "#" },
//     { icon: <FaFacebook />, link: "#" },
//     {
//       icon: <FaLinkedin />,
//       link: "https://www.linkedin.com/in/muhammed-nasif/",
//     },
//     { icon: <FaGithub />, link: "#" },
//     {
//       icon: <FaInstagram />,
//       link: "https://www.instagram.com/naaaasieee/profilecard/?igsh=MTM3YmJvbDhtZmdwaQ==",
//     },
//   ];

//   return (
//     <div className="text-white bg-black  p-10 md:px-20  ">
//       {/* Header Section */}
//       <div className="relative flex flex-col items-center justify-center h-48">
//         {/* Large Background Text */}
//         <h1
//           className="absolute text-7xl md:text-9xl font-bold opacity-20 uppercase"
//           style={{ color: textColor }}
//         >
//           {t("contact.mainHead.head")}
//         </h1>

//         {/* Foreground Title with Underline */}
//         <h2 className="relative text-2xl md:text-3xl font-semibold z-10 text-white">
//           {t("contact.mainHead.subHead")}
//           <span
//             className="block w-12 h-1 md:mt-2 mt-1 mx-auto"
//             style={{ backgroundColor: textColor }}
//           ></span>
//         </h2>
//       </div>
//       <div className="flex flex-col md:flex-row bg-black text-white mt-10 space-y-8 md:space-y-0 md:space-x-8">
//         {/* Contact Info Section */}
//         <div className="flex-1 md:w-1/3 w-full space-y-6">
//           <h2 className="text-2xl font-bold">
//             {t("contact.dontbeshy")}
//           </h2>
//           <p className="text-gray-400">{t("contact.desc")}</p>
//           <div className="flex items-center space-x-4">
//             <FaEnvelope style={{ color: textColor }} size={24} />
//             <div>
//               <a href="mailto:connect.tonasif@gmail.com">
//                 connect.tonasif@gmail.com
//               </a>
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             <FaPhoneAlt style={{ color: textColor }} size={24} />
//             <div>
//               {/* <p className="text-gray-400">CALL ME</p> */}
//               <a href="tel:9895531411">9895531411</a>
//             </div>
//           </div>
//           <div className="flex space-x-4 text-2xl">
//             {socialIcons.map((item, ind) => (
//               <a key={ind} href={item.link} className="hover:text-gray-500">
//                 {item.icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Form Section */}
//         <div className=" md:w-2/3 w-full space-y-4">
//           <div className="md:flex md:space-x-4  space-y-4 md:space-y-0">
//             <input
//               type="text"
//               placeholder="YOUR NAME"
//               className="w-full p-4 bg-gray-900 text-gray-400 rounded-md focus:outline-none"
//             />
//             <input
//               type="email"
//               placeholder="YOUR EMAIL"
//               className="w-full p-4 bg-gray-900 text-gray-400 rounded-md  focus:outline-none"
//             />
//           </div>
//           <input
//             type="text"
//             placeholder="YOUR SUBJECT"
//             className="w-full p-4 bg-gray-900 text-gray-400 rounded-md  focus:outline-none"
//           />
//           <textarea
//             placeholder="YOUR MESSAGE"
//             className="w-full p-4 bg-gray-900 text-gray-400 rounded-md  h-32 focus:outline-none"
//           />
//           <button
//             className="flex items-center justify-center w-full md:w-auto  uppercase text-white px-6 py-3 rounded-md font-semibold transition"
//             style={{ backgroundColor: textColor }}
//           >
//             {t("contact.sendMessage")}
//             <FaPaperPlane className="ml-2" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import {
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { ColorContext } from "../context/ColorContextShare";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { SettingsContext } from "../context/SettingsContext";

export default function Contact() {
  const { textColor } = useContext(SettingsContext);
  const { t } = useTranslation();

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/contact", formData);
      if (response.status === 200) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send the message. Please try again later.");
    }
  };

  const socialIcons = [
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaFacebook />, link: "#" },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/muhammed-nasif/",
    },
    { icon: <FaGithub />, link: "#" },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/naaaasieee/profilecard/?igsh=MTM3YmJvbDhtZmdwaQ==",
    },
  ];

  return (
    <div className="text-white bg-black p-10 md:px-20 min-h-screen">
      {/* Header Section */}
      <div className="relative flex flex-col items-center justify-center h-48">
        <h1
          className="absolute text-7xl md:text-9xl font-bold opacity-20 uppercase"
          style={{ color: textColor }}
        >
          {t("contact.mainHead.head")}
        </h1>
        <h2 className="relative text-2xl md:text-3xl font-semibold z-10 text-white">
          {t("contact.mainHead.subHead")}
          <span
            className="block w-12 h-1 md:mt-2 mt-1 mx-auto"
            style={{ backgroundColor: textColor }}
          ></span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row bg-black text-white mt-10 space-y-8 md:space-y-0 md:space-x-8">
        {/* Contact Info Section */}
        <div className="flex-1 md:w-1/3 w-full space-y-6">
          <h2 className="text-2xl font-bold">{t("contact.dontbeshy")}</h2>
          <p className="text-gray-400">{t("contact.desc")}</p>
          <div className="flex items-center space-x-4">
            <FaEnvelope style={{ color: textColor }} size={24} />
            <div>
              <a href="mailto:connect.tonasif@gmail.com">
                connect.tonasif@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt style={{ color: textColor }} size={24} />
            <div>
              <a href="tel:9895531411">9895531411</a>
            </div>
          </div>
          <div className="flex space-x-4 text-2xl">
            {socialIcons.map((item, ind) => (
              <a key={ind} href={item.link} className="hover:text-gray-500">
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="md:w-2/3 w-full space-y-4">
          <div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="YOUR NAME"
              className="w-full p-4 bg-[#111827] text-gray-400 rounded-md focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="YOUR EMAIL"
              className="w-full p-4 bg-[#111827] text-gray-400 rounded-md focus:outline-none"
            />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="YOUR SUBJECT"
            className="w-full p-4 bg-[#111827] text-gray-400 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="YOUR MESSAGE"
            className="w-full p-4 bg-[#111827] text-gray-400 rounded-md h-32 focus:outline-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center w-full md:w-auto uppercase text-white px-6 py-3 rounded-md font-semibold transition"
            style={{ backgroundColor: textColor }}
          >
            {t("contact.sendMessage")}
            <FaPaperPlane className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
}
