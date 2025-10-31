// import { useEffect, useState } from "react";
// import "aos/dist/aos.css";

// const features = [
//   { label: "Business Performance", style: { top: "10%", right: "30%" } },
//   { label: "Accounting", style: { top: "25%", right: "25%" } },
//   { label: "Personnel", style: { top: "40%", right: "20%" } },
//   { label: "Supplier Management", style: { top: "55%", right: "25%" } },
//   { label: "CRM", style: { top: "70%", right: "30%" } },
//   { label: "System Configuration", style: { top: "70%", left: "30%" } },
//   { label: "QMS", style: { top: "55%", left: "25%" } },
//   { label: "Assets", style: { top: "40%", left: "20%" } },
//   { label: "Specification", style: { top: "25%", left: "25%" } },
//   { label: "Test Data Management", style: { top: "10%", left: "30%" } },
// ];

// const VideoSection = () => {
//   const [showText, setShowText] = useState(false);
//   const [showSecondImage, setShowSecondImage] = useState(false);
//   const [showFeatures, setShowFeatures] = useState(false);

//   const handleClick = (label) => {
//     const contentSection = document.getElementById("productsandservice");
//     // if (contentSection) {
//     //   const offset = 120;
//     //   const topPosition = contentSection.offsetTop - offset;
//     //   window.scrollTo({ top: topPosition, behavior: "smooth" });
//     //   console.log(" video section");
//     // }

//     // 👇 Dispatch event with label + optional section index
//     const event = new CustomEvent("activateTab", {
//       detail: { label, sectionIndex: 0 },
//     });
//     window.dispatchEvent(event);
//   };

//   useEffect(() => {
//     const textTimer = setTimeout(() => setShowText(true), 0);
//     const secondImageTimer = setTimeout(() => setShowSecondImage(true), 2500); // 3000
//     const featureTimer = setTimeout(() => setShowFeatures(true), 6000); // 6500

//     return () => {
//       clearTimeout(textTimer);
//       clearTimeout(secondImageTimer);
//       clearTimeout(featureTimer);
//     };
//   }, []);

//   return (
//     <section className="relative w-full h-screen overflow-hidden bg-black text-white">
//       <div className="absolute inset-0 w-full h-full">
//         {/* === Second Image (fades in first) === */}
//         <img
//           src="BlackBrainImage4webp.webp"
//           alt="Second Brain Image"
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
//             showSecondImage ? "opacity-100" : "opacity-0"
//           }`}
//         />

//         {/* === First Image (fades out AFTER second fully appears) === */}
//         <img
//           src="FirstImage.jpeg"
//           alt="First Brain Image"
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
//             showSecondImage ? "delay-[2000ms] opacity-0" : "opacity-100"
//           }`}
//         />
//       </div>

//       {/* === Text (fades up and disappears as second image fades in) === */}
//       {showText && (
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 animate-smoothFadeUp transform -translate-y-10 md:-translate-y-16">
//           <h2 className="text-2xl md:text-4xl font-semibold leading-relaxed max-w-2xl mb-3">
//             Run your lab on the cloud — secure, scalable, and compliant.
//           </h2>
//           <p className="text-lg md:text-xl max-w-2xl text-gray-200">
//             Everything you need to streamline your{" "}
//             <span className="text-orange-500 font-semibold">
//               testing, inspection, and calibration workflows
//             </span>{" "}
//             — all in one secure platform.
//           </p>
//           <p className="text-md md:text-lg mt-2 text-gray-300">
//             Audit-ready from day one — no servers, no stress.
//           </p>

//           <div className="mt-6 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 flex flex-col items-center space-y-2 shadow-[0_0_25px_rgba(255,255,255,0.15)]">
//             <h2 className="text-orange-300 font-semibold text-lg md:text-xl tracking-wider drop-shadow-lg">
//               🏆 Recognised as an Established Software Platform
//             </h2>
//             <h1 className="text-red-500 text-3xl md:text-5xl font-bold max-w-3xl drop-shadow-2xl text-center">
//               Red Swan Digital Radar 2025
//             </h1>
//           </div>
//         </div>
//       )}

