// working on

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
  const [isPaused, setIsPaused] = useState(false);

  const handleClick = (id) => {
    const event = new CustomEvent("activateTab", {
      detail: { id, sectionIndex: 0 },
    });
    window.dispatchEvent(event);
  };

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 0);
    const secondImageTimer = setTimeout(() => setShowSecondImage(true), 2500);
    const featureTimer = setTimeout(() => setShowFeatures(true), 5000);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(secondImageTimer);
      clearTimeout(featureTimer);
    };
  }, []);

  // useEffect(() => {
  //   if (!showFeatures) return;

  //   let timeoutId;
  //   let remaining = 6000; // total duration
  //   let startTime;

  //   const toggle = () => {
  //     setToggleRedSwan((prev) => !prev);
  //     startTime = Date.now();
  //     timeoutId = setTimeout(toggle, 6000);
  //   };

  //   const start = () => {
  //     startTime = Date.now();
  //     timeoutId = setTimeout(toggle, remaining);
  //     console.log("▶️ Started/resumed loop...");
  //   };

  //   const pause = () => {
  //     clearTimeout(timeoutId);
  //     const elapsed = Date.now() - startTime;
  //     remaining -= elapsed;
  //     console.log(
  //       `⏸️ Paused at ${elapsed / 1000}s, remaining: ${remaining / 1000}s`
  //     );
  //   };

  //   if (!isPaused) start();
  //   else pause();

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [showFeatures, isPaused]);

  // 4/11 5:00
  useEffect(() => {
    if (!showFeatures) return;

    let timeoutId;
    let startTime;
    let remaining;
    let isFeaturePhase = !toggleRedSwan; // track current phase

    const startLoop = () => {
      startTime = Date.now();

      // Duration depends on current phase
      remaining = isFeaturePhase ? 9000 : 3500; // 10s for features, 3s for text

      timeoutId = setTimeout(() => {
        setToggleRedSwan((prev) => !prev); // toggle view
        isFeaturePhase = !isFeaturePhase; // switch phase
        startLoop(); // immediately start next phase (no delay)
      }, remaining);
    };

    const start = () => {
      startLoop();
      console.log("▶️ Started loop...");
    };

    const pause = () => {
      clearTimeout(timeoutId);
      console.log("⏸️ Paused");
    };

    if (!isPaused) start();
    else pause();

    return () => clearTimeout(timeoutId);
  }, [showFeatures, isPaused]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white">
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
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full min-h-[120vh] bg-white/10 backdrop-blur-md text-center px-4 sm:px-6 z-20 animate-smoothFadeUp transform -translate-y-4 sm:-translate-y-10 md:-translate-y-16">
          {/* Heading */}
          <div className="transform -translate-y-10 sm:-translate-y-14 md:-translate-y-20 animate-smoothFadeUp">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold leading-relaxed max-w-md sm:max-w-2xl mb-3">
              Run your lab on the cloud - secure, scalable, and compliant.
            </h2>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-2xl text-gray-200">
              Everything you need to streamline your{" "}
              <span className="text-orange-500 font-semibold">
                testing, inspection, and calibration workflows
              </span>{" "}
              - all in one secure platform.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-md md:text-lg mt-2 text-gray-300">
              Audit-ready from day one - no servers, no stress.
            </p>

            {/* Recognition Box */}
            <div className="mt-6 px-6 sm:px-8 py-4 rounded-2xl bg-white/10 flex flex-col items-center text-center space-y-2">
              <h2 className="text-orange-300 font-semibold text-base sm:text-lg md:text-xl tracking-wider drop-shadow-lg">
                🏆 Recognised as an Established Software Platform
              </h2>
              <h1 className="text-red-500 text-2xl sm:text-3xl md:text-5xl font-bold max-w-sm sm:max-w-3xl drop-shadow-2xl">
                Red Swan Digital Radar 2025
              </h1>
            </div>
          </div>
        </div>
      )}

      {/* === Features + Auto Loop Section === */}
      {showFeatures && (
        <div className="absolute w-full h-full items-center z-30">
          <AnimatePresence mode="wait">
            {/* === FEATURES === */}
            {!toggleRedSwan && (
              <motion.div
                key="features"
                className="relative w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {/* 🟢 Desktop Layout */}
                <div className="hidden md:block">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleClick(feature.id)}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      className="group absolute px-3 py-1 text-sm border border-white rounded-full text-white font-semibold feature-glow cursor-pointer hover:scale-105 transition-transform hover:shadow-[0_0_20px_4px_rgba(138,43,226,0.8)] hover:animate-glowPulse"
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
                </div>

                {/* 🟠 Mobile Layout (stack vertically) */}
                <div className="flex flex-col items-center gap-3 md:hidden mt-6">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleClick(feature.id)}
                      className="px-4 py-2 text-sm border border-white rounded-full text-white font-semibold feature-glow cursor-pointer hover:scale-105 transition-transform hover:shadow-[0_0_20px_4px_rgba(138,43,226,0.8)]"
                      style={{
                        width: "80%",
                        backgroundColor: "rgba(228, 228, 228, 0.8)",
                        textAlign: "center",
                      }}
                    >
                      {feature.label}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* === RED SWAN SLIDE === */}
            {toggleRedSwan && (
              <motion.div
                key="redswan"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: -10 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="flex items-center justify-center w-full h-full bg-white/10 backdrop-blur-md px-4 sm:px-6 md:px-10 text-center"
              >
                <div
                  className="mt-4 sm:mt-6 px-4 sm:px-6 py-4 rounded-2xl flex flex-col items-center text-center space-y-3 -translate-y-10 md:-translate-y-16 sm:space-y-4 cursor-grab transition-all duration-700"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {/* Heading */}
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold leading-relaxed max-w-[95%] sm:max-w-2xl mb-2 sm:mb-3 text-gray-100">
                    Run your lab on the cloud — secure, scalable, and compliant.
                  </h2>

                  {/* Subtext */}
                  <p className="text-sm sm:text-base md:text-lg max-w-[95%] sm:max-w-2xl text-gray-200">
                    Everything you need to streamline your{" "}
                    <span className="text-orange-500 font-semibold">
                      testing, inspection, and calibration workflows
                    </span>{" "}
                    — all in one secure platform.
                  </p>

                  <p className="text-xs sm:text-sm md:text-lg mt-2 text-gray-300">
                    Audit-ready from day one — no servers, no stress.
                  </p>

                  <div className="relative group w-fit mx-auto">
                    <a
                      href="https://www.redswan-digital.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-snug 
               transition-all duration-300 ease-in-out hover:text-blue-500 hover:underline hover:decoration-blue-400 hover:underline-offset-2"
                    >
                      Red Swan Digital Radar 2025
                    </a>

                    {/* Tooltip */}
                    <span
                      className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 
                   bg-gray-800 text-white text-xs sm:text-sm rounded-md px-2 py-1 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                   whitespace-nowrap pointer-events-none"
                    >
                      Visit Red Swan Digital Website
                      <span className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></span>
                    </span>
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

// mobile view responsive fetures

// <motion.div
//   key="features"
//   className="relative w-full h-full"
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   exit={{ opacity: 0 }}
//   transition={{ duration: 2, ease: "easeInOut" }}
// >
//   {/* === Desktop View (md and above) === */}
//   <div className="hidden md:block w-full h-full">
//     {features.map((feature, idx) => (
//       <div
//         key={idx}
//         onClick={() => handleClick(feature.id)}
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//         className="group absolute px-3 py-1 text-sm border border-white rounded-full text-white font-semibold feature-glow cursor-pointer hover:scale-105 transition-transform hover:shadow-[0_0_20px_4px_rgba(138,43,226,0.8)] hover:animate-glowPulse"
//         style={{
//           ...feature.style,
//           transform: "translate(-50%, -50%)",
//           width: "200px",
//           textAlign: "center",
//           justifyContent: "center",
//           height: "35px",
//           backgroundColor: "rgba(228, 228, 228, 0.8)",
//         }}
//       >
//         {feature.label}
//       </div>
//     ))}
//   </div>

//   {/* === Mobile View (below md) === */}
//   <div className="md:hidden flex flex-wrap justify-center items-center gap-x-6 gap-y-4 px-3 py-4 z-20">
//     {features.map((feature, idx) => (
//       <div
//         key={idx}
//         onClick={() => handleClick(feature.id)}
//         className="group flex items-center justify-center w-[45%] px-2 py-1 mb-1 text-[11px] border border-white rounded-full text-white font-medium feature-glow cursor-pointer hover:scale-105 transition-transform hover:shadow-[0_0_10px_2px_rgba(138,43,226,0.7)] hover:animate-glowPulse bg-[rgba(228,228,228,0.8)]"
//       >
//         {feature.label}
//       </div>
//     ))}
//   </div>
// </motion.div>

// mobile view responsive     text
//           <motion.div
//             key="redswan"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: -10 }}
//             exit={{ opacity: 0, y: 30 }}
//             transition={{ duration: 2.5, ease: "easeInOut" }}
//             className="flex items-center justify-center w-full h-full bg-white/10 backdrop-blur-md md:pointer-events-auto pointer-events-none z-10"
//           >
//             <div
//               className="mt-4 md:mt-6 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-2xl flex flex-col items-center text-center space-y-2 md:space-y-3
// -translate-y-6 md:-translate-y-16 hover:shadow-[0_0_40px_rgba(255,165,0,0.4)] transition-all duration-700"
//               onMouseEnter={() => setIsPaused(true)}
//               onMouseLeave={() => setIsPaused(false)}
//             >
//               {/* Heading */}
//               <h2 className="text-lg sm:text-xl md:text-4xl font-semibold leading-relaxed max-w-[90%] md:max-w-2xl mb-2 md:mb-3 text-white">
//                 Run your lab on the cloud - secure, scalable, and compliant.
//               </h2>

//               {/* Description */}
//               <p className="text-sm sm:text-base md:text-xl max-w-[90%] md:max-w-2xl text-gray-200 leading-relaxed">
//                 Everything you need to streamline your{" "}
//                 <span className="text-orange-500 font-semibold">
//                   testing, inspection, and calibration workflows
//                 </span>{" "}
//                 - all in one secure platform.
//               </p>

//               {/* Sub text */}
//               <p className="text-xs sm:text-sm md:text-lg mt-1 sm:mt-2 text-gray-300">
//                 Audit-ready from day one - no servers, no stress.
//               </p>

//               {/* Recognition block */}
//               <div className="mt-4 sm:mt-6 px-4 sm:px-6 md:px-8 py-2 sm:py-4 rounded-2xl bg-white/10 flex flex-col items-center space-y-1 sm:space-y-2">
//                 <h2 className="text-orange-300 font-medium sm:font-semibold text-sm sm:text-base md:text-xl tracking-wide drop-shadow-lg">
//                   🏆 Recognised as an Established Software Platform
//                 </h2>
//                 <h1 className="text-red-500 text-2xl sm:text-3xl md:text-5xl font-bold max-w-[90%] md:max-w-3xl drop-shadow-2xl text-center">
//                   Red Swan Digital Radar 2025
//                 </h1>
//               </div>
//             </div>
//           </motion.div>

// takes 6+6 time to animates
// 🔁 Smooth auto loop (pauses on hover)
// useEffect(() => {
//   if (showFeatures) {
//     const loopInterval = setInterval(() => {
//       if (!isPaused) {
//         setToggleRedSwan((prev) => !prev);
//       }
//     }, 4000);
//     return () => clearInterval(loopInterval);
//   }
// }, [showFeatures, isPaused]);

// 6 + 6 working fine
// useEffect(() => {
//   if (showFeatures) {
//     const loopInterval = setInterval(() => {
//       if (!isPaused) {
//         console.log("🌀 Toggling Red Swan state...");
//         setToggleRedSwan((prev) => {
//           console.log("🔁 Previous state:", prev, "→ New state:", !prev);
//           return !prev;
//         });
//       } else {
//         console.log("⏸️ Paused - toggle skipped");
//       }
//     }, 6000);

//     return () => {
//       console.log("🧹 Clearing loop interval");
//       clearInterval(loopInterval);
//     };
//   }
// }, [showFeatures, isPaused]);

// not mobile friendly
// <motion.div
//   key="redswan"
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: -10 }}
//   exit={{ opacity: 0, y: 30 }}
//   transition={{ duration: 2.5, ease: "easeInOut" }}
//   className="flex items-center justify-center w-full h-full bg-white/10 backdrop-blur-md"
// >
//   <div
//     className="mt-6 px-8 py-4 rounded-2xl  flex flex-col items-center text-center space-y-2 -translate-y-10 md:-translate-y-16  hover:shadow-[0_0_40px_rgba(255,165,0,0.4)] transition-all duration-700"
//     onMouseEnter={() => setIsPaused(true)} // 🟢 pause on hover
//     onMouseLeave={() => setIsPaused(false)} // 🔵 resume when leaving
//   >
//     <h2 className="text-2xl md:text-4xl font-semibold leading-relaxed max-w-2xl mb-3">
//       Run your lab on the cloud - secure, scalable, and compliant.
//     </h2>
//     <p className="text-lg md:text-xl max-w-2xl text-gray-200">
//       Everything you need to streamline your{" "}
//       <span className="text-orange-500 font-semibold">
//         testing, inspection, and calibration workflows
//       </span>{" "}
//       - all in one secure platform.
//     </p>
//     <p className="text-md md:text-lg mt-2 text-gray-300">
//       Audit-ready from day one - no servers, no stress.
//     </p>
//     {/* <div className="mt-2 px-8 py-4 rounded-2xl flex flex-col items-center space-y-2  transition-all duration-700"> */}
//     <div className="mt-6 px-8 py-4 rounded-2xl bg-white/10 flex flex-col items-center space-y-2 ">
//       <h2 className="text-orange-300 font-semibold text-lg md:text-xl tracking-wider drop-shadow-lg">
//         🏆 Recognised as an Established Software Platform
//       </h2>
//       <h1 className="text-red-500 text-3xl md:text-5xl font-bold max-w-3xl drop-shadow-2xl text-center">
//         Red Swan Digital Radar 2025
//       </h1>
//     </div>
//   </div>
// </motion.div>

// without a mobile friendly
// <motion.div
//   key="features"
//   className="relative w-full h-full"
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   exit={{ opacity: 0 }}
//   transition={{ duration: 2, ease: "easeInOut" }}
// >
//   {features.map((feature, idx) => (
//     <div
//       key={idx}
//       onClick={() => handleClick(feature.id)}
//       onMouseEnter={() => setIsPaused(true)} // 🟠 pause when hovering feature
//       onMouseLeave={() => setIsPaused(false)} // resume when leaving
//       className="group absolute px-3 py-1 text-sm border border-white rounded-full text-white font-semibold feature-glow cursor-pointer hover:scale-105 transition-transform hover:shadow-[0_0_20px_4px_rgba(138,43,226,0.8)] hover:animate-glowPulse"
//       style={{
//         ...feature.style,
//         transform: "translate(-50%, -50%)",
//         width: "200px",
//         textAlign: "center",
//         justifyContent: "center",
//         height: "35px",
//         backgroundColor: "rgba(228, 228, 228, 0.8)",
//       }}
//     >
//       {feature.label}
//     </div>
//   ))}
// </motion.div>
