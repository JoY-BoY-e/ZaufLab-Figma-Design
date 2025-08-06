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
        <div className="mx-auto h-1.5 w-20 bg-brand-gradient mb-8 rounded-full" />

        <div className="text-4xl mb-4 inline-block pb-1">
          Why customers love
        </div>
        <h2 className="text-4xl sm:text-3xl font-bold text-foreground mb-20">
          working with us
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-18">
          {testimonials[activeIndex].content}
        </p>
      </div>

      {/* Carousel Arrows */}
      <div className="absolute left-12 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-brand text-brand hover:bg-brand-light flex items-center justify-center transition"
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute right-12 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-brand text-brand hover:bg-brand-light flex items-center justify-center transition"
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
                  isActive ? "border-brand-accent" : "border-transparent"
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
                className={`text-base font-bold ${
                  isActive ? "text-brand-dark" : "text-muted"
                }`}
              >
                {testimonial.name}
              </p>
              <p
                className={`text-sm ${
                  isActive ? "text-foreground/70" : "text-muted/60"
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
