"use client";

import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import CounterSection from "./CounterSection";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import ServicesSection from "./ServicesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CounterSection />
      <AboutSection />
      <ServicesSection />
      <FAQSection />
      <ContactSection />

    </>
  );
}
