'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import {  ArrowRight } from 'lucide-react';
import Image from 'next/image';

const resources = [
  {
    title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
    image: '/teams.png',
  },
  {
    title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
    image: '/teams.png',
  },
  {
    title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
    image: '/teams.png',
  },
  {
    title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
    image: '/teams.png',
  },
  {
    title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
    image: '/teams.png',
  },
  {
    title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
    image: '/teams.png',
  },
  {
    title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
    image: '/teams.png',
  },
];

export default function FeaturedResources() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 4,
      spacing: 24,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
      '(max-width: 640px)': {
        slides: {
          perView: 1.5,
          spacing: 12,
        },
      },
    },
  });

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="w-12 h-1 bg-pink-500 mx-auto mb-4" />
          <h2 className="text-xl text-gray-700">Featured</h2>
          <h3 className="text-3xl font-bold text-gray-900">Resources</h3>
        </div>

        

        <div ref={sliderRef} className="keen-slider">
          {resources.map((res, idx) => (
            <div
              key={idx}
              className="keen-slider__slide bg-white p-4 rounded-lg border shadow-sm hover:shadow-neutral-600"
            >
              <div className="rounded-lg overflow-hidden mb-3">
                <Image
                  src={res.image}
                  alt={`Resource ${idx}`}
                  width={300}
                  height={200}
                  className="object-cover w-full h-40 rounded"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-800 mb-2 leading-snug">
                {res.title}
              </h4>
              <a
                href="#"
                className="text-sm text-purple-600 font-medium flex items-center gap-1 hover:underline"
              >
                Read More <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
