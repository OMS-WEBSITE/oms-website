const WhyOMS = () => {
  return (
    <section
      className="min-h-screen bg-white py-10 sm:py-16 md:py-20"
      id="why-oms"
    >
      <div className="w-[90%] mx-auto py-4 px-2 text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
          <span className="border-b-4 border-orange-500 pb-1">🌐 Why OMS</span>
        </h2>

        {/* Intro */}
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Built with auditors. Trusted by laboratories.
        </h3>

        {/* Story / Description */}
        <p className="max-w-4xl mx-auto text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
          It began with a familiar frustration - labs buried under spreadsheets,
          versioned PDFs, and last-minute audit prep. Each tool solved a
          fragment of the problem, but none spoke to the whole workflow. So OMS
          was built - a single, secure system that unites <strong>LIMS</strong>,{" "}
          <strong>ERP</strong>, and <strong>QMS</strong>, the way laboratories
          actually operate.
        </p>

        <p className="max-w-4xl mx-auto text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
          Over the years, OMS has grown into more than software. It’s become a
          bridge between compliance and convenience - trusted by auditors,
          valued by managers, and relied on by teams who want their systems to
          stay out of the way and just work.
        </p>

        {/* Divider */}
        <div className="h-0.5 w-20 bg-orange-500 mx-auto my-6"></div>

        {/* Highlights */}
        <div className="text-left max-w-4xl mx-auto space-y-8 text-gray-700 text-sm sm:text-base">
          <div>
            <h4 className="text-lg font-semibold text-orange-600 mb-2">
              🧩 One Platform for Every Process
            </h4>
            <p>
              Testing, calibration, logistics, invoicing, quality - everything
              flows together. One login, one live record of truth.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-orange-600 mb-2">
              🔒 Compliance Built In
            </h4>
            <p>
              Automatic ISO/IEC 17025 | 17020 | 9001 audit trails capture every
              action and signature - so the next audit feels like a
              confirmation, not a chase.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-orange-600 mb-2">
              ⚙️ Designed with Auditors
            </h4>
            <p>
              We co-created OMS with QA managers, NABL assessors, and engineers
              who know the process inside out. Every feature has a reason.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-orange-600 mb-2">
              📈 Faster Workflows
            </h4>
            <p>
              Automation trims the steps between quotation, testing, and report
              delivery. ULR + QR verification keeps every report authentic and
              instantly verifiable.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-orange-600 mb-2">
              🧾 Ten-Year Traceability
            </h4>
            <p>
              Every report, certificate, and approval stays preserved and
              searchable for a decade - even after subscription expiry. Clients
              retain secure access to what matters.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-orange-600 mb-2">
              🤝 Grounded in Global Standards
            </h4>
            <p>
              OMS is built around internationally recognized frameworks such as
              ISO/IEC 17025, ISO 9001, and relevant ASTM and ASME standards -
              helping your lab maintain compliance and consistency across every
              test and report.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-0.5 w-20 bg-orange-500 mx-auto my-8"></div>

        {/* Conclusion */}
        <p className="max-w-4xl mx-auto text-gray-700 text-sm sm:text-base leading-relaxed">
          <strong>The result:</strong> Labs no longer juggle systems or chase
          records. They operate with clarity, speed, and proof - powered by OMS.
        </p>
      </div>
    </section>
  );
};

export default WhyOMS;

// // animation
// import { motion } from "framer-motion";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const highlights = [
//   {
//     title: "🧩 One Platform for Every Process",
//     desc: "Testing, calibration, logistics, invoicing, quality — everything flows together. One login, one live record of truth.",
//   },
//   {
//     title: "🔒 Compliance Built In",
//     desc: "Automatic ISO/IEC 17025 | 17020 | 9001 audit trails capture every action and signature — so the next audit feels like a confirmation, not a chase.",
//   },
//   {
//     title: "⚙️ Designed with Auditors",
//     desc: "Co-created with QA managers, NABL assessors, and engineers who know the process inside out. Every feature has a reason.",
//   },
//   {
//     title: "📈 Faster Workflows",
//     desc: "Automation trims the steps between quotation, testing, and report delivery. ULR + QR verification keeps every report authentic and verifiable.",
//   },
//   {
//     title: "🧾 Ten-Year Traceability",
//     desc: "Every report, certificate, and approval stays preserved and searchable for a decade — even after subscription expiry.",
//   },
//   {
//     title: "🤝 Grounded in Global Standards",
//     desc: "OMS aligns with ISO/IEC 17025, ISO 9001, and ASTM/ASME standards — ensuring consistency across every test and report.",
//   },
// ];

// const WhyOMS = () => {
//   return (
//     <section
//       id="why-oms"
//       className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/40 to-white py-16 sm:py-24"
//     >
//       {/* Decorative Gradient Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,166,0,0.1),transparent_60%)] pointer-events-none" />

//       <div className="relative w-[90%] max-w-6xl mx-auto text-center">
//         {/* Title */}
//         <motion.h2
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
//         >
//           {/*  <span className="text-orange-500"></span> */}
//           🌐<span className="border-b-4 border-orange-500 pb-1">Why OMS</span>
//         </motion.h2>

//         {/* Subtitle */}
//         <motion.h3
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="show"
//           className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6"
//         >
//           Built with auditors. Trusted by laboratories.
//         </motion.h3>

//         {/* Story */}
//         <motion.p
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="show"
//           className="max-w-3xl mx-auto text-gray-600 text-base leading-relaxed mb-6"
//         >
//           It began with a familiar frustration — labs buried under spreadsheets,
//           versioned PDFs, and last-minute audit prep. OMS was built as a single,
//           secure system that unites <strong>LIMS</strong>, <strong>ERP</strong>,
//           and <strong>QMS</strong> — the way laboratories actually operate.
//         </motion.p>

//         <motion.p
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="show"
//           className="max-w-3xl mx-auto text-gray-600 text-base leading-relaxed mb-10"
//         >
//           Over the years, OMS has become a bridge between compliance and
//           convenience — trusted by auditors, valued by managers, and relied on
//           by teams who want their systems to stay out of the way and just work.
//         </motion.p>

//         {/* Highlights Grid */}
//         <motion.div
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="show"
//           className="grid md:grid-cols-2 gap-10 text-left text-gray-700 max-w-5xl mx-auto"
//         >
//           {highlights.map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.03 }}
//               className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-orange-100 p-6"
//             >
//               <h4 className="text-lg font-semibold text-orange-600 mb-2">
//                 {item.title}
//               </h4>
//               <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Conclusion */}
//         <motion.div
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="show"
//           className="mt-12"
//         >
//           <div className="h-0.5 w-16 bg-orange-500 mx-auto mb-6"></div>
//           <p className="max-w-3xl mx-auto text-gray-700 text-base leading-relaxed">
//             <strong>The result:</strong> Labs no longer juggle systems or chase
//             records — they operate with clarity, speed, and proof — powered by{" "}
//             <span className="text-orange-600 font-semibold">OMS.</span>
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default WhyOMS;