//       {/* === Features appear later === */}
//       {showFeatures && (
//         <div
//           className="absolute w-full h-full hidden md:flex flex-col items-center z-30"
//           style={{ animation: "fadeIn 2s forwards" }}
//         >
//           <div className="relative w-full h-full">
//             {features.map((feature, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => handleClick(feature.label)}
//                 className="group absolute px-3 py-1 text-sm border border-white rounded-full text-white font-semibold feature-glow cursor-pointer hover:scale-105 transition-transform"
//                 style={{
//                   ...feature.style,
//                   transform: "translate(-50%, -50%)",
//                   width: "200px",
//                   textAlign: "center",
//                   justifyContent: "center",
//                   height: "35px",
//                   backgroundColor: "rgba(26, 15, 47, 0.8)",
//                 }}
//               >
//                 {feature.label}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       <style>{`
//         /* Text fade up, visible for 3s, then fades out smoothly */
//         @keyframes smoothFadeUp {
//           0% { opacity: 0; transform: translateY(30px); }
//           20% { opacity: 1; transform: translateY(0); }
//           60% { opacity: 1; transform: translateY(0); }
//           100% { opacity: 0; transform: translateY(-20px); }
//         }
//         .animate-smoothFadeUp {
//           animation: smoothFadeUp 6s ease-in-out forwards;
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default VideoSection;

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiChevronLeft } from "react-icons/fi";
// import "aos/dist/aos.css";

// const features = [
//   {
//     label: "Business Performance",
//     id: "businessperformance",
//     style: { top: "10%", right: "30%" },
//   },
//   {
//     label: "Accounting",
//     id: "accounting",
//     style: { top: "25%", right: "25%" },
//   },
//   { label: "Personnel", id: "personnel", style: { top: "40%", right: "20%" } },
//   {
//     label: "Supplier Management",
//     id: "suppliermanagement",
//     style: { top: "55%", right: "25%" },
//   },
//   { label: "CRM", id: "crm", style: { top: "70%", right: "30%" } },
//   {
//     label: "System Configuration",
//     id: "systemconfiguration",
//     style: { top: "70%", left: "30%" },
//   },
//   { label: "QMS", id: "qms", style: { top: "55%", left: "25%" } },
//   { label: "Assets", id: "assets", style: { top: "40%", left: "20%" } },
//   {
//     label: "Specification",
//     id: "specification",
//     style: { top: "25%", left: "25%" },
//   },
//   { label: "Test Data Management", id:"testdatamanagement", style: { top: "10%", left: "30%" } },
// ];

// const VideoSection = () => {
//   const [showText, setShowText] = useState(false);
//   const [showSecondImage, setShowSecondImage] = useState(false);
//   const [showFeatures, setShowFeatures] = useState(false);
//   const [toggleRedSwan, setToggleRedSwan] = useState(false);

//   const handleClick = (id) => {
//     const event = new CustomEvent("activateTab", {
//       detail: { id, sectionIndex: 0 },
//     });
//     window.dispatchEvent(event);
//   };

//   useEffect(() => {
//     const textTimer = setTimeout(() => setShowText(true), 0);
//     const secondImageTimer = setTimeout(() => setShowSecondImage(true), 2500);
//     const featureTimer = setTimeout(() => setShowFeatures(true), 6000);
//     return () => {
//       clearTimeout(textTimer);
//       clearTimeout(secondImageTimer);
//       clearTimeout(featureTimer);
//     };
//   }, []);

//   return (
//     <section className="relative w-full h-screen overflow-hidden bg-black text-white">
//       {/* === Background Images === */}
//       <div className="absolute inset-0 w-full h-full">
//         <img
//           src="BlackBrainImage4webp.webp"
//           alt="Second Brain Image"
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
//             showSecondImage ? "opacity-100" : "opacity-0"
//           }`}
//         />
//         <img
//           src="FirstImage.jpeg"
//           alt="First Brain Image"
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
//             showSecondImage ? "delay-[2000ms] opacity-0" : "opacity-100"
//           }`}
//         />
//       </div>

