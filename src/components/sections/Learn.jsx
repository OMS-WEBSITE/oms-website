import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaVideo,
  FaFileAlt,
} from "react-icons/fa";

const Learn = () => {
  return (
    <section id="learn" className="py-16 sm:py-20 bg-gray-50">
      <div className="w-[90%] mx-auto py-4 px-2 text-center">
        {" "}
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
          <span className="border-b-4 border-orange-500 pb-1">Learn</span>
        </h2>
        {/* Intro Text */}
        <p className="text-center max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed mb-10">
          Access tutorials, documentation, and resources to get the most out of
          OMS.
        </p>
        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed px-2 sm:px-0">
            Access tutorials, feature walk-throughs, and{" "}
            <strong>ISO 17025 compliance guides</strong>.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed px-2 sm:px-0">
            Includes video sessions, help articles, and case studies from
            accredited labs.
          </p>
        </div>
        {/* Visual Cards (optional for clarity & mobile aesthetics) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
            <FaBookOpen className="text-orange-500 text-4xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">Tutorials</h3>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
            <FaChalkboardTeacher className="text-orange-500 text-4xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">
              Walk-throughs
            </h3>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
            <FaVideo className="text-orange-500 text-4xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">
              Video Sessions
            </h3>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
            <FaFileAlt className="text-orange-500 text-4xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">
              Case Studies
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;




// // animation on scroll

// import { motion } from "framer-motion";
// import {
//   FaBookOpen,
//   FaChalkboardTeacher,
//   FaVideo,
//   FaFileAlt,
// } from "react-icons/fa";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const cards = [
//   {
//     icon: <FaBookOpen className="text-orange-500 text-4xl mb-3" />,
//     title: "Tutorials",
//   },
//   {
//     icon: <FaChalkboardTeacher className="text-orange-500 text-4xl mb-3" />,
//     title: "Walk-throughs",
//   },
//   {
//     icon: <FaVideo className="text-orange-500 text-4xl mb-3" />,
//     title: "Video Sessions",
//   },
//   {
//     icon: <FaFileAlt className="text-orange-500 text-4xl mb-3" />,
//     title: "Case Studies",
//   },
// ];

// const Learn = () => {
//   return (
//     <section id="learn" className="relative overflow-hidden py-20 bg-white/95">
//       {/* Decorative Accent */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,165,0,0.1),transparent_60%)] pointer-events-none" />

//       <div className="relative w-[90%] max-w-6xl mx-auto text-center">
//         {/* Heading */}
//         <motion.h2
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
//         >
//           <span className="border-b-4 border-orange-500 pb-1">Learn</span>
//         </motion.h2>

//         {/* Intro */}
//         <motion.p
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="show"
//           className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed mb-10"
//         >
//           Access tutorials, documentation, and resources to get the most out of
//           OMS.
//         </motion.p>

//         {/* Description */}
//         <motion.div
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="show"
//           className="max-w-3xl mx-auto space-y-6 text-gray-700 text-base leading-relaxed mb-10"
//         >
//           <p>
//             Explore detailed tutorials, feature walk-throughs, and{" "}
//             <strong>ISO 17025 compliance guides</strong> — designed to help you
//             understand every part of OMS with ease.
//           </p>
//           <p>
//             Learn from video sessions, help articles, and case studies from
//             accredited labs that trust OMS to streamline their workflows.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <motion.div
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="show"
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10"
//         >
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               className="flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm border border-orange-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
//             >
//               {card.icon}
//               <h3 className="text-lg font-semibold text-gray-800">
//                 {card.title}
//               </h3>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Learn;
