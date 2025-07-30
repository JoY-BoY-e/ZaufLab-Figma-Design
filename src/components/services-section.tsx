"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Web Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: "💻",
  },
  {
    title: "Mobile App Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: "📱",
  },
  {
    title: "Software Testing Service",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: "🧪",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Complete online store solutions with secure payment and inventory management.",
    icon: "🛒",
  },
];

export function ServicesSection() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1.2, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.5, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.5, spacing: 24 },
      },
    },
  });

  return (
    <section id="services" className="py-24 sm:py-32 bg-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Services we offer
          </h2>
        </div>

        <div ref={sliderRef} className="keen-slider group overflow-visible relative">
          {services.map((service, index) => (
            <div
              key={index}
              className="keen-slider__slide flex items-stretch justify-center overflow-visible py-2"
            >
              <Card
  className={`
    flex flex-col justify-between bg-white rounded-xl
    border-[2px] border-transparent
    shadow-md hover:shadow-lg
    hover:scale-[1.02]
    transition-all duration-300
    group-hover:translate-y-1
    hover:-translate-y-1 hover:z-10
    max-w-sm
  `}
  style={{
    borderColor: 'transparent',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.borderColor = '#FF77A5'; // Change border color on hover
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.borderColor = 'transparent'; // Remove border when not hovered
  }}
>
  <CardContent className="p-6">
    <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center text-2xl mb-6 text-pink-600"
      style={{ backgroundColor: "#FFF0F5",
        borderColor: "#FF77A5"
      }}
    >
      {service.icon}
    </div>
    <h3 className="text-lg font-semibold text-pink-700 mb-2">
      {service.title}
    </h3>
    <p className="text-gray-600 text-sm">{service.description}</p>
  </CardContent>
</Card>

            </div>
          ))}
        </div>

        {/* Pagination dots (replace with real if needed) */}
        <div className="mt-8 flex justify-center gap-2">
          <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
          <span className="w-2 h-2 bg-pink-200 rounded-full"></span>
          <span className="w-2 h-2 bg-pink-200 rounded-full"></span>
        </div>
      </div>
    </section>
  );
}
