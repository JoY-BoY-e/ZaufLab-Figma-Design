'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'About us', href: '#aboutus' },
  { name: 'Services', href: '#services' },
  { name: 'Case Studies', href: '#casestudies' },
  { name: 'Blog', href: '#blog' },
  { name: 'How it Works', href: '#howitworks' },
  { name: 'Hire', href: '#hire' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-header-background border-b border-header-border shadow-nav">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 py-1">
        <div className="flex h-[59px] items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logos/Logo.png"
                alt="Logo"
                width={200}
                height={60}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-header-text hover:text-header-hover transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button className="rounded-[5px] bg-header-cta text-white text-sm font-semibold px-6 py-2 h-[42px] w-[124px] transition hover:opacity-90">
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
                  className="block py-2 text-sm font-medium text-header-text hover:text-header-hover"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="mt-3 w-full bg-header-cta text-white rounded-[5px] font-semibold h-[42px]">
                Contact us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
