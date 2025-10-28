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
//   const [showIntro, setShowIntro] = useState(true);

//   const [showFeatures, setShowFeatures] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowFeatures(true);
//     }, 1000); // Wait 1 second before starting the fade-in

//     return () => clearTimeout(timer);
//   }, []);

//   const handleClick = (label) => {
//     const contentSection = document.getElementById("header-content-section");
//     if (contentSection) {
//       contentSection.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//     const event = new CustomEvent("activateTab", { detail: label });
//     window.dispatchEvent(event);
//   };

//   return (
//     <section className="relative w-full h-screen overflow-hidden bg-black text-white">
//       {/* Background Image */}
//       <img
//         src="BlackBrainImage2.png"
//         alt="Brain Wallpaper"
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       />

//       {/* <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src="videos/Slow_Motion_Outer_Circuit_Video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video> */}

//       {/* Desktop Features */}
//       <div className="hidden md:block">
//         {showFeatures && (
//           <div
//             className="absolute w-full h-full"
//             style={{
//               animation: "fadeIn 2s forwards", // Smooth fade-in over 2 seconds
//             }}
//           >
//             {features.map((feature, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => handleClick(feature.label)}
//                 className="group absolute px-3 py-1 text-sm border border-white rounded-full text-white font-semibold feature-glow cursor-pointer"
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
//         )}
//       </div>

//       {/* Mobile Features - hidden */}
//       <div className="md:hidden flex flex-col items-center justify-center h-full space-y-3 px-4">
//         {/* Empty - features hidden on mobile */}
//       </div>

//       {/* Fade-in animation */}
//       <style>{`
//         @keyframes fadeIn {
//           0% { opacity: 0; }
//           100% { opacity: 1; }
//         }

//          @media (max-width: 768px) {
//           .brain-image {
//             height: 50vh !important;
//             object-fit: cover !important;
//             top: 0;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default VideoSection;

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
//   const [showIntro, setShowIntro] = useState(true);
//   const [showFeatures, setShowFeatures] = useState(false);

//   useEffect(() => {
//     // Show intro text for 4 seconds total
//     const introTimer = setTimeout(() => {
//       setShowIntro(false);
//       setShowFeatures(true);
//     }, 4000);

//     return () => clearTimeout(introTimer);
//   }, []);

//   // const handleClick = (label) => {
//   //   const contentSection = document.getElementById("header-content-section");
//   //   if (contentSection) {
//   //     contentSection.scrollIntoView({ behavior: "smooth", block: "start" });
//   //   }
//   //   const event = new CustomEvent("activateTab", { detail: label });
//   //   window.dispatchEvent(event);
//   // };

//   const handleClick = (label) => {
//     const contentSection = document.getElementById("header-content-section");
//     if (contentSection) {
//       const offset = 60; // fixed height
//       const topPosition = contentSection.offsetTop - offset; // scroll 60px above the section

//       window.scrollTo({
//         top: topPosition,
//         behavior: "smooth",
//       });
//     }

//     // Trigger the tab activation
//     const event = new CustomEvent("activateTab", { detail: label });
//     window.dispatchEvent(event);
//   };

//   return (
//     <section className="relative w-full h-screen overflow-hidden bg-black text-white">
//       {/* Intro Text (fades in, stays, then fades out) */}
//       {showIntro && (
//         <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-center px-6 z-50 opacity-0 animate-fadeInOut translate-y-[-50px] md:translate-y-[-80px]">
//           <h2 className="text-lg md:text-2xl font-semibold leading-relaxed max-w-2xl">
//             Run your lab on the cloud — secure, scalable, and compliant.
//           </h2>
//           <p className="text-sm md:text-lg mt-2 max-w-2xl">
//             ISO/IEC 17025-ready for testing, inspection & calibration
//             operations.
//           </p>
//           <p className="text-sm md:text-lg mt-2 max-w-2xl">
//             Audit-ready from day one — no servers, no stress.
//           </p>
//         </div>
//       )}

//       {/* Background Image (shows after intro) */}
//       {!showIntro && (
//         <img
//           src="BlackBrainImage2.png"
//           alt="Brain Wallpaper"
//           className="absolute inset-0 w-full h-full object-cover z-0 animate-fadeInSlow"
//         />
//       )}

