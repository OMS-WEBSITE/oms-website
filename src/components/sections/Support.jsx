import React from "react";
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
