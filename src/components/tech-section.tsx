'use client';
import { useState } from 'react';
import Image from 'next/image';

type TabName = "Backend" | "Frontend" | "Databases" | "CMS" | "CloudTesting" | "DevOps";

const tabs: TabName[] = ["Backend", "Frontend", "Databases", "CMS", "CloudTesting", "DevOps"];

const techStack: Record<TabName, { name: string; src: string }[]> = {
  Backend: [
    { name: "Node.js", src: "/logos/6537946.jpg" },
    { name: "PHP", src: "/logos/6537946.jpg" },
    { name: "MySQL", src: "/logos/6537946.jpg" },
    { name: "Java", src: "/logos/6537946.jpg" },
    { name: ".NET Core", src: "/logos/6537946.jpg" },
    { name: "Python", src: "/logos/6537946.jpg" },
    { name: "Rails", src: "/logos/6537946.jpg" },
    { name: "Golang", src: "/logos/6537946.jpg" },
    { name: "MongoDB", src: "/logos/6537946.jpg" },
  ],
  Frontend: [
    { name: "React", src: "/logos/6537946.jpg" },
    { name: "Vue.js", src: "/logos/6537946.jpg" },
    { name: "Angular", src: "/logos/6537946.jpg" },
    { name: "Svelte", src: "/logos/6537946.jpg" },
    { name: "Tailwind CSS", src: "/logos/6537946.jpg" },
    { name: "Bootstrap", src: "/logos/6537946.jpg" },
    { name: "CSS3", src: "/logos/6537946.jpg" },
    { name: "HTML5", src: "/logos/6537946.jpg" },
  ],
  Databases: [
    { name: "PostgreSQL", src: "/logos/6537946.jpg" },
    { name: "SQLite", src: "/logos/6537946.jpg" },
    { name: "Redis", src: "/logos/6537946.jpg" },
    { name: "Firebase", src: "/logos/6537946.jpg" },
    { name: "Cassandra", src: "/logos/6537946.jpg" },
    { name: "Elasticsearch", src: "/logos/6537946.jpg" },
  ],
  CMS: [
    { name: "WordPress", src: "/logos/6537946.jpg" },
    { name: "Drupal", src: "/logos/6537946.jpg" },
    { name: "Joomla", src: "/logos/6537946.jpg" },
    { name: "Shopify", src: "/logos/6537946.jpg" },
    { name: "Magento", src: "/logos/6537946.jpg" },
  ],
  CloudTesting: [
    { name: "AWS", src: "/logos/6537946.jpg" },
    { name: "Azure", src: "/logos/6537946.jpg" },
    { name: "Google Cloud", src: "/logos/6537946.jpg" },
    { name: "Docker", src: "/logos/6537946.jpg" },
    { name: "Kubernetes", src: "/logos/6537946.jpg" },
  ],
  DevOps: [
    { name: "Git", src: "/logos/6537946.jpg" },
    { name: "Jenkins", src: "/logos/6537946.jpg" },
    { name: "Terraform", src: "/logos/6537946.jpg" },
    { name: "Ansible", src: "/logos/6537946.jpg" },
    { name: "CI/CD", src: "/logos/6537946.jpg" },
  ],
};

export default function TechStackTabs() {
  const [activeTab, setActiveTab] = useState<TabName>("Backend");

  return (
    <div className="flex-1 w-full px-4 py-10 md:py-20 text-center justify-center items-center">
      <div className="m-auto h-1 w-10 bg-pink-600 mb-6" />
      <h2 className="text-3xl uppercase tracking-widest ">Our</h2>
      <h1 className="text-3xl md:text-4xl font-bold mt-1 mb-6">Tech Stack</h1>

      <div className="flex justify-center space-x-6 md:space-x-10 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm md:text-base font-medium border-b-2 pb-1 transition-all duration-300 ${
              activeTab === tab
                ? "text-pink-600 border-pink-600"
                : "text-gray-600 border-transparent hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 items-center justify-center max-w-4xl mx-auto">
        {techStack[activeTab]?.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center space-y-2">
            <Image src={tech.src} alt={tech.name} width={100} height={100} />
            <span className="text-xs md:text-sm text-gray-700">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
