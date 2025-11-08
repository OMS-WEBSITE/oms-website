import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaEnvelope, FaLink } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const QuickConnect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(true); // controls bounce on first load
  const { language } = useLanguage(); // get detected language

  const togglePopup = () => setIsOpen(!isOpen);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 2000); // slightly longer
    return () => clearTimeout(timer);
  }, []);

  // if (!language || language === "Detecting...") return null;

  console.log("before normalize", language);
  const lang = language?.toLowerCase() || "";

  console.log("after normalize", lang);

  const isIndia = lang === "en-in";
  console.log("is india", isIndia);
  const isAustralia = lang === "en-au";
  console.log("is aus", isAustralia);

  return (
    <>
      {/* Floating Quick Connect Button */}
      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-2 z-50 group flex flex-col items-center">
        <button
          onClick={togglePopup}
          className="relative flex items-center justify-center w-11 h-11 sm:w-16 sm:h-16 md:h-18 md:w-18 
     rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 
     transition-all duration-300 cursor-pointer focus:outline-none 
     focus:ring-2 focus:ring-orange-400 animate-glow-pulse"
          title="Quick Connect"
        >
          {/* Chain Icon (Center) */}
          <FaLink size={22} className="z-10" />

          {/* Circular Text */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full text-[8px] sm:text-[12px] pointer-events-none"
          >
            <defs>
              {/* Increase radius from 30 → 35 (or higher if needed) */}
              <path
                id="circlePath"
                d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
              />
            </defs>
            <text
              fill="white"
              fontSize="8"
              className="uppercase tracking-widest"
            >
              <textPath
                href="#circlePath"
                startOffset="0%"
                method="align"
                // spacing="auto"
              >— ONE CLICK, INSTANT REPLY  —  OMS SOFTWARE —
              </textPath>
            </text>
          </svg>
        </button>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-0"
          onClick={togglePopup}
        >
          <div
            className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 w-full max-w-xs sm:max-w-sm text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-orange-500">
              Quick Connect
            </h2>
            {/* <p className="text-gray-500 mb-5 text-sm sm:text-base whitespace-pre-line">
              We’d love to hear from you. Whether you want to schedule a product
              demo, discuss your requirements, or ask a quick question — reach
              out in the way that’s most convenient for you.
            </p> */}

            <div className="flex flex-col gap-3">
              {/* {isIndia && ( */}
              {(isIndia || (!isIndia && !isAustralia)) && (
                <>
                  <p className="text-gray-500 mb-5 text-sm sm:text-base whitespace-pre-line">
                    We’d love to hear from you. Whether you want to schedule a
                    product demo, discuss your requirements, or ask a quick
                    question — reach out in the way that’s most convenient for
                    you.
                  </p>
                  {/* WhatsApp QR */}
                  <div className="flex flex-col items-center bg-gray-50 p-3 rounded-xl shadow-inner">
                    <p className="text-gray-700 mb-2 text-sm sm:text-base">
                      Scan QR to WhatsApp
                    </p>
                    <img
                      src="/whatsappQR1.jpg"
                      alt="WhatsApp QR Code"
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded"
                    />
                  </div>

                  {/* WhatsApp Button with Prefilled Message */}
                  <a
                    href={`https://wa.me/917829810381?text=${encodeURIComponent(
                      `Hi OMS Software team,
    I would like to know more about OMS Software and request a demo.
    Name:
    Company:
    City / Country:
    Type of business: (NDT Lab / Calibration Lab / Fabrication / Inspection / Other)
    Main interest: (Testing reports / Welding WPS–WQR / Calibration & assets / ERP & billing)
    Preferred time for a call / demo:`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 text-white py-2.5 sm:py-3 rounded-full hover:bg-green-600 transition text-sm sm:text-base"
                  >
                    <FaWhatsapp size={20} /> WhatsApp
                  </a>

                  {/* Email Button */}
                  <a
                    href="mailto:jayant@omssoftware.com.au?subject=Quick%20Connect%20Inquiry&body=Hi%20OMS%20Software%20team,%0AI%20would%20like%20to%20know%20more%20about%20OMS%20Software%20and%20request%20a%20demo.%0A%0AName:%0ACompany:%0ACity%20/%20Country:%0AType%20of%20business:%20(NDT%20Lab%20/%20Calibration%20Lab%20/%20Fabrication%20/%20Inspection%20/%20Other)%0AMain%20interest:%20(Testing%20reports%20/%20Welding%20WPS–WQR%20/%20Calibration%20&%20assets%20/%20ERP%20&%20billing)%0APreferred%20time%20for%20a%20call%20/%20demo:"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-blue-500 text-white py-2.5 sm:py-3 rounded-full hover:bg-blue-600 transition text-sm sm:text-base"
                  >
                    <FaEnvelope size={20} /> Email
                  </a>
                </>
              )}
              {isAustralia && (
                <>
                  <p className="text-gray-500 mb-5 text-sm sm:text-base whitespace-pre-line">
                    We’d love to hear from you. Whether you want to schedule a
                    product demo, discuss your requirements, or ask a quick
                    question — please reach out via email.
                  </p>
                  <a
                    href="mailto:systems@omssoftware.com.au?subject=Quick%20Connect%20Inquiry&body=Hi%20OMS%20Software%20team,%0AI%20would%20like%20to%20know%20more%20about%20OMS%20Software%20and%20request%20a%20demo.%0A%0AName:%0ACompany:%0ACity%20/%20Country:%0AType%20of%20business:%20(NDT%20Lab%20/%20Calibration%20Lab%20/%20Fabrication%20/%20Inspection%20/%20Other)%0AMain%20interest:%20(Testing%20reports%20/%20Welding%20WPS–WQR%20/%20Calibration%20&%20assets%20/%20ERP%20&%20billing)%0APreferred%20time%20for%20a%20call%20/%20demo:"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-blue-500 text-white py-2.5 sm:py-3 rounded-full hover:bg-blue-600 transition text-sm sm:text-base"
                  >
                    <FaEnvelope size={20} /> Email
                  </a>
                </>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute top-2 right-3 text-black-400 hover:text-black-600 text-lg sm:text-xl cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default QuickConnect;