//       {/* === Intro Text === */}
//       {showText && (
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 animate-smoothFadeUp transform -translate-y-10 md:-translate-y-16">
//           <h2 className="text-2xl md:text-4xl font-semibold leading-relaxed max-w-2xl mb-3">
//             Run your lab on the cloud — secure, scalable, and compliant.
//           </h2>
//           <p className="text-lg md:text-xl max-w-2xl text-gray-200">
//             Everything you need to streamline your{" "}
//             <span className="text-orange-500 font-semibold">
//               testing, inspection, and calibration workflows
//             </span>{" "}
//             — all in one secure platform.
//           </p>
//           <p className="text-md md:text-lg mt-2 text-gray-300">
//             Audit-ready from day one — no servers, no stress.
//           </p>

//           <div className="mt-6 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 flex flex-col items-center space-y-2 shadow-[0_0_25px_rgba(255,255,255,0.15)]">
//             <h2 className="text-orange-300 font-semibold text-lg md:text-xl tracking-wider drop-shadow-lg">
//               🏆 Recognised as an Established Software Platform
//             </h2>
//             <h1 className="text-red-500 text-3xl md:text-5xl font-bold max-w-3xl drop-shadow-2xl text-center">
//               Red Swan Digital Radar 2025
//             </h1>
//           </div>
//         </div>
//       )}

//       {/* === Features + Toggle === */}
//       {showFeatures && (
//         <div className="absolute w-full h-full hidden md:flex flex-col items-center z-30">
//           {/* Feature Labels */}
//           <AnimatePresence>
//             {!toggleRedSwan && (
//               <motion.div
//                 key="features"
//                 className="relative w-full h-full"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 {features.map((feature, idx) => (
//                   <div
//                     key={idx}
//                     // onClick={() => handleClick(feature.label)}
//                     onClick={() => handleClick(feature.id)}
//                     className="group absolute px-3 py-1 text-sm border border-white rounded-full text-white font-semibold feature-glow cursor-pointer hover:scale-105 transition-transform"
//                     style={{
//                       ...feature.style,
//                       transform: "translate(-50%, -50%)",
//                       width: "200px",
//                       textAlign: "center",
//                       justifyContent: "center",
//                       height: "35px",
//                       backgroundColor: "rgba(26, 15, 47, 0.8)",
//                     }}
//                   >
//                     {feature.label}
//                   </div>
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* RED SWAN SLIDE */}
//           <AnimatePresence>
//             {toggleRedSwan && (
//               <motion.div

//                 key="redswan"
//                 initial={{ x: "100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: "100%", opacity: 0 }}
//                 transition={{ duration: 0.6, ease: "easeInOut" }}
//               >
//                 <div className="px-8 py-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 flex flex-col items-center justify-center space-y-3 shadow-[0_0_25px_rgba(255,255,255,0.15)] text-center">
//                   <h2 className="text-orange-100 font-semibold text-lg md:text-xl tracking-wider drop-shadow-lg">
//                     🏆 Recognised as an Established Software Platform
//                   </h2>
//                   <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-2xl">
//                     Red Swan Digital Radar 2025
//                   </h1>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Toggle Button */}
//           <motion.button
//             onClick={() => setToggleRedSwan((prev) => !prev)}
//             animate={{ rotate: toggleRedSwan ? 180 : 0 }}
//             transition={{ duration: 0.5 }}
//             className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg"
//           >
//             <FiChevronLeft size={26} />
//           </motion.button>
//         </div>
//       )}

//       {/* === Animations === */}
//       <style>{`
//         @keyframes smoothFadeUp {
//           0% { opacity: 0; transform: translateY(30px); }
//           20% { opacity: 1; transform: translateY(0); }
//           60% { opacity: 1; transform: translateY(0); }
//           100% { opacity: 0; transform: translateY(-20px); }
//         }
//         .animate-smoothFadeUp {
//           animation: smoothFadeUp 6s ease-in-out forwards;
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//       `}</style>
//     </section>
//   );
// };

// export default VideoSection;

import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const features = [
  {
    label: "Business Performance",
    id: "businessperformance",
    style: { top: "10%", right: "30%" },
  },
  {
    label: "Accounting",
    id: "accounting",
    style: { top: "25%", right: "25%" },
  },
  { label: "Personnel", id: "personnel", style: { top: "40%", right: "20%" } },
  {
    label: "Supplier Management",
    id: "suppliermanagement",
    style: { top: "55%", right: "25%" },
  },
  { label: "CRM", id: "crm", style: { top: "70%", right: "30%" } },
  {
    label: "System Configuration",
    id: "systemconfiguration",
    style: { top: "70%", left: "30%" },
  },
  { label: "QMS", id: "qms", style: { top: "55%", left: "25%" } },
  { label: "Assets", id: "assets", style: { top: "40%", left: "20%" } },
  {
    label: "Specification",
    id: "specification",
    style: { top: "25%", left: "25%" },
  },
  {
    label: "Test Data Management",
    id: "testdatamanagement",
    style: { top: "10%", left: "30%" },
  },
];

