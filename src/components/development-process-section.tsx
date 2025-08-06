'use client';

import { Trophy } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    number: '#1',
    title: 'Assemble the right team',
    description:
      "We handle all aspects of vetting and choosing the right team that you don’t have the time, expertise, or desire to do.",
  },
  {
    number: '#2',
    title: 'Sprint planning',
    description:
      'Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.',
  },
  {
    number: '#3',
    title: 'Tech architecture',
    description:
      'We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.',
  },
  {
    number: '#4',
    title: 'Standups & weekly demos',
    description:
      'Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.',
  },
  {
    number: '#5',
    title: 'Code reviews',
    description:
      'Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.',
  },
  {
    number: '#6',
    title: 'Iterative delivery',
    description:
      'We divide the implementation process into several checkpoints rather than a single deadline.',
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto relative">
      {/* Heading */}
      <div className="text-center mb-28">
        <div className="mx-auto h-[0.4rem] w-20 bg-brand-gradient mb-8 rounded-full" />
        <h2 className="text-4xl text-section-subheading mb-4">How development</h2>
        <h3 className="text-4xl font-bold text-foreground">
          through <span className="text-foreground font-semibold">Alcaline</span> works
        </h3>
      </div>

      {/* Top 3 Cards */}
      <div className="relative grid md:grid-cols-3 gap-6 mb-16">
        {steps.slice(0, 3).map((step, idx) => (
          <div
            key={idx}
            className="max-w-[320px] relative right-3 z-10 p-6 bg-white rounded-lg shadow-sm border text-left mb-8"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-[0.2rem] h-12 bg-pink-500 hidden md:block" />
            <h4 className="text-lg font-bold text-pink-700 mb-4">
              {step.number}{' '}
              <span className="text-foreground">{step.title}</span>
            </h4>
            <p className="text-muted text-sm">{step.description}</p>
          </div>
        ))}

        {/* Line with curves */}
        <div className="absolute top-full left-0 w-[calc(100%-2rem)] hidden md:block z-0">
          <div className="relative w-full h-4 mt-[11px]">
            <div className="absolute top-2 left-0 w-full h-[0.2rem] bg-pink-500" />
            <div className="absolute top-0 left-0 w-8 h-4">
              <div className="w-full h-full rounded-bl-lg" />
            </div>
            <div className="absolute top-0 right-0 w-8 h-4">
              <div className="w-full h-full rounded-br-lg" />
            </div>
            <div className="absolute top-[-15px] right-[-33px] flex items-center justify-center m-3 mr-0">
              {/* <Trophy className="text-yellow-500 w-8 h-8" /> */}
              <Image
                src="/trophy.png"
                alt="Trophy"
                width={32}
                height={32}
                className="text-yellow-500 w-8 h-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 3 Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {steps.slice(3, 6).map((step, idx) => (
          <div
            key={idx}
            className="max-w-[320px] relative left-3 z-10 p-6 bg-white rounded-lg shadow-sm border text-left"
          >
            <div className="absolute left-1/2 transform translate-x-10 bottom-full w-[0.2rem] h-10 bg-pink-500 hidden md:block" />
            <h4 className="text-lg font-bold text-pink-700 mb-4">
              {step.number}{' '}
              <span className="text-foreground">{step.title}</span>
            </h4>
            <p className="text-muted text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
