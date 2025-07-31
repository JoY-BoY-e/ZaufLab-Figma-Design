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

        <div ref={sliderRef} className="keen-slider group overflow-visible relative ">
          {services.map((service, index) => (
            <div
              key={index}
              className="keen-slider__slide flex items-stretch justify-center overflow-visible py-5"
            >
             <Card
  className={`
    flex flex-col justify-between bg-[#FAFAFA] rounded-[7px]
    border-2 border-transparent
    shadow-[0px_4px_30px_rgba(0,0,0,0.05)] hover:shadow-[0px_4px_30px_rgba(0,0,0,0.1)]
    hover:scale-[1.02]
    transition-all duration-300
    group-hover:-translate-y-1 group-hover:z-10
    hover:translate-y-2
    w-[330px] h-[326px]
  `}
  style={{
    borderColor: 'transparent',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.borderColor = '#993375';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.borderColor = 'transparent';
  }}
>
  <CardContent className="p-[4.8%]">
    {/* Icon container - exact Figma dimensions */}
    <div 
      className="w-[58px] h-[58px] rounded-full flex items-center justify-center mb-[20px]"
      style={{
        backgroundColor: "#FAFAFA",
        border: "1px solid #FF77A5"
      }}
    >
      <span className="text-[34px]">{service.icon}</span>
    </div>
    
    {/* Title - with gradient text when active */}
    <h3 className="font-inter font-semibold text-[20px] leading-[27px] mb-[20px] text-[#2D3748]">
      {service.title}
    </h3>
    
    {/* Description - exact Figma styling */}
    <p className="font-inter font-normal text-[14px] leading-[23px] text-[#718096]">
      {service.description}
    </p>
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
