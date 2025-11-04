// without animation

// import {
//   FaLinkedin,
//   FaFacebookF,
//   FaYoutube,
//   FaMapMarkerAlt,
//   FaPhone,
//   FaInstagram,
//   FaEnvelope,
// } from "react-icons/fa";

// const Footer = ({ language = "EN-IN" })  => {
//   const contactInfo = {
//     "EN-IN": {
//       address:
//         "OMS Business Solutions, #32, 45th Cross, 8th Block, Jayanagar, Bengaluru - 560041.",
//       phone: "+91 7829810381",
//       email: "jayant@omssoftware.com.au",
//     },
//     "EN-AU": {
//       address: "19 The Strand Williamstown VIC 3016",
//       phone: "+61 439 654 384",
//       email: "systems@omssoftware.com.au",
//     },
//   };

//   const info = contactInfo[language] || contactInfo["EN-IN"];

//   const socials = [
//     {
//       icon: <FaLinkedin size={24} />,
//       href: "https://www.linkedin.com/company/oms-software-pty-ltd/",
//       color: "text-blue-700",
//       hoverGlow: "shadow-lg shadow-blue-700/50",
//     },
//     {
//       icon: <FaFacebookF size={24} />,
//       href: "https://www.facebook.com/",
//       color: "text-blue-600",
//       hoverGlow: "shadow-lg shadow-blue-600/50",
//     },
//     {
//       // icon: <FaTwitter size={24} />,
//       icon: (
//         <img
//           src="/images/xicon.webp" // path to your .webp file
//           alt="Twitter"
//           className="w-6 h-6" // adjust size
//         />
//       ),
//       href: "https://x.com/",
//       color: "text-black",
//       hoverGlow: "shadow-lg shadow-black/50",
//     },
//     {
//       icon: <FaInstagram size={24} />,
//       href: "https://www.instagram.com/",
//       color: "text-pink-500",
//       hoverGlow: "shadow-lg shadow-pink-500/50",
//     },
//     {
//       icon: <FaYoutube size={24} />,
//       href: "https://www.youtube.com/",
//       color: "text-red-600",
//       hoverGlow: "shadow-lg shadow-red-600/50",
//     },
//   ];

//   const platformLinks = [
//     "Pricing",
//     "Explore Organizations",
//     "Explore Industries",
//     "Best Practices",
//     "Help Center",
//   ];

//   const whyOmsLinks = [
//     "How We are Different",
//     "Success Stories",
//     "Testimonials",
//     "FAQ",
//   ];

//   const resourcesLinks = [
//     "Blog",
//     "Ebooks",
//     "Newsletter",
//     "About Us",
//     "Careers",
//   ];

//   return (
//     <footer className="bg-gray-100 py-10 sm:py-12 md:py-16">
//       <div className="w-[90%] mx-auto py-4 px-2">
//         {" "}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-4 sm:gap-y-10 md:gap-y-0 gap-x-4 sm:gap-x-10 md:gap-x-2">
//           {/* OMS + Address + Social Icons */}
//           <div className="flex flex-col items-center md:items-start text-center md:text-left px-2 sm:px-4 justify-self-center w-full">
//             <h3 className="text-orange-500 text-xl sm:text-2xl font-bold mb-2 md:mb-4">
//               OMS Software
//             </h3>

//             {/* Social Icons */}
//             <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
//               {socials.map((social, idx) => (
//                 <a
//                   key={idx}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 ${social.color} hover:${social.hoverGlow}`}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Platform */}
//           <div className="text-center sm:text-left px-2 sm:px-4">
//             <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-3 pl-2 border-l-0 sm:border-l-4 sm:border-orange-600">
//               Platform
//             </h3>
//             <ul className="space-y-2 sm:space-y-3">
//               {platformLinks.map((item, idx) => (
//                 <li key={idx}>
//                   <a
//                     href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
//                     className="relative text-gray-600 transition-all duration-300 hover:text-orange-500 hover:pl-2 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Why OMS Software */}
//           <div className="text-center sm:text-left px-2 sm:px-4">
//             <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-3 pl-2 border-l-0 sm:border-l-4 sm:border-orange-600">
//               Why OMS Software
//             </h3>
//             <ul className="space-y-2 sm:space-y-3">
//               {whyOmsLinks.map((item, idx) => (
//                 <li key={idx}>
//                   <a
//                     href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
//                     className="relative text-gray-600 transition-all duration-300 hover:text-orange-500 hover:pl-2 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Resources */}
//           <div className="text-center sm:text-left px-2 sm:px-4">
//             <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-3 pl-2 border-l-0 sm:border-l-4 sm:border-orange-600">
//               Resources
//             </h3>
//             <ul className="space-y-2 sm:space-y-3">
//               {resourcesLinks.map((item, idx) => (
//                 <li key={idx}>
//                   <a
//                     href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
//                     className="relative text-gray-600 transition-all duration-300 hover:text-orange-500 hover:pl-2 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="text-center sm:text-left px-2 sm:px-4 space-y-2 sm:space-y-3">
//             <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-3 pl-2 border-l-0 sm:border-l-4 sm:border-orange-600">
//               Contact
//             </h3>

