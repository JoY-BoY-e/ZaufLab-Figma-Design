'use client';

export function HireBanner() {
  return (
    <section id="hire" className="px-4 py-10">
      <div className="bg-gradient-to-r from-[#f1f5f9] to-white rounded-2xl px-8 py-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Hire the best developers and <br className="hidden md:block" /> designers around!
          </h3>
        </div>

        <div className="relative mt-6 md:mt-0">
          <button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold py-2 px-5 rounded-md shadow-lg z-10 relative">
            Hire Top Developers
          </button>
          {/* Sunburst rays */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 rounded-full border-2 border-transparent animate-ping opacity-60" />
            <div className="absolute w-4 h-0.5 bg-yellow-400 -top-6 rotate-0" />
            <div className="absolute w-4 h-0.5 bg-yellow-400 -top-6 rotate-45" />
            <div className="absolute w-4 h-0.5 bg-yellow-400 -top-6 rotate-90" />
            <div className="absolute w-4 h-0.5 bg-yellow-400 -top-6 rotate-[135deg]" />
          </div>
        </div>
      </div>
    </section>
  );
}
