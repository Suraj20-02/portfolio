import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa"; // Social media icons

const SocialMedia = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/suraj-timilsina-554622310/",
      label: "LinkedIn",
    },
    {
      id: 2,
      icon: <FaGithub size={30} />,
      href: "https://github.com/Suraj20-02",
      label: "GitHub",
    },
    {
      id: 3,
      icon: <FaFacebook size={30} />,
      href: "https://www.facebook.com/surajtimilsina818",
      label: "Facebook",
    },
    {
      id: 4,
      icon: <FaInstagram size={30} />,
      href: "https://www.instagram.com/soorajtimilsina/",
      label: "Instagram",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row md:justify-evenly bg-gray-800 text-white py-8 px-4">
      {/* Location Section */}
      <div className="flex flex-col mb-6 md:mb-0 items-center md:items-start">
        <p className="font-bold text-2xl mb-3">LOCATION</p>
        <p className="text-center md:text-left">Bhaktapur, Nepal</p>
        <p className="text-center md:text-left">Nagarkot</p>
      </div>

      {/* Social Links Section */}
      <div className="flex flex-col mb-6 md:mb-0 items-center md:items-start">
        <p className="font-bold text-2xl mb-3">ACROSS THE WEB</p>
        <div className="flex flex-wrap justify-center md:justify-start space-x-6 py-4">
          {socialLinks.map(({ id, icon, href, label }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300 flex flex-col items-center"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* About Me Section */}
      <div className="flex flex-col items-center md:items-start">
        <p className="font-bold text-2xl mb-3">ABOUT ME</p>
        <p className="text-center md:text-left">
          I love coding and travelling.
        </p>
      </div>
    </div>
  );
};

export default SocialMedia;
