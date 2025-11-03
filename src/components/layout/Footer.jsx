import { useState } from "react";
import React from "react";
import {
  FaLinkedin,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = ({ language }) => {
  const contactInfo = {
    "EN-IN": {
      address:
        "OMS Business Solutions, #32, 45th Cross, 8th Block, Jayanagar, Bengaluru - 560041.",
      phone: "+91 7829810381",
      email: "jayant@omssoftware.com.au",
    },
    "EN-AU": {
      address: "19 The Strand Williamstown VIC 3016",
      phone: "+61 439 654 384",
      email: "systems@omssoftware.com.au",
    },
  };

  const info = contactInfo[language] || contactInfo["EN-IN"];

  const socials = [
    {
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/company/oms-software-pty-ltd/",
      color: "text-blue-700",
      hoverGlow: "shadow-lg shadow-blue-700/50",
    },
    // {
    //   icon: <FaFacebookF size={24} />,
    //   href: "https://www.facebook.com/",
    //   color: "text-blue-600",
    //   hoverGlow: "shadow-lg shadow-blue-600/50",
    // },
    // {
    //   // icon: <FaTwitter size={24} />,
    //   icon: (
    //     <img
    //       src="/images/xicon.webp" // path to your .webp file
    //       alt="Twitter"
    //       className="w-6 h-6" // adjust size
    //     />
    //   ),
    //   href: "https://x.com/",
    //   color: "text-black",
    //   hoverGlow: "shadow-lg shadow-black/50",
    // },
    // {
    //   icon: <FaInstagram size={24} />,
    //   href: "https://www.instagram.com/",
    //   color: "text-pink-500",
    //   hoverGlow: "shadow-lg shadow-pink-500/50",
    // },
    // {
    //   icon: <FaYoutube size={24} />,
    //   href: "https://www.youtube.com/",
    //   color: "text-red-600",
    //   hoverGlow: "shadow-lg shadow-red-600/50",
    // },
  ];

  const platformLinks = [
    "Pricing",
    "Explore Organizations",
    "Explore Industries",
    "Best Practices",
    "Help Center",
  ];

  const whyOmsLinks = [
    "How We are Different",
    "Success Stories",
    "Testimonials",
    "FAQ",
  ];

  const resourcesLinks = [
    "Blog",
    "Ebooks",
    "Newsletter",
    "About Us",
    "Careers",
  ];

  return (
    <footer className="bg-gray-100 py-10 sm:py-12 md:py-16">
      <div className="w-[90%] mx-auto py-4 px-2">
        {" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-4 sm:gap-y-10 md:gap-y-0 gap-x-4 sm:gap-x-10 md:gap-x-2">
          {/* OMS + Address + Social Icons */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left px-2 sm:px-4 justify-self-center w-full">
            <h3 className="text-orange-500 text-xl sm:text-2xl font-bold mb-2 md:mb-4">
              OMS Software
            </h3>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 ${social.color} hover:${social.hoverGlow}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div className="text-center sm:text-left px-2 sm:px-4">
            <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-3 pl-2 border-l-0 sm:border-l-4 sm:border-orange-600">
              Platform
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {platformLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="relative text-gray-600 transition-all duration-300 hover:text-orange-500 hover:pl-2 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Why OMS Software */}
          <div className="text-center sm:text-left px-2 sm:px-4">
            <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-3 pl-2 border-l-0 sm:border-l-4 sm:border-orange-600">
              Why OMS Software
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {whyOmsLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="relative text-gray-600 transition-all duration-300 hover:text-orange-500 hover:pl-2 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center sm:text-left px-2 sm:px-4">
            <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-3 pl-2 border-l-0 sm:border-l-4 sm:border-orange-600">
              Resources
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {resourcesLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="relative text-gray-600 transition-all duration-300 hover:text-orange-500 hover:pl-2 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left px-2 sm:px-4 space-y-2 sm:space-y-3">
            <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-3 pl-2 border-l-0 sm:border-l-4 sm:border-orange-600">
              Contact
            </h3>

            {/* Address */}
            <div className="flex items-start text-gray-600 text-sm md:text-base space-x-2">
              <FaMapMarkerAlt
                size={18}
                className="text-orange-500 flex-shrink-0 mt-1"
              />
              <span className="flex-1">{info.address}</span>
            </div>

            {/* Phone */}
            <div className="flex items-center text-gray-600 text-sm md:text-base space-x-2">
              <FaPhone size={18} className="text-orange-500 flex-shrink-0" />
              <span className="flex-1">{info.phone}</span>
            </div>

            {/* Email */}
            <div className="flex items-center text-gray-600 text-sm md:text-base space-x-2">
              <FaEnvelope size={18} className="text-orange-500 flex-shrink-0" />
              <span className="flex-1 break-all">{info.email}</span>
            </div>
          </div>
        </div>
        {/* Affiliations Section */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-gray-700 text-sm sm:text-base leading-relaxed">
          <p className="font-medium mb-1 text-gray-800">Affiliations:</p>
          <p>
            Member{" "}
            <span className="font-semibold">
              Indian Society for Non-Destructive Testing (ISNT)
            </span>{" "}
            |{" "}
            <span className="font-semibold">
              American Society for Nondestructive Testing (ASNT)
            </span>
          </p>
        </div>
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-sm text-gray-600 text-center">
          © {new Date().getFullYear()}, OMS Software. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
