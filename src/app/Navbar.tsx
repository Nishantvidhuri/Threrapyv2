"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/therapy/all/richmond", label: "Services" },
    { href: "/#aboutUs", label: "About" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#faq", label: "Rates & FAQs" },
    { href: "/locations", label: "Areas Served" },
    { href: "/book?isContact=true", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f6f8fa]/80 backdrop-blur-lg shadow-lg px-4 md:px-[10%] h-[7rem] flex items-center justify-between">
      {/* Logo */}
      <aside className="flex items-center gap-2 font-heading">
        <Link href="/">
          <Image
            src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-1.42b3afe7.png&w=256&q=75"
            alt="logo"
            width={200}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
      </aside>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex flex-1 items-center justify-center">
        <ul className="flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="navMenuLink">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Get Started Button (Desktop/2XL) */}
      <aside className="hidden 2xl:flex items-center gap-2">
  <Link href="/book">
    <button className="flex items-center bg-[#b3dfe6] text-[#144133] border border-[#A67B5B] rounded-md px-6 py-2 font-heading text-base hover:bg-[#b3dfe6]/60 transition">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles mr-2 h-5 w-5"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
      Get Started
    </button>
  </Link>
</aside>


      {/* Mobile Menu Button */}
      <button
        className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 w-10 lg:hidden hover:bg-[#144133]/10 transition"
        title="Open Menu"
        aria-label="Menu"
        type="button"
        aria-haspopup="dialog"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className="sr-only">Menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav className="fixed inset-0 z-50 bg-[#CED7D6] bg-opacity-95 flex  flex-col items-end lg:hidden transition-all">
          {/* Close button */}
          <button
            className="text-2xl p-4 absolute top-2 right-2"
            aria-label="Close Menu"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
          {/* Drawer */}
          <div className="w-4/5 max-w-xs h-screen bg-[#CED7D6] p-[100%] shadow-2xl flex flex-col items-start pt-10 px-8">
            <h2 className="text-2xl font-bold mb-8 text-[#295055]">Ellie Shumaker</h2>
            <ul className="flex flex-col gap-6 w-full">
              <li>
                <Link href="/therapy/all/richmond" className="text-xl font-medium" onClick={() => setMenuOpen(false)}>
                  How I Help
                </Link>
              </li>
              <li>
                <Link href="/#aboutUs" className="text-xl font-medium" onClick={() => setMenuOpen(false)}>
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-xl font-medium" onClick={() => setMenuOpen(false)}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-xl font-medium" onClick={() => setMenuOpen(false)}>
                  Rates & FAQs
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-xl font-medium" onClick={() => setMenuOpen(false)}>
                  Areas Served
                </Link>
              </li>
              <li>
                <Link href="/book?isContact=true" className="text-xl font-medium" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}
