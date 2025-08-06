import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#57007B",
          dark: "#36004e",
        },
        accent: "#F76680",
        muted: "#666666",
        mutedForeground: "#333333",
        foreground: "#000000",
        //service-section
        cardBg: "#FAFAFA",
        cardBorder: "#FF77A5",
        headline: "#2D3748",
        subtext: "#718096",

        pink: {
          DEFAULT: "#F76680",
          500: "#F76680",
          700: "#C53060",
        },
        yellow: {
          500: "#ECC94B",
        },
        header: {
          text: "#4A5568", // text-gray-700
          hover: "#000000",
          border: "#E2E8F0", // border-gray-200
          background: "#FFFFFF",
        },
        footer: {
          bg: "#ffffff",
          border: "#E2E8F0", // border-gray-200
          text: "#6B7280", // text-gray-500
          link: "#1F2937", // text-gray-800
          icon: "#374151", // text-gray-700
          muted: "#9CA3AF", // text-gray-400
        },
        featured: {
          heading: "#2D3748", // text-gray-700
          title: "#1A202C", // text-gray-900
          linkText: "#000000", // fallback for arrow icons
        },
        //great softeware
        section: {
          background: "#ffffff",
          heading: "#1A202C", // text-gray-900
          subheading: "#2D3748", // text-gray-800
          body: "#4A5568", // text-gray-600
          quote: "#6B46C1", // violet-500
          role: "#718096", // text-gray-500
        },

        light: {
          purple: "#e8ebfb",
          green: "#e8fbf3",
          pink: "#fbe8fb",
          //client-section
          lavender: "#f8f5fb", // used for keen-slider background
          purpleBorder: "#6b21a8", // tailwind purple-800 override
          purpleHover: "#ede9fe", // tailwind purple-100 override
          purpleDark: "#5b21b6", // tailwind purple-700 override
        },

        highlight: {
          software: "#991566", // pinkish-purple for “software”
          teams: "#b1287c", // brighter pink for “teams”
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(to right, #57007B, #F76680)",
        "featured-gradient": "linear-gradient(to right,#57007B, #F76680)", // define custom name
        "header-cta": "linear-gradient(to top right, #57007B, #F76680)",
        //great software
        "text-gradient": "linear-gradient(to right, #F76680, #57007B)",
        "line-gradient": "linear-gradient(to right, #57007B, #F76680)",
      },
      boxShadow: {
        nav: "0 2px 12px rgba(0, 0, 0, 0.04)",
      },
      scale: {
        102: '1.02',
      },
    },
  },
  plugins: [],
};

export default config;
