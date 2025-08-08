import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "Facebook",
    Icon: Facebook,
    href: "https://www.facebook.com/yourpage",
  },
  {
    name: "Instagram",
    Icon: Instagram,
    href: "https://www.instagram.com/yourpage",
  },
  {
    name: "Twitter",
    Icon: Twitter,
    href: "https://www.twitter.com/yourpage",
  },
  {
    name: "LinkedIn",
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/yourpage",
  },
];

export function Footer() {
  return (
    <footer className="bg-footer-bg border-t border-footer-border text-sm text-footer-text">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div>
            <div className="flex mb-4">
              <Image
                src="/logos/Logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-14 w-auto"
              />
            </div>
            <p className="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Image
              src="/logos/googleLogo.png"
              alt="Google performance"
              width={100}
              height={30}
              className="h-12 w-auto mb-4"
            />
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-semibold text-footer-link mb-2">Links</h4>
            {[
              "About Us",
              "Services",
              "Case Studies",
              "How it works",
              "Blog",
              "Careers",
              "Areas We Serve",
            ].map((label) => (
              <a
                key={label}
                href="#"
                className="hover:text-footer-link transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-footer-link mb-2">Contact us</h4>
            <p className="mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="text-footer-icon font-medium mb-4">+908 89097 890</p>
            <div className="flex space-x-3 justify-end mt-10">
              {socialLinks.map(({ name, Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  aria-label={`Visit our ${name} page`}
                  className="w-9 h-9 rounded-full shadow-md bg-white flex items-center justify-center hover:shadow-lg transition"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon className="w-4 h-4 text-footer-icon" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-6 text-center text-xs text-footer-muted">
          © 2023 Copyright by Agency Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
