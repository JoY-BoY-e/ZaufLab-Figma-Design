"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const resources = [
  {
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/feature-image1.png",
  },
  {
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/feature-image2.png",
  },
  {
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/feature-image3.png",
  },
  {
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/feature-image4.png",
  },
  {
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/feature-image5.png",
  },
  {
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/teams.png",
  },
];

export default function FeaturedResources() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 5, // increased from 4
      spacing: 20, // optional: reduce spacing a little
    },
    breakpoints: {
      "(max-width: 1840px)": {
        slides: {
          perView: 4, // slightly more than 3
          spacing: 20,
        },
      },

      "(max-width: 1280px)": {
        slides: {
          perView: 3.5, // slightly more than 4
          spacing: 20,
        },
      },
      "(max-width: 1024px)": {
        slides: {
          perView: 2.2,
          spacing: 16,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1.2,
          spacing: 12,
        },
      },
    },
  });

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-white mb-8">
      <div className="mx-auto">
        <div className="mx-auto h-[0.4rem] w-20 bg-featured-gradient mb-8 rounded-full" />
        <div className="text-center mb-24">
          <h2 className="text-4xl text-featured-heading mb-4">Featured</h2>
          <h3 className="text-4xl font-bold text-featured-title">Resources</h3>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {resources.map((res, idx) => (
            <div
              key={idx}
              className="keen-slider__slide bg-white p-6 rounded-lg min-w-[220px] max-w-[240px]"
            >
              <div className="rounded-lg overflow-hidden mb-6">
                <Image
                  src={res.image}
                  alt={`Resource ${idx}`}
                  width={300}
                  height={400}
                  className="object-cover w-full h-52 rounded"
                />
              </div>
              <h4 className="text-md font-light text-featured-heading mb-6 leading-snug">
                {res.title}
              </h4>
              <a
                href="#"
                className="text-sm text-transparent bg-clip-text bg-featured-gradient font-medium flex items-center justify-end gap-1 hover:underline"
              >
                Read More{" "}
                <ArrowRight className="text-featured-linkText" size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
