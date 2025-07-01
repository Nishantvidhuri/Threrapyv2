import { HeartHandshake, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden bg-black px-4 py-12 sm:py-20">
      {/* Background Image */}
      <img
        src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-b.79c9c9cd.jpg&w=1200&q=75"
        alt="Therapy clouds background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl w-full">
        {/* Top line */}
        <p className="text-sm sm:text-base md:text-lg mb-3">
          Christian Counseling Services in Richmond &amp; Central Virginia
        </p>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Professional Counseling for Christian Healing and Growth
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-base sm:text-lg md:text-xl font-light">
          Begin your journey today towards spiritual growth, deeper relationships,<br className="hidden sm:inline" />
          and lasting inner peace.
        </p>

        {/* Support line */}
        <p className="mt-6 text-base sm:text-lg md:text-xl font-semibold text-white">
          I want to work with you for..
        </p>

        {/* Highlighted line */}
        <div className="flex flex-wrap items-center justify-center mt-2 text-sky-300 font-bold text-lg sm:text-xl md:text-2xl">
          <HeartHandshake className="w-6 h-6 mr-2" />
          Greater Peace in Your Heart
        </div>

        {/* Badge line */}
        <div className="mt-6 text-xs sm:text-sm md:text-base font-medium text-white flex flex-wrap justify-center gap-x-2 gap-y-1">
          ⭐ Top Rated
          <span className="underline">40+ Years Experience</span>
          <span className="underline">Testimonials</span>
          <span className="underline">Media Mentions</span>
        </div>

        {/* CTA Button */}
        <button className="group relative mt-8 inline-flex h-11 items-center justify-center rounded-xl border-0 bg-[length:200%] text-blue-900 text-sm sm:text-base md:text-lg px-5 sm:px-6 font-semibold transition-colors 
          [background-clip:padding-box,border-box,border-box] [background-origin:border-box] 
          [border:calc(0.08*1rem)_solid_transparent] focus:outline-none focus:ring-1 focus:ring-blue-300 
          before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 
          before:-translate-x-1/2 before:animate-rainbow 
          before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] 
          before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] 
          bg-[linear-gradient(#fff,#fff),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]">
          <Sparkles className="w-5 h-5 mr-2 text-blue-900" />
          Start Healing Today
        </button>
      </div>
    </section>
  );
}
