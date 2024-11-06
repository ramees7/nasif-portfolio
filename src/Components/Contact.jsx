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
import { useContext } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { textColor } = useContext(ColorContext);
  const { t } = useTranslation();

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
    <div className="text-white bg-black  p-10 md:px-20  ">
      {/* Header Section */}
      <div className="relative flex flex-col items-center justify-center h-48">
        {/* Large Background Text */}
        <h1
          className="absolute text-7xl md:text-9xl font-bold opacity-20 uppercase"
          style={{ color: textColor }}
        >
          Contact
        </h1>

        {/* Foreground Title with Underline */}
        <h2 className="relative text-2xl md:text-3xl font-semibold z-10 text-white">
          Get In Touch
          <span
            className="block w-12 h-1 md:mt-2 mt-1 mx-auto"
            style={{ backgroundColor: textColor }}
          ></span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row bg-black text-white mt-10 space-y-8 md:space-y-0 md:space-x-8">
        {/* Contact Info Section */}
        <div className="flex-1 md:w-1/3 w-full space-y-6">
          <h2 className="text-2xl font-bold">DON'T BE SHY!</h2>
          <p className="text-gray-400">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            visions.
          </p>
          <div className="flex items-center space-x-4">
            <FaEnvelope style={{ color: textColor }} size={24} />
            <div>
              <a href="mailto:connect.tonasif@gmail.com">connect.tonasif@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt style={{ color: textColor }} size={24} />
            <div>
              {/* <p className="text-gray-400">CALL ME</p> */}
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
        <div className=" md:w-2/3 w-full space-y-4">
          <div className="md:flex md:space-x-4  space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="YOUR NAME"
              className="w-full p-4 bg-gray-900 text-gray-400 rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="w-full p-4 bg-gray-900 text-gray-400 rounded-md  focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="YOUR SUBJECT"
            className="w-full p-4 bg-gray-900 text-gray-400 rounded-md  focus:outline-none"
          />
          <textarea
            placeholder="YOUR MESSAGE"
            className="w-full p-4 bg-gray-900 text-gray-400 rounded-md  h-32 focus:outline-none"
          />
          <button className="flex items-center justify-center w-full md:w-auto  text-white px-6 py-3 rounded-full font-semibold transition" style={{backgroundColor:textColor}}>
            SEND MESSAGE
            <FaPaperPlane className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
