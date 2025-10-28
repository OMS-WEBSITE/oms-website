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
  const [showIntro, setShowIntro] = useState(true);
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    // Show intro text for 4 seconds total
    const introTimer = setTimeout(() => {
      setShowIntro(false);
      setShowFeatures(true);
    }, 4000);

    return () => clearTimeout(introTimer);
  }, []);

  // const handleClick = (label) => {
  //   const contentSection = document.getElementById("header-content-section");
  //   if (contentSection) {
  //     contentSection.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  //   const event = new CustomEvent("activateTab", { detail: label });
  //   window.dispatchEvent(event);
  // };

  const handleClick = (label) => {
    const contentSection = document.getElementById("header-content-section");
    if (contentSection) {
      const offset = 60; // fixed height
      const topPosition = contentSection.offsetTop - offset; // scroll 60px above the section

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }

    // Trigger the tab activation
    const event = new CustomEvent("activateTab", { detail: label });
    window.dispatchEvent(event);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Intro Text (fades in, stays, then fades out) */}
      {showIntro && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-center px-6 z-50 opacity-0 animate-fadeInOut translate-y-[-50px] md:translate-y-[-80px]">
          <h2 className="text-lg md:text-2xl font-semibold leading-relaxed max-w-2xl">
            Run your lab on the cloud — secure, scalable, and compliant.
          </h2>
          <p className="text-sm md:text-lg mt-2 max-w-2xl">
            ISO/IEC 17025-ready for testing, inspection & calibration
            operations.
          </p>
          <p className="text-sm md:text-lg mt-2 max-w-2xl">
            Audit-ready from day one — no servers, no stress.
          </p>
        </div>
      )}

      {/* Background Image (shows after intro) */}
      {!showIntro && (
        <img
          src="BlackBrainImage2.png"
          alt="Brain Wallpaper"
          className="absolute inset-0 w-full h-full object-cover z-0 animate-fadeInSlow"
        />
      )}

      {/* Desktop Features */}
      {!showIntro && (
        <div className="hidden md:block">
          {showFeatures && (
            <div
              className="absolute w-full h-full"
              style={{ animation: "fadeIn 2s forwards" }}
            >
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  onClick={() => handleClick(feature.label)}
                  className="group absolute px-3 py-1 text-sm border border-white rounded-full text-white font-semibold feature-glow cursor-pointer"
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
          )}
        </div>
      )}

      {/* Mobile view — no features */}
      <div className="md:hidden flex flex-col items-center justify-center h-full space-y-3 px-4"></div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes fadeInSlow {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .animate-fadeInOut {
          animation: fadeInOut 4s ease-in-out forwards;
        }

        .animate-fadeInSlow {
          animation: fadeInSlow 2s ease-in forwards;
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @media (max-width: 768px) {
          .brain-image {
            height: 50vh !important; 
            object-fit: cover !important;
            top: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default VideoSection;
