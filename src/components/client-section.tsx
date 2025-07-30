"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import { url } from "inspector";

const logos = [
  "/logos/6537946.jpg",
  "/logos/6537946.jpg",
  "/logos/6537946.jpg",
  "/logos/6537946.jpg",
  "/logos/6537946.jpg",
  "/logos/6537946.jpg",
];

export function ClientsSection() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 4,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 2,
          spacing: 12,
        },
      },
    },
  });

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 ">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <div className="h-1 w-10 bg-purple-600 mb-4" />
            <h3 className="text-lg sm:text-xl text-gray-500 font-medium mb-1">
              Meet the People
            </h3>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
              We are{" "}
              <span className="text-black font-extrabold">Working With</span>
            </h2>
          </div>
          <div className="flex space-x-4 mt-2 lg:mt-0">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="w-10 h-10 rounded-full border border-purple-800 flex items-center justify-center text-purple-800 hover:bg-purple-100 transition"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="w-10 h-10 rounded-full bg-purple-800 text-white flex items-center justify-center hover:bg-purple-700 transition"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div ref={sliderRef} className="keen-slider bg-[#f8f5fb]">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="keen-slider__slide flex justify-center items-center p-4"
            >
              <Image
                src={logo}
                width={200}
                height={100}
                alt={`Client logo ${idx}`}
                className="object-contain h-20 sm:h-24"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}