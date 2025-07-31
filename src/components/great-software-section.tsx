"use client";

import Image from "next/image";

const items = [
  {
    image: "/teams.png",
    quote: "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
    name: "Jeewa markram",
    role: "CEO",
  },
  {
    image: "/teams.png",
    quote: "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
    name: "Jeewa markram",
    role: "CEO",
  },
  {
    image: "/teams.png",
    quote: "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
    name: "Jeewa markram",
    role: "CEO",
  },
];

export function GreatSoftwareSection() {
  return (
    <section id="blog" className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="mx-auto h-[0.4rem] w-20 bg-gradient-to-r from-[#57007B] to-[#F76680] mb-6" />
          <p className="text-gray-800 text-3xl mb-3">Way of building</p>
          <h2 className="text-4xl sm:text-4xl font-extrabold text-gray-900">Great Software</h2>
        </div>

        {/* Case Blocks */}
        <div className="space-y-20">
          {items.map((item, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row ${isReversed ? "lg:flex-row-reverse" : ""} items-center gap-12`}
              >
                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-10">Build the right team to scale</h3>
                  <p className="text-gray-600 mb-10">
                    Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers)
                  </p>
                  <p className="text-sm font-medium mb-6">
                    Our <a href="#" className="text-transparent bg-clip-text bg-gradient-to-r from-[#F76680] to-[#57007B]">delivery model</a> helps you cut costs and deliver within budget.
                  </p>
                  <blockquote className="border-l-4 pl-4 border-violet-500 text-sm italic text-transparent bg-clip-text bg-gradient-to-r from-[#F76680] to-[#57007B] mb-6">
                    “{item.quote}”
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <Image
                      src={"https://randomuser.me/api/portraits/women/44.jpg"}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium text-sm text-gray-900">{item.name}</div>
                      <div className="text-gray-500 text-xs">{item.role}</div>
                    </div>
                  </div>
                </div>

                {/* Image with accents */}
                <div className="relative w-full lg:w-1/2 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt="Team"
                    className="rounded-xl object-cover w-full h-auto"
                    width={600}
                    height={400}
                  />
                  {/* Top Left Accent */}
                  <div className="absolute top-0 left-0 w-6 h-6 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  {/* Bottom Right Accent */}
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-purple-500 rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
