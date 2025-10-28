import React from "react";
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