//       {/* Desktop Features */}
//       {!showIntro && (
//         <div className="hidden md:block">
//           {showFeatures && (
//             <div
//               className="absolute w-full h-full"
//               style={{ animation: "fadeIn 2s forwards" }}
//             >
//               {features.map((feature, idx) => (
//                 <div
//                   key={idx}
//                   onClick={() => handleClick(feature.label)}
//                   className="group absolute px-3 py-1 text-sm border border-white rounded-full text-white font-semibold feature-glow cursor-pointer"
//                   style={{
//                     ...feature.style,
//                     transform: "translate(-50%, -50%)",
//                     width: "200px",
//                     textAlign: "center",
//                     justifyContent: "center",
//                     height: "35px",
//                     backgroundColor: "rgba(26, 15, 47, 0.8)",
//                   }}
//                 >
//                   {feature.label}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}

//       {/* Mobile view — no features */}
//       <div className="md:hidden flex flex-col items-center justify-center h-full space-y-3 px-4"></div>

//       {/* Animations */}
//       <style>{`
//         @keyframes fadeInOut {
//           0% { opacity: 0; }
//           20% { opacity: 1; }
//           80% { opacity: 1; }
//           100% { opacity: 0; }
//         }

//         @keyframes fadeInSlow {
//           0% { opacity: 0; }
//           100% { opacity: 1; }
//         }

//         .animate-fadeInOut {
//           animation: fadeInOut 4s ease-in-out forwards;
//         }

//         .animate-fadeInSlow {
//           animation: fadeInSlow 2s ease-in forwards;
//         }

//         @keyframes fadeIn {
//           0% { opacity: 0; }
//           100% { opacity: 1; }
//         }

//         @media (max-width: 768px) {
//           .brain-image {
//             height: 50vh !important;
//             object-fit: cover !important;
//             top: 0;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default VideoSection;

// 1 image 2 text 3 image + features

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
//   const [stage, setStage] = useState(1); // 1=image only, 2=text only, 3=image + features

//   useEffect(() => {
//     const timers = [];

//     // 1st stage: image only (3s)
//     timers.push(setTimeout(() => setStage(2), 3000));

//     // 2nd stage: text only (4s)
//     timers.push(setTimeout(() => setStage(3), 7000));

//     return () => timers.forEach(clearTimeout);
//   }, []);

//   const handleClick = (label) => {
//     const contentSection = document.getElementById("header-content-section");
//     if (contentSection) {
//       const offset = 60;
//       const topPosition = contentSection.offsetTop - offset;
//       window.scrollTo({ top: topPosition, behavior: "smooth" });
//     }
//     const event = new CustomEvent("activateTab", { detail: label });
//     window.dispatchEvent(event);
//   };

//   return (
//     <section className="relative w-full h-screen overflow-hidden bg-black text-white">
//       {/* === Stage 1: Only Image === */}
//       {stage === 1 && (
//         <img
//           src="BlackBrainImage1.jpg"
//           alt="Brain Wallpaper"
//           className="absolute inset-0 w-full h-full object-cover z-0 animate-fadeInSlow"
//         />
//       )}

//       {/* === Stage 2: Only Text === */}
//       {stage === 2 && (
//         <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-center px-6 z-50 animate-fadeInSlow">
//           <h2 className="text-2xl md:text-4xl font-semibold leading-relaxed max-w-2xl">
//             Run your lab on the cloud — secure, scalable, and compliant.
//           </h2>
//           <p className="text-lg md:text-xl mt-4 max-w-2xl text-gray-300">
//             Everything you need to streamline your{" "}
//             <span className="text-orange-500 font-semibold">
//               testing, inspection, and calibration workflows
//             </span>{" "}
//             — all in one secure platform. <br />
//             No setup fees. No surprises. Just clear, scalable pricing that grows with your lab.
//           </p>
//         </div>
//       )}

