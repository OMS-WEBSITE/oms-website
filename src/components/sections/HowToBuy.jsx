import React from "react";
import {
  FaLaptopCode,
  FaClipboardList,
  FaFileContract,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";

const HowToBuy = () => {
  return (
    <section id="how-to-buy" className="py-16 sm:py-20 bg-white">
      <div className="w-[90%] mx-auto py-4 px-2 text-center">
        {" "}
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
          <span className="border-b-4 border-orange-500 pb-1">How to Buy</span>
        </h2>
        {/* Subheading */}
        <p className="text-center max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed mb-10">
          Follow these simple steps to purchase and implement OMS solutions for
          your business.
        </p>
        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-6">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <FaLaptopCode className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              Request a live demo
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Experience OMS firsthand and see how it fits your workflow.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <FaClipboardList className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              Define modules and reporting scope
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Choose the specific features and reports your lab requires.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <FaFileContract className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              Receive proposal and subscription plan
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Get a tailored plan and quotation based on your requirements.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <FaDatabase className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              Onboard your lab data
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Migrate and configure your existing lab data securely.
            </p>
          </div>
        </div>
        {/* Final Step */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center text-center bg-orange-50 border border-orange-200 p-6 sm:p-8 rounded-2xl shadow-md">
          <FaRocket className="text-orange-500 text-4xl mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
            Go live in 2–3 weeks with training and support
          </h3>
          <p className="text-gray-600 text-sm sm:text-base max-w-md">
            Our experts ensure a smooth launch, training, and ongoing support
            for your team 🚀.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
