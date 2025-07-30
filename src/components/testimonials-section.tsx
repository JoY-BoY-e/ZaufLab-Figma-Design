"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateNow",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    content:
      "They’re incredibly professional and delivered a strong product.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    content:
      "Their expertise in digital marketing helped us grow immensely.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Founder, StartupXYZ",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    content:
      "Professional, reliable, and results-driven. Highly recommended.",
    rating: 5,
  },
  {
    name: "Lisa Wang",
    role: "CTO, DevCorp",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    content:
      "Technical excellence and great communication throughout the project.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Center one

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4">
        <div className="h-1 w-10 bg-pink-600 mb-7 m-auto" />

        <div className="text-4xl  mb-4 inline-block pb-1">
          Why customers love
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          working with us
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-12">
          {testimonials[activeIndex].content}
        </p>
      </div>

      {/* Carousel Arrows */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-purple-500 text-purple-600 hover:bg-purple-100 flex items-center justify-center transition"
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-purple-500 text-purple-600 hover:bg-purple-100 flex items-center justify-center transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Avatar Carousel */}
      <div className="flex justify-center gap-6 mt-8 px-4 overflow-x-auto scrollbar-hide">
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={`flex flex-col items-center transition-all duration-300 ${
                isActive ? "opacity-100 scale-100" : "opacity-40 scale-90"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={100}
                height={100}
                className={`rounded-full border-4 ${
                  isActive ? "border-pink-600" : "border-transparent"
                }`}
              />
              <div className="flex mt-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p
                className={`text-[16px] font-bold  ${
                  isActive ? "text-purple-800" : "text-gray-500"
                }`}
              >
                {testimonial.name}
              </p>
              <p
                className={`text-sm ${
                  isActive ? "text-gray-700" : "text-gray-400"
                }`}
              >
                {testimonial.role}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