//       {/* === Stage 3: Image + Features === */}
//       {stage === 3 && (
//         <>
//           <img
//             src="BlackBrainImage.jpg"
//             alt="Brain Wallpaper"
//             className="absolute inset-0 w-full h-full object-cover z-0 animate-fadeInSlow"
//           />
//           <div
//             className="absolute w-full h-full hidden md:block"
//             style={{ animation: "fadeIn 2s forwards" }}
//           >
//             {features.map((feature, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => handleClick(feature.label)}
//                 className="group absolute px-3 py-1 text-sm border border-white rounded-full text-white font-semibold feature-glow cursor-pointer"
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
//         </>
//       )}

//       <style>{`
//         @keyframes fadeInSlow {
//           0% { opacity: 0; }
//           100% { opacity: 1; }
//         }
//         .animate-fadeInSlow {
//           animation: fadeInSlow 2s ease-in forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default VideoSection;

// // working fine all good
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

//   useEffect(() => {
//     // timings
//     const textTimer = setTimeout(() => setShowText(true), 1000); // after 1s show text
//     const secondImageTimer = setTimeout(() => setShowSecondImage(true), 6500); // merge image
//     const featureTimer = setTimeout(() => setShowFeatures(true), 8500); // features appear

//     return () => {
//       clearTimeout(textTimer);
//       clearTimeout(secondImageTimer);
//       clearTimeout(featureTimer);
//     };
//   }, []);

//   const handleClick = (label) => {
//     const contentSection = document.getElementById("header-content-section");
//     if (contentSection) {
//       const offset = 60;
//       const topPosition = contentSection.offsetTop - offset;
//       window.scrollTo({ top: topPosition, behavior: "smooth" });
//     }
//     const event = new CustomEvent("activateTab", { detail: label });
//     window.dispatchEvent(event);
//   };

//   return (
//     <section className="relative w-full h-screen overflow-hidden bg-black text-white">
//       {/* === First Image === */}
//       <img
//         src="BlackBrainImage1.jpg"
//         alt="First Brain Image"
//         className="absolute inset-0 w-full h-full object-cover z-0 animate-fadeInSlow"
//       />

//       {/* === Text (fade up and disappear) === */}
//       {showText && (
//         <>
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 animate-fadeUpDisappear transform -translate-y-10 md:-translate-y-16">
//             <h2 className="text-2xl md:text-4xl font-semibold leading-relaxed max-w-2xl mb-3">
//               Run your lab on the cloud — secure, scalable, and compliant.
//             </h2>
//             <p className="text-lg md:text-xl max-w-2xl text-gray-200">
//               Everything you need to streamline your{" "}
//               <span className="text-orange-500 font-semibold">
//                 testing, inspection, and calibration workflows
//               </span>{" "}
//               — all in one secure platform.
//             </p>
//             <p className="text-md md:text-lg mt-2 text-gray-300">
//               Audit-ready from day one — no servers, no stress.
//             </p>
//           </div>{" "}
//         </>
//       )}

//       {/* === Second Image Crossfade === */}
//       {showSecondImage && (
//         <img
//           src="BlackBrainImage2.jpg"
//           alt="Second Brain Image"
//           className="absolute inset-0 w-full h-full object-cover z-10 animate-crossFadeZoom"
//         />
//       )}

//       {/* === Features === */}

//       {showFeatures && (
//         <div
//           className="absolute w-full h-full hidden md:flex flex-col items-center z-30"
//           style={{ animation: "fadeIn 4s forwards" }}
//         >
//           {/* 🏆 Recognition Scrolling Banner (above features) */}

//           {/* 🌐 Features Below */}
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

//       {/* === Animations === */}
//       <style>{`

//         @keyframes fadeInText {
//   0% { opacity: 0; transform: translateY(15px); }
//   100% { opacity: 1; transform: translateY(0); }
// }

//         @keyframes fadeInSlow {
//           0% { opacity: 0; transform: scale(1); }
//           100% { opacity: 1; transform: scale(1); }
//         }
//         .animate-fadeInSlow {
//           animation: fadeInSlow 2s ease-in forwards;
//         }

//         @keyframes fadeUpDisappear {
//           0% { opacity: 0; transform: translateY(30px); }
//           25% { opacity: 1; transform: translateY(0); }
//           75% { opacity: 1; transform: translateY(-10px); }
//           100% { opacity: 0; transform: translateY(-40px); }
//         }
//         .animate-fadeUpDisappear {
//           animation: fadeUpDisappear 5.5s ease-in-out forwards;
//         }

//         @keyframes crossFadeZoom {
//           0% { opacity: 0; transform: scale(1); }
//           100% { opacity: 1; transform: scale(1); }
//         }

//         .animate-crossFadeZoom {
//           animation: crossFadeZoom 2.5s ease-in-out forwards;
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//             .animate-marquee {
//       animation: marquee 200s linear infinite; /* 🐢 slow speed */
//     }

//     .animate-marquee2 {
//       animation: marquee2 60s linear infinite; /* same slow speed for sync */
//     }

//       `}</style>
//     </section>
//   );
// };

// export default VideoSection;

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
//   const [showRecognition, setShowRecognition] = useState(false);
//   const [showSecondImage, setShowSecondImage] = useState(false);
//   const [showFeatures, setShowFeatures] = useState(false);

//   useEffect(() => {
//     const textTimer = setTimeout(() => setShowText(true), 1000); // after 1s show text
//     const recognitionTimer = setTimeout(() => setShowRecognition(true), 6000); // recognition appears
//     const recognitionHideTimer = setTimeout(
//       () => setShowRecognition(false),
//       9000
//     ); // hide after 3s
//     const secondImageTimer = setTimeout(() => setShowSecondImage(true), 9500); // second image after recognition
//     const featureTimer = setTimeout(() => setShowFeatures(true), 11500); // features appear later

//     return () => {
//       clearTimeout(textTimer);
//       // clearTimeout(recognitionTimer);
//       // clearTimeout(recognitionHideTimer);
//       clearTimeout(secondImageTimer);
//       clearTimeout(featureTimer);
//     };
//   }, []);

//   const handleClick = (label) => {
//     const contentSection = document.getElementById("header-content-section");
//     if (contentSection) {
//       const offset = 60;
//       const topPosition = contentSection.offsetTop - offset;
//       window.scrollTo({ top: topPosition, behavior: "smooth" });
//     }
//     const event = new CustomEvent("activateTab", { detail: label });
//     window.dispatchEvent(event);
//   };

//   return (
//     <section className="relative w-full h-screen overflow-hidden bg-black text-white">
//       {/* === First Image === */}
//       <img
//         src="BlackBrainImage1.jpg"
//         alt="First Brain Image"
//         className="absolute inset-0 w-full h-full object-cover z-0 animate-fadeInSlow"
//       />

//       {/* === Text (fade up and disappear) === */}
//       {showText && (
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 animate-fadeUpDisappear transform -translate-y-10 md:-translate-y-16">
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
//            <span className="text-orange-500 font-extrabold text-xl md:text-2xl mr-2">
//               🏆 Recognised as an Established Software Platform —
//             </span>

//             <span className="text-red-500 font-extrabold">
//               Red Swan Digital Radar 2025
//             </span>

//         </div>

//         // <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 animate-fadeUpDisappear">
//         //   <h2 className="text-2xl md:text-4xl font-semibold leading-relaxed max-w-2xl mb-3">
//         //     Run your lab on the cloud — secure, scalable, and compliant.
//         //   </h2>
//         //   <p className="text-lg md:text-xl max-w-2xl text-gray-200">
//         //     Everything you need to streamline your{" "}
//         //     <span className="text-orange-500 font-semibold">
//         //       testing, inspection, and calibration workflows
//         //     </span>{" "}
//         //     — all in one secure platform.
//         //   </p>
//         //   <p className="text-md md:text-lg mt-2 text-gray-300">
//         //     Audit-ready from day one — no servers, no stress.
//         //   </p>
//         // </div>
//       )}

//       {/* === Recognition Banner (appears between text & second image) ===
//       {showRecognition && (
//         // <div className="absolute inset-0 flex items-center justify-center text-center px-8 z-30 animate-smoothFadeUp transform -translate-y-10 md:-translate-y-16">
//         //   <p className="text-gray-200 max-w-4xl leading-relaxed text-base sm:text-lg md:text-2xl lg:text-2xl tracking-wide leading-[1.8]">
//         //     <span className="text-orange-500 font-extrabold text-xl md:text-2xl mr-2">
//         //       🏆 Recognised as an Established Software Platform —
//         //     </span>