const VideoSection = () => {
  const [showText, setShowText] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [toggleRedSwan, setToggleRedSwan] = useState(false);

  const handleClick = (id) => {
    const event = new CustomEvent("activateTab", {
      detail: { id, sectionIndex: 0 },
    });
    window.dispatchEvent(event);
  };

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 0);
    const secondImageTimer = setTimeout(() => setShowSecondImage(true), 2500);
    const featureTimer = setTimeout(() => setShowFeatures(true), 6000);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(secondImageTimer);
      clearTimeout(featureTimer);
    };
  }, []);

  // 🔁 Smooth auto loop between features and Red Swan every 6 seconds
  useEffect(() => {
    if (showFeatures) {
      const loopInterval = setInterval(() => {
        setToggleRedSwan((prev) => !prev);
      }, 6000); // slower transition cycle (was 4000)
      return () => clearInterval(loopInterval);
    }
  }, [showFeatures]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* === Background Images === */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="BlackBrainImage4webp.webp"
          alt="Second Brain Image"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
            showSecondImage ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src="FirstImage.jpeg"
          alt="First Brain Image"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
            showSecondImage ? "delay-[2000ms] opacity-0" : "opacity-100"
          }`}
        />
      </div>

      {/* === Intro Text === */}
      {showText && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/10 backdrop-blur-md text-center px-6 z-20 animate-smoothFadeUp transform -translate-y-10 md:-translate-y-16">
          <h2 className="text-2xl md:text-4xl font-semibold leading-relaxed max-w-2xl mb-3">
            Run your lab on the cloud — secure, scalable, and compliant.
          </h2>
          <p className="text-lg md:text-xl max-w-2xl text-gray-200">
            Everything you need to streamline your{" "}
            <span className="text-orange-500 font-semibold">
              testing, inspection, and calibration workflows
            </span>{" "}
            — all in one secure platform.
          </p>
          <p className="text-md md:text-lg mt-2 text-gray-300">
            Audit-ready from day one — no servers, no stress.
          </p>

          <div className="mt-6 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 flex flex-col items-center space-y-2 shadow-[0_0_25px_rgba(255,255,255,0.15)]">
            <h2 className="text-orange-300 font-semibold text-lg md:text-xl tracking-wider drop-shadow-lg">
              🏆 Recognised as an Established Software Platform
            </h2>
            <h1 className="text-red-500 text-3xl md:text-5xl font-bold max-w-3xl drop-shadow-2xl text-center">
              Red Swan Digital Radar 2025
            </h1>
          </div>
        </div>
      )}

      {/* === Features + Auto Loop Section === */}
      {showFeatures && (
        <div className="absolute w-full h-full hidden md:flex flex-col items-center z-30">
          {/* Feature Labels */}
          <AnimatePresence mode="wait">
            {!toggleRedSwan && (
              
              <motion.div
                key="features"
                className="relative w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }} // slower fade
              >
                {/* {features.map((feature, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleClick(feature.id)}
                    className="group absolute px-3 py-1 text-sm border border-white rounded-full text-white font-semibold feature-glow cursor-pointer hover:scale-105 transition-transform hover:shadow-[0_0_20px_4px_rgba(138,43,226,0.8)]"
                    style={{
                      ...feature.style,
                      transform: "translate(-50%, -50%)",
                      width: "200px",
                      textAlign: "center",
                      justifyContent: "center",
                      height: "35px",
                      backgroundColor: "rgba(26, 15, 47, 0.8)",
                    }}
                  >
                    {feature.label}
                  </div>
                ))} */}
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleClick(feature.id)}
                    className="group absolute px-3 py-1 text-sm border border-white rounded-full text-white font-semibold feature-glow cursor-pointer hover:scale-105 hover:border-blue transition-transform hover:shadow-[0_0_20px_4px_rgba(138,43,226,0.8)] hover:animate-glowPulse"
                    style={{
                      ...feature.style,
                      transform: "translate(-50%, -50%)",
                      width: "200px",
                      textAlign: "center",
                      justifyContent: "center",
                      height: "35px",
                      backgroundColor: "rgba(228, 228, 228, 0.8)",
                    }}
                  >
                    {feature.label}
                  </div>
                ))}
              </motion.div>
            )}

            {/* RED SWAN SLIDE (fades in slowly) */}
            {toggleRedSwan && (
              // moves from right side
              // <motion.div
              //   key="redswan"
              //   initial={{ opacity: 0, y: 30 }} // start lower & invisible
              //   animate={{ opacity: 1, y: -10 }} // move up slightly while fading in
              //   exit={{ opacity: 0, y: 30 }} // fade out while moving down
              //   transition={{ duration: 2.5, ease: "easeInOut" }} // slower, smoother transition
              //   className="flex items-start justify-center w-full h-full"
              // >
              //   <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 animate-smoothFadeUp transform -translate-y-10 md:-translate-y-16">
              //     <h2 className="text-2xl md:text-4xl font-semibold leading-relaxed max-w-2xl mb-3">
              //       Run your lab on the cloud — secure, scalable, and compliant.
              //     </h2>
              //     <p className="text-lg md:text-xl max-w-2xl text-gray-200">
              //       Everything you need to streamline your{" "}
              //       <span className="text-orange-500 font-semibold">
              //         testing, inspection, and calibration workflows
              //       </span>{" "}
              //       — all in one secure platform.
              //     </p>
              //     <p className="text-md md:text-lg mt-2 text-gray-300">
              //       Audit-ready from day one — no servers, no stress.
              //     </p>

              //     <div className="mt-6 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 flex flex-col items-center space-y-2 shadow-[0_0_25px_rgba(255,255,255,0.15)]">
              //       <h2 className="text-orange-300 font-semibold text-lg md:text-xl tracking-wider drop-shadow-lg">
              //         🏆 Recognised as an Established Software Platform
              //       </h2>
              //       <h1 className="text-red-500 text-3xl md:text-5xl font-bold max-w-3xl drop-shadow-2xl text-center">
              //         Red Swan Digital Radar 2025
              //       </h1>
              //     </div>
              //   </div>
              // </motion.div>
              <motion.div
                key="redswan"
                initial={{ opacity: 0, y: 30 }} // start lower & invisible
                animate={{ opacity: 1, y: -10 }} // move up slightly while fading in
                exit={{ opacity: 0, y: 30 }} // fade out while moving down
                transition={{ duration: 2.5, ease: "easeInOut" }} // slower, smoother transition
                className="flex items-start justify-center w-full h-full bg-white/10 backdrop-blur-md"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 animate-smoothFadeUp transform -translate-y-10 md:-translate-y-16">
                  <h2 className="text-2xl md:text-4xl font-semibold leading-relaxed max-w-2xl mb-3">
                    Run your lab on the cloud — secure, scalable, and compliant.
                  </h2>
                  <p className="text-lg md:text-xl max-w-2xl text-gray-200">
                    Everything you need to streamline your{" "}
                    <span className="text-orange-500 font-semibold">
                      testing, inspection, and calibration workflows
                    </span>{" "}
                    — all in one secure platform.
                  </p>
                  <p className="text-md md:text-lg mt-2 text-gray-300">
                    Audit-ready from day one — no servers, no stress.
                  </p>

                  {/* 🔹 Glass Effect Box */}
                  <div className="mt-6 px-8 py-4 rounded-2xl  border border-white/30 flex flex-col items-center space-y-2 shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-700">
                    <h2 className="text-orange-300 font-semibold text-lg md:text-xl tracking-wider drop-shadow-lg">
                      🏆 Recognised as an Established Software Platform
                    </h2>
                    <h1 className="text-red-500 text-3xl md:text-5xl font-bold max-w-3xl drop-shadow-2xl text-center">
                      Red Swan Digital Radar 2025
                    </h1>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* === Animations === */}
      <style>{`
        @keyframes smoothFadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          20% { opacity: 1; transform: translateY(0); }
          60% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-20px); }
        }
        .animate-smoothFadeUp {
          animation: smoothFadeUp 6s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default VideoSection;
