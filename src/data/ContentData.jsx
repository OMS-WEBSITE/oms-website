/**
 * NOTE:
 * When adding a new section:
 *  - Ensure the heading name in ContentData matches the corresponding name
 *    in ProductsAndServices navItems.
 *  - In VideoSection.jsx, make sure the related feature label uses the same
 *    name and ID (no spaces, all lowercase).
 *
 * Reason:
 *  When a user clicks a feature in VideoSection, it redirects to the
 *  Products & Services section, expands the clicked section, and displays
 *  data based on the matching name.
 */

export const contentMap = {
  "Business Performance": {
    id: "businessperformance",
    title: "See your lab’s performance in real time.",
    sections: [
      {
        heading: "Payroll Report",
        content: [
          {
            type: "paragraph",
            text: "💼 Payroll Report",
          },
          {
            type: "paragraph",
            text: "Digitalized Payroll Approval & Reporting",
          },
          {
            type: "paragraph",
            text: "Manage timesheets, approvals, and payroll reports entirely online with OMS Software - no spreadsheets, emails, or manual paperwork. Empower your staff to enter hours on the go and enable managers to approve with a single click.",
          },
          {
            type: "paragraph",
            text: "🕒 How It Works",
          },
          {
            type: "list",
            items: [
              "Employees submit timesheets via mobile, tablet, or desktop.",
              "Managers review, approve, or comment on claimed hours and overtime.",
              "OMS automatically generates a digital payroll report for each pay cycle.",
              "Payroll officers can export the approved report into any government-approved payroll software for final processing.",
            ],
          },
          {
            type: "paragraph",
            text: "📊 Key Highlights",
          },
          {
            type: "list",
            items: [
              "✅ Instant Timesheet Access - Employees update records anywhere, anytime",
              "✅ Digital Approvals - Managers verify and sign off reports online",
              "✅ Secure Integration - Export data to your existing payroll system",
              "✅ Full Audit Trail - Every change is logged and traceable",
            ],
          },
          {
            type: "paragraph",
            text: "Why It Matters",
          },
          {
            type: "list",
            items: [
              "🧾 Reduce Errors: Eliminate manual re-entry and version confusion",
              "⏱️ Save Time: Automate payroll reviews and cut processing cycles",
              "💻 Stay Compliant: Align with taxation and audit requirements",
              "💡 Boost Efficiency: Fewer admin steps, faster decisions, and less dependency on specialists",
            ],
          },
          {
            type: "paragraph",
            text: "“The integrated digital payroll workflow in OMS saves hours every pay cycle - fewer emails, zero paper, and complete traceability.”",
          },
          {
            type: "paragraph",
            text: "🔒 The OMS Advantage",
          },
          {
            type: "list",
            items: [
              "Secure, cloud-based system accessible from any device",
              "16 hours of complimentary training after implementation",
              "Configurable approval hierarchies and branch-wise summaries",
              "Automatic record backup and change tracking for audits",
            ],
          },
          {
            type: "images",
            items: ["/images/Payrollreport.jpg"],
          },
        ],
      },

      {
        heading: "Statement",
        content: [
          {
            type: "paragraph",
            text: "A statement of outstanding invoices is emailed automatically (at the start of each month) to the clients accounts contact, stored in the OMS platform.",
          },
          {
            type: "paragraph",
            text: "In the Invoice Statement section of the OMS platform, you can search a client’s current statement status. This section will provide the clients:",
          },
          {
            type: "list",
            items: [
              "Maximum credit limit",
              "Current list of outstanding invoices",
              "The number of days each invoice has been open (unpaid)",
            ],
          },
          {
            type: "paragraph",
            text: "A statement can also be downloaded to PDF and resent to the client if required.",
          },
        ],
      },
      {
        heading: "Sales Report",
        content: [
          {
            type: "list",
            items: ["Real-Time Insights Into Business Growth"],
          },
          {
            type: "paragraph",
            text: "Gain a complete overview of your company’s sales activity - trends, volumes, and performance across teams, clients, and time periods. OMS transforms raw data into live dashboards so you can act on insights, not instincts.",
          },
          {
            type: "list",
            items: ["Flexible Reporting"],
          },
          {
            type: "paragraph",
            text: "Generate sales reports for any period - yearly, monthly, weekly, or daily - and access them anytime, anywhere.",
          },
          {
            type: "list",
            items: ["Instant Access & Sharing"],
          },
          {
            type: "paragraph",
            text: "Download ready-to-present charts and tables in seconds for meetings, reviews, or audits.",
          },
          {
            type: "list",
            items: ["By Branch: Compare performance across sites or regions"],
          },
          {
            type: "images",
            items: ["/images/Sales-REPORT-BY-bRANCH.png"],
          },
          {
            type: "list",
            items: ["By Client: Track key accounts and recurring business"],
          },
          {
            type: "images",
            items: ["/images/Sales-Report-by-Client.png"],
          },
          {
            type: "list",
            items: [
              "By Personnel: Measure individual or team sales contribution",
            ],
          },
          {
            type: "images",
            items: ["/images/Sales-Report-by-Personnel-768x499.png"],
          },
          {
            type: "list",
            items: ["By Section: Visualise growth across Sections"],
          },
          {
            type: "images",
            items: ["/images/Sales-Report-by-section.png"],
          },
          {
            type: "list",
            items: ["By Period: Visualise growth across financial years"],
          },
          {
            type: "images",
            items: ["/images/Sales-Report-by-Financial-year.png"],
          },
          {
            type: "list",
            items: [
              "Trend Analysis: Identify peaks, dips, and seasonal patterns",
            ],
          },
          {
            type: "images",
            items: ["/images/Sales-Report-by-Month.png"],
          },
        ],
      },

      {
        heading: "Timesheet Report",
        content: [
          {
            type: "list",
            items: ["Track Every Hour, Every Job, Every Client"],
          },
          {
            type: "paragraph",
            text: "Gain instant visibility into how time is spent across your organisation. The OMS Timesheet Report helps you analyse productivity, job efficiency, and client-wise effort - all in one digital view.",
          },
          {
            type: "list",
            items: ["Smart Filters"],
          },
          {
            type: "paragraph",
            text: "Search by staff member, job number, department, or client to see where hours are going.",
          },
          {
            type: "list",
            items: [
              "⏰Staff Utilisation: Identify under or over-allocated resources",
              "💼Job Costing: Compare billed hours vs. actual effort",
              "🧮Client Tracking: Evaluate time investment per client",
              "📈Productivity Trends: Discover workflow bottlenecks and improve turnaround",
            ],
          },
        ],
      },
      {
        heading: "Aged Receivables",
        content: [
          {
            type: "list",
            items: ["Stay Ahead of Outstanding Payments"],
          },
          {
            type: "paragraph",
            text: "Monitor overdue invoices before they impact your cash flow. OMS automatically organises receivables by client, branch, or age bracket - so you can chase what matters first.",
          },
          {
            type: "list",
            items: [
              "📅 Age Buckets: 0-30, 31-60, 61-90, 90+ days",
              "💸 Client-wise Totals: Know who owes what, instantly",
              "📈 Trends: Spot recurring late payers and take action early",
              "⚡ Follow-Up Tools: Email reminders straight from OMS",
            ],
          },
        ],
      },
      {
        heading: "Revenue Summary",
        content: [
          {
            type: "list",
            items: ["Turn Numbers Into Strategy"],
          },
          {
            type: "paragraph",
            text: "The revenue summary section of the OMS platform is an important tool to gain insight on business revenue generated by your business. The report can be generated on a financial year basis, monthly, quarterly, or any date specified by the user.",
          },
          {
            type: "list",
            items: [
              "💼 By Department: Compare testing, calibration, and inspection streams",
              "🧾 By Client: See who drives your top-line growth",
              "📍 By Branch: Evaluate regional performance",
              "⏱️ By Period: Generate monthly, quarterly, or financial-year summaries",
            ],
          },
          {
            type: "paragraph",
            text: "Every decision is easier when the numbers are already in front of you.",
          },
        ],
      },
      {
        heading: "Production Report",
        content: [
          {
            type: "list",
            items: ["Measure Efficiency From Quote to Delivery"],
          },
          {
            type: "paragraph",
            text: "Understand how long each process truly takes - from quotation to completed job. OMS analyses turnaround time to reveal hidden delays and drive continuous improvement.",
          },
          {
            type: "list",
            items: [
              "🕒 Average Completion Time: Job creation → testing → report → invoice",
              "👥 Team Performance: Compare productivity across departments",
              "🧰 Process Bottlenecks: Identify where work slows down",
              "📊 Improvement Tracking: Watch lead times shrink over time",
            ],
          },
          {
            type: "paragraph",
            text: "OMS turns operational data into a blueprint for performance.",
          },
        ],
      },
      {
        heading: "Sales Summary",
        content: [
          {
            type: "list",
            items: ["Real-Time Sales at a Glance"],
          },
          {
            type: "paragraph",
            text: "See how your business is performing - anytime, anywhere. The OMS Sales Report gives you a live view of sales trends, revenue flow, and client performance across branches, teams, and time periods.",
          },
          {
            type: "list",
            items: ["Flexible Timeframes"],
          },
          {
            type: "paragraph",
            text: "Generate reports for any period - yearly, monthly, weekly, or daily - and access them instantly online.",
          },

          {
            type: "list",
            items: [
              "💰 Revenue Overview: Monitor income and growth trends.",
              "🏢 Branch Performance: Compare sales across locations.",
              "👥 Client Contribution: Identify top customers and key accounts.",
              "📊 Staff Metrics: Track individual and team sales efficiency.",
            ],
          },
          {
            type: "paragraph",
            text: "OMS puts real-time sales data in your hands - clear, visual, and ready when you are.",
          },
        ],
      },
      {
        heading: "DSO (Days of Sales Open)",
        content: [
          {
            type: "paragraph",
            text: "Cash flow is the lifeblood of any business and chasing slow payers is an unpleasant reality for many.",
          },
          {
            type: "paragraph",
            text: "The OMS software platform can assist by providing the ‘Days of sales open report’. This report provides an overall credit history of any client in the platform and enables Managers, Business Owners, and the Accounts team to review a client’s credit history and determine if there may be a risk of the client becoming a slow payer.",
          },
          {
            type: "paragraph",
            text: "This report highlights:",
          },
          {
            type: "list",
            items: [
              "The number of days it takes for the client to pay",
              "If the client pays on time regularly",
              "If there is a change in payment frequency (potentially highlighting issues within the client’s business)",
            ],
          },
          {
            type: "paragraph",
            text: "You can use the credit history statistics provided by the ‘Days of sales open report’ to make informed decisions regarding future quotations (fee proposals) for slow payers, by applying some compensation for late payments or requesting upfront payments.",
          },
          {
            type: "paragraph",
            text: "The OMS platform is a great tool to help your business reduce exposure to slow payers or mitigate the risk of managing poor payers.",
          },
          {
            type: "images",
            items: ["/images/DSO.jpg"],
          },
        ],
      },
      {
        heading: "Bank Summary",
        content: [
          {
            type: "list",
            items: ["See Your True Financial Position at a Glance"],
          },
          {
            type: "paragraph",
            text: "Stay on top of your company’s cash position in real time. The OMS Bank Summary instantly displays the balance of funds in the bank after accounting for any credit notes or adjustments recorded in the system.",
          },
          {
            type: "list",
            items: [
              "💵 Current Cash Balance: Always know what’s available.",
              "🧾 Credit Note Adjustments: View accurate, net figures.",
              "📈 Financial Snapshot: Track liquidity and overall business health.",
            ],
          },
          {
            type: "paragraph",
            text: "Know exactly where your money stands - not just what’s on paper",
          },
        ],
      },
    ],
  },

  Accounting: {
    title: "Your finances, finally on autopilot",
    sections: [
      {
        heading: "Invoices",
        content: [
          {
            type: "list",
            items: ["Automatic Bank Feed – Payment Received"],
          },
          {
            type: "list",
            items: ["Turn Hours of Work Into Seconds of Automation"],
          },
          {
            type: "paragraph",
            text: "Upload your bank’s CSV file, and OMS instantly displays all transactions - no manual data entry. Then, simply click Apply to match payments to the right client invoices.",
          },
          {
            type: "paragraph",
            text: "Time Saved:⏱️ ~4 hours per 50 transactions, every workday",
          },
          {
            type: "paragraph",
            text: "Cost Saved: ≈ $156,000 per year (based on enterprise averages)",
          },
          {
            type: "paragraph",
            text: "From manual entry to one-click matching - accounting just became effortless.",
          },
          {
            type: "images",
            items: ["/images/Bank.jpg"],
          },
          {
            type: "list",
            items: ["Payments Received"],
          },
          {
            type: "list",
            items: ["Match Every Payment, Every Time"],
          },
          {
            type: "paragraph",
            text: "Apply received or credited payments to the correct invoices in seconds.",
          },
          {
            type: "list",
            items: ["🔍 Search & Allocate"],
          },

          {
            type: "list",
            items: [
              "By client, job, or invoice number",
              "Auto-populate all unpaid invoices",
              "Review complete payment histories anytime",
            ],
          },
          {
            type: "list",
            items: ["🧾 Audit-Ready Traceability"],
          },
          {
            type: "paragraph",
            text: "Every payment is logged and stored securely for full financial transparency.",
          },
          {
            type: "list",
            items: ["Invoice Search & Summary"],
          },
          {
            type: "list",
            items: ["📊 All Your Invoices, One Smart Dashboard"],
          },

          {
            type: "paragraph",
            text: "Filter, sort, and export invoice data in a click. Multi-branch companies can view combined results or split Excel reports by branch - automatically.",
          },

          {
            type: "paragraph",
            text: "Time period Paid Unpaid Credit Invoices Client",
          },
          {
            type: "paragraph",
            text: "Export your summary for further analysis or management review.",
          },
          {
            type: "images",
            items: ["/images/Invoices.jpg", "/images/Creditnote.jpg"],
          },
          {
            type: "list",
            items: ["Simplified Credit Note"],
          },
          {
            type: "list",
            items: ["Automated Accuracy With Every Adjustment"],
          },
          {
            type: "paragraph",
            text: "OMS uses Intelligence Augmentation (IA) to simplify credit note creation and ensure traceability.",
          },
          {
            type: "list",
            items: [
              "Records date, time, user, and reason before issue",
              "One-click full credit note generation (auto-mirrors original invoice)",
              "Instantly emails the credit note to the client’s accounts contact",
            ],
          },

          {
            type: "paragraph",
            text: "Even refunds deserve automation.",
          },

          {
            type: "list",
            items: ["Un-Invoiced Jobs"],
          },
          {
            type: "list",
            items: ["Never Leave Revenue on the Table"],
          },
          {
            type: "paragraph",
            text: "OMS links every job and work activity directly to accounting - no external ERP required.",
          },
          {
            type: "list",
            items: [
              "Tracks all un-invoiced or partially billed jobs",
              "Sends automatic summaries to directors and CFOs",
              "Ensures every chargeable activity is billed and recorded",
            ],
          },

          {
            type: "list",
            items: ["Invoice Summary"],
          },
          {
            type: "paragraph",
            text: "An invoice summary is a collection of invoices that your company has created and processed in the OMS platform. It can be used as an overview of your company’s financial operations and can be filtered using the following criteria:",
          },
          {
            type: "list",
            items: [
              "Time period",
              "Paid Invoices",
              "Unpaid Invoices",
              "Credit invoices",
              "Client",
            ],
          },
          {
            type: "paragraph",
            text: "This summary can be exported to Excel to search or filter information further.",
          },

          // need to updated later
          {
            type: "list",
            items: ["Unallocated Payment"],
          },
          {
            type: "paragraph",
            text: "Keep your books clean and your cashflow clear. The Unallocated Payments feature helps your team quickly identify and resolve customer payments that haven’t yet been matched to an invoice.",
          },
          {
            type: "list",
            items: ["Cheque Payments & Summary"],
          },
          {
            type: "list",
            items: ["Manage Cheques Without the Chaos"],
          },
          {
            type: "paragraph",
            text: "Track every cheque - received, allocated, or unallocated - from one simple screen.",
          },
          {
            type: "list",
            items: ["🔍Search & Manage:"],
          },
          {
            type: "list",
            items: [
              "View cheque status across all clients",
              "Allocate or adjust payments",
              "Maintain cheque payment history for audits",
            ],
          },

          // need to updated later
          {
            type: "list",
            items: ["Cheque Summary"],
          },
          {
            type: "paragraph",
            text: "Manage your cheque payments with ease! The OMS platform will enable you to view a list of all cheques received, allocated or unallocated.",
          },
          {
            type: "paragraph",
            text: "For further information on this feature, contact us for an obligation free demonstration.",
          },
        ],
      },

      {
        heading: "Debt Collection",
        content: [
          {
            type: "list",
            items: ["Scheduled Task"],
          },
          {
            type: "paragraph",
            text: "We’re building a new automation layer that will take your daily scheduling to the next level.Follow us on LinkedIn or register for updates to be notified when it launches.",
          },
          {
            type: "paragraph",
            text: "The future of lab automation - right on schedule.",
          },
          {
            type: "list",
            items: ["Settings"],
          },
          {
            type: "list",
            items: ["Automatic Payment Reminders - No Awkward Calls Required"],
          },
          {
            type: "paragraph",
            text: "Nobody enjoys the arduous task of chasing money from clients who haven’t paid on time, often it unintentionally goes down the priority list until the debt is 60, 90 or even over 120 days overdue. This is where the OMS platform can assist.",
          },
          {
            type: "paragraph",
            text: "You can customise the OMS platform to automatically email your clients who haven’t paid on time, in several stages, eliminating the need for one of your staff members bearing the brunt of that difficult conversation.",
          },
          {
            type: "paragraph",
            text: "For further information on this feature, contact us for an obligation free demonstration.",
          },
          {
            type: "list",
            items: [
              "⏱️ Set your own reminder intervals",
              "🧾 Personalise email templates per client",
              "📤 Track every reminder sent",
            ],
          },
          {
            type: "paragraph",
            text: "Let OMS handle the follow-up - so you can focus on growth, not debt collection.",
          },

          {
            type: "list",
            items: ["Debt History"],
          },
          {
            type: "list",
            items: ["Full Traceability for Every Reminder Sent"],
          },
          {
            type: "paragraph",
            text: "The Debt History Report gives a complete overview of every automated follow-up triggered by the system.",
          },
          {
            type: "paragraph",
            text: "What It Shows:",
          },
          {
            type: "list",
            items: [
              "👤 Client Name",
              "📧 Email Contact",
              "🧾 Job & Invoice Number",
              "📆 Date of Reminder Sent",
              "🧩 Rule Number (Reminder Stage)",
            ],
          },
          {
            type: "paragraph",
            text: "With OMS, you never lose track of who owes what - or when they were reminded.”",
          },

          {
            type: "list",
            items: ["Reports"],
          },
          {
            type: "list",
            items: ["Automatic notification of non-invoiced jobs"],
          },
          {
            type: "paragraph",
            text: "OMS Software is all about increasing productivity by ensuring your business doesn’t lose any revenue for any chargeable activity. This means every job or activity within the business is tracked, displayed, and emailed automatically to the directors (or nominated manager’s) inbox.",
          },
          {
            type: "paragraph",
            text: "The OMS platform tracks and maintains a list of non-invoiced jobs that require additional invoicing for activities that need to be completed.",
          },
          {
            type: "paragraph",
            text: "Since the OMS platform is a fully integrated system, all work activities are directly connected with accounting activities. There is no external accounting or ERP package required.",
          },
          {
            type: "images",
            items: ["/images/Non-invoiced.jpg"],
          },
        ],
      },
    ],
  },

  "Personnel Management": {
    title:
      "Centralize your workforce data, roles, and approvals in one secure hub.",
    sections: [
      {
        heading: "Personnel Records",
        content: [
          {
            type: "list",
            items: ["Master Records List"],
          },
          {
            type: "paragraph",
            text: "The Master Records List serves as a central repository for frequently used qualification, certification, and competency documents. Each record is preconfigured with key parameters such as Certificate Category, Nominal Life Period, Reminder Days, Reminder Frequency, and other associated rules.",
          },
          {
            type: "paragraph",
            text: "Once defined, these master entries can be reused across the platform without the need to redefine details repeatedly. This ensures consistency, accuracy, and efficiency when assigning competencies or uploading new qualification records — allowing OMS to automatically apply predefined validation and reminder logic.",
          },
          {
            type: "paragraph",
            text: "Benefit:",
          },
          {
            type: "paragraph",
            text: "Reduces repetitive configuration, improves data consistency, and ensures that every competency or qualification record follows standardized validation and renewal rules across the platform.",
          },
          {
            type: "list",
            items: ["Master Records Group"],
          },
          {
            type: "paragraph",
            text: "The Master Records Group feature allows multiple master records to be organized under a single category, streamlining the process of assigning and managing related qualifications.",
          },
          {
            type: "paragraph",
            text: "Instead of adding each master record individually, users can select a predefined group to automatically include all associated records — greatly reducing repetitive data entry and setup time.",
          },
          {
            type: "paragraph",
            text: "Example:",
          },
          {
            type: "paragraph",
            text: "A PAUT Tester Certification group can include multiple related records, such as PAUT Level 1, PAUT Level 2, PAUT Level 3, and corresponding ISO Certificates — allowing all of them to be applied together in a single action.",
          },
          {
            type: "paragraph",
            text: "Benefit:",
          },
          {
            type: "paragraph",
            text: "This feature enhances efficiency, accuracy, and consistency across the platform by minimizing manual input and ensuring that related competencies are managed together as a unified set.",
          },
          {
            type: "list",
            items: ["Automatic Email Reminders"],
          },
          {
            type: "paragraph",
            text: "Once scheduled, the OMS platform will automatically send reminders to ensure certifications or qualifications are renewed, escalate through management if needed, and remove access for un-certified staff until renewal is complete.",
          },
          {
            type: "list",
            items: ["Notifications"],
          },
          {
            type: "paragraph",
            text: "Staff with expired certification or training are restricted from critical tasks. OMS automates monitoring, prevents errors, and avoids penalties due to lapsed certifications.",
          },
          {
            type: "paragraph",
            text: "The platform archives expired records, stops reminders automatically after renewal, and prevents deletion of personnel records, saving time and protecting data integrity.",
          },
          {
            type: "list",
            items: ["Report by Document Type"],
          },
          {
            type: "paragraph",
            text: "The OMS platform provides detailed reports on all staff certifications, qualifications, skills, and competencies, including attainment date, reminder date, and expiration date.",
          },
          {
            type: "list",
            items: ["Manage Personnel Records"],
          },
          {
            type: "paragraph",
            text: "Staff records can be managed easily. OMS tracks certifications, qualifications, competencies, status, dates, and actions. Users appear in job-specific searches based on their skills.",
          },
          {
            type: "list",
            items: ["My Records"],
          },
          {
            type: "paragraph",
            text: "The logged-in user can view, search, add, or update their own records, including certification type, dates, and status. OMS ensures up-to-date access to all personnel data.",
          },
        ],
      },

      {
        heading: "Timesheets",
        content: [
          {
            type: "paragraph",
            text: "For most businesses, time tracking and invoicing go hand in hand.",
          },
          {
            type: "paragraph",
            text: "The OMS platform has made time entry and invoicing with clients extremely simple. Staff can enter their hours worked into the OMS platform using a smartphone, tablet or computer, at a time and place of their choosing.",
          },
          {
            type: "list",
            items: ["Staff Activities"],
          },
          {
            type: "paragraph",
            text: "Time worked can be broken down into numerous activities such as forklift, coatings, NDT, meetings, just to name a few. The activities list can also be customised to your business requirements.",
          },
          {
            type: "list",
            items: ["Invoicing"],
          },
          {
            type: "paragraph",
            text: "Time entered can be allocated directly to a client job number, allowing seamless invoicing.",
          },
          {
            type: "list",
            items: ["Allowances and Leave"],
          },
          {
            type: "paragraph",
            text: "Complying with legislative requirements, staff can factor in their applicable car allowance, meal allowance, living away from home allowance, and leave in the same timesheet.",
          },
          {
            type: "paragraph",
            text: "The OMS platform also allows you to easily edit or modify any time that you might have missed or allocated to the incorrect job.",
          },
          {
            type: "paragraph",
            text: "Once submitted, timesheets will be available for a manager or supervisor to approve and make changes where required, before submitting to payroll.",
          },
          {
            type: "paragraph",
            text: "Every time a user logs into the OMS platform, the platform automatically searches for that user’s timesheet information. If a timesheet has not been entered for the previous working day, the system will automatically exclude the user from performing some tasks until the timesheet is updated. This ensures all times are entered into the database accurately and billed to the client on time.",
          },
        ],
      },

      {
        heading: "Manage Users",
        content: [
          {
            type: "paragraph",
            text: "Auditability, Traceability, and Reproducibility – OMS Software is built around these core principles.",
          },
          {
            type: "paragraph",
            text: "In addition to standard user management capabilities found in most platforms, OMS tracks and records every update or modification made by any user, providing complete visibility and control over business operations.",
          },
          {
            type: "paragraph",
            text: "The key differentiator of the OMS Platform is its powerful SuperUser feature, which enables authorized personnel to:",
          },
          {
            type: "paragraph",
            text: "   View all user access levels and permissions in a single consolidated view.",
          },
          {
            type: "paragraph",
            text: "	  Access comprehensive audit trails showing exactly who made what change, along with timestamps for every modification.",
          },
          {
            type: "images",
            items: ["/images/User.png"],
          },
          {
            type: "paragraph",
            text: "This guarantees accountability, compliance, and absolute transparency across all user activities within your organization.",
          },
          {
            type: "list",
            items: ["Automatic Protection from Ex-Employee"],
          },

          {
            type: "paragraph",
            text: "OMS prioritizes data integrity, traceability, security, and protection from unauthorized access, including potential risks from former employees.",
          },
          {
            type: "paragraph",
            text: "Delays in revoking IT access after an employee leaves can create internal vulnerabilities. OMS eliminates this risk through an AI-driven monitoring mechanism that automatically suspends a user’s login if no active time records are detected within a period defined by your organization.",
          },
          {
            type: "paragraph",
            text: "Once a user is automatically suspended, only an authorized SuperUser or Enterprise Administrator can reinstate access via the User Manager section, ensuring strict control over reactivation.",
          },
          {
            type: "list",
            items: ["Extended User Visibility and Access Control"],
          },
          {
            type: "paragraph",
            text: "But it doesn’t stop there — OMS provides real-time visibility into the current status of every employee, whether LOGIN-SUSPENDED, CURRENT ACTIVE, or otherwise.",
          },
          {
            type: "paragraph",
            text: "A SuperUser can assign or modify roles for any user, with appropriate comments and justifications, ensuring full traceability and accountability for every change in access or authorization.",
          },
          {
            type: "list",
            items: ["Unsure which users hold what permissions?"],
          },
          {
            type: "paragraph",
            text: "With OMS, view the entire user authorization matrix on a single consolidated page — accessible with just one click, simplifying oversight, improving governance, and enhancing system security.",
          },
        ],
      },
      {
        heading: "Contact List",
        content: [
          {
            type: "paragraph",
            text: "The OMS platform can store important business and staff contact information in a secured online directory, that can only be accessed with a user login.",
          },
          {
            type: "paragraph",
            text: "This is the internal directory for your business, storing all branch or location details (address and main phone number) and a list of staff information including:",
          },
          {
            type: "list",
            items: [
              "Name",
              "Branch",
              "Position",
              "Qualifications",
              "Mobile and phone numbers",
              "Email address",
            ],
          },
        ],
      },
      {
        heading: "Activity Approval",
        content: [
          {
            type: "list",
            items: ["Staff Approval Status"],
          },
          {
            type: "paragraph",
            text: "Staff records can be efficiently managed through the OMS Platform, providing complete visibility into the access levels assigned to each user for every test method or technique.",
          },
          {
            type: "paragraph",
            text: "Access Level Definitions",
          },
          {
            type: "list",
            items: [
              "Not Authorised – Can only enter test data for other approved testers; cannot sign reports.",
              "Trainee – Can perform testing under supervision, enter test data, but cannot sign reports.",
              "Tester / Inspector / Process – Can supervise trainees, perform testing independently, and enter test data; cannot sign reports.",
              "Signatory – Can supervise trainees, perform testing independently, enter test data, and sign reports.",
              "Technical Auditor – Can supervise trainees, perform testing and inspections independently, enter data, sign reports, and conduct technical audits on other staff.",
              "Authorised Approver – Has full authority to supervise staff, perform testing independently, sign reports, conduct technical audits, and approve or revoke access for trainees, testers, signatories, and technical auditors.",
            ],
          },
          {
            type: "paragraph",
            text: "From this section of the platform, an Authorised Approver can:",
          },
          {
            type: "list",
            items: [
              "Edit access levels for test methods.",
              "View the history of approvals and changes for a selected user.",
              "Approve or revoke access as needed.",
              "For more information on this feature, contact us for a free, no-obligation demonstration.",
              "Ensure security for approved testers.",
            ],
          },
          {
            type: "paragraph",
            text: "The OMS Platform includes built-in safeguards to ensure accountability and traceability among approved testers.",
          },
          {
            type: "paragraph",
            text: "Any user can designate another user as the approved tester. When this occurs, the selected user automatically receives a notification email, for example:'[Logged-in user’s name] has used your name in test-inspection-process record no. [Record No] on [Date + Time]. Ignore this notification if you are aware, or investigate further.'",
          },
          {
            type: "paragraph",
            text: "This ensures transparency and provides immediate awareness of all testing-related activities involving an individual’s credentials.",
          },
          {
            type: "list",
            items: ["Approval Report (per activity)"],
          },
          {
            type: "paragraph",
            text: "Similar to staff approval status, access levels for each module or test method can be easily managed within the OMS Platform.",
          },
          {
            type: "images",
            items: ["/images/Approval-Report-Per-Activity.png"],
          },
          {
            type: "paragraph",
            text: "An Authorised Approver can:",
          },
          {
            type: "list",
            items: [
              ,
              "Edit access levels for specific test methods.",
              "View the complete history of changes for a selected user.",
              "Approve or revoke access with comments to ensure traceability.",
            ],
          },
          {
            type: "paragraph",
            text: "For more information on this feature, contact us for an obligation-free demonstration.",
          },
          {
            type: "list",
            items: ["Activities-Staff Matrix Report"],
          },
          {
            type: "paragraph",
            text: "The Activities–Staff Matrix Report provides a comprehensive record of staff access levels over time, including:",
          },
          {
            type: "list",
            items: [
              "The complete history of role or access level changes.",
              "Details of who approved each change.",
              "Comments or notes associated with each modification.",
            ],
          },
          {
            type: "paragraph",
            text: "This feature enhances auditability, transparency, and accountability, enabling management to maintain a clear record of authorization decisions within the organization.",
          },
        ],
      },
    ],
  },

  "Supplier Management": {
    title: "Supplier Management",
    sections: [
      {
        heading: "Supplier",
        content: [
          {
            type: "paragraph",
            text: " Maintain accurate profiles for each supplier, including contacts, terms, and compliance details.",
          },
        ],
      },
      {
        heading: "Purchase Orders",
        content: [
          {
            type: "paragraph",
            text: "Create, approve, and track POs against jobs, projects, or cost centres.",
          },
        ],
      },
      {
        heading: "Upload Bills",
        content: [
          {
            type: "paragraph",
            text: "Upload supplier bills, attach them to POs, and reconcile quantities and values.",
          },
        ],
      },
    ],
  },

  CRM: {
    title: "CRM",
    sections: [
      {
        heading: "Leads",
        content: [
          {
            type: "list",
            items: ["Lead Management"],
          },
          {
            type: "paragraph",
            text: "There are several very good off-the-shelf CRM programs available in the industry. Although they are excellent in their domains, most of them are fragmented and not integrated with the Enterprise operations and management of jobs and accounting.",
          },
          {
            type: "paragraph",
            text: "Business relationship management (BRM) module or Lead management (LM) or commonly known as CRM is an integral part of the OMS to manage leads, potential clients and customers. OMS’ BRM module is not only connected to the Fee proposals or quotations module of the OMS but it is also integrated in managing jobs, reports and accounting activities.",
          },
          {
            type: "paragraph",
            text: "Many SMEs either do not have a CRM program or if they have it, it is fragmented and not integrated with their operations and job management programs or accounting packages, or if connected, there is a need for management to visit the CRM to find performance of marketing or business development activities.",
          },
          {
            type: "paragraph",
            text: "OMS is designed to save time for business owners, directors and managers. Hence, instead of a person wasting their time to open the CRM program, then login, then search for the required business performance reports for a date period, OMS emails monthly reports automatically to the nominated staff of the company. This saves time for multiple employees of the company for accessing the same information.",
          },
          {
            type: "paragraph",
            text: "Some businesses either have no process in place to manage or prioritise their leads, or some of the fragmented CRM programs do not have adequate configurable tools to filter or prioritise leads. In the OMS, a user can create ranking by creating a list of parameters and its own weighing criteria. OMS can then use these weighting parameters to calculate highest ranking lead and display to the marketing/business development staff in the order of priority. Without prioritising leads, a company may lose opportunity if not acted in a timely manner.",
          },
          {
            type: "paragraph",
            text: "Most importantly, the BRM / CRM list is secured within the OMS. Except SuperUser login (Generally Directors or their delegates), other users cannot readily download the CRM data and move to another business.",
          },
          {
            type: "paragraph",
            text: "For further information on this feature, contact us for an obligation free demonstration.",
          },
        ],
      },
      {
        heading: "Fee Proposal and Tenders",
        content: [
          {
            type: "list",
            items: ["Fee Proposals and Tenders"],
          },
          {
            type: "paragraph",
            text: "All fee and tender proposals can be managed in the OMS Software platform.",
          },
          {
            type: "paragraph",
            text: "Eliminate manual entry: Free your team from manual work and reduce costly errors with custom fields and variables that auto-populate new proposals with accurate details like client and company names. Terms and conditions can be selected and automatically added to any fee proposal or tender.",
          },
          {
            type: "paragraph",
            text: "Secure access: Save the entire proposal in one central place, accessible by approved users at any time or location of their choosing.",
          },
          {
            type: "paragraph",
            text: "Customisable: Fully customizable to your clients’ requirements with documentation distribution directly from the platform to your inbox.",
          },
        ],
      },
      {
        heading: "Quotation Management",
        content: [
          {
            type: "paragraph",
            text: "Turn enquiries into revenue with a structured quotation process. Quotation Management helps you standardise pricing, respond faster, and maintain a clear history of every proposal.",
          },
          {
            type: "list",
            items: [
              "Centralised quotes – Store all quotations in one place, linked to clients, contacts, and jobs.",
              "Template-based pricing – Use predefined templates for common tests, services, and packages.",
              "Status tracking – Monitor quotes as Draft, Sent, Accepted, or Rejected to keep your pipeline visible.",
              "Seamless handover – Convert accepted quotes into jobs or work orders with minimal re-entry.",
            ],
          },
        ],
      },
      {
        heading: "Managed Industry Types",
        content: [
          {
            type: "list",
            items: ["Managed Industry Types"],
          },
          {
            type: "paragraph",
            text: "One of our main focuses is to save our clients time and money and to free staff up to do more important tasks rather than spending hours on data entry.",
          },
          {
            type: "paragraph",
            text: "OMS Software stores the industry types as reference data in the system to ensure staff are not spending time entering the same data repeatedly.",
          },
          {
            type: "paragraph",
            text: "The industry types reference data information allows a user to select content from a pre-defined list, minimising spelling errors and enhancing reporting capability.",
          },
          {
            type: "paragraph",
            text: "For further information on this feature, contact us for an obligation free demonstration.",
          },
        ],
      },
      {
        heading: "Client",
        content: [
          {
            type: "list",
            items: ["Client"],
          },
          {
            type: "paragraph",
            text: "Client Information Form: A client information form can be downloaded and emailed to the client from this section of the OMS platform. Once the client has filled in this document and satisfied all criteria, they can be entered into the OMS platform as a new client.",
          },
          {
            type: "paragraph",
            text: "Create Client: Clients can be the number one asset for a business. The OMS platform allows you to add all details including credit limit, special instructions, or notes. Once entered, client records can be updated or edited with additional information, notes, documents can be added etc.",
          },
          {
            type: "paragraph",
            text: "Client Search: Clients can be searched in the OMS platform using several criteria: Company name and ID, Client name and email, Debt reminder/suspended, Business number, State, Active status. The OMS platform will provide important information such as business name, ID number, state, outstanding monies owed, just to name a few.",
          },
          {
            type: "paragraph",
            text: "Edit Client: You can edit client’s data at any time, using the client search function.",
          },
        ],
      },
      {
        heading: "Bounced Contacts",
        content: [
          {
            type: "list",
            items: ["Bounced Contacts"],
          },
          {
            type: "paragraph",
            text: "The OMS platform uses smart technology to fetch bounced or invalid email address contacts from your business’s email server daily.",
          },
          {
            type: "paragraph",
            text: "If the bounced (Invalid) email contact is listed as the 'Job Contact' in the OMS platform, the platform will automatically deactivate the job contact in the client digital file.",
          },
          {
            type: "paragraph",
            text: "If the bounced (Invalid) email contact is listed as the 'Account Contact' in the OMS platform, the platform will automatically deactivate the account contact in the client digital file. The OMS platform will then look for the most recent job contact and email them requesting updated information. Without an account contact, the OMS platform will not permit a user to create a Job.",
          },
        ],
      },
      {
        heading: "Client Info Form",
        content: [
          {
            type: "list",
            items: ["Client Info Form"],
          },
          {
            type: "paragraph",
            text: "New clients will fill in a client registration form, which is stored in the OMS platform. This form is linked directly to the terms and conditions ensuring the most up-to-date information is distributed and available at the click of a button.",
          },
          {
            type: "paragraph",
            text: "This form can be downloaded and emailed directly to your client to complete and return to you.",
          },
          {
            type: "paragraph",
            text: "For further information on this feature, contact us for an obligation free demonstration.",
          },
        ],
      },
      {
        heading: "Reviewed Clients",
        content: [
          {
            type: "list",
            items: ["Reviewed Clients"],
          },
          {
            type: "paragraph",
            text: "Credit approval is the process businesses or lenders undertake when evaluating a request for credit.",
          },
          {
            type: "paragraph",
            text: "New clients will use the online portal to enter all required information for credit approval. The administrative or accounts staff will perform all checks associated with the credit approval based on your own company procedures.",
          },
          {
            type: "paragraph",
            text: "Once credit approval has been granted, all parameters of the credit approval will be entered into the OMS platform, enabling the platform to perform certain tasks in accordance with the parameters set.",
          },
          {
            type: "paragraph",
            text: "The platform will automatically stop all jobs if the credit limit is reached, or payment of old invoices is missed.",
          },
          {
            type: "paragraph",
            text: "For further information on this feature, contact us for an obligation free demonstration.",
          },
        ],
      },
    ],
  },

  "System Configuration": {
    title: "Configure once, control everything.",
    sections: [
      {
        heading: "System Code",
        content: [
          {
            type: "paragraph",
            text: "Configure the platform to match the way your business operates. System Configuration gives administrators control over key codes and visual assets used throughout the system.",
          },
          {
            type: "list",
            items: [
              "System code management – Define and maintain codes for departments, test types, cost centres, and more.",
              "Consistent naming – Enforce naming standards to keep reporting and navigation clean and intuitive.",
            ],
          },
        ],
      },
      {
        heading: "System Images",
        content: [
          {
            type: "list",
            items: [
              "System images – Manage logos, document headers, and other visual elements used in reports and portals.",
              "Controlled access – Restrict configuration changes to authorised users to protect data integrity.",
            ],
          },
        ],
      },
      {
        heading: "Sales Classification",
        content: [
          {
            type: "paragraph",
            text: "Sales classifications can be customised based on your business requirements.",
          },
          {
            type: "paragraph",
            text: "For further information on this feature, contact us for an obligation free demonstration.",
          },
        ],
      },
      {
        heading: "Country / State",
        content: [
          {
            type: "paragraph",
            text: "Country and State preferences can be customised based on your current business operations; for example, if you currently only operate in Australia, the OMS database can be customised to only receive enquiries from Australian businesses.",
          },
          {
            type: "paragraph",
            text: "For further information on this feature, contact us for an obligation free demonstration.",
          },
        ],
      },
      {
        heading: "Timesheet Management",
        content: [
          {
            type: "paragraph",
            text: "It is important to know what your staff members are working on, where they are working, and how their time contributes to billable or non-billable tasks.",
          },
          {
            type: "paragraph",
            text: "The OMS platform enables you to configure both activities and locations relevant to your business operations — for example, activities like Administration, Chemical Testing, NDT, Report Writing, Training, and Meetings, and locations such as Client Site, Home, or Office.",
          },
          {
            type: "paragraph",
            text: "When a staff member enters their timesheet, they can easily select:",
          },
          {
            type: "list",
            items: [
              "Activity: The task or process they were undertaking at that time.",
              "Location: Where the work was performed.",
            ],
          },
          {
            type: "paragraph",
            text: "This ensures accurate tracking of productivity, billing, and operational efficiency, while maintaining complete transparency and traceability.",
          },
          {
            type: "paragraph",
            text: "For further information on this feature, contact us for an obligation-free demonstration.",
          },
        ],
      },
      {
        heading: "Email Configuration",
        content: [
          {
            type: "paragraph",
            text: "The primary objective in the OMS platform has always been to provide a complete auditable and traceable LIMS+ERP system with a full suite of productivity tools that can take care of most repetitive tasks, by automating those recurring functions.",
          },
          {
            type: "paragraph",
            text: "Automation of recurring functions not only increases productivity of the Enterprise but also morale of the staff as they do not have to repeat the same work every day.",
          },
          {
            type: "paragraph",
            text: "One of the productivity features in the OMS is the configuration and customisation aspects for repetitive emails.",
          },
          {
            type: "paragraph",
            text: "In most organisations, composing and sending an email can take a minimum of 5 minutes. On average, a business might be sending 20-30 recurring emails per day to communicate with various parties for business purpose e.g., seeking remittance advice or reminding overdue invoices or other general business activities.",
          },
          {
            type: "paragraph",
            text: "In this section, the entire recurring email process can be automated to save time and increase productivity. An OMS platform authorised user can simply configure a recurring email. From the information provided in this process, the OMS platform will look for the relevant topics and automatically distribute the email to internal or external parties.",
          },
          {
            type: "images",
            items: ["/images/Email-config-4.jpg"],
          },
          {
            type: "paragraph",
            text: "This productivity suite eliminates the entire manual process of recurring emails. Depending on the speed of your staff and the nature of recurring emails, this automation can save a minimum of $64,000/annum (260 workdays/annum x 20 emails/day x 5 mins/email x $2.50 per min business cost).",
          },
        ],
      },
      {
        heading: "Branches",
        content: [
          {
            type: "paragraph",
            text: "A list of Branches or Locations is an important feature in the OMS platform. You can configure the OMS platform to list the specific Branches or locations relevant to your business.",
          },
          {
            type: "paragraph",
            text: "The list of branches can be used in numerous search criteria, such as: timesheets, personnel, contact list, etc., and is a key feature when initially logging into the OMS platform.",
          },
          {
            type: "paragraph",
            text: "For further information on this feature, contact us for an obligation free demonstration.",
          },
        ],
      },
      {
        heading: "Timesheet Activities",
        content: [
          {
            type: "paragraph",
            text: "It is important to know the activity your staff member was undertaking during their time working - is this something that should be billed to a client, or is the staff member using their time on unbillable tasks?",
          },
          {
            type: "paragraph",
            text: "You can configure the OMS platform to list the specific activities relevant to your business, i.e., Administration, Chemical testing, NDT, Report writing, Training, meetings etc.",
          },
          {
            type: "paragraph",
            text: "When a staff member enters their timesheet, they can select the activity they were undertaking at the time of completing that work.",
          },
          {
            type: "paragraph",
            text: "For further information on this feature, contact us for an obligation free demonstration.",
          },
        ],
      },
      {
        heading: "Terms and Conditions",
        content: [
          {
            type: "paragraph",
            text: "Most businesses have a comprehensive Terms and Conditions document, as these terms and conditions are set to change on a regular basis, depending on changes within the industry or your company. It is important to ensure that the platform you use to make these changes is easy to access, change, or update regularly.",
          },
          {
            type: "paragraph",
            text: "There is also a requirement to publish these changes, ensuring that staff, clients, and stakeholders have access to the most up-to-date information.",
          },
          {
            type: "paragraph",
            text: "The OMS Platform has an area specific for pre-configured Terms and Conditions for your business. When updating the terms and conditions section in the OMS platform, these updates can be directly linked to an external source, like a website, to ensure the most current information is available.",
          },
          {
            type: "paragraph",
            text: "Terms and conditions form a critical part of any contract between your business and a client. When a new client registers their details through the platform, they will have access to the most up-to-date terms and conditions which they must accept to proceed further.",
          },
        ],
      },
    ],
  },

  QMS: {
    title: "QMS",
    sections: [
      {
        heading: "Policies",
        content: [
          {
            type: "paragraph",
            text: "The OMS platform is designed to ensure business compliance, whether it is to comply with the quality standards such as ISO 17025, ISO 17020, ISO 9001 or any safety or human resources related local regulatory requirements.",
          },
          {
            type: "paragraph",
            text: "When a new policy is published by your organisation, staff will receive a notification on their OMS platform login. The notification will request your staff to read the policy. Like an event reminder in MS Outlook, your staff can choose to read or snooze this reminder (up to maximum 5 times). If snoozed, then the OMS platform will display the notification again after 1 hour. If staff do not read after 5 attempts, the OMS platform removes access to the OMS platform menu until the user has read the published company policy.",
          },
          {
            type: "paragraph",
            text: "The OMS platform keeps traceable audit records of the date and time your staff read the published policy. This compliance system ensures that all your staff are aware of your current company policies and adhere to company protocols.",
          },
          {
            type: "paragraph",
            text: "Authorised users from your company can upload all company policies. An existing policy can be revised with a single click and updated with the newest version.",
          },
          {
            type: "images",
            items: ["/images/Policies.png"],
          },
        ],
      },
      {
        heading: "Quality Manual",
        content: [
          {
            type: "paragraph",
            text: "The OMS platform is designed to ensure business compliance, whether it is to comply with the quality standards such as ISO 17025, ISO 17020, ISO 9001 or any safety or human resources related local regulatory requirements.",
          },
          {
            type: "paragraph",
            text: "The quality manuals can be easily edited (by an approved user) from the quality manual section. Once updated, all staff will receive a notification on their OMS platform login requesting them to read the policy.",
          },
          {
            type: "paragraph",
            text: "Like an event reminder in MS Outlook, your staff can choose to read or snooze this reminder (up to maximum 5 times). If snoozed, the OMS platform will display the notification again after 1 hour. If staff do not read after 5 attempts, the OMS platform removes access to the OMS platform menu until the user has read the policy.",
          },
          {
            type: "images",
            items: ["/images/Quality-Manual.png"],
          },
        ],
      },
      {
        heading: "System Administration",
        content: [
          {
            type: "paragraph",
            text: "Set up and maintain the structure of your quality management environment.",
          },
          {
            type: "list",
            items: [
              "Define roles, permissions, and approval flows.",
              "Control access to sensitive quality documentation.",
            ],
          },
        ],
      },
      {
        heading: "Test Record Format",
        content: [
          {
            type: "paragraph",
            text: "Standardise how test data is captured and reported.",
          },
          {
            type: "list",
            items: [
              "Configure test record templates by method or standard.",
              "Ensure consistent fields, units, and result structures across the lab.",
            ],
          },
        ],
      },
      {
        heading: "OHS & E Document",
        content: [
          {
            type: "paragraph",
            text: "Centralise your Occupational Health, Safety & Environment documentation.",
          },
          {
            type: "list",
            items: [
              "Store and manage safety procedures, risk assessments, and guidelines.",
              "Track revisions and approvals for audit-ready compliance.",
            ],
          },
        ],
      },
      {
        heading: "Operation Procedure",
        content: [
          {
            type: "paragraph",
            text: "Maintain a single source of truth for operational procedures.",
          },
          {
            type: "list",
            items: [
              "Publish controlled versions of SOPs to relevant teams.",
              "Track changes over time with full revision history.",
            ],
          },
        ],
      },
      {
        heading: "Format System Management",
        content: [
          {
            type: "paragraph",
            text: "Manage the full library of controlled formats used in your organisation.",
          },
          {
            type: "list",
            items: [
              "Catalogue all official forms, templates, and controlled documents.",
              "Group formats by department, function, or standard.",
            ],
          },
        ],
      },
      {
        heading: "Format Admin",
        content: [
          {
            type: "paragraph",
            text: "Give administrators tools to manage and govern all formats.",
          },
          {
            type: "list",
            items: [
              "Create, update, and retire formats under proper approval.",
              "Assign owners and reviewers for each controlled document.",
            ],
          },
        ],
      },
      {
        heading: "Format Operations",
        content: [
          {
            type: "paragraph",
            text: "Support day-to-day usage of approved formats.",
          },
          {
            type: "list",
            items: [
              "Allow users to access the latest approved versions only.",
              "Reduce the risk of outdated or unofficial documents being used.",
            ],
          },
        ],
      },
    ],
  },

  Assets: {
    title: "Assets",
    sections: [
      {
        heading: "Asset Management",
        content: [
          {
            type: "paragraph",
            text: "Organisations of all sizes can use OMS Software to track and manage equipment. Whether assigning items to users or scheduling asset maintenance. The OMS platform provides comprehensive information on each asset you maintain, it can help businesses streamline maintenance processes, improve asset performances, reduce operational costs, and boost productivity, all in a digitalised format.",
          },
          {
            type: "paragraph",
            text: "The OMS platform will assist your business to:",
          },
          {
            type: "list",
            items: [
              "Assign an asset to a staff member",
              "Send reminders for scheduled maintenance",
              "Send reminders for registration renewal",
              "Deactivate an asset that has not completed the required maintenance schedule",
              "Provide a dollar value of all assets for insurance purposes",
              "Provide a report of all assets for yearend reporting",
              "Link an asset to a job",
              "Provide a history of an asset",
            ],
          },
          {
            type: "paragraph",
            text: "Preventative measures: Never miss a maintenance procedure again. The OMS platform provides a streamlined scheduling processes to alert technicians and managers of an upcoming maintenance requirment, retaining high levels of safety, compliance, and reliability for your business.",
          },
          {
            type: "paragraph",
            text: "Yearend reporting: The OMS platform improves statutory compliance and accelerates year-end reporting. All assets have a current value, the list of assets can be exported to excel for insurance estimation requirements and yearend financial reporting.",
          },
          {
            type: "paragraph",
            text: "The OMS platform is your go-to solution to improve not only your maintenance management but also the performance levels of all your assets across the entire organisation.",
          },
          {
            type: "paragraph",
            text: "Product User Manual: Never lose a user manual again! Upload and store the product user manual, along with asset information all in the one place.",
          },
          {
            type: "images",
            items: ["/images/Assets.png"],
          },
        ],
      },
      {
        heading: "Client Asset Register",
        content: [
          {
            type: "paragraph",
            text: "Provide your clients with full transparency of their assets and equipment history. The Client Asset Register keeps all asset information in one structured, searchable place.",
          },
          {
            type: "list",
            items: [
              "Assign an asset to a staff member",
              "Send reminders for scheduled maintenance",
              "Send reminders for registration renewal",
              "Centralised asset records – Store key details such as ID, description, location, owner, and status.",
              "Service & calibration history – View complete test, inspection, and calibration records for each asset.",
              "Link to jobs & reports – Connect assets directly to work orders, and reports.",
              "Client self-service – Enable clients to view and download asset information through a portal.",
            ],
          },
        ],
      },
    ],
  },

  Specification: {
    title: "Specification",
    sections: [
      {
        heading: "Materials",
        content: [
          {
            type: "paragraph",
            text: "Material grades are used to distinguish different types of material based on their unique properties. The OMS platform allows you to store relevant information regarding material grade. There is no need to add this type of information on numerous occasions, once entered the OMS platform it is stored for future use.",
          },
          {
            type: "paragraph",
            text: "When you receive client specific material requirements for a job, the OMS will be able to provide detailed information of the grade of material (if added to the system prior). This information includes: Grade, Description, Engineering Properties, Charpy impact strength, Chemical composition, Other chemical properties.",
          },
          {
            type: "images",
            items: ["/images/Material-Grade.png"],
          },

          {
            type: "list",
            items: ["Material identification"],
          },
          {
            type: "paragraph",
            text: "Material identification is a systematic approach to identify a particular grade of material. The OMS platform can assist by piecing together the composite of the material and identify the original source. Once this information is entered into the platform, it can be used as a reference point for future use.",
          },
        ],
      },
      {
        heading: "Test Specification",
        content: [
          {
            type: "paragraph",
            text: "In this section, you can list all specifications — information that may be provided by your client, derived from product or manufacturing standards, defined acceptance criteria, or criteria specified within the relevant standards.",
          },
          {
            type: "paragraph",
            text: "Within the Rail Specifications section, users can upload and store supporting documents for future reference. These may include client specifications, extracts, or commentaries from various product or manufacturing standards.",
          },
          {
            type: "paragraph",
            text: "This page provides users with full visibility into the test methods or process standards linked to each specification, and allows quick navigation to the associated records with a single click.",
          },
          {
            type: "images",
            items: ["/images/Specification.jpg"],
          },
          {
            type: "list",
            items: ["Never lose your documents"],
          },
          {
            type: "paragraph",
            text: "Never lose your documents. As OMS is designed to protect data from any loss or inadvertent deletion or any act of sabotage, nothing can be deleted in the OMS. If one of your staff do not need the uploaded document, then they may choose to make that document inactive or archive or discard or stow-away within the OMS. There is no delete button throughout the OMS platform.",
          },
        ],
      },
      {
        heading: "Process Standards",
        content: [
          {
            type: "paragraph",
            text: "IN “Adding a new Process Standard”",
          },
          {
            type: "paragraph",
            text: "Adding a new Process Standard in the OMS Platform is simple and can be completed in just eight easy steps.",
          },
          {
            type: "paragraph",
            text: "During setup, users can enter all essential details, such as Standard Number, Test Technique, Associated Module / Testing Method / Test Name, Accreditation Standard, and more.",
          },
          {
            type: "paragraph",
            text: "This structured approach ensures that every process standard is accurately linked, fully traceable, and compliant with both client and accreditation requirements.",
          },
          {
            type: "list",
            items: [
              "Standard number",
              "Technique",
              "Description",
              "Module Name",
              "Active Status",
            ],
          },
          {
            type: "paragraph",
            text: "The original PDF standard can be attached, and additional information or updates can be made at any time, ensuring the most up to date information is available at any time.",
          },
          {
            type: "images",
            items: ["/images/Process-Standards.png"],
          },
          {
            type: "list",
            items: ["Adding a new Process Standard"],
          },
          {
            type: "paragraph",
            text: "Adding a new Process standard is easy and can be completed in 8 easy steps.",
          },
          {
            type: "images",
            items: ["/images/Create-Process-Standard.png"],
          },
        ],
      },
      {
        heading: "Procedures",
        content: [
          {
            type: "paragraph",
            text: "The primary objective in the OMS has always been to provide a complete auditable and traceable LIMS+ERP system with a full suite of productivity tools that can take care of most repetitive tasks by automating those recurring functions.",
          },
          {
            type: "paragraph",
            text: "When utilising test procedures on a job, the OMS Platform will provide relevant test procedures depending on the test module. The OMS Platform can pre-fill as much data as possible with a predefined set of information, using intuitive tools to help if the user has any questions/concerns.",
          },
          {
            type: "paragraph",
            text: "This will assist to capture accurate and valid data, reducing errors overall, ensuring consistency with data records, and completing the task in timely manner.",
          },
          {
            type: "paragraph",
            text: "Some key features include: The OMS platform Search Grid will show all test procedures that exists for the company. Staff can search for a specific test procedure by procedure number, description, active/inactive status. Staff can view, edit, or hide the test procedure. Staff can create new test procedure. The OMS Platform has a ‘Tool-tips’ section to assist staff with relevant procedures.",
          },
        ],
      },
      {
        heading: "Reference Data",
        content: [
          {
            type: "paragraph",
            text: "This is the OMS platforms reference library is the key component to any prepopulated dropdown menus available throughout the platform. This was designed to limit the amount of manual data entry that a user is required to input into the system.",
          },
          {
            type: "paragraph",
            text: "As an example: If the user is required to enter a coating type for a specific job, the prepopulated dropdown menu will provide: Key: The key information / type, Name and Value: Prepopulated dropdown associated to the Key, Order: the order they will appear in the prepopulated dropdown.",
          },
          {
            type: "paragraph",
            text: "Additional items can be added to the reference data at any time.",
          },
        ],
      },
      {
        heading: "Result Table Configurations",
        content: [
          {
            type: "paragraph",
            text: "Detailed information is stored in the OMS platform for every test module used in your business. Each module has a list of testing requirements that are either reportable, mandatory, or discretionary.",
          },
          {
            type: "paragraph",
            text: "The most competent user will have access to the section and will select what is required to be listed on any test data report. The items selected will appear on any test data report when that module is selected.",
          },
        ],
      },
      {
        heading: "Client Contact RTC",
        content: [
          {
            type: "List",
            items: ["Client Contact RTC"],
          },
          {
            type: "paragraph",
            text: "Detailed information is stored in the OMS platform for every test module used in your business. Each module has a list of testing requirements that are either reportable, mandatory, or discretionary.",
          },
          {
            type: "paragraph",
            text: "On occasion a particular client or client contact will need additional testing requirements to be reported. The OMS platform has this covered. You can create a specific client-based module configuration created using the specific requirements from your client contact.",
          },
        ],
      },
    ],
  },

  "Test Data Management": {
    title: "The engine behind your testing revenue.",
    sections: [
      {
        heading: "Create a Job",
        content: [
          {
            type: "paragraph",
            text: "This section is designed to manage process control within a business so that a job can be created only using permitted data input including:",
          },
          {
            type: "list",
            items: [
              "Active clients only",
              "Frequently used one of the client’s addresses",
              "Frequently providing one of the client’s staff",
              "Automatic pre-filling of client contact details such as email ID, contact number, any special instructions",
              "Active Specifications such as Product Standards, test-inspection or process Standards, Materials Standards",
              "Prompting user to complete several other mandatory data selection to create a self-explanatory Job sheet.",
              "Fetch materials directly from a vast and dynamic materials list.",
              "Attach acceptance criteria, assign job schedules, and more — all within a few clicks.",
            ],
          },
          {
            type: "paragraph",
            text: "Job confirmation automatic email: The OMS Software platform is designed to operate in accordance with ISO 17025, ISO 17020, ISO 9001 and similar quality Standards where several quality events are required to be completed effectively.",
          },
          {
            type: "paragraph",
            text: "ISO 17025 Cl. 7 specifies that the laboratory shall adequately document and understand work requests and contracts. Laboratories shall select appropriate methods and procedures that meet the customers’ requirements and inform them when any deviation from the work request or a contract occurs. The standard also specifies that any differences between the contract or work request shall be resolved before laboratory activities commence.",
          },
          {
            type: "paragraph",
            text: "To comply with the above requirements and as a best industry practice, the OMS platform will automatically email job details to the customer after a job has been created in the OMS platform. Automatic email can be configured at each client contact level and ceased at the job creation level or job revision process.",
          },
          {
            type: "paragraph",
            text: "In accordance with ISO 17025 Clause 7.1.4, any differences between the work request / contract shall be resolved before laboratory activities commence. Each contract shall be acceptable to both, the laboratory, and the customer.",
          },
          {
            type: "paragraph",
            text: "The automated email provides an opportunity to your customer to review the job details and contact you for any discrepancies. This process achieves the ISO requirements and ensures that your business is operating efficiently.",
          },
          {
            type: "paragraph",
            text: "Editing a pre-configured email: OMS Software is designed to eliminate as many manual processes as possible, including having pre-configured emails, however we do understand that some elements of a process need to be customisable to allow for client specific information and communication.",
          },
          {
            type: "paragraph",
            text: "When emailing a report to a client, the pre-configured email text in the email body, can be modified before sending the email and report to a client.",
          },
        ],
      },

      {
        heading: "Search Jobs",
        content: [
          {
            type: "paragraph",
            text: "The Search Jobs feature in the OMS platform empowers users to take full control of their workflow. It allows them to easily locate, review, and manage any job in the system — whether it’s ongoing, in process, invoiced, closed, in draft, or yet to begin.",
          },
          {
            type: "list",
            items: [
              "Instantly view the status and progress of every job.",
              "Download a consolidated CSV containing complete Job vs. Specification details.",
              "Generate invoices with a single click.",
              "Effortlessly access and download job information or completed reports.",
              "Duplicate or transfer jobs to save time and ensure accuracy.",
              "Quickly open related specifications and standards linked to each job.",
            ],
          },
          {
            type: "paragraph",
            text: "Everything you need to manage, track, and optimize your job operations - all in one place.",
          },
        ],
      },
      {
        heading: "Job Management Workflow",
        content: [
          {
            type: "paragraph",
            text: "OMS is designed to ensure almost nothing is lost or at the most previous 3 minutes of data loss, in case of a major outage. All modules for test, inspection or process are divided into 8 sections to eliminate or minimise entire data loss. All sections are designed to reduce data entry (typing) by human data and reduce fatigue on the user.",
          },
          {
            type: "list",
            items: [
              "JSA Section – Before any onsite job commencement, a user needs to complete Job safety analysis on their smart phone or tablet or smart glasses in the near future.",
              "Section 1 – Displays client information for review before commencing a job. No need to enter anything.",
              "Section 2 – Displays job related information. Again, nothing to enter except review of job data.",
              "Section 3 – User shall enter instrument information. All items are a simple selection of items from the Asset database available within the OMS. Users need to only key in the first 3 letters of the asset number or asset classification and then select from the list. OMS do not display any non-calibrated assets which ensures that the user do not use invalid instruments.",
              "Section 4 – The user needs to enter job specific or technique specific information. Most of the information is selection from reference libraries rather than manual typing. All reference libraries are created by Level 3 or competent authorities which your company can modify to suit your needs. Selection of data from reference libraries minimises data entry errors and standardises terminologies used.",
              "Section 5 – User needs to type in relevant information because this section contains description, identification of all items and test data. Most fields can be completed by selection of data from the reference libraries but there is still substantial need for data entry by the user. As the user can be on this section for a long time, OMS saves data automatically after every 3 minutes.",
              "Section 6 – Designed to manage all photographs and documents which can be stored in the OMS permanently and the user can decide whether to print on a report.",
              "Section 7 – Costing and administration section wherein the user needs to enter job related times and cost.",
            ],
          },
        ],
      },

      {
        heading: "Job Statistics",
        content: [
          {
            type: "paragraph",
            text: "This section provides statistics around the productivity of any test, inspection, process or the job in its entirety.",
          },
          {
            type: "paragraph",
            text: "For further information on this feature, contact us for an obligation free demonstration.",
          },
        ],
      },
    ],
  },
};