//         //     <span className="text-red-500 font-extrabold">
//         //       Red Swan Digital Radar 2025
//         //     </span>
//         //     , OMS Software is acknowledged as an established solution in the
//         //     global TIC + Digital Transformation landscape — trusted by
//         //     laboratories and inspection agencies for its reliability, compliance
//         //     focus, and technical depth.
//         //   </p>
//         // </div>

//         // <div className="absolute inset-0 flex items-center justify-center text-center px-8 z-30 animate-fadeInOut transform -translate-y-10 md:-translate-y-16">
//         //   <p className="text-gray-200 max-w-4xl leading-relaxed text-base sm:text-lg md:text-2xl lg:text-2xl tracking-wide leading-[1.8]">
//         //     <span className="text-orange-500 font-extrabold text-xl md:text-2xl mr-2">
//         //       🏆 Recognised as an Established Software Platform —
//         //     </span>
//         //     Featured on the{" "}
//         //     {/* <span className="text-orange-500 font-extrabold">
//         //       Red Swan Digital Radar 2025
//         //     </span> */}
//         {/* //     <p className="text-red-500 font-extrabold">
//         //       Red Swan Digital Radar 2025
//         //     </p>
//         //     , OMS Software is acknowledged as an established solution in the
//         //     global TIC + Digital Transformation landscape — trusted by
//         //     laboratories and inspection agencies for its reliability, compliance
//         //     focus, and technical depth.
//         //   </p> */}
//         {/* // </div>
//         // <div className="absolute inset-0 flex items-center justify-center text-center px-8 z-30 animate-fadeInOut">
//         //   <p className="text-gray-200 max-w-4xl leading-relaxed text-sm md:text-lg">
//         //     <span className="text-orange-500 font-bold text-lg md:text-xl mr-2">
//         //       🏆 Recognised as an Established Software Platform —
//         //     </span>
//         //     Featured on the{" "}
//         //     <span className="text-orange-500 font-bold">
//         //       Red Swan Digital Radar 2025
//         //     </span>
//         //     , OMS Software is acknowledged as an established solution in the
//         //     global TIC + Digital Transformation landscape — trusted by
//         //     laboratories and inspection agencies for its reliability,
//         //     compliance focus, and technical depth.
//         //   </p>
//         // </div>
//       // )}

//       {/* === Second Image Crossfade === */}
//       {showSecondImage && (
//         <img
//           src="BlackBrainImage2.jpg"
//           alt="Second Brain Image"
//           className="absolute inset-0 w-full h-full object-cover z-10 animate-crossFadeZoom"
//         />
//       )}

//       {/* === Features === */}
//       {showFeatures && (
//         <div
//           className="absolute w-full h-full hidden md:flex flex-col items-center z-30"
//           style={{ animation: "fadeIn 4s forwards" }}
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

//       {/* === Animations === */}
//       <style>{`
//         @keyframes fadeInSlow {
//           0% { opacity: 0; transform: scale(1); }
//           100% { opacity: 1; transform: scale(1); }
//         }
//         .animate-fadeInSlow { animation: fadeInSlow 2s ease-in forwards; }

//         @keyframes fadeUpDisappear {
//           0% { opacity: 0; transform: translateY(30px); }
//           25% { opacity: 1; transform: translateY(0); }
//           75% { opacity: 1; transform: translateY(-10px); }
//           100% { opacity: 0; transform: translateY(-40px); }
//         }
//         .animate-fadeUpDisappear { animation: fadeUpDisappear 5.5s ease-in-out forwards; }

//         @keyframes fadeInOut {
//           0% { opacity: 0; transform: translateY(20px); }
//           10% { opacity: 1; transform: translateY(0); }
//           90% { opacity: 1; transform: translateY(0); }
//           100% { opacity: 0; transform: translateY(-20px); }
//         }
//         .animate-fadeInOut { animation: fadeInOut 3s ease-in-out forwards; }

