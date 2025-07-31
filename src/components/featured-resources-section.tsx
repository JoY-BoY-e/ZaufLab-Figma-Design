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
        <div className="mx-auto h-[0.4rem] w-20 bg-gradient-to-r from-[#57007B] to-[#F76680] mb-6" />
        <div className="text-center mb-20">
          <h2 className="text-3xl text-gray-700 mb-3">Featured</h2>
          <h3 className="text-3xl font-bold text-gray-900 ">Resources</h3>
        </div>

        

        <div ref={sliderRef} className="keen-slider">
          {resources.map((res, idx) => (
            <div
              key={idx}
              className="keen-slider__slide bg-white p-2 rounded-lg "
            >
              <div className="rounded-lg overflow-hidden mb-6">
                <Image
                  src={res.image}
                  alt={`Resource ${idx}`}
                  width={300}
                  height={200}
                  className="object-cover w-full h-40 rounded"
                />
              </div>
              <h4 className="text-sm font-light text-gray-700 mb-6 leading-snug">
                {res.title}
              </h4>
              <a
                href="#"
                className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#F76680] to-[#57007B] font-medium flex items-center justify-end gap-1 hover:underline"
              >
                Read More <ArrowRight className='text-black' size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
