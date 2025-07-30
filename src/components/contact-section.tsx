"use client";

import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* First Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center rounded-full px-4 py-2 text-sm bg-purple-100 text-purple-700 mb-6 font-medium">
                  Build the right team to scale
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 lg:text-4xl">
                  Finding the right talent is not easy
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  We help you find and work with the best designers and developers in the world to build your next project.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  Hire top developers
                </Button>
              </div>
            </div>

            {/* Right side - Image placeholder */}
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-gray-400 text-6xl">👥</div>
            </div>
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Image placeholder */}
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center order-2 lg:order-1">
              <div className="text-gray-400 text-6xl">💼</div>
            </div>

            {/* Right side - Text content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <div className="inline-flex items-center rounded-full px-4 py-2 text-sm bg-purple-100 text-purple-700 mb-6 font-medium">
                  Build the right team to scale
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 lg:text-4xl">
                  Finding the right talent is not easy
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  We help you find and work with the best designers and developers in the world to build your next project.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  Hire top developers
                </Button>
              </div>
            </div>
          </div>

          {/* Hire best developers section */}
          <div className="mt-32 text-center">
            <div className="inline-flex items-center rounded-full px-4 py-2 text-sm bg-purple-100 text-purple-700 mb-6 font-medium">
              Hire the best developers and
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-6">
              designers around!
            </h2>
            
            {/* Developer cards grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="bg-white rounded-lg p-6 shadow-sm border">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h4 className="font-semibold text-gray-900 mb-1">Developer {item}</h4>
                  <p className="text-gray-500 text-sm">Full Stack</p>
                  <div className="flex justify-center mt-3">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg key={starIndex} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                View more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
