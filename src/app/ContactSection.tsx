"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import emailjs from 'emailjs-com';

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage("");
    try {
      await emailjs.send(
        'service_v5ma1dr',
        'template_n8csemo',
        {
          to_name: 'Dr. Serena Blake',
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        'zcL4jj0QhEChPRS1V'
      );
      setSubmitMessage("Thank you for your message! I will get back to you soon.");
      reset();
    } catch {
      setSubmitMessage("Sorry, there was an error sending your message. Please try again later.");
    }
    setIsSubmitting(false);
  };

  return (
    <section id="locate" className="relative w-full h-auto flex flex-wrap flex-col-reverse md:flex-row bg-[#B5DBDF] p-4 md:px-[10%]">
      {/* Info Columns */}
      <div className="py-12 md:py-16 lg:py-28 flex-1 flex flex-col text-center md:text-left justify-between gap-12 pb-8 lg:p-0 max-w-full">
        {/* Office Address */}
        <div>
          <h3 className="text-3xl md:text-4xl font-semibold text-[#144133] mb-2">Our Office</h3>
          <p className="text-xl text-[#144133] font-para font-bold">Dr. Serena Blake, PsyD</p>
          <p className="text-xl text-[#144133] font-para">Clinical Psychologist</p>
          <p className="text-xl text-[#144133] font-para">1287 Maplewood Drive</p>
          <p className="text-xl text-[#144133] font-para">Los Angeles, CA 90026</p>
          <a className="font-para p-2 bg-[#144133] text-[#B5DBDF] rounded mt-2 inline-block" href="https://maps.google.com/?q=1287+Maplewood+Drive,+Los+Angeles,+CA+90026" target="_blank" rel="noopener noreferrer">Google Maps</a>
        </div>
        {/* Office Hours */}
        <div>
          <h3 className="text-3xl md:text-4xl font-semibold text-[#144133] mb-2">Office Hours</h3>
          <p className="text-xl text-[#144133] font-para font-semibold">In-person:</p>
          <p className="text-xl text-[#144133] font-para mb-2">Tue & Thu, 10 AM–6 PM</p>
          <p className="text-xl text-[#144133] font-para font-semibold">Virtual via Zoom:</p>
          <p className="text-xl text-[#144133] font-para">Mon, Wed & Fri, 1 PM–5 PM</p>
        </div>
        {/* Contact Phone & Email */}
        <div>
          <h3 className="text-3xl md:text-4xl font-semibold text-[#144133] mb-2">Contact</h3>
          <a className="text-blue-500 text-xl hover:text-blue-600 inline-block font-para" href="tel:(323) 555-0192">
            <p className="text-[#144133] hover:text-neutral-900 flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
              (323) 555-0192
            </p>
          </a>
          <a className="text-blue-500 text-xl hover:text-blue-600 inline-block font-para mt-2" href="mailto:serena@blakepsychology.com">
            <p className="text-[#144133] hover:text-neutral-900 flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
              serena@blakepsychology.com
            </p>
          </a>
        </div>
      </div>
      {/* Contact Form */}
      <div id="contact" className="flex-1 relative min-h-96 font-para mt-6 lg:m-auto">
        <div className="max-w-md mx-auto p-6 rounded-lg shadow-lg border border-[#144133] bg-[#e6f6f3] relative z-[2]">
          <h2 className="font-heading text-2xl font-bold mb-2 text-center" style={{ color: '#144133' }}>
            Get In Touch
          </h2>
          <p className="text-sm text-center mb-6" style={{ color: '#144133' }}>
            Simply fill out the brief fields below and Dr. Serena Blake will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
              <label htmlFor="name" className="text-sm font-medium" style={{ color: '#144133' }}>Name</label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className={`flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm mt-1 placeholder:text-[#144133]/30 ${errors.name ? "border-red-500" : ""}`}
                placeholder="Name"
                style={{ borderColor: '#144133' }}
                required
              />
              {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium" style={{ color: '#144133' }}>Email</label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className={`flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm mt-1 placeholder:text-[#144133]/30 ${errors.email ? "border-red-500" : ""}`}
                placeholder="you@example.com"
                style={{ borderColor: '#144133' }}
                required
              />
              {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium" style={{ color: '#144133' }}>Phone</label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm mt-1 placeholder:text-[#144133]/30"
                placeholder="(555) 234-5678"
                style={{ borderColor: '#144133' }}
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium" style={{ color: '#144133' }}>Message</label>
              <textarea
                id="message"
                {...register("message")}
                className={`flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm mt-1 placeholder:text-[#144133]/30 ${errors.message ? "border-red-500" : ""}`}
                placeholder="How can I help you?"
                style={{ borderColor: '#144133' }}
                required
              />
              {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message.message}</p>}
            </div>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#144133] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full transition duration-300 bg-[#144133] text-[#B5DBDF] ease-in-out hover:outline hover:outline-[#144133] hover:bg-[#e6f6f3] hover:text-[#144133]"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
            {submitMessage && (
              <p className="text-green-700 text-center text-sm mt-2">
                {submitMessage}
              </p>
            )}
            <p className="text-sm mt-2" style={{ color: '#144133' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info h-3 w-3 inline m-auto"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
              By submitting, you confirm you are 18+ and agree to our <a href="/privacy" style={{ textDecoration: 'underline', color: '#144133' }}>Privacy Policy & TOS</a> and to receive emails & texts from Dr. Serena Blake.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
} 