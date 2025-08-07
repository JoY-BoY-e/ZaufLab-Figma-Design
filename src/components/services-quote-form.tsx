"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import pricings from "@/data/pricings.json";
import AmountRangeSelector from "@/components/amount-range-selector";
import { CheckboxBox } from "@/components/check-box";
import DaysSlider from "@/components/day-slider";

const SERVICES = [
  {
    label: "Smart Contract Development (Solidity)",
    key: "smart-contract",
  },
  {
    label: "Frontend & Backend Development",
    key: "frontend-backend",
  },
  {
    label: "Web3 Integration",
    key: "web3-integration",
  },
  {
    label: "UX/UI Design",
    key: "ux-ui-design",
  },
  {
    label: "Branding & Brand Identity",
    key: "branding-brand-identity",
  },
  {
    label: "GraphQL Subgraph Development",
    key: "graphql-subgraph-development",
  },
];

function getTotalPrice(selected: string[], days: number) {
  const total: { min: number; max: number } = {
    min: 0,
    max: 0,
  };

  const workingHoursInDay = 8;
  const totalWorkingHours = days * workingHoursInDay;
  selected.forEach((key) => {
    const service = pricings[key as keyof typeof pricings];
    if (service) {
      total.min += Number(service.price.min) * totalWorkingHours;
      total.max += Number(service.price.max) * totalWorkingHours;
    }
  });

  return total;
}

const ServicesQuoteForm: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [days, setDays] = useState(1);
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  const handleServiceChange = (key: string) => {
    setSelectedServices((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const { min, max } = getTotalPrice(selectedServices, days);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send form data
    const formData = {
      services: selectedServices,
      days,
      description,
      email,
      budgetQuote: {
        min,
        max,
      },
    };
    fetch("/api/email/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    alert("Form submitted!");
  };

  return (
    <form
      className="flex-[2] space-y-8 rounded-2xl bg-white p-6 shadow-md md:p-10"
      onSubmit={handleSubmit}
    >
      {/* Step indicator */}
      <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white text-black">
          1
        </span>
        <span>Personal Info</span>
        <span>&gt;</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF77A5] text-white">
          2
        </span>
        <span className="font-semibold text-[#FF77A5]">Our services</span>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-900">Services</h2>

      {/* Services */}
      <div className="rounded-md bg-[#F9F9F9] px-4 py-6 space-y-3">
        <label className="block text-sm text-gray-700">
          Why are you contacting us?
        </label>
        <div className="flex flex-wrap items-start gap-3 pt-1">
          {SERVICES.map(({ label, key }) => (
            <label
              key={key}
              className="flex cursor-pointer items-start gap-2 rounded-md px-2 py-1"
            >
              <CheckboxBox
                checked={selectedServices.includes(key)}
                onChange={() => handleServiceChange(key)}
              />
              <span className="sm:w-[212px] text-sm font-normal text-gray-800 leading-snug">
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2 rounded-md bg-[#F9F9F9] px-4 py-6">
        <label className="block text-sm text-gray-700">
          Tell us about your project
        </label>
        <textarea
          className="w-full resize-none rounded-md border border-gray-300 bg-white p-3 text-sm text-gray-900 focus:border-[#FF77A5] focus:outline-none"
          rows={4}
          placeholder="Type here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Email */}
      <div className="space-y-2 rounded-md bg-[#F9F9F9] px-4 py-6">
        <label className="block text-sm text-gray-700">Your email</label>
        <input
          required
          type="email"
          className="w-full rounded-md border border-gray-300 bg-white p-3 text-sm text-gray-900 focus:border-[#FF77A5] focus:outline-none"
          placeholder="Type here..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Days Slider */}
      <div className="mx-auto w-[calc(100%-2rem)] space-y-2">
        <label className="block text-sm text-gray-700">
          Slide to indicate your Days range
        </label>
        <DaysSlider days={days} setDays={setDays} />
        <div className="text-xs text-gray-500">
          {days} day{days > 1 ? "s" : ""}
        </div>
      </div>

      {/* Budget Range */}
      <div className="mx-auto w-[calc(100%-2rem)] space-y-2">
        <label className="block text-sm text-gray-700 font-medium">
          Budget Range
        </label>
        <AmountRangeSelector
          value={[min, max]}
          min={min - 400}
          max={max + 400}
          step={100}
        />
      </div>

      {/* Submit */}
      <div className="flex justify-end pt-4">
        <Button
          className=" w-[calc(100%-2rem)] sm:w-[200px] md:w-[300px] text-black border border-[#FF77A5] bg-[#FF77A5] hover:text-white hover:bg-[#ff6699]"
          type="submit"
          disabled={selectedServices.length === 0 || days === 0 || email === ""}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ServicesQuoteForm;
