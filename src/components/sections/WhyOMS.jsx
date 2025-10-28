import React from "react";

const WhyOMS = () => {
  return (
    <section id="why-oms" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
          <span className="border-b-4 border-orange-500 pb-1">Why OMS</span>
        </h2>

        {/* Intro text */}
        <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
          Learn why businesses trust OMS for seamless workflow and technology solutions.
        </p>

        {/* Headline */}
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Designed with auditors — trusted by labs.
        </h3>

        {/* Body */}
        <p className="max-w-3xl mx-auto text-gray-700 text-sm sm:text-base leading-relaxed mb-6 px-2 sm:px-0">
          OMS Software unites <strong>LIMS</strong>, <strong>ERP</strong>, and <strong>QMS</strong> into one secure platform.
          Labs use it to stay compliant, deliver faster, and maintain long-term traceability without manual effort.
        </p>

        {/* Divider line */}
        <div className="h-0.5 w-20 bg-orange-500 mx-auto my-6"></div>

        {/* Trust statement */}
        <p className="max-w-3xl mx-auto text-gray-700 text-sm sm:text-base leading-relaxed px-2 sm:px-0">
          OMS is a proud member of the <strong>Indian Society for Non-Destructive Testing (ISNT)</strong> and the{" "}
          <strong>American Society for Nondestructive Testing (ASNT)</strong>.
          These affiliations reflect our ongoing commitment to uphold international standards and contribute to the NDT
          community’s digital transformation.
        </p>
      </div>
    </section>
  );
};

export default WhyOMS;
