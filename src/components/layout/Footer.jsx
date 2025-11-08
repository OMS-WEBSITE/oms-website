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
} from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext"; // using context

const Footer = () => {
  const [showMap, setShowMap] = useState(false);
  const { language } = useLanguage();

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
      href: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8463906383313!2d77.57476527484036!3d12.9175925873928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15006211cc43%3A0xd8fd6177f4784417!2sOMS-Business%20Digitalisation%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1762237270659!5m2!1sen!2sin",
      address:
        "#32 YEDLA, 4th Floor, 45th cross, 8th block, Jayanagar, Near Sangam Circle, Bengaluru – 560041",
      phone: "+91 7829810381",
      email: "jayant@omssoftware.com.au",
    },
    "EN-AU": {
      href: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.16979247206!2d144.89934057569684!3d-37.85631737196497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad666e5ececf245%3A0x39e16b362de827ed!2s19%20The%20Strand%2C%20Williamstown%20VIC%203016%2C%20Australia!5e0!3m2!1sen!2sin!4v1762237050143!5m2!1sen!2sin",
      address: "19 The Strand Williamstown VIC 3016",
      phone: "+61 439 654 384",
      email: "systems@omssoftware.com.au",
    },
  };

  const affiliations = {
    "EN-IN": {
      title: "India – Affiliations",
      description:
        "OMS Software is proud to be associated with leading professional and accreditation bodies in India that uphold the highest standards of testing and inspection.",
      items: [
        "Member – Indian Society for Non-Destructive Testing (ISNT)",
        "Aligned with – National Accreditation Board for Testing and Calibration Laboratories (NABL)",
        "Supporting – ISO/IEC 17025 Accredited Laboratories",
        "Industry Collaboration – QA/QC and Welding Associations across India",
      ],
      note: "These affiliations reinforce our commitment to digital transformation, compliance, and excellence in quality management for Indian laboratories and inspection companies.",
    },
    "EN-AU": {
      title: "Australia – Affiliations",
      description:
        "In Australia, OMS Software aligns with nationally recognised organisations supporting testing, inspection, and welding industries.",
      items: [
        "Member – Australian Institute for Non-Destructive Testing (AINDT)",
        "Member – Weld Australia",
        "Compliant with ISO/IEC 17025 standards recognised by NATA (National Association of Testing Authorities)",
        "Supporting – Accredited Testing, Calibration, and Inspection Laboratories across Australia",
      ],
      note: "These partnerships reflect our focus on advancing digital systems for laboratories, fabrication workshops, and inspection agencies operating under Australian standards.",
    },
  };

  const info = contactInfo[language] || contactInfo["EN-IN"];
  const affiliation = affiliations[language] || affiliations["EN-IN"];

  const socials = [
    {
      icon: <FaLinkedin size={23} />,
      href: "https://www.linkedin.com/company/oms-software-pty-ltd/",
      color: "text-blue-700",
      glow: "shadow-blue-700/40",
    },
    {
      icon: <FaFacebookF size={23} />,
      href: "https://www.facebook.com/",
      color: "text-blue-600",
      glow: "shadow-blue-600/40",
    },
    {
      icon: <img src="/images/xicon.webp" alt="Twitter" className="w-5 h-5" />,
      href: "https://x.com/",
      color: "text-black",
      glow: "shadow-black/40",
    },
    {
      icon: <FaInstagram size={23} />,
      href: "https://www.instagram.com/",
      color: "text-pink-500",
      glow: "shadow-pink-500/40",
    },
    {
      icon: <FaYoutube size={23} />,
      href: "https://www.youtube.com/",
      color: "text-red-600",
      glow: "shadow-red-600/40",
    },
  ];

  const sections = [
    {
      title: "Platform",
      links: [
        "Pricing",
        "Explore Organizations",
        "Explore Industries",
        "Best Practices",
        // "Help Center",
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
          // className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 "
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2"
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3 border-l-0 sm:border-l-4 border-orange-500 pl-3">
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
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-3 border-l-0 sm:border-l-4 border-orange-500 md:pl-3 sm:pl-3">
              Contact
            </h3>

            {/* Address */}
            <div className="flex items-center text-gray-600 text-sm md:text-base space-x-2">
              <button
                onClick={() => setShowMap(!showMap)}
                className="mt-1 p-1 text-orange-500 rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-center 
       hover:outline hover:outline-orange-400 hover:outline-2 focus:outline focus:outline-orange-500 focus:outline-2"
                aria-label={showMap ? "Hide Map" : "View Map"}
                title="View on Google Maps"
              >
                <img
                  src="/images/map2.png"
                  alt="Map Icon"
                  className="w-5 h-5 sm:w-7 sm:h-7 md:w-7 md:h-7"
                />
              </button>
              <span className="flex-1">{info.address}</span>
            </div>

            {/* Phone */}
            <div className="flex items-center text-gray-600 text-sm md:text-base space-x-2">
              <a
                href={`tel:${info.phone}`}
                className="mt-1 p-1 text-orange-500 rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-center
       hover:outline hover:outline-orange-400 hover:outline-2 focus:outline focus:outline-orange-500 focus:outline-2"
                aria-label={`Call ${info.phone}`}
                title={`Call ${info.phone}`}
              >
                <FaPhone className="text-orange-500 w-4 h-4 sm:w-6 sm:h-6" />{" "}
              </a>
              <span className="flex-1">{info.phone}</span>
            </div>

            {/* Email */}
            <div className="flex items-center text-gray-600 text-sm md:text-base space-x-2">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${info.email}&su=Quick%20Connect%20Inquiry&body=Hi%20OMS,`}
                className="mt-1 p-1 text-orange-500 rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-center
       hover:outline hover:outline-orange-400 hover:outline-2 focus:outline focus:outline-orange-500 focus:outline-2"
                aria-label={`Send email to ${info.email}`}
                title="Send Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="text-orange-500 w-4 h-4 sm:w-6 sm:h-6" />{" "}
              </a>
              <span className="flex-1 break-all">{info.email}</span>
            </div>

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
                  className="relative rounded-xl shadow-lg overflow-hidden w-full max-w-md"
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

        {/* <motion.div key={language} initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }} className="text-left bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{affiliation.title}</h2>
          <p className="text-gray-600 mb-4">{affiliation.description}</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            {affiliation.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-600 italic">{affiliation.note}</p>
        </motion.div> */}
        <motion.div
          key={language}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          // className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto my-12 text-center"
          className="text-center  p-8 rounded-xl "
        >
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 inline-block">
            {affiliation.title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {affiliation.description}
          </p>

          {/* List */}
          <ul className="list-none flex flex-col items-center space-y-3 mb-6">
            {affiliation.items.map((item, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span className="text-gray-700 font-semibold">{item}</span>
              </li>
            ))}
          </ul>

          {/* Note */}
          <p className="text-gray-600 italic leading-relaxed">
            {affiliation.note}
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
