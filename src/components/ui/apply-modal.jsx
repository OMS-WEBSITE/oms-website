// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { X } from "lucide-react";

// export default function ApplyModal({ job, onClose }) {
//   const formRef = useRef();
//   const [status, setStatus] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     emailjs
//       .sendForm(
//         import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
//         import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
//         formRef.current,
//         import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => setStatus("success"),
//         (error) => {
//           console.error(error);
//           setStatus("error");
//         }
//       );
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
//       <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
//         >
//           <X size={20} />
//         </button>

//         <h2 className="text-2xl font-bold mb-4 text-center">
//           Apply for {job.title}
//         </h2>

//         {status === "success" ? (
//           <p className="text-green-600 text-center font-medium">
//             ✅ Your application has been sent successfully!
//           </p>
//         ) : (
//           <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
//             <input
//               type="text"
//               name="first_name"
//               placeholder="First name"
//               required
//               className="w-full border rounded-lg p-2"
//             />
//             <input
//               type="text"
//               name="last_name"
//               placeholder="Last name"
//               required
//               className="w-full border rounded-lg p-2"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email address"
//               required
//               className="w-full border rounded-lg p-2"
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone number"
//               pattern="[0-9]{10}"
//               required
//               className="w-full border rounded-lg p-2"
//             />
//             <textarea
//               name="message"
//               placeholder="Why do you want to join us?"
//               rows="4"
//               required
//               className="w-full border rounded-lg p-2"
//             />
//             <input
//               type="url"
//               name="resume"
//               placeholder="Resume link (Google Drive / Dropbox)"
//               className="w-full border rounded-lg p-2"
//             />
//             <input type="hidden" name="job_title" value={job.title} />

//             <button
//               type="submit"
//               className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-2 font-semibold transition-all duration-200"
//               disabled={status === "sending"}
//             >
//               {status === "sending" ? "Sending..." : "Submit Application ✉️"}
//             </button>
//           </form>
//         )}

//         {status === "error" && (
//           <p className="text-red-500 text-center mt-4">
//             ❌ Something went wrong. Please try again.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

import { useRef, useState } from "react";
import { X } from "lucide-react";

export default function ApplyModal({ job, onClose }) {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const file = formRef.current.resume.files[0];
    if (!file) {
      setStatus("error");
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      const base64 = reader.result.split(",")[1]; // remove data: prefix
      const payload = {
        first_name: formRef.current.first_name.value,
        last_name: formRef.current.last_name.value,
        email: formRef.current.email.value,
        phone: formRef.current.phone.value,
        message: formRef.current.message.value,
        job_title: job.title,
        resume: {
          filename: file.name,
          content: base64,
          type: file.type,
        },
      };

      try {
        const response = await fetch("/api/sendApplication", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          setStatus("error");
          return;
        }

        const result = await response.json();
        if (result.success) setStatus("success");
        else setStatus("error");
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Apply for {job.title}
        </h2>

        {status === "success" ? (
          <p className="text-green-600 text-center font-medium">
            ✅ Your application has been sent successfully!
          </p>
        ) : (
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="first_name"
              placeholder="First name"
              required
              className="w-full border rounded-lg p-2"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              required
              className="w-full border rounded-lg p-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full border rounded-lg p-2"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              pattern="[0-9]{10}"
              required
              className="w-full border rounded-lg p-2"
            />
            <textarea
              name="message"
              placeholder="Why do you want to join us?"
              rows="4"
              required
              className="w-full border rounded-lg p-2"
            />
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx,.jpg,.jpeg"
              required
              className="w-full border rounded-lg p-2"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-2 font-semibold transition-all duration-200"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Submit Application ✉️"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-500 text-center mt-4">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}
