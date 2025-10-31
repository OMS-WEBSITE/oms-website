import React from "react";

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="w-[90%] mx-auto py-4 px-2">
        {" "}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
          <span className="border-b-4 border-orange-500 pb-1">Partners</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600">
          Meet our valued partners and collaborators who make our solutions
          possible.
        </p>
        {/* Add partner logos or showcase here */}
      </div>
    </section>
  );
};

export default Partners;