//             {/* Address */}
//             <div className="flex items-start text-gray-600 text-sm md:text-base space-x-2">
//               <FaMapMarkerAlt
//                 size={18}
//                 className="text-orange-500 flex-shrink-0 mt-1"
//               />
//               <span className="flex-1">{info.address}</span>
//             </div>

//             {/* Phone */}
//             <div className="flex items-center text-gray-600 text-sm md:text-base space-x-2">
//               <FaPhone size={18} className="text-orange-500 flex-shrink-0" />
//               <span className="flex-1">{info.phone}</span>
//             </div>

//             {/* Email */}
//             <div className="flex items-center text-gray-600 text-sm md:text-base space-x-2">
//               <FaEnvelope size={18} className="text-orange-500 flex-shrink-0" />
//               <span className="flex-1 break-all">{info.email}</span>
//             </div>
//           </div>
//         </div>
//         {/* Affiliations Section */}
//         <div className="mt-10 border-t border-gray-200 pt-6 text-center text-gray-700 text-sm sm:text-base leading-relaxed">
//           <p className="font-medium mb-1 text-gray-800">Affiliations:</p>
//           <p>
//             Member{" "}
//             <span className="font-semibold">
//               Indian Society for Non-Destructive Testing (ISNT)
//             </span>{" "}
//             |{" "}
//             <span className="font-semibold">
//               American Society for Nondestructive Testing (ASNT)
//             </span>
//           </p>
//         </div>
//         {/* Copyright */}
//         <div className="border-t border-gray-200 mt-10 pt-6 text-sm text-gray-600 text-center">
//           © {new Date().getFullYear()}, OMS Software. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// with animation

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaFacebookF,
  FaYoutube,
  FaPhone,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

