"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { HOSPITAL_INFO } from "@/lib/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Team", href: "/team" },
    { name: "Eye Health", href: "/eye-health" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary-900 tracking-tight leading-tight">
              The Premium Nation's<br /><span className="text-primary-600">Eye Hospital</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <a href={`tel:${HOSPITAL_INFO.phone}`} className="flex items-center gap-2 text-sm font-medium text-primary-800 hover:text-primary-600">
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">{HOSPITAL_INFO.phone}</span>
            </a>
            <Link 
              href="/book-appointment"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-[2px] active:translate-x-[2px] bg-primary-600 text-white hover:bg-primary-500 border-2 border-r-4 border-b-4 border-primary-950 h-11 px-5 py-2"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-4 shadow-lg absolute w-full left-0">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-800 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
            <Link 
              href="/book-appointment"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-all bg-primary-600 text-white hover:bg-primary-500 border-2 border-r-4 border-b-4 border-primary-950 active:translate-y-[2px] active:translate-x-[2px] h-11 px-5 py-2 w-full"
            >
              Book Appointment
            </Link>
            <a href={`tel:${HOSPITAL_INFO.phone}`} className="flex items-center justify-center gap-2 text-sm font-medium text-primary-800 py-2">
              <Phone className="h-4 w-4" />
              {HOSPITAL_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
