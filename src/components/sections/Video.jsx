// const features = [
//     { label: "Business Performance", style: { top: "-10%", left: "75%" } },
//     { label: "Accounting", style: { top: "25%", right: "-15%" } },
//     { label: "Personnel", style: { top: "50%", right: "-25%" } },
//     { label: "Supplier Management", style: { top: "80%", right: "-25%" } },
//     { label: "CRM", style: { bottom: "-15%", left: "75%" } },
//     { label: "System Configuration", style: { bottom: "-15%", left: "5%" } },
//     { label: "QMS", style: { bottom: "15%", left: "-10%" } },
//     { label: "Specification", style: { top: "20%", left: "-10%" } },
//     { label: "Assets", style: { top: "50%", left: "-20%" } },
//     { label: "Test Data Management", style: { top: "-10%", left: "10%" } },
// ];
// const VideoSection = () => {
//     return (
//         <section className="flex justify-center items-center min-h-screen bg-black">
//             <div className="relative w-full max-w-2xl">
//                 {/* Video: fills container, keeps aspect ratio */}
//                 <video
//                     className="w-full max-w-xl rounded-lg shadow-lg"
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                 >
//                     <source src="/videos/brain.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//                 {/* Text labels positioned absolutely relative to video container */}
//                 {/* {features.map((feature, idx) => (
//                     <div
//                         key={idx}
//                         className="absolute text-white text-sm whitespace-nowrap"
//                         style={{
//                             ...feature.style,
//                             transform: "translate(-50%, -50%)",
//                         }}
//                     >
//                         {feature.label}
//                     </div>
//                 ))} */}
//                 {features.map((feature, idx) => (
//                     <div
//                         key={idx}
//                         className="absolute px-3 py-1 bg-[#1a0f2f] text-white text-sm border border-white rounded-full whitespace-nowrap shadow-md"
//                         style={{
//                             ...feature.style,
//                             transform: "translate(-50%, -50%)",
//                         }}
//                     >
//                         {feature.label}
//                     </div>
//                 ))}

//             </div>
//         </section>
//     );
// };



// export default VideoSection;

import { useEffect, useState } from "react";

const features = [
    { label: "Business Performance", style: { top: "-10%", left: "75%" } },
    { label: "Accounting", style: { top: "25%", right: "-15%" } },
    { label: "Personnel", style: { top: "50%", right: "-25%" } },
    { label: "Supplier Management", style: { top: "80%", right: "-25%" } },
    { label: "CRM", style: { bottom: "-15%", left: "75%" } },
    { label: "System Configuration", style: { bottom: "-15%", left: "5%" } },
    { label: "QMS", style: { bottom: "15%", left: "-10%" } },
    { label: "Assets", style: { top: "50%", left: "-20%" } },
    { label: "Specification", style: { top: "20%", left: "-10%" } },
    { label: "Test Data Management", style: { top: "-10%", left: "10%" } },
];

const VideoSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
        }, 3000); // Every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="flex justify-center items-center min-h-screen bg-black">
            <div className="relative w-full max-w-2xl">
                <video
                    className="w-full max-w-xl rounded-lg shadow-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/videos/brain.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className={`absolute px-3 py-1 text-sm border border-white rounded-full whitespace-nowrap transition-all duration-500 ${idx === activeIndex
                            ? "bg-[#a367e7] text-white scale-110 font-semibold shadow-lg shadow-[#4a3ff7]/60"
                            : "bg-[#1a0f2f] text-white"
                            }`}
                        style={{
                            ...feature.style,
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        {feature.label}
                    </div>
                ))}

            </div>
        </section>
    );
};

export default VideoSection;