const Footer = ({ language = "EN-IN" }) => {
  const [showMap, setShowMap] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

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
      icon: <FaLinkedin size={22} />,
      href: "https://www.linkedin.com/company/oms-software-pty-ltd/",
      color: "text-blue-700",
      glow: "shadow-blue-700/40",
    },
    {
      icon: <FaFacebookF size={22} />,
      href: "https://www.facebook.com/",
      color: "text-blue-600",
      glow: "shadow-blue-600/40",
    },
    {
      icon: <img src="/images/xicon.webp" alt="Twitter" className="w-6 h-6" />,
      href: "https://x.com/",
      color: "text-black",
      glow: "shadow-black/40",
    },
    {
      icon: <FaInstagram size={22} />,
      href: "https://www.instagram.com/",
      color: "text-pink-500",
      glow: "shadow-pink-500/40",
    },
    {
      icon: <FaYoutube size={22} />,
      href: "https://www.youtube.com/",
      color: "text-red-600",
      glow: "shadow-red-600/40",
    },
    // {
    //   // icon: <SiGooglemaps size={22} />,
    //   icon:<img src="/images/map1.png" alt="googlemap" className="w-8 h-8" />,
    //   href: "https://maps.google.com/",
    //   // color: "text-green-600",
    //   glow: "shadow-green-600/40",
    // },
  ];

  const sections = [
    {
      title: "Platform",
      links: [
        "Pricing",
        "Explore Organizations",
        "Explore Industries",
        "Best Practices",
        "Help Center",
      ],
    },
    {
      title: "Why OMS Software",
      links: ["How We are Different", "Success Stories", "Testimonials", "FAQ"],
    },
    {
      title: "Resources",
      links: ["Blog", "Ebooks", "Newsletter", "About Us", "Careers"],
    },
  ];

  return (
    <footer className="bg-gray-50 py-10 sm:py-16 md:py-20 border-t border-gray-200">
      <div className="w-[90%] mx-auto text-center sm:text-left">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 "
        >
          {/* Logo & Socials */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-orange-500 text-2xl font-bold mb-4">
              OMS Software
            </h3>
            <div className="flex gap-3 justify-center md:justify-start flex-wrap ">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded-xl bg-white hover:shadow-md hover:${social.glow} ${social.color} transition-all duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Sections */}
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              transition={{ delay: idx * 0.1 + 0.2, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3 border-l-4 border-orange-500 pl-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((item, i) => (
                  <li key={i}>
                    <a
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="relative text-gray-600 hover:text-orange-500 transition-all duration-300 hover:pl-2 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          {/* <motion.div
            variants={fadeUp}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-3 border-l-4 border-orange-500 pl-3">
              Contact
            </h3>
            <div className="flex items-start gap-2 text-gray-700 text-sm">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              <span>{info.address}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <FaPhone className="text-orange-500" />
              <span>{info.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <FaEnvelope className="text-orange-500" />
              <span>{info.email}</span>
            </div>
          </motion.div> */}

          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-3 border-l-4 border-orange-500 pl-3">
              Contact
            </h3>

            {/* Address */}
            <div className="flex items-center text-gray-600 text-sm md:text-base space-x-2">
              <FaMapMarkerAlt size={18} className="text-orange-500" />
              <span className="flex-1">{info.address}</span>
            </div>

            {/* Phone */}
            <div className="flex items-center text-gray-600 text-sm md:text-base space-x-2">
              <FaPhone size={18} className="text-orange-500" />
              <span className="flex-1">{info.phone}</span>
            </div>

            {/* Email */}
            <div className="flex items-center text-gray-600 text-sm md:text-base space-x-2">
              <FaEnvelope size={18} className="text-orange-500" />
              <span className="flex-1 break-all">{info.email}</span>
            </div>

            {/* <button
              onClick={() => setShowMap(!showMap)}
              className="mt-3 px-4 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600 transition cursor-pointer"
            >
              {showMap ? "Hide Map" : "View Map"}
            </button> */}
            {/* <button
              onClick={() => setShowMap(!showMap)}
              className="mt-3 p-3 bg-white text-red-500 rounded-full hover:bg-gray-100 transition cursor-pointer flex items-center justify-center shadow-md"
              aria-label={showMap ? "Hide Map" : "View Map"}
            >
              <SiGooglemaps className="text-2xl" />
            </button> */}

            {/* Map Overlay */}
            {showMap && (
              <div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                onClick={() => setShowMap(false)} // closes when clicking outside
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-md"
                  onClick={(e) => e.stopPropagation()} // prevents closing on map click
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setShowMap(false)}
                    className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl z-50 cursor-pointer"
                  >
                    ✕
                  </button>

                  {/* Google Map */}
                  <iframe
                    title={`Google Map - ${language}`}
                    src={
                      language === "EN-IN"
                        ? // India Map
                          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8463906383313!2d77.57476527484036!3d12.9175925873928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15006211cc43%3A0xd8fd6177f4784417!2sOMS-Business%20Digitalisation%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1762237270659!5m2!1sen!2sin"
                        : // Australia Map
                          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.16979247206!2d144.89934057569684!3d-37.85631737196497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad666e5ececf245%3A0x39e16b362de827ed!2s19%20The%20Strand%2C%20Williamstown%20VIC%203016%2C%20Australia!5e0!3m2!1sen!2sin!4v1762237050143!5m2!1sen!2sin"
                    }
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </motion.div>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-0.5 w-24 bg-orange-500 mx-auto my-8 rounded-full"
        />

        {/* Affiliations */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="text-center text-gray-700 text-sm leading-relaxed"
        >
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
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.6 }}
          className="border-t border-gray-200 mt-8 pt-6 text-sm text-gray-600 text-center"
        >
          © {new Date().getFullYear()}, OMS Software. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
