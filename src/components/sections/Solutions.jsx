import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

const Solutions = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: "nabl-lab-verification",
      title:
        "NABL ULR + QR Verification - Ensure every report is authentic, traceable, and verifiable online.",
      content: (
        <>
          <p>
            OMS Software enables instant ULR and QR-based verification for
            NABL-accredited laboratories, ensuring every report you issue or
            receive is authentic, tamper-proof, and traceable, in full
            compliance with NABL's ULR and QR code requirements. This feature
            allows instant verification of reports and certificates issued under
            accredited scopes.
          </p>
          <p>
            Built for testing, inspection, and calibration laboratories, OMS
            Software is a cloud-based LIMS + ERP platform that simplifies
            ISO/IEC 17025, 17020, and 9001 compliance, accelerates audit
            preparation, and provides real-time operational visibility.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            🔍 Verify Reports Instantly
          </h4>
          <p>
            Introducing OMS ULR and QR Verification, a digital gateway to
            confirm the authenticity of any test report or calibration
            certificate in seconds.
          </p>
          <ul className="list-disc ml-5">
            <li>✅ No login required</li>
            <li>✅ Real-time and secure</li>
            <li>✅ Free and open to all</li>
          </ul>
          <p>
            Whether you're a lab manager, auditor, manufacturer, or client, this
            tool ensures every NABL-accredited report you handle is genuine,
            traceable, and verifiable.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Why It Matters
          </h4>
          <ul className="list-disc ml-5">
            <li>🔒 Prevent Fraud: Stop misuse or alteration of lab reports</li>
            <li>
              🕒 Save Time: Eliminate manual checks and back-and-forth emails
            </li>
            <li>
              🧾 Stay Compliant: Maintain NABL traceability requirements with
              ease
            </li>
            <li>
              💡 Build Trust: Deliver transparency with verified digital
              documentation
            </li>
          </ul>

          <p className="italic mt-4">
            "Transparency builds confidence. OMS Software's ULR and QR
            verification create a trustworthy digital quality ecosystem for
            accredited laboratories."
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Built for Labs that Lead
          </h4>
          <p>
            OMS Software consolidates all lab data - jobs, assets, personnel,
            and certifications - into one secure platform with:
          </p>
          <ul className="list-disc ml-5">
            <li>
              Accreditation-ready modules for ISO/IEC 17025, 17020, and 9001
            </li>
            <li>
              Comprehensive workflows for NDT, mechanical, chemical,
              calibration, and environmental testing laboratories
            </li>
            <li>Digital asset and calibration registers with reminders</li>
            <li>
              Real-time reporting, analytics, and audit-ready documentation
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Testing Capabilities
          </h4>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Non-Destructive Testing (NDT)
          </h4>
          <p>
            Comprehensive coverage for component, weld, and material integrity
            assessment.
          </p>
          <ul className="list-disc ml-5">
            <li>
              Techniques: Ultrasonic Testing (UT), Radiographic Testing (RT),
              Magnetic Particle Testing (MT), Penetrant Testing (PT), Eddy
              Current Testing (ET), Phased Array Ultrasonic Testing (PAUT),
              Time-of-Flight Diffraction (TOFD)
            </li>
            <li>
              Standards: ASME Section V, ASTM E165, E1444, E213, E273, ISO
              17638, ISO 9712, AWS D1.1, IS 13805
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Mechanical Testing
          </h4>
          <p>
            Evaluation of material strength, toughness, and hardness under
            controlled conditions.
          </p>
          <ul className="list-disc ml-5">
            <li>
              Tests: Tensile, Bend, Impact (Charpy/Izod), Hardness (Brinell,
              Rockwell, Vickers), Proof Load, Shear, Compression, Flattening,
              Cupping
            </li>
            <li>
              Standards: ASTM E8/E8M, ASTM E23, ASTM A370, IS 1608, IS 1599, IS
              1500, ISO 6892, ISO 6508
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Chemical Testing
          </h4>
          <p>
            Chemical analysis for composition verification and contamination
            control.
          </p>
          <ul className="list-disc ml-5">
            <li>
              Techniques: Wet chemical analysis, OES, AAS, ICP-OES,
              Carbon-Sulphur Analysis
            </li>
            <li>
              Standards: ASTM E415, ASTM E1019, IS 228 series, ISO 14284, IS
              1762
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Environmental Testing
          </h4>
          <p>
            Performance evaluation under simulated climatic and environmental
            conditions.
          </p>
          <ul className="list-disc ml-5">
            <li>
              Temperature & Humidity: MIL-STD-810, DO-160, JSS-55555,
              IEC-60068-2-1/-2/-14/-30/-78, IS-9000 (Part II–VI), ISO-9022 (Part
              2)
            </li>
            <li>
              Corrosion (Salt Spray): ASTM B-117, GM 4465P, MIL-STD-810,
              MIL-STD-202, ISO 9227
            </li>
            <li>
              Dust & Rain Simulation – IP Tests: DIN/IEC 60529, DIN 40050 Part 9
            </li>
            <li>
              Thermal Shock: IEC 60749-25, IEC 60068-2-14, IEC 61747-5,
              MIL-STD-202
            </li>
            <li>Vibration & Shock: MIL-STD-810, IEC 60068 series, ISO 9022</li>
          </ul>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Don't Just Test. Verify.
          </h4>
          <p>
            Join leading NABL-accredited laboratories adopting OMS and ULR + QR
            verification to ensure every report stands up to scrutiny.
          </p>
        </>
      ),
    },
    {
      id: "quality-management-documents",
      title:
        "Quality Management Documents - Version-controlled policies, procedures, and records in one repository.",
      content: (
        <>
          <p>
            OMS enables the company to deliver exceptional quality service to
            the clients by giving them a robust, document framework to store,
            manage and document processes, procedures, specifications, methods
            and responsibilities.
          </p>
          <p>
            Quality managers / Business owners take ownership on creating /
            managing documents as per the company requirements.
          </p>
          <p>
            We provide templates for most of the document types that later can
            be customized based on the company needs.
          </p>
          <p>
            The following screens shows how OMS allows Quality managers /
            Business owners to manage documents for various quality types. Each
            document belongs to one type which could be:
          </p>
          <img
            src="/images/Solutions-quality-management-documents.png"
            alt="Solutions-quality-management-documents"
            className="my-4 mx-auto shadow-md object-contain w-auto h-auto max-w-full"
          />

          <ul className="list-disc ml-5">
            <li>Policy document</li>
            <li>Quality manual</li>
            <li>System procedures</li>
            <li>OHS & E documents</li>
            <li>Operation procedures</li>
            <li>System management forms</li>
            <li>Admin forms</li>
            <li>Operations forms</li>
            <li>Test record formats</li>
            <li>Report formats</li>
          </ul>
          <p>
            New documents pertaining to quality management can be created, and
            relevant document uploaded for this type.
          </p>
          <img
            src="/images/Solutions-create.png"
            alt="Solutions-create"
            className="my-4 mx-auto shadow-md object-contain w-auto h-auto max-w-full"
          />
          {/* <img
            src="/images/solutions-create-new.png"
            alt="solutions-create-new"
            className="my-4 mx-auto shadow-md object-contain w-auto h-auto max-w-full"
          /> */}
          <p>
            OMS displays Edit, View, Hide, View and Download buttons on search
            grid depending on user authorization. Quality Managers are given
            full access to create new Documents, and update / hide existing
            documents. We treat Quality Managers as Competent Personnel and give
            full access to the Quality Management module.
          </p>
          <img
            src="/images/solutions-search.png"
            alt="solutions-search"
            className="my-4 mx-auto shadow-md object-contain w-auto h-auto max-w-full"
          />
          <img
            src="/images/solutions-system-procedures.png"
            alt="solutions-system-procedures"
            className="my-4 mx-auto shadow-md object-contain w-auto h-auto max-w-full"
          />
        </>
      ),
    },
    {
      id: "Job Test Record Management",
      title:
        "Job Test Record Management - Full traceability from sample registration to certificate issuance.",
      content: (
        <>
          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Secured Signing of Reports
          </h4>
          <p>
            Unlike other fragmented or individual document signing software
            systems, the OMS Software Platform is a fully integrated system,
            designed to save your company at least $55 per user, per month.
          </p>
          <p>
            Within OMS Software, a signature of a signatory is uploaded only
            once and stored securely within the program. No other users from
            your company can view or download or misuse the uploaded signature.
          </p>
          <p>
            When an OMS Software user is approved as a signatory, in a specific
            test method, or inspection procedure or a manufacturing process,
            only then will the OMS platform prompt a user for the signature
            feature.
          </p>
          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            With a simple single click, a document can be viewed as a PDF, then
            digitally signed and then emailed to the pre-loaded email ID..
          </h4>
          <img
            src="/images/Solutions-Report-sign.jpg"
            alt="Solutions-Report-sign"
            className="my-4 mx-auto shadow-md object-contain w-auto h-auto max-w-full"
          />
          <p>
            This simple process eliminates the entire process of downloading
            documents and then printing, picking from the printer and then
            manually signing and then scanning, storing on your server and then
            emailing to the concerned party. It also eliminates unsatisfactory
            security process wherein some organisations import their signatures
            in a word document and then convert that document into a PDF.
          </p>
          <p>
            As the OMS platform is designed to be fully traceable and auditable
            software, any changes by your staff to the status of a report such
            as signing or emailing is automatically registered. This provides
            additional productivity suite to your organisation to review when
            and who signed or emailed reports or documents, if and when needed.
          </p>
          <p>
            The integrated, digitalised & fully secured process in the OMS
            platform can save your organisation’s stationary cost and manual
            document handling cost, resulting in increased productivity.
          </p>
          <p>As an example,</p>
          <p>
            if your company is generating approximately 100 reports per month
            and your company’s average operating cost is approximately
            $2.50/minute then at a rate of 5minutes per report you would be
            saving approximately $15,000 per annum ($2.50 x 5 x 100 x 12) as a
            minimum cost. This does not include the cost of stationery, printer
            ink and asset depreciation or rental cost.
          </p>
          <p>
            In addition to the cost saving, you are indirectly contributing to
            the environmental sustainability by elimination of printing; which
            is more significant than cost saving.
          </p>
          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Signature security on reports
          </h4>
          <p> OMS Software is all about data security and privacy of users.</p>
          <p>
            In most document signing software, signature is either adopted to
            some random cursive font generated your full name or your signature
            is uploaded into their document or their system. This signature is
            then printed on documents which can copied by other parties without
            your consent and pasted in other documents again without your
            consent.
          </p>
          <p>
            In the OMS platform, we handle signatures differently to ensure
            integrity of the signature is secured and maintained. Firstly, any
            signature printed on a document is digitally watermarked so that the
            copied signature cannot be used in other documents as the document
            number will not match.
          </p>
          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Reports on hold
          </h4>
          <p>
            At times a signatory may find an issue or problem with a report and
            cannot sign off final approval. The OMS platform has a feature that
            enables the signatory to include comments for the tester to receive
            via a pop-up on their login similar to the below.
          </p>
        </>
      ),
    },
    {
      id: "client-management",
      title:
        "Client Management Portal - Clients raise requests, upload data, and download verified reports.",
      content: (
        <>
          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Your clients. Their data. One connected experience.
          </h4>

          <p>
            The OMS Client Management Portal links accredited laboratories and
            their clients through a secure, shared cloud network - bringing
            reports, traceability, and communication together in one place.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            🔍 Unified Access
          </h4>

          <p>
            Clients can log in to a single portal to view and download all their
            verified reports, certificates, and invoices. The data follows the
            client, not the file - creating a continuous, 10-year digital
            archive of every test, calibration, and inspection.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            🧾 QR-Verified Reports
          </h4>

          <p>
            Every report carries a tamper-proof QR code that connects directly
            to the original record in OMS Cloud. Scanning it - from a PDF,
            print, or mobile - instantly reveals the verified report with lab
            details, accreditation scope, parameters, calibration references,
            and signatories. No login required. The audit trail remains intact
            for ten years.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            🗂️ Complete Digital Archive
          </h4>

          <p>
            Clients can search by job, project, or date; filter by scope or test
            type; and compare historical results. All NABL-verified certificates
            stay accessible and traceable across years and audits.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            👥 Controlled Sharing
          </h4>

          <p>
            Clients can grant timed or role-based access to auditors,
            inspectors, or end-customers - maintaining compliance while
            protecting confidentiality.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            🔒 Secure, Role-Based Control
          </h4>

          <p>
            Built with enterprise-grade encryption and aligned with ISO/IEC
            17025 | 17020 | 9001, the portal ensures every report is stored,
            shared, and retrieved securely.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Why it matters:
          </h4>

          <p>
            The OMS Client Management Portal eliminates duplicate testing,
            reduces back-and-forth communication, and builds lasting trust
            through transparent, verified access to data.
          </p>
        </>
      ),
    },
    {
      id: "specifications",
      title:
        "Specifications Database - Keep reference standards and acceptance limits up-to-date.",
      content: (
        <>
          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Centralized reference. Zero re-entry.
          </h4>

          <p>
            The OMS Specifications Database is the platform’s reference library
            - powering every pre-populated dropdown menu and reducing repetitive
            data entry across the system. It ensures consistency, accuracy, and
            speed in how your lab records technical data.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            🧾 Unified Reference Library
          </h4>

          <p>
            All specification data - from material properties to process
            standards - lives in one centralized, searchable database,
            automatically linked to relevant test or calibration records.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            ⚙️ Materials Specifications
          </h4>

          <p>Store and standardize critical material information such as:</p>

          <ul className="list-disc pl-6">
            <li>Material name and grade</li>
            <li>Description and engineering properties</li>
            <li>Charpy impact strength</li>
            <li>
              Chemical composition and other physical or chemical attributes
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            🧪 Test Specifications
          </h4>

          <p>
            Capture key test details to align with your client or standard
            requirements:
          </p>

          <ul className="list-disc pl-6">
            <li>Client-specific acceptance criteria</li>
            <li>Product or manufacturing standards</li>
            <li>Acceptance limits from ISO, ASTM, or internal methods</li>
          </ul>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            🚆 Rail & Specialized Specifications
          </h4>

          <p>Define custom rail or sector-specific parameters including:</p>

          <ul className="list-disc pl-6">
            <li>Client-provided acceptance criteria</li>
            <li>Product and manufacturing standards</li>
            <li>Acceptance conditions from governing standards</li>
          </ul>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            🔧 Process Standards
          </h4>

          <p>Document every process step with:</p>

          <ul className="list-disc pl-6">
            <li>Standard number and technique</li>
            <li>Procedure name and description</li>
            <li>Associated module and active status</li>
          </ul>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            📑 Reference Data Control
          </h4>

          <p>
            The Reference Data module defines reusable master values (Key, Name,
            Value, Order) used across OMS - ensuring standardization in dropdown
            menus and consistency across all modules.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Why it matters:
          </h4>

          <p>
            Manual data entry invites errors. The OMS Specifications Database
            saves time, enforces uniformity, and ensures that every report,
            record, and result speaks the same technical language.
          </p>
        </>
      ),
    },
    {
      id: "asset-management",
      title:
        "Asset Management - Equipment inventory with calibration and service alerts.",
      content: (
        <>
          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Control, maintain, and trace every asset - digitally.
          </h4>

          <p>
            From calibration equipment to vehicles, the OMS Asset Management
            Module helps organizations of any size track ownership, maintenance,
            valuation, and compliance - all within one connected system.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            🧾 Assign & Track Assets
          </h4>

          <p>
            Easily assign assets to staff, departments, or projects. Each item
            is logged with complete history - usage, location, value, and linked
            jobs - ensuring full accountability.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            🔔 Smart Reminders
          </h4>

          <p>Automated notifications keep your team on schedule with:</p>
          <ul className="list-disc pl-6">
            <li>Maintenance due dates</li>
            <li>Registration renewals</li>
            <li>Calibration or inspection intervals</li>
          </ul>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            ⚙️ Preventive Maintenance
          </h4>

          <p>
            Never miss a maintenance cycle again. OMS automatically alerts
            technicians and managers ahead of due dates, keeping operations
            compliant and safe.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            📉 Depreciation & Valuation
          </h4>

          <p>
            Generate real-time dollar values for all assets to support
            insurance, audit, and financial reporting requirements.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            📊 Year-End Reporting
          </h4>

          <p>
            Export complete asset registers to Excel for statutory and year-end
            reporting - including asset values, active/inactive status, and last
            maintenance date.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            🧩 Linked Operations
          </h4>

          <p>
            Connect assets directly to jobs or work orders, giving teams context
            for usage, test history, and upcoming maintenance tasks.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            📚 Product Manuals & Records
          </h4>

          <p>
            Upload and store user manuals, calibration certificates, or
            compliance documents directly with the asset record - all
            retrievable in seconds.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Why it matters:
          </h4>

          <p>
            OMS brings asset control out of spreadsheets and into a live,
            traceable system. It saves time, reduces downtime, and helps teams
            focus on performance instead of paperwork.
          </p>
        </>
      ),
    },
    {
      id: "employee-management",
      title:
        "Employee Management - Track competencies, approvals, and workload distribution.",
      content: (
        <>
          <p className="mb-3">
            The processes within the OMS Platform assist in managing employees,
            enabling them to perform their best each day and contribute toward
            achieving your business goals.
          </p>

          <p className="mb-4">
            There are many tasks that fall under employee management, and the
            OMS Platform covers the following areas:
          </p>

          {/* Timesheets */}
          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Timesheets
          </h4>
          <p className="mt-2">
            Time worked can be broken down into numerous activities such as
            forklift operations, coatings, NDT, meetings, and more. The list of
            activities can also be customized to meet your business
            requirements.
          </p>

          {/* Allowances and Leave */}
          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Allowances and Leave
          </h4>
          <p className="mt-2">
            In compliance with legislative requirements, staff can include their
            car allowance, meal allowance, living away from home allowance, and
            leave within the same timesheet.
          </p>

          {/* Invoicing for Staff Time */}
          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Invoicing for Staff Time
          </h4>
          <p className="mt-2">
            Time entries can be directly allocated to a client job number,
            allowing seamless invoicing for staff time and improving billing
            accuracy.
          </p>

          {/* Employee Records */}
          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Employee Records (Certification, Qualification, and Skills
            Management)
          </h4>
          <p className="mt-2">
            Staff records can be easily managed within the OMS Platform. The
            system lists all certifications, qualifications, or competencies
            associated with the logged-in user, ensuring accurate tracking and
            compliance.
          </p>
        </>
      ),
    },
    {
      id: "accounting-finance",
      title:
        "Accounting Finance - Seamless quote-to-cash cycle and project cost tracking.",
      content: (
        <>
          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Accurate. Transparent. Effortless.
          </h4>

          <p>
            OMS Software offers a complete suite of general accounting
            (bookkeeping) features - seamlessly integrated with your lab and
            business workflows.
          </p>

          <p>
            Beyond standard ledgers and journals, OMS introduces niche features
            built specifically for technical service organizations, reducing
            manual effort and improving visibility across departments.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            ⚙️ Core Accounting
          </h4>

          <p>
            Manage payables, receivables, ledgers, and trial balances with
            complete audit trails and secure, role-based access control.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            ⏱️ Productivity Enhancements
          </h4>

          <p>
            Automate routine accounting processes - from bank feed
            reconciliation to recurring invoices - saving valuable time and
            minimizing human error.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            🧾 Traceability & Audit Readiness
          </h4>

          <p>
            Every transaction is time-stamped, version-controlled, and
            cross-linked to operational data, ensuring your financials remain
            transparent and audit-ready at all times.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            📊 Integrated Dashboards
          </h4>

          <p>
            Visualize revenue trends, outstanding invoices, and cash flow
            insights directly alongside project and client data for a complete
            financial overview.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Why it matters:
          </h4>

          <p>
            Accounting isn’t just about numbers - it’s the foundation of trust
            and sustainability. OMS ensures your financial data stays
            consistent, compliant, and seamlessly connected across every part of
            your operation.
          </p>
        </>
      ),
    },
    {
      id: "swms-jsa",
      title: "Safe Work Method Statement (SWMS) / Job Safety Analysis (JSA)",
      content: (
        <>
          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Plan safer. Work smarter.
          </h4>

          <p>
            Our integrated SWMS / JSA module helps teams identify risks, record
            controls, and maintain compliance-whether the work happens in a lab,
            workshop, or out in the field.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            ⚙️ Digital Templates
          </h4>

          <p>
            Create and reuse standardized SWMS or JSA forms for recurring tasks,
            ensuring consistency across projects and teams.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            📊 Risk Matrix Builder
          </h4>

          <p>
            Rate each hazard by severity and likelihood, generate automatic risk
            scores, and visualize results in a clear color-coded grid.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            🧾 Method + Risk in One View
          </h4>

          <p>
            Combine Method Statement and Risk Assessment (MSRA) for full
            traceability-from planned activity to control measures and residual
            risk.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            ✍️ Sign-off & Version Control
          </h4>

          <p>
            Capture digital approvals from supervisors, technicians, or clients
            with date and time stamps-ready for any audit.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            🧾 Attachments & Evidence Upload
          </h4>

          <p>
            Add supporting photos, certificates, permits, or training proofs
            directly to the record for instant reference.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            🌐 Offline Access (Optional)
          </h4>

          <p>
            Teams can complete and sign SWMS/JSA forms even without
            connectivity, syncing automatically once online.
          </p>
          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Why it matters:
          </h4>

          <p>
            Safety and compliance can’t live in spreadsheets. The OMS SWMS/JSA
            module keeps your safety records live, linked, and verifiable-making
            it easy to prove diligence and protect people.
          </p>
        </>
      ),
    },

    {
      id: "wps-registry",
      title: "Welding Procedure Specification (WPS) Registry",
      content: (
        <>
          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            Centralized. Traceable. Compliant.
          </h4>

          <p>
            The WPS Registry provides a unified workspace for managing Welding
            Procedure Specifications (WPS) and related qualification records -
            keeping your documentation audit-ready and easily accessible.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            🔍 Search & Add WPS Data
          </h4>

          <p>
            Use the “Search & Add WPS Data” option to view a short walkthrough
            video and manage all essential welding parameters from one intuitive
            screen.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            📂 Unified Document Package
          </h4>

          <p>
            Upload all supporting files - WPS, PQR, material certificates,
            welding consumable certificates, and inspection reports. With a
            single click, download the complete package for inclusion in your
            Manufacturer’s Data Report (MDR).
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            👷 Welder Qualification Integration
          </h4>

          <p>
            Link qualified welders with their corresponding WPS to automatically
            maintain Welder Qualification Records (WQR) for full traceability.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            🌐 Client Portal Access
          </h4>

          <p>
            Both WPS and WQR are securely accessible to clients through the OMS
            Client Portal, ensuring transparency, compliance, and efficient
            collaboration.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            ⚠️ Caution
          </h4>

          <p>
            Upload a WPS only if it is prepared by your organization. If a WPS
            originates from a client or third party, obtain written consent
            before uploading to maintain data integrity and ownership clarity.
          </p>

          <h4 className="text-lg font-semibold text-orange-600 mt-6">
            💡 Assistance
          </h4>

          <p>
            For setup, automation, or technical clarification, please contact
            your OMS development team for support and best-practice guidance.
          </p>
        </>
      ),
    },
  ];

  const toggleSection = (index) => {
    const newIndex = expandedSection === index ? null : index;
    setExpandedSection(newIndex);

    // Scroll to section if opening
    if (newIndex !== null) {
      // Wait for DOM update
      setTimeout(() => {
        const el = document.getElementById(sections[newIndex].id);
        if (el) {
          const navbarHeight = 80; // Adjust to your fixed navbar height
          window.scrollTo({
            top: el.offsetTop - navbarHeight,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  return (
    <section
      id="solutions"
      className="min-h-screen bg-white py-10 sm:py-16 md:py-20"
    >
      <div className="w-[90%] mx-auto py-4 px-2">
        {" "}
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
          <span className="border-b-4 border-orange-500 pb-1">Solutions</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base px-2">
          Explore our powerful modules designed to simplify lab operations and
          ensure compliance.
        </p>
        {/* Accordion List */}
        <div className="space-y-4 sm:space-y-6">
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center px-4 sm:px-5 py-3 sm:py-4 text-left text-base sm:text-lg font-semibold text-gray-800 hover:bg-orange-50 transition-colors curs"
              >
                <span className="pr-3 text-orange-500">{section.title}</span>
                <span className="text-orange-500 text-xl sm:text-2xl">
                  {expandedSection === index ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </span>
              </button>

              {/* Accordion Content */}
              {expandedSection === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-200">
                  {React.Children.map(
                    section.content.props.children,
                    (child) => {
                      if (!React.isValidElement(child)) return null;

                      if (child.type === "p") {
                        return <div className="mb-3">{child}</div>;
                      }
                      if (child.type === "ul") {
                        return <div className="my-3 sm:my-4">{child}</div>;
                      }
                      if (child.type === "img") {
                        return (
                          <div className="my-4 sm:my-5 flex justify-center">
                            <img
                              {...child.props}
                              className="max-w-full h-auto rounded-lg"
                            />
                          </div>
                        );
                      }
                      return child;
                    }
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
