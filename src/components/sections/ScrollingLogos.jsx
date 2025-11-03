
const ScrollingLogos = () => {
  const logos = [
    "Microsoft", "Amazon", "Google", "IBM", "Oracle", 
    "Salesforce", "Adobe", "Intel", "Cisco", "VMware"
  ];
  
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-10">
          Trusted by over 4,000 organizations
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex">
            {logos.map((logo, index) => (
              <div key={index} className="mx-8 w-40 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-600">
                {logo}
              </div>
            ))}
            {logos.map((logo, index) => (
              <div key={`repeat-${index}`} className="mx-8 w-40 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-600">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingLogos;
