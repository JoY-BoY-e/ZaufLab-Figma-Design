"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "About us", href: "#aboutus" },
  { name: "Services", href: "#services" },
  { name: "Case Studies", href: "#casestudies" },
  { name: "Blog", href: "#blog" },
  { name: "How it Works", href: "#howitworks" },
  { name: "Hire", href: "#hire" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm font-sans">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-1">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-r from-[#AC5DD9] to-[#FF77A5] flex items-center justify-center text-white font-semibold text-lg shadow-md">
                P
              </div>
              <span className="text-lg font-semibold text-gray-800">
                Digital Agency
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[1rem] font-normal tracking-wide text-gray-600 hover:text-black transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button className="rounded-md bg-[linear-gradient(25deg,_#5f4478_0%,_#e04478_100%)] text-white text-sm font-semibold px-6 py-2 transition hover:opacity-90">
              Contact us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-10 w-10 p-0"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2">
            <div className="rounded-md border bg-white px-4 py-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm font-medium text-gray-600 hover:text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="mt-3 w-full bg-[linear-gradient(45deg,_#5f4478_0%,_#e04478_100%)] text-white rounded-md font-semibold hover:bg-[#d83e5d]">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
