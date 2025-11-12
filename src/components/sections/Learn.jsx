// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaBookOpen,
//   FaChalkboardTeacher,
//   FaVideo,
//   FaFileAlt,
// } from "react-icons/fa";

// const Learn = () => {
//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const cards = [
//     {
//       icon: <FaBookOpen className="text-orange-500 text-4xl mb-3" />,
//       title: "Tutorials",
//     },
//     {
//       icon: <FaChalkboardTeacher className="text-orange-500 text-4xl mb-3" />,
//       title: "Walk-throughs",
//     },
//     {
//       icon: <FaVideo className="text-orange-500 text-4xl mb-3" />,
//       title: "Video Sessions",
//     },
//     {
//       icon: <FaFileAlt className="text-orange-500 text-4xl mb-3" />,
//       title: "Case Studies",
//     },
//   ];

//   return (
//     <section id="learn" className="py-16 sm:py-20 bg-gray-50">
//       <div className="w-[90%] mx-auto py-4 px-2 text-center">
//         {/* Heading */}
//         <motion.h2
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           transition={{ duration: 0.6 }}
//           className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6"
//         >
//           <span className="border-b-4 border-orange-500 pb-1">Learn</span>
//         </motion.h2>

//         {/* Intro Text */}
//         <motion.p
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           transition={{ delay: 0.1, duration: 0.6 }}
//           className="text-center max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed mb-10"
//         >
//           Access tutorials, documentation, and resources to get the most out of
//           OMS.
//         </motion.p>

//         {/* Description Paragraphs */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="max-w-3xl mx-auto space-y-6 sm:space-y-8"
//         >
//           <p className="text-gray-700 text-sm sm:text-base leading-relaxed px-2 sm:px-0">
//             Access tutorials, feature walk-throughs, and{" "}
//             <strong>ISO 17025 compliance guides</strong>.
//           </p>
//           <p className="text-gray-700 text-sm sm:text-base leading-relaxed px-2 sm:px-0">
//             Includes video sessions, help articles, and case studies from
//             accredited labs.
//           </p>
//         </motion.div>

//         {/* Divider */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="h-0.5 w-24 bg-orange-500 mx-auto my-10 rounded-full"
//         />

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-6">
//           {cards.map((card, index) => (
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
//                 transition: { duration: 0.25, ease: "easeOut" }, // smooth lift
//               }}
//               whileTap={{ scale: 1.03 }} // subtle click feedback
//               className="relative flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform duration-200 ease-out p-6 border border-orange-100"
//             >
//               <motion.div
//                 variants={fadeUp}
//                 transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
//                 className="flex justify-center items-center mb-3"
//               >
//                 {card.icon}
//               </motion.div>

//               <h3 className="text-lg font-semibold text-gray-800 mt-2">
//                 {card.title}
//               </h3>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Learn;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaVideo,
  FaFileAlt,
  FaRocket,
} from "react-icons/fa";

const Learn = () => {
  const [showPopup, setShowPopup] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const cards = [
    {
      icon: (
        <FaBookOpen className="text-orange-500 text-3xl sm:text-4xl mb-3" />
      ),
      title: "Tutorials",
    },
    {
      icon: (
        <FaChalkboardTeacher className="text-orange-500 text-3xl sm:text-4xl mb-3" />
      ),
      title: "Walk-throughs",
    },
    {
      icon: <FaVideo className="text-orange-500 text-3xl sm:text-4xl mb-3" />,
      title: "Video Sessions",
    },
    {
      icon: <FaFileAlt className="text-orange-500 text-3xl sm:text-4xl mb-3" />,
      title: "Case Studies",
    },
  ];

  // ✅ Close popup when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (showPopup) setShowPopup(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showPopup]);

  return (
    <section id="learn" className="py-16 sm:py-20 bg-gray-50 relative">
      <div className="w-[90%] sm:w-[90%] mx-auto py-4 px-2 text-center">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6"
        >
          <span className="border-b-4 border-orange-500 pb-1">Learn</span>
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed mb-10"
        >
          Access tutorials, documentation, and resources to get the most out of
          OMS.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              onClick={() => setShowPopup(true)}
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
              className="relative flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform duration-200 ease-out p-6 border border-orange-100 cursor-pointer"
            >
              <div className="flex justify-center items-center mb-3">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                {card.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center z-50 px-4 sm:px-0"
          onClick={() => setShowPopup(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full sm:w-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center justify-center gap-2">
              <span>Coming Soon</span>
              <FaRocket className="text-orange-500 animate-bounce" />
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Stay tuned for exciting updates!
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Learn;
