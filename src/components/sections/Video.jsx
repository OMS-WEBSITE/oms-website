import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    label: "Business Performance",
    sub: [
      "Sales Report",
      "Statement",
      "Productivity Report",
      "Payroll Report",
      "Timesheet Report",
      "Sales Summary",
      "Revenue Summary",
      "Bank Summary Statement",
      "Aged Receivables",
      "DSO – Days of Sales Open",
    ],

    style: { top: "10%", right: "30%" },
  },
  {
    label: "Accounting",
    sub: ["Invoices", "Debt Collection", "Reports"],
    style: { top: "25%", right: "25%" },
  },
  {
    label: "Personnel",
    sub: [
      "Personnel Records",
      "Timesheets",
      "Manage Users",
      "Contact List",
      "Activity Approval",
    ],
    style: { top: "40%", right: "20%" },
  },
  {
    label: "Supplier Management",
    sub: ["Supplier", "Purchase Order", "Upload Bills"],
    style: { top: "55%", right: "25%" },
  },
  {
    label: "CRM",
    sub: [
      "Leads",
      "Fee Proposals and Tenders",
      "Quotation Management",
      "Managed Industry Types",
      "Clients",
      "Bounced Contacts",
      "Client Info Form",
      "Reviewed Clients",
    ],
    style: { top: "70%", right: "30%" },
  },
  {
    label: "System Configuration",
    sub: [
      "System Codes",
      "Reference Data",
      "System Images",
      "Result Table Configuration",
      "Sales Classification",
      "Branches",
      "Country / States",
      "Timesheet Activities",
      "Timesheet Locations",
      "Terms & Conditions",
      "Emails Configuration",
    ],

    style: { top: "70%", left: "30%" },
  },
  {
    label: "QMS",
    sub: [
      "Policies",
      "Quality Manual",
      "System Administration",
      "Test Record Format",
      "OHS & E Document",
      "Operation Procedure",
      "Format - System Management",
      "Format - Admin",
      "Format - Operations",
    ],
    style: { top: "55%", left: "25%" },
  },
  {
    label: "Assets",
    sub: ["Asset Management", "Client Assets Register"],
    style: { top: "40%", left: "20%" },
  },
  {
    label: "Specification",
    sub: [
      "Materials",
      "Test Specifications",
      "Process Standards",
      "Procedures",
      "Reference Data",
      "Rail Specification",
      "Result Table Config.",
      "Client Contact RTC",
    ],
    style: { top: "25%", left: "25%" },
  },
  {
    label: "Test Data Management",
    sub: [
      "Create Job",
      "Search – Add Process Data",
      "Search Jobs",
      "Statistics",
    ],
    style: { top: "10%", left: "30%" },
  },
];

const VideoSection = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    // Step 1: Show logo for 3s, then hide it
    const logoTimer = setTimeout(() => {
      setShowLogo(false);

      // Step 2: Start showing glowing features gradually
      const featureInterval = setInterval(() => {
        setVisibleCount((prev) => {
          if (prev < features.length) return prev + 1;
          clearInterval(featureInterval);
          return prev;
        });
      }, 1000); // one new feature every second
    }, 3000);

    return () => clearTimeout(logoTimer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <img
        src="BlackBrainImage.jpg"
        alt="Brain Wallpaper"
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
          showLogo ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Gradual feature reveal with hover sub-labels */}
      {!showLogo &&
        features.slice(0, visibleCount).map((feature, idx) => (
          <div
            key={idx}
            className="group absolute px-3 py-1 text-sm border border-white rounded-full text-white font-semibold transition-all duration-500 feature-glow"
            style={{
              ...feature.style,
              transform: "translate(-50%, -50%)",
              width: "200px",
              textAlign: "center",
              justifyContent: "center",
              height: "35px",
              backgroundColor: "rgba(26, 15, 47, 0.8)",
            }}
          >
            {feature.label}

            {/* Sub-labels (slide-out on hover) */}
            {/* Sub-labels (slide-out on hover, avoid overlapping) */}
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-out z-50 ${
                feature.style.right
                  ? "left-full translate-x-2 group-hover:translate-x-4"
                  : "right-full -translate-x-2 group-hover:-translate-x-4"
              } opacity-0 group-hover:opacity-100`}
            >
              {feature.sub.map((sublabel, i) => (
                <div
                  key={i}
                  className="bg-white text-black text-xs font-medium px-3 py-1 rounded-full shadow-md mb-1 whitespace-nowrap hover:bg-orange-100"
                >
                  {sublabel}
                </div>
              ))}
            </div>
          </div>
        ))}

      {/* Logo splash */}
      {showLogo && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-50 animate-fadeOut">
          <img
            src="/oms.svg"
            alt="Company Logo"
            className="w-48 h-48 object-contain animate-fadeIn"
          />
        </div>
      )}
    </section>
  );
};

export default VideoSection;
