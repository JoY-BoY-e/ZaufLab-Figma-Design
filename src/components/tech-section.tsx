"use client";
import { useState } from "react";
import Image from "next/image";

type TabName =
  | "Backend"
  | "Frontend"
  | "Databases"
  | "CMS"
  | "CloudTesting"
  | "DevOps";

const tabs: TabName[] = [
  "Backend",
  "Frontend",
  "Databases",
  "CMS",
  "CloudTesting",
  "DevOps",
];

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
    <div className="flex-1 w-full px-4 py-15 md:py-20 text-center justify-center items-center mb-12">
      <div className="mx-auto h-[0.4rem] w-20 bg-gradient-to-r from-[#57007B] to-[#F76680] mb-6" />

      <h2 className="text-3xl uppercase tracking-widest mb-2">Our</h2>
      <h1 className="text-3xl md:text-4xl font-bold mt-1 mb-12">Tech Stack</h1>

      <div className="flex justify-center space-x-6 md:space-x-10 mb-18 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm md:text-base font-medium border-b-2 pb-1 transition-all duration-300 ${
              activeTab === tab
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#57007B] to-[#F76680] border-pink-600"
                : "text-gray-600 border-transparent hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-4xl mx-auto">
        {techStack[activeTab]?.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center w-30 md:w-34" // Fixed width for better alignment
          >
            <div className="w-full flex items-center justify-center">
              <Image
                src={tech.src}
                alt={tech.name}
                width={64} // Optimized size
                height={64}
                className="object-contain w-full h-full" // Ensures proper scaling
              />
            </div>
            <span className="text-xs md:text-sm text-gray-700 text-center mt-2">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
