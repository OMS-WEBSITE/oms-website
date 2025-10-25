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
//   const [visibleCount, setVisibleCount] = useState(0);
//   const [showLogo, setShowLogo] = useState(true);

//   useEffect(() => {
//     const logoTimer = setTimeout(() => {
//       setShowLogo(false);

//       // Mobile: show features one by one
//       const featureInterval = setInterval(() => {
//         setVisibleCount((prev) => {
//           if (prev < features.length) return prev + 1;
//           clearInterval(featureInterval);
//           return prev;
//         });
//       }, 1000);
//     }, 2000);

//     return () => clearTimeout(logoTimer);
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
//       <img
//         src="BlackBrainImage.jpg"
//         alt="Brain Wallpaper"
//         className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
//           showLogo ? "opacity-0" : "opacity-100"
//         }`}
//       />

//       <div className="hidden md:block">
//         {!showLogo && (
//           <div
//             className="absolute w-full h-full"
//             style={{
//               transition: "opacity 0.7s",
//               opacity: visibleCount > 0 ? 1 : 0,
//             }}
//           >
//             {features.map((feature, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => handleClick(feature.label)}
//                 className="group absolute px-3 py-1 text-sm border border-white rounded-full text-white font-semibold transition-all duration-500 feature-glow cursor-pointer"
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

//       {/* Mobile Features: show one by one */}
//       <div className="md:hidden flex flex-col items-center justify-center h-full space-y-3 px-4">
//         {!showLogo &&
//           features.slice(0, visibleCount).map((feature, idx) => (
//             <div
//               key={idx}
//               onClick={() => handleClick(feature.label)}
//               className="group w-full text-center px-3 py-2 text-xs border border-white rounded-md text-white font-semibold transition-all duration-500 feature-glow cursor-pointer bg-black/60"
//             >
//               {feature.label}
//             </div>
//           ))}
//       </div>

//       {/* Logo */}
//       {showLogo && (
//         <div className="absolute inset-0 flex items-center justify-center bg-black z-50 animate-fadeOut">
//           <img
//             src="/oms.svg"
//             alt="Company Logo"
//             // className="w-48 md:w-64 h-48 md:h-64 object-contain"
//             style={{
//               width: "30vw", // 30% of viewport width
//               height: "auto", // maintains aspect ratio
//               maxWidth: "400px", // optional limit for very large screens
//               maxHeight: "400px", // optional limit for very large screens
//             }}
//           />
//         </div>
//       )}
//     </section>
//   );
// };

// export default VideoSection;

// // working final version without LOGO

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
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFeatures(true);
    }, 1000); // Wait 1 second before starting the fade-in

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (label) => {
    const contentSection = document.getElementById("header-content-section");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const event = new CustomEvent("activateTab", { detail: label });
    window.dispatchEvent(event);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background Image */}
      <img
        src="BlackBrainImage2.png"
        alt="Brain Wallpaper"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="videos/Slow_Motion_Outer_Circuit_Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Desktop Features */}
      <div className="hidden md:block">
        {showFeatures && (
          <div
            className="absolute w-full h-full"
            style={{
              animation: "fadeIn 2s forwards", // Smooth fade-in over 2 seconds
            }}
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

      {/* Mobile Features - hidden */}
      <div className="md:hidden flex flex-col items-center justify-center h-full space-y-3 px-4">
        {/* Empty - features hidden on mobile */}
      </div>

      {/* Fade-in animation */}
      <style>{`
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
