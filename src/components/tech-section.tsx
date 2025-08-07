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
  { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "PHP", src: "https://cdn.simpleicons.org/php" },
  { name: "MySQL", src: "https://cdn.simpleicons.org/mysql" },
  { name: "Java", src: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
  { name: ".NET Core", src: "https://cdn.simpleicons.org/dotnet" },
  { name: "Python", src: "https://cdn.simpleicons.org/python" },
  { name: "Rails", src: "https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg" },
  { name: "Golang", src: "https://cdn.simpleicons.org/go" },
],
Frontend: [
  { name: "React", src: "https://cdn.simpleicons.org/react" },
  { name: "Vue.js", src: "https://cdn.simpleicons.org/vuedotjs" },
  { name: "Angular", src: "https://cdn.simpleicons.org/angular" },
  { name: "Svelte", src: "https://cdn.simpleicons.org/svelte" },
  { name: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Bootstrap", src: "https://cdn.simpleicons.org/bootstrap" },
  { name: "CSS3", src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
  { name: "HTML5", src: "https://cdn.simpleicons.org/html5" },
],
Databases: [
  { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql" },
  { name: "SQLite", src: "https://cdn.simpleicons.org/sqlite" },
  { name: "Redis", src: "https://cdn.simpleicons.org/redis" },
  { name: "Firebase", src: "https://cdn.simpleicons.org/firebase" },
  { name: "Cassandra", src: "https://cdn.simpleicons.org/apachecassandra" },
  { name: "Elasticsearch", src: "https://cdn.simpleicons.org/elasticsearch" },
  { name: "MongoDB", src: "https://cdn.simpleicons.org/mongodb" },

],
CMS: [
  { name: "WordPress", src: "https://cdn.simpleicons.org/wordpress" },
  { name: "Drupal", src: "https://cdn.simpleicons.org/drupal" },
  { name: "Joomla", src: "https://cdn.simpleicons.org/joomla" },
  { name: "Shopify", src: "https://cdn.simpleicons.org/shopify" },
],
CloudTesting: [
  { name: "AWS", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Azure", src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
  { name: "Google Cloud", src: "https://cdn.simpleicons.org/googlecloud" },
  { name: "Docker", src: "https://cdn.simpleicons.org/docker" },
  { name: "Kubernetes", src: "https://cdn.simpleicons.org/kubernetes" },
],
DevOps: [
  { name: "Git", src: "https://cdn.simpleicons.org/git" },
  { name: "Jenkins", src: "https://cdn.simpleicons.org/jenkins" },
  { name: "Terraform", src: "https://cdn.simpleicons.org/terraform" },
  { name: "Ansible", src: "https://cdn.simpleicons.org/ansible" },
  { name: "CI/CD", src: "https://cdn.simpleicons.org/gitlab" }, // GitLab used as CI/CD representation
],

};

export default function TechStackTabs() {
  const [activeTab, setActiveTab] = useState<TabName>("Backend");

  return (
    <div className="flex-1 w-full px-4 py-15 md:py-20 text-center justify-center items-center mb-12">
      {/* Use a utility class instead of hard-coded colors */}
        <div className="mx-auto h-[0.4rem] w-20 bg-featured-gradient mb-8 rounded-full" />

      <h2 className="text-4xl tracking-widest mb-4">Our</h2>
      <h1 className="text-4xl md:text-4xl font-bold mt-1 mb-16">Tech Stack</h1>

      <div className="flex justify-center space-x-6 md:space-x-10 mb-20 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm md:text-base lg:text-lg xl:text-xl font-medium border-b-2 pb-1 transition-all duration-300 ${
              activeTab === tab
                ? "text-brand-gradient border-brand"
                : "text-muted border-transparent hover:text-foreground"
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
            className="flex flex-col items-center w-24 md:w-28 lg:w-32 xl:w-36 p-4 bg-white "
          >
            <div className="w-full flex items-center justify-center">
              <Image
                src={tech.src}
                alt={tech.name}
                width={64}
                height={64}
                className="object-contain w-full h-full"
              />
            </div>
            {/* <span className="text-xs md:text-sm text-muted text-center mt-2">
              {tech.name}
            </span> */}
          </div>
        ))}
      </div>
    </div>
  );
}