//         @keyframes crossFadeZoom {
//           0% { opacity: 0; transform: scale(1); }
//           100% { opacity: 1; transform: scale(1); }
//         }
//         .animate-crossFadeZoom { animation: crossFadeZoom 2.5s ease-in-out forwards; }

//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default VideoSection;

import { useEffect, useState } from "react";
import "aos/dist/aos.css";

const features = [
  { label: "Business Performance", style: { top: "10%", right: "30%" } },
  { label: "Accounting", style: { top: "25%", right: "25%" } },
  { label: "Personnel", style: { top: "40%", right: "20%" } },
  { label: "Supplier Management", style: { top: "55%", right: "25%" } },
  { label: "CRM", style: { top: "70%", right: "30%" } },
  { label: "System Configuration", style: { top: "70%", left: "30%" } },
  { label: "QMS", style: { top: "55%", left: "25%" } },
  { label: "Assets", style: { top: "40%", left: "20%" } },
  { label: "Specification", style: { top: "25%", left: "25%" } },
  { label: "Test Data Management", style: { top: "10%", left: "30%" } },
];

const VideoSection = () => {
  const [showText, setShowText] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 1000); // text after 1s
    const secondImageTimer = setTimeout(() => setShowSecondImage(true), 6500); // merge after text
    const featureTimer = setTimeout(() => setShowFeatures(true), 9000); // show features

    return () => {
      clearTimeout(textTimer);
      clearTimeout(secondImageTimer);
      clearTimeout(featureTimer);
    };
  }, []);

  const handleClick = (label) => {
    const contentSection = document.getElementById("header-content-section");
    if (contentSection) {
      const offset = 60;
      const topPosition = contentSection.offsetTop - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
    const event = new CustomEvent("activateTab", { detail: label });
    window.dispatchEvent(event);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* === First Image === */}
      <img
        src="BlackBrainImage1.jpg"
        alt="First Brain Image"
        className="absolute inset-0 w-full h-full object-cover z-0 animate-fadeInSlow"
      />

      {/* === Text (fade up + disappear smoothly) === */}
      {showText && (
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
          <div className="mt-4 px-6 py-3 rounded-xl flex flex-col items-center space-y-1">
            <h2 className="text-orange-400 font-bold text-base md:text-lg tracking-wide">
              🏆 Recognised as an Established Software Platform
            </h2>
            <h1 className="text-red-500 text-2xl md:text-4xl font-semibold max-w-2xl mb-3">
              Red Swan Digital Radar 2025
            </h1>
          </div>
        </div>
      )}

      {/* === Second Image Merge === */}
      {showSecondImage && (
        <img
          src="BlackBrainImage2.jpg"
          alt="Second Brain Image"
          className="absolute inset-0 w-full h-full object-cover z-10 animate-crossFadeZoom"
        />
      )}

      {/* === Features === */}
      {showFeatures && (
        <div
          className="absolute w-full h-full hidden md:flex flex-col items-center z-30"
          style={{ animation: "fadeIn 4s forwards" }}
        >
          <div className="relative w-full h-full">
            {features.map((feature, idx) => (
              <div
                key={idx}
                onClick={() => handleClick(feature.label)}
                className="group absolute px-3 py-1 text-sm border border-white rounded-full text-white font-semibold feature-glow cursor-pointer hover:scale-105 transition-transform"
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
            ))}
          </div>
        </div>
      )}

      {/* === Animations === */}
      <style>{`
        @keyframes fadeInSlow {
          0% { opacity: 0; transform: scale(1); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fadeInSlow { animation: fadeInSlow 2s ease-in forwards; }

        /* Text fade up, visible for 3s, then fade up smoothly */
        @keyframes smoothFadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          20% { opacity: 1; transform: translateY(0); }
          70% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-20px); }
        }
        .animate-smoothFadeUp { animation: smoothFadeUp 6s ease-in-out forwards; }

        @keyframes crossFadeZoom {
          0% { opacity: 0; transform: scale(1); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-crossFadeZoom { animation: crossFadeZoom 2.5s ease-in-out forwards; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default VideoSection;
