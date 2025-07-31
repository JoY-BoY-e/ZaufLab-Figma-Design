"use client";

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
                <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-light text-gray-900 leading-tight mb-3">
                  Great <span className="text-[#991566]">software</span> is
                </h1>

                <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                  built by great <span className="text-[#b1287c]">teams</span>
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mb-10">
                  We help build and manage a team of world-class developers
                  <br />
                  to bring your vision to life
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 rounded-md text-white text-sm font-semibold shadow-lg bg-[linear-gradient(90deg,_#6f00ba,_#5f007a)] hover:opacity-90 transition">
                    Let’s get started!
                  </button>
                  {/* Optional secondary button (not visible in your image) */}
                  {/* <button className="border border-gray-300 text-gray-700 hover:bg-gray-100 px-6 py-3 rounded-md text-sm font-medium">
      Learn More
    </button> */}
                </div>
              </div>
            </div>

            {/* Right Content - Workspace Illustration */}
            <div className="flex justify-center">
              <img
                src="/web-dev.png"
                alt="Workspace Illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}