import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaClipboardList,
  FaFileContract,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";

const HowToBuy = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const steps = [
    {
      icon: <FaLaptopCode className="text-orange-500 text-4xl mb-4" />,
      title: "Request a live demo",
      text: "Experience OMS firsthand and see how it fits your workflow.",
      isDemoStep: true,
    },
    // {
    //   icon: <FaClipboardList className="text-orange-500 text-4xl mb-4" />,
    //   title: "Define modules and reporting scope",
    //   text: "Choose the specific features and reports your lab requires.",
    // },
    {
      icon: <FaFileContract className="text-orange-500 text-4xl mb-4" />,
      title: "Receive proposal and subscription plan",
      text: "Get a tailored plan and quotation based on your requirements.",
      isDemoStep: true,
    },
    {
      icon: <FaDatabase className="text-orange-500 text-4xl mb-4" />,
      title: "Onboard your lab data",
      text: "Migrate and configure your existing lab data securely.",
      isDemoStep: true,
    },
  ];

  const handleDemoClick = () => {
    window.dispatchEvent(new CustomEvent("openQuickConnect"));
  };
  return (
    <section id="how-to-buy" className="py-16 sm:py-20 bg-white">
      <div className="w-[90%] mx-auto py-4 px-2 text-center">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6"
        >
          <span className="border-b-4 border-orange-500 pb-1">How to Buy</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed mb-10"
        >
          Follow these simple steps to purchase and implement OMS solutions for
          your business.
        </motion.p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6">
          {steps.map((step, index) => (
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
                transition: { duration: 0.25, ease: "easeOut" }, // smooth hover-in
              }}
              whileTap={{ scale: 1.03 }} // optional subtle click feedback
              onClick={step.isDemoStep ? handleDemoClick : undefined}
              className="cursor-pointer relative flex flex-col items-center text-center bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-transform duration-200 ease-out border border-orange-100"
            >
              <motion.div
                variants={fadeUp}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                className="flex justify-center items-center mb-3"
              >
                {step.icon}
              </motion.div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{step.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Final Step */}
         <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleDemoClick} // 👈 Added click event here
          className="mt-10 sm:mt-12 flex flex-col items-center text-center bg-orange-50 border border-orange-200 p-6 sm:p-8 rounded-2xl shadow-md cursor-pointer hover:shadow-lg transition-transform duration-200 ease-out"
        >
          <motion.div
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaRocket className="text-orange-500 text-4xl mb-4" />
          </motion.div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
            Go live in 2–3 weeks with training and support
          </h3>
          <p className="text-gray-600 text-sm sm:text-base max-w-md">
            Our experts ensure a smooth launch, training, and ongoing support
            for your team.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToBuy;
