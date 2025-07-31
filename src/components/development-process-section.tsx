'use client';

import { Trophy } from 'lucide-react';

const steps = [
  {
    number: '#1',
    title: 'Assemble the right team',
    description: "We handle all aspects of vetting and choosing the right team that you don’t have the time, expertise, or desire to do.",
  },
  {
    number: '#2',
    title: 'Sprint planning',
    description: 'Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.',
  },
  {
    number: '#3',
    title: 'Tech architecture',
    description: 'We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.',
  },
  {
    number: '#4',
    title: 'Standups & weekly demos',
    description: 'Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.',
  },
  {
    number: '#5',
    title: 'Code reviews',
    description: 'Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.',
  },
  {
    number: '#6',
    title: 'Iterative delivery',
    description: 'We divide the implementation process into several checkpoints rather than a single deadline.',
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto relative">
      {/* Heading */}
      <div className="text-center mb-20">
        <div className="mx-auto h-[0.4rem] w-20 bg-gradient-to-r from-[#57007B] to-[#F76680] mb-6" />
        <h2 className="text-3xl text-gray-600 mb-3">How development</h2>
        <h3 className="text-3xl font-bold text-gray-900">
          through <span className="text-black font-semibold">Alcaline</span> works
        </h3>
      </div>

      {/* Top 3 Cards */}
      <div className="relative grid md:grid-cols-3 gap-6 mb-16">
        {steps.slice(0, 3).map((step, idx) => (
          <div key={idx} className="relative right-3 z-10 p-6 bg-white rounded-lg shadow-sm border text-left mb-8">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-1 h-12 bg-pink-500 hidden md:block" />
            <h4 className="text-base font-bold text-pink-700 mb-4">
              {step.number}{' '}
              <span className="text-gray-900">{step.title}</span>
            </h4>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}

        {/* Enhanced Horizontal Line with curves */}
        <div className="absolute top-full left-0 w-[calc(100%-2rem)] hidden md:block z-0">
          <div className="relative w-full h-8 mt-[11px]">
            {/* Main horizontal line */}
            <div className="absolute top-2 left-0 w-full h-1 bg-pink-500" />
            {/* Left curve */}
            <div className="absolute top-0 left-0 w-8 h-8">
              <div className="w-full h-full border-l-2 border-b-2 border-pink-500 rounded-bl-lg" />
            </div>
            {/* Right curve */}
            <div className="absolute top-0 right-0 w-8 h-8">
              <div className="w-full h-full border-r-2 border-b-2 border-pink-500 rounded-br-lg" />
            </div>
            {/* Trophy icon positioned at the right end of the line */}
            <div className="absolute top-[-15px] right-[-20px] flex items-center justify-center m-3 mr-0">
              <Trophy className="text-yellow-500 w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 3 Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {steps.slice(3, 6).map((step, idx) => (
          <div key={idx} className="relative left-3 z-10 p-6 bg-white rounded-lg shadow-sm border text-left">
            <div className="absolute left-1/2 transform translate-x-10 bottom-full w-1 h-10 bg-pink-500 hidden md:block" />
            <h4 className="text-base font-bold text-pink-700 mb-4">
              {step.number}{' '}
              <span className="text-gray-900">{step.title}</span>
            </h4>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
