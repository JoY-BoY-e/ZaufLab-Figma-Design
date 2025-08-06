"use client";

import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-24 sm:pb-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="mb-16">
                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-light text-foreground leading-tight mb-3">
                  Great <span className="text-highlight-software">software</span> is
                </h1>

                <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-extrabold text-foreground leading-tight mb-6">
                  built by great <span className="text-highlight-teams">teams</span>
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mb-10">
                  We help build and manage a team of world-class developers
                  <br />
                  to bring your vision to life
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 rounded-md text-white text-sm font-semibold shadow-lg bg-brand-gradient hover:opacity-90 transition">
                    Let’s get started!
                  </button>

                  {/* Secondary button can be optionally added */}
                  {/*
                  <button className="border border-gray-300 text-muted hover:bg-gray-100 px-6 py-3 rounded-md text-sm font-medium">
                    Learn More
                  </button>
                  */}
                </div>
              </div>
            </div>

            {/* Right Content - Workspace Illustration */}
            <div className="flex justify-center">
              <Image
                src="/web-dev.png"
                alt="Workspace Illustration"
                
                width={500}
                height={500}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
