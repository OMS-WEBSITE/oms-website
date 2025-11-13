import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <div className="py-12 sm:py-16 bg-gradient-to-r from-orange-100 to-blue-100">
      <div className="container mx-auto max-w-3xl text-center px-4">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
          The only{" "}
          <span className="marker-underline">complete audit solution</span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
          Since 2010, over 4,000 organizations have used OMS Software to find
          and win more audit opportunities, empowering them to expand their
          impact on critical missions such as evaluating Quality & Compliance
          measures, ensuring data protection, and improving IT security
          standards.
        </p>

        {/* Button */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
          <Button
            onClick={() =>
              window.dispatchEvent(new CustomEvent("openQuickConnect"))
            }
            className="hover:cursor-pointer bg-gradient-to-r from-[#ea885e] to-[#fe781f] 
                       hover:from-orange-500 hover:to-orange-600 text-white 
                       py-3 px-6 rounded-md shadow-md hover:shadow-lg 
                       transition-all duration-300 w-full sm:w-auto"
          >
            Request Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
