import { useState } from "react";

const faqs = [
  {
    question: "What are your fees?",
    answer:
      "My fees vary depending on the type and length of session. Please contact me for a detailed fee schedule and to discuss your specific needs.",
  },
  {
    question: "Do you take insurance?",
    answer:
      "I am an out-of-network provider. I can provide a superbill for you to submit to your insurance for possible reimbursement.",
  },
  {
    question: "Do you provide online counseling?",
    answer:
      "Yes, I offer secure online counseling sessions via video for clients who prefer or require remote support.",
  },
  {
    question: "What are your office hours?",
    answer:
      "Office hours are by appointment only. Please reach out to schedule a time that works for you.",
  },
  {
    question: "What geographic areas do you serve?",
    answer:
      "I serve clients in Los Angeles, CA, and also offer telehealth services to clients throughout California.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="p-4 flex flex-col gap-8 md:gap-12 md:px-[10%] relative bg-cover bg-no-repeat bg-[#B5DBDF] py-12 md:py-16 lg:py-28"
    >
      <h2 className="font-bold text-4xl text-left md:text-6xl text-[#0f3f3b] pb-2 md:pb-4 relative">
        Frequently Asked Questions
      </h2>
      <div className="w-full flex flex-col gap-2">
        {faqs.map((faq, idx) => (
          <div
            key={faq.question}
            className="border-[#0f3f3b] border-t border-b-0 last:border-b py-4"
          >
            <button
              type="button"
              aria-controls={`faq-content-${idx}`}
              aria-expanded={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="flex w-full items-center justify-between transition-all font-para relative z-10 p-4 text-2xl md:text-3xl rounded-t-lg text-[#0f3f3b] font-bold text-left hover:no-underline hover:opacity-70 pl-0"
            >
              {faq.question}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200 ${openIndex === idx ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div
              id={`faq-content-${idx}`}
              hidden={openIndex !== idx}
              role="region"
              aria-labelledby={`faq-header-${idx}`}
              className={`overflow-hidden text-base md:text-lg transition-all px-4 pt-2 ${openIndex === idx ? "block" : "hidden"}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 