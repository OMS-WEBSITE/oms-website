import { useEffect, useState } from "react";
import AOS from "aos";
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
  const [visibleCount, setVisibleCount] = useState(0);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    // Step 1: Show logo for 3s, then hide it
    const logoTimer = setTimeout(() => {
      setShowLogo(false);

      // Step 2: Start showing glowing features immediately
      let index = 0;
      const featureInterval = setInterval(() => {
        setVisibleCount((prev) => {
          if (prev < features.length) return prev + 1;
          clearInterval(featureInterval);
          return prev;
        });
        index++;
      }, 1000); // one new feature every second
    }, 3000);

    return () => clearTimeout(logoTimer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <img
        src="BlackBrainImage.jpg"
        alt="Brain Wallpaper"
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
          showLogo ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Gradual feature reveal with glow */}
      {!showLogo &&
        features.slice(0, visibleCount).map((feature, idx) => (
          <div
            key={idx}
            className={`absolute z-10 px-3 py-1 text-sm border border-white rounded-full text-white font-semibold transition-all duration-500 feature-glow`}
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

      {/* Logo splash */}
      {showLogo && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-50 animate-fadeOut">
          <img
            src="/oms.svg"
            alt="Company Logo"
            className="w-48 h-48 object-contain animate-fadeIn"
          />
        </div>
      )}
    </section>
  );
};

export default VideoSection;
