"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white text-synexil-dark shadow-sm border-b border-synexil-light relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Synexil logo"
            width={280}
            height={250}
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium z-40">
          <Link href="/" className="hover:text-synexil-blue transition">Home</Link>
          <Link href="/about" className="hover:text-synexil-blue transition">About</Link>
          <Link href="/contact" className="hover:text-synexil-blue transition">Contact</Link>

          {/* SERVICES DROPDOWN */}
          <div className="relative group">
            <button className="hover:text-synexil-blue transition">
              Services
            </button>

            <div className="absolute hidden group-hover:block bg-white text-synexil-dark shadow-lg rounded-lg mt-3 w-56 border border-synexil-light z-50">
              <Link href="/services/purview" className="block px-4 py-3 hover:bg-synexil-light">Microsoft Purview</Link>
              <Link href="/services/defender" className="block px-4 py-3 hover:bg-synexil-light">Microsoft Defender</Link>
              <Link href="/services/m365-management" className="block px-4 py-3 hover:bg-synexil-light">M365 Management</Link>
              <Link href="/services/training" className="block px-4 py-3 hover:bg-synexil-light">Training</Link>
              <Link href="/services/product-development" className="block px-4 py-3 hover:bg-synexil-light">Product Development</Link>
            </div>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-synexil-dark"
          onClick={() => setOpen(!open)}
        >
          <span className="text-3xl">&#9776;</span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white text-synexil-dark px-6 pb-6 space-y-4 text-base font-medium border-t border-synexil-light">
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/about" className="block py-2">About</Link>
          <Link href="/contact" className="block py-2">Contact</Link>

          <div className="pt-4 border-t border-synexil-light">
            <p className="font-semibold mb-2">Services</p>
            <Link href="/services/purview" className="block py-2">Microsoft Purview</Link>
            <Link href="/services/defender" className="block py-2">Microsoft Defender</Link>
            <Link href="/services/m365-management" className="block py-2">M365 Management</Link>
            <Link href="/services/training" className="block py-2">Training</Link>
            <Link href="/services/product-development" className="block py-2">Product Development</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
