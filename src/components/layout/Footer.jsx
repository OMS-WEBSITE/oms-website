import React from "react";
import { FaLinkedin, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const socials = [
    {
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/pranay-wadyalkar-00054276/recent-activity/all/",
      color: "text-blue-700",
      hoverGlow: "shadow-lg shadow-blue-700/50",
    },
    {
      icon: <FaFacebookF size={24} />,
      href: "https://www.facebook.com/",
      color: "text-blue-600",
      hoverGlow: "shadow-lg shadow-blue-600/50",
    },
    {
      icon: <FaTwitter size={24} />,
      href: "https://twitter.com/",
      color: "text-sky-400",
      hoverGlow: "shadow-lg shadow-sky-400/50",
    },
    {
      icon: <FaYoutube size={24} />,
      href: "https://www.youtube.com/",
      color: "text-red-600",
      hoverGlow: "shadow-lg shadow-red-600/50",
    },
  ];

  return (
    <footer className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* OMS + Social Icons */}
          {/* OMS + Social Icons */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-orange-500 text-2xl font-bold mb-4 md:mb-6">
              OMS Software
            </h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 ${social.color} hover:${social.hoverGlow}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Platform</h3>
            <ul className="space-y-3">
              {[
                "Pricing",
                "Explore Organizations",
                "Explore Industries",
                "Best Practices",
                "Help Center",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="relative text-gray-600 transition-all duration-300 hover:text-orange-500 hover:pl-2 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Why OMS Software */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Why OMS Software
            </h3>
            <ul className="space-y-3">
              {[
                "How We're Different",
                "Success Stories",
                "Testimonials",
                "FAQ",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="relative text-gray-600 transition-all duration-300 hover:text-orange-500 hover:pl-2 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {["Blog", "Ebooks", "Newsletter", "About Us", "Careers"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="relative text-gray-600 transition-all duration-300 hover:text-orange-500 hover:pl-2 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-sm text-gray-600 text-center">
          © {new Date().getFullYear()}, OMS Software. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
