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

                <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
  built by great <span className="text-[#b1287c]">teams</span>
</h2>


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

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Projects Completed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">99%</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Client Satisfaction
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Support Available
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Workspace Illustration */}
            <div className="relative">
              <div className="relative h-[500px] w-full flex items-center justify-center">
                {/* Main Workspace Container */}
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl max-w-lg">
                  {/* Desk Surface */}
                  <div className="bg-gradient-to-b from-amber-100 to-amber-200 rounded-xl p-6 relative">
                    {/* Monitor */}
                    <div className="relative mx-auto mb-4 w-48">
                      {/* Monitor Screen */}
                      <div className="bg-gray-900 rounded-lg p-2 shadow-lg">
                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded aspect-video p-3">
                          <div className="text-white text-xs space-y-1">
                            <div className="w-16 h-1 bg-white/30 rounded"></div>
                            <div className="w-12 h-1 bg-white/20 rounded"></div>
                            <div className="w-20 h-1 bg-white/25 rounded"></div>
                          </div>
                        </div>
                      </div>
                      {/* Monitor Stand */}
                      <div className="w-8 h-3 bg-gray-600 mx-auto rounded-b"></div>
                      <div className="w-16 h-2 bg-gray-700 mx-auto rounded-full"></div>
                    </div>

                    {/* Desk Items */}
                    <div className="flex justify-between items-end relative">
                      {/* Coffee Cup */}
                      <div className="relative">
                        <div className="w-6 h-8 bg-white rounded-b-full border-2 border-gray-300">
                          <div className="w-full h-2 bg-amber-600 rounded-t-full mt-1"></div>
                        </div>
                        <div className="absolute -right-1 top-2 w-2 h-3 border-2 border-gray-300 rounded-r-full"></div>
                      </div>

                      {/* Books Stack */}
                      <div className="space-y-0.5">
                        <div className="w-12 h-2 bg-blue-500 rounded-sm"></div>
                        <div className="w-12 h-2 bg-red-500 rounded-sm"></div>
                        <div className="w-12 h-2 bg-green-500 rounded-sm"></div>
                      </div>

                      {/* Plant */}
                      <div className="relative">
                        <div className="w-4 h-6 bg-amber-700 rounded-b-full"></div>
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                          <div className="w-2 h-3 bg-green-500 rounded-full"></div>
                          <div className="absolute -left-1 -top-1 w-2 h-2 bg-green-400 rounded-full"></div>
                          <div className="absolute -right-1 -top-0.5 w-1.5 h-2 bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chair */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    {/* Chair Back */}
                    <div className="w-16 h-20 bg-purple-600 rounded-t-2xl relative">
                      <div className="absolute inset-2 bg-purple-500 rounded-t-xl"></div>
                    </div>
                    {/* Chair Seat */}
                    <div className="w-20 h-4 bg-purple-600 rounded-full -mt-2"></div>
                    {/* Chair Base */}
                    <div className="w-2 h-8 bg-gray-600 mx-auto"></div>
                    <div className="relative mx-auto w-12 h-2">
                      <div className="absolute inset-0 bg-gray-700 rounded-full"></div>
                      {/* Chair Wheels */}
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-gray-800 rounded-full"
                          style={{
                            transform: `rotate(${i * 72}deg) translateY(-6px)`,
                            transformOrigin: "50% 6px",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-600 to-blue-600 opacity-5 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
    </section>
  );
}
