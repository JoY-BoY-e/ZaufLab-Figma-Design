"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've come across so far. Wouldn't be hesitated to introduce their work to someone else.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateNow",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    content:
      "They're incredibly professional and delivered a strong product.",
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
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    initial: 2, // Start with middle slide active
    slides: {
      perView: 5,
      spacing: 10,
      origin: "center", // Center the active slide
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { 
          perView: 3, 
          spacing: 4,
          origin: "center", // Center the active slide on mobile too
        },
      },
    },
    slideChanged(slider) {
      setActiveIndex(slider.track.details.rel);
    },
  });

  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrev = () => {
    instanceRef.current?.prev();
  };

  const handleNext = () => {
    instanceRef.current?.next();
  };

  return (
    <section className="py-24 bg-white text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mx-auto h-1.5 w-20 bg-brand-gradient mb-8 rounded-full" />
        <div className="text-4xl mb-4 inline-block pb-1">Why customers love</div>
        <h2 className="text-4xl sm:text-3xl font-bold text-foreground mb-20">
          working with us
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-18">
          {testimonials[activeIndex].content}
        </p>
      </div>

      {/* Arrows */}
      <div className="absolute left-6 top-[calc(50%-8rem)] md:top-1/2 transform md:-translate-y-1/2 z-10">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-brand text-brand hover:bg-brand-light flex items-center justify-center transition"
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute right-6 top-[calc(50%-8rem)] md:top-1/2 transform md:-translate-y-1/2 z-10">
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-brand text-brand hover:bg-brand-light flex items-center justify-center transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="keen-slider mt-8 px-4 max-w-6xl mx-auto"
      >
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className="keen-slider__slide flex flex-col items-center cursor-pointer "
              onClick={() => instanceRef.current?.moveToIdx(index)}
              style={{
                opacity: isActive ? 1 : 0.5,
                transform: isActive ? "scale(1)" : "scale(0.9)",
              }}
            >
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={100}
                height={100}
                className={`rounded-full border-4 transition-all duration-300 ${
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
                className={`text-base font-bold transition-colors duration-300 ${
                  isActive ? "text-brand-dark" : "text-muted"
                }`}
              >
                {testimonial.name}
              </p>
              <p
                className={`text-sm transition-colors duration-300 ${
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