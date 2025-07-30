import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-sm text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex mb-4">
              <Image
                src="/logos/6537946.jpg"
                alt="Logo"
                width={120}
                height={40}
                className="h-6 w-auto"
              />
            <h3 className="font-semibold text-gray-800">Company</h3>
            </div>
            <p className="text-gray-500 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Image
              src="/logos/6537946.jpg"
              alt="Google performance"
              width={100}
              height={30}
              className="h-auto w-auto"
            />
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-semibold text-gray-800 mb-2">Links</h4>
            <a href="#" className="hover:text-gray-800">
              About Us
            </a>
            <a href="#" className="hover:text-gray-800">
              Services
            </a>
            <a href="#" className="hover:text-gray-800">
              Case Studies
            </a>
            <a href="#" className="hover:text-gray-800">
              How it works
            </a>
            <a href="#" className="hover:text-gray-800">
              Blog
            </a>
            <a href="#" className="hover:text-gray-800">
              Careers
            </a>
            <a href="#" className="hover:text-gray-800">
              Areas We Serve
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Contact us</h4>
            <p className="text-gray-500 mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="text-gray-700 font-medium mb-4">+908 89097 890</p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full shadow-md bg-white flex items-center justify-center hover:shadow-lg transition"
              >
                <Facebook className="w-4 h-4 text-gray-700" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full shadow-md bg-white flex items-center justify-center hover:shadow-lg transition"
              >
                <Instagram className="w-4 h-4 text-gray-700" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full shadow-md bg-white flex items-center justify-center hover:shadow-lg transition"
              >
                <Twitter className="w-4 h-4 text-gray-700" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full shadow-md bg-white flex items-center justify-center hover:shadow-lg transition"
              >
                <Linkedin className="w-4 h-4 text-gray-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-6 text-center text-xs text-gray-400">
          © 2023 Copyright by Agency Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
