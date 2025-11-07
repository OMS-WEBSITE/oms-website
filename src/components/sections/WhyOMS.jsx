import React from "react";
import { motion } from "framer-motion";
import {
  FaPuzzlePiece,
  FaLock,
  FaCogs,
  FaChartLine,
  FaFileAlt,
  FaHandshake,
} from "react-icons/fa";

const WhyOMS = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const highlights = [
    {
      icon: <FaPuzzlePiece className="text-orange-500 text-3xl mb-3" />,
      title: "One Platform for Every Process",
      text: "Testing, calibration, logistics, invoicing, quality - everything flows together. One login, one live record of truth.",
    },
    {
      icon: <FaLock className="text-orange-500 text-3xl mb-3" />,
      title: "Compliance Built In",
      text: "Automatic ISO/IEC 17025 | 17020 | 9001 audit trails capture every action and signature - so the next audit feels like a confirmation, not a chase.",
    },
    {
      icon: <FaCogs className="text-orange-500 text-3xl mb-3" />,
      title: "Designed with Auditors",
      text: "We co-created OMS with QA managers, NABL assessors, and engineers who know the process inside out. Every feature has a reason.",
    },
    {
      icon: <FaChartLine className="text-orange-500 text-3xl mb-3" />,
      title: "Faster Workflows",
      text: "Automation trims the steps between quotation, testing, and report delivery. ULR + QR verification keeps every report authentic and instantly verifiable.",
    },
    {
      icon: <FaFileAlt className="text-orange-500 text-3xl mb-3" />,
      title: "Ten-Year Traceability",
      text: "Every report, certificate, and approval stays preserved and searchable for a decade - even after subscription expiry. Clients retain secure access to what matters.",
    },
    {
      icon: <FaHandshake className="text-orange-500 text-3xl mb-3" />,
      title: "Grounded in Global Standards",
      text: "OMS is built around internationally recognized frameworks such as ISO/IEC 17025, ISO 9001, and ASTM/ASME standards - maintaining compliance across every report.",
    },
  ];

  return (
    <section
      className="min-h-screen bg-gray-50 py-10 sm:py-16 md:py-20"
      id="why-oms"
    >
      <div className="w-[90%] mx-auto py-4 px-2 text-center">
        {/* Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          <span className="border-b-4 border-orange-500 pb-2">Why OMS</span>
        </motion.h2>

        {/* Subheading */}
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4"
        >
          Built with auditors. Trusted by laboratories.
        </motion.h3>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto text-gray-700 text-sm sm:text-base leading-relaxed mb-6"
        >
          It began with a familiar frustration — labs buried under spreadsheets,
          versioned PDFs, and last-minute audit prep. Each tool solved a
          fragment of the problem, but none spoke to the whole workflow. So OMS
          was built — a single, secure system that unites <strong>LIMS</strong>,{" "}
          <strong>ERP</strong>, and <strong>QMS</strong>, the way laboratories
          actually operate.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-4xl mx-auto text-gray-700 text-sm sm:text-base leading-relaxed mb-6"
        >
          Over the years, OMS has grown into more than software. It’s become a
          bridge between compliance and convenience — trusted by auditors,
          valued by managers, and relied on by teams who want their systems to
          stay out of the way and just work.
        </motion.p>

        {/* Divider */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4, duration: 0.6 }}
          className="h-0.5 w-24 bg-orange-500 mx-auto my-8 rounded-full"
        />

        {/* Highlights Grid */}
        <div className="text-center max-w-90% mx-auto grid sm:grid-cols-3 gap-8 text-gray-700 text-sm sm:text-base">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -4,
                transition: { duration: 0.25, ease: "easeOut" }, // faster hover-in
              }}
              whileTap={{ scale: 1.03 }} // optional subtle click effect
              className="relative p-6 bg-white rounded-2xl shadow-md border border-orange-100 hover:z-10 transition-transform duration-200 ease-out"
            >
              <motion.div
                variants={fadeUp}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                className="flex justify-center items-center mb-3"
              >
                {item.icon}
              </motion.div>

              <h4 className="text-lg font-semibold text-orange-600 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.6 }}
          className="h-0.5 w-24 bg-orange-500 mx-auto my-10 rounded-full"
        />

        {/* Conclusion */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-5xl mx-auto text-gray-700 text-base sm:text-lg md:text-l leading-relaxed italic"
        >
          <strong>The result:</strong> Labs no longer juggle systems or chase
          records. They operate with clarity, speed, and proof - powered by{" "}
          <span className="text-orange-600 font-semibold">OMS</span>.
        </motion.p>
      </div>
    </section>
  );
};

export default WhyOMS;
