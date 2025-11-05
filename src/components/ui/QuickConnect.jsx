import React, { useState, useEffect } from "react";
import { FaComments, FaWhatsapp, FaEnvelope, FaLink } from "react-icons/fa";

const QuickConnect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(true); // controls bounce on first load

  const togglePopup = () => setIsOpen(!isOpen);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 2000); // slightly longer
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Quick Connect Button */}
      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-2 z-50 group flex flex-col items-center">
        {/* Tooltip */}
        <span className="hidden sm:block relative mb-2 bg-gray-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Connect with us
          <span className="absolute left-1/2 -bottom-1 w-2 h-2 bg-gray-800 rotate-45 transform -translate-x-1/2"></span>
        </span>

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
              fontSize="9"
              className="uppercase tracking-widest"
            >
              <textPath
                href="#circlePath"
                startOffset="0%"
                method="align"
                spacing="auto"
              >
                CONNECT • WITH • US • CONNECT • WITH • US •
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
            <p className="text-gray-500 mb-5 text-sm sm:text-base">
              Choose how you’d like to connect with us:
            </p>

            <div className="flex flex-col gap-3">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/917829810381"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white py-2.5 sm:py-3 rounded-full hover:bg-green-600 transition text-sm sm:text-base"
              >
                <FaWhatsapp size={20} /> WhatsApp
              </a>

              {/* Email Button */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jayant@omssoftware.com.au&su=Quick%20Connect%20Inquiry&body=Hi%20Jayant,"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-500 text-white py-2.5 sm:py-3 rounded-full hover:bg-blue-600 transition text-sm sm:text-base"
              >
                <FaEnvelope size={20} /> Email
              </a>
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
