import {
  FaHeadset,
  FaEnvelopeOpenText,
  FaLaptopHouse,
  FaClock,
} from "react-icons/fa";

const Support = () => {
  return (
    <section id="support" className="py-16 sm:py-20 bg-white">
      <div className="w-[90%] mx-auto py-4 px-2 text-center">
        {" "}
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
          <span className="border-b-4 border-orange-500 pb-1">Support</span>
        </h2>
        {/* Intro text */}
        <p className="text-center max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed mb-10">
          Need help? Contact our support team or browse our FAQs for quick
          answers.
        </p>
        {/* Main Support Content */}
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed px-2 sm:px-0">
            24 × 7 email and remote support, plus optional on-site assistance
            for audits and system training.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed px-2 sm:px-0">
            Response time &lt; 4 hours for critical issues.
          </p>
        </div>
        {/* Support Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
          <div className="flex flex-col items-center bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
            <FaHeadset className="text-orange-500 text-4xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">
              24×7 Support
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Always available via email & remote access.
            </p>
          </div>

          <div className="flex flex-col items-center bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
            <FaEnvelopeOpenText className="text-orange-500 text-4xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">
              Email Support
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Fast and professional help directly to your inbox.
            </p>
          </div>

          <div className="flex flex-col items-center bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
            <FaLaptopHouse className="text-orange-500 text-4xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">
              On-site Assistance
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              For audits, installation, or system training.
            </p>
          </div>

          <div className="flex flex-col items-center bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
            <FaClock className="text-orange-500 text-4xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">
              4-Hour Response
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Critical issues resolved in under 4 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;


// // animation 
// import { motion } from "framer-motion";
// import {
//   FaHeadset,
//   FaEnvelopeOpenText,
//   FaLaptopHouse,
//   FaClock,
// } from "react-icons/fa";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const cards = [
//   {
//     icon: <FaHeadset className="text-orange-500 text-4xl mb-3" />,
//     title: "24×7 Support",
//     desc: "Always available via email & remote access.",
//   },
//   {
//     icon: <FaEnvelopeOpenText className="text-orange-500 text-4xl mb-3" />,
//     title: "Email Support",
//     desc: "Fast and professional help directly to your inbox.",
//   },
//   {
//     icon: <FaLaptopHouse className="text-orange-500 text-4xl mb-3" />,
//     title: "On-site Assistance",
//     desc: "For audits, installation, or system training.",
//   },
//   {
//     icon: <FaClock className="text-orange-500 text-4xl mb-3" />,
//     title: "4-Hour Response",
//     desc: "Critical issues resolved in under 4 hours.",
//   },
// ];

// const Support = () => {
//   return (
//     <section
//       id="support"
//       className="relative overflow-hidden py-20 bg-gradient-to-b from-white via-orange-50/20 to-gray-50"
//     >
//       {/* Decorative Accent */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,165,0,0.1),transparent_60%)] pointer-events-none" />

//       <div className="relative w-[90%] max-w-6xl mx-auto text-center">
//         {/* Heading */}
//         <motion.h2
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
//         >
//           <span className="border-b-4 border-orange-500 pb-1">Support</span>
//         </motion.h2>

//         {/* Intro text */}
//         <motion.p
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="show"
//           className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed mb-10"
//         >
//           Need help? Contact our support team or browse our FAQs for quick
//           answers.
//         </motion.p>

//         {/* Description */}
//         <motion.div
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="show"
//           className="max-w-3xl mx-auto space-y-6 text-gray-700 text-base leading-relaxed mb-10"
//         >
//           <p>
//             24 × 7 email and remote support, plus optional on-site assistance
//             for audits and system training.
//           </p>
//           <p>Response time &lt; 4 hours for critical issues.</p>
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
//               <p className="text-gray-600 text-sm mt-2">{card.desc}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Support;
