// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaHeadset,
//   FaEnvelopeOpenText,
//   FaLaptopHouse,
//   FaClock,
// } from "react-icons/fa";

// const Support = () => {
//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const handleDemoClick = () => {
//     window.dispatchEvent(new CustomEvent("openQuickConnect"));
//   };

//   return (
//     <section id="support" className="py-16 sm:py-20 bg-white">
//       <div className="w-[90%] mx-auto py-4 px-2 text-center">
//         {/* Heading */}
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
//           <span className="border-b-4 border-orange-500 pb-1">Support</span>
//         </h2>

//         {/* Intro text */}
//         <p className="text-center max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed mb-10">
//           Need help? Contact our support team or browse our FAQs for quick
//           answers.
//         </p>

//         {/* Main Support Content */}
//         <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
//           <p className="text-gray-700 text-sm sm:text-base leading-relaxed px-2 sm:px-0">
//             24 × 7 email and remote support, plus optional on-site assistance
//             for audits and system training.
//           </p>
//           <p className="text-gray-700 text-sm sm:text-base leading-relaxed px-2 sm:px-0">
//             Response time &lt; 4 hours for critical issues.
//           </p>
//         </div>

//         {/* Support Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
//           {[
//             {
//               icon: <FaHeadset className="text-orange-500 text-4xl mb-3" />,
//               title: "24×7 Support",
//               desc: "Always available via email & remote access.",
//               isDemoStep: true,
//             },
//             {
//               icon: (
//                 <FaEnvelopeOpenText className="text-orange-500 text-4xl mb-3" />
//               ),
//               title: "Email Support",
//               desc: "Fast and professional help directly to your inbox.",
//             },
//             {
//               icon: <FaLaptopHouse className="text-orange-500 text-4xl mb-3" />,
//               title: "On-site Assistance",
//               desc: "For audits, installation, or system training.",
//             },
//             {
//               icon: <FaClock className="text-orange-500 text-4xl mb-3" />,
//               title: "4-Hour Response",
//               desc: "Critical issues resolved in under 4 hours.",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               transition={{
//                 delay: index * 0.1,
//                 duration: 0.6,
//                 ease: "easeOut",
//               }}
//               whileHover={{
//                 scale: 1.05,
//                 y: -4,
//                 transition: { duration: 0.25, ease: "easeOut" }, // smooth hover-in
//               }}
//               whileTap={{ scale: 1.03 }} // optional subtle click effect
//               className="cursor-pointer relative p-6 bg-white rounded-2xl shadow-md border border-orange-100 hover:z-10 transition-transform duration-200 ease-out"
//             >
//               <motion.div
//                 variants={fadeUp}
//                 transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
//                 className="flex justify-center items-center mb-3"
//               >
//                 {item.icon}
//               </motion.div>
//               <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-gray-700">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Support;

import React from "react";
import { motion } from "framer-motion";
import {
  FaHeadset,
  FaEnvelopeOpenText,
  FaLaptopHouse,
  FaClock,
} from "react-icons/fa";

const Support = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const handleDemoClick = () => {
    window.dispatchEvent(new CustomEvent("openQuickConnect"));
  };

  const supportItems = [
    {
      icon: <FaHeadset className="text-orange-500 text-4xl mb-3" />,
      title: "24×7 Support",
      desc: "Always available via email & remote access.",
      // isClickable: true,
    },
    {
      icon: <FaEnvelopeOpenText className="text-orange-500 text-4xl mb-3" />,
      title: "Email Support",
      desc: "Fast and professional help directly to your inbox.",
      // isClickable: true,
    },
    {
      icon: <FaLaptopHouse className="text-orange-500 text-4xl mb-3" />,
      title: "On-site Assistance",
      desc: "For audits, installation, or system training.",
    },
    {
      icon: <FaClock className="text-orange-500 text-4xl mb-3" />,
      title: "4-Hour Response",
      desc: "Critical issues resolved in under 4 hours.",
    },
  ];

  return (
    <section id="support" className="py-16 sm:py-20 bg-white">
      <div className="w-[90%] mx-auto py-4 px-2 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
          <span className="border-b-4 border-orange-500 pb-1">Support</span>
        </h2>

        {/* Intro text */}
        <p className="text-center max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed mb-10">
          Need help? Contact our support team or browse our FAQs for quick
          answers.
        </p>

        {/* Description */}
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed px-2 sm:px-0">
            24×7 email and remote support, plus optional on-site assistance
            for audits and system training.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed px-2 sm:px-0">
            Response time &lt; 4 hours for critical issues.
          </p>
        </div>

        {/* Support Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
          {supportItems.map((item, index) => (
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
              // whileHover={{
              //   scale: 1.05,
              //   y: -4,
              //   transition: { duration: 0.25, ease: "easeOut" },
              // }}
              whileTap={{ scale: 1.03 }}
              onClick={item.isClickable ? handleDemoClick : undefined}
              className={`relative p-6 bg-white rounded-2xl shadow-md border border-orange-100 hover:z-10 transition-transform duration-200 ease-out ${
                item.isClickable
                  ? "cursor-pointer"
                  : "cursor-default"
              }`}
            >
              <motion.div
                variants={fadeUp}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                className="flex justify-center items-center mb-3"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
