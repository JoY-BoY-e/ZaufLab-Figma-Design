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
  const total = { min: 0, max: 0 };
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
    const formData = {
      services: selectedServices,
      days,
      description,
      email,
      budgetQuote: { min, max },
    };

    await fetch("/api/email/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Form submitted!");
  };

  return (
    <form
      className="flex-[2] space-y-8 rounded-2xl bg-white p-6 shadow-md md:p-10"
      onSubmit={handleSubmit}
    >
      {/* Step Indicator */}
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
      <fieldset className="rounded-md bg-[#F9F9F9] px-4 py-6 space-y-3">
        <legend className="block text-sm font-medium text-gray-900 mb-3">
          Why are you contacting us?
        </legend>
        <div className="flex flex-wrap items-start gap-4 pt-1" role="group" aria-labelledby="services-legend">
          {SERVICES.map(({ label, key }) => (
            <div key={key} className="flex items-start gap-3 min-h-[44px] p-2 rounded hover:bg-gray-50">
              <CheckboxBox
                id={`service-${key}`}
                aria-describedby={`service-${key}-desc`}
                checked={selectedServices.includes(key)}
                onChange={() => handleServiceChange(key)}
              />
              <label
                htmlFor={`service-${key}`}
                className="sm:w-[212px] text-sm font-normal text-gray-800 leading-snug cursor-pointer select-none"
                id={`service-${key}-desc`}
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      {/* Project Description */}
      <div className="space-y-2 rounded-md bg-[#F9F9F9] px-4 py-6">
        <label
          htmlFor="project-description"
          className="block text-sm font-medium text-gray-900"
        >
          Tell us about your project
        </label>
        <textarea
          id="project-description"
          aria-describedby="project-description-hint"
          className="w-full resize-none rounded-md border border-gray-300 bg-white p-3 text-sm text-gray-900 focus:border-[#FF77A5] focus:outline-none focus:ring-2 focus:ring-[#FF77A5] focus:ring-opacity-25"
          rows={4}
          placeholder="Describe your project requirements..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <p id="project-description-hint" className="text-xs text-gray-600">
          Please provide details about your project requirements and goals.
        </p>
      </div>

      {/* Email Input */}
      <div className="space-y-2 rounded-md bg-[#F9F9F9] px-4 py-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
          Your email address
        </label>
        <input
          required
          type="email"
          id="email"
          aria-describedby="email-hint"
          className="w-full rounded-md border border-gray-300 bg-white p-3 text-sm text-gray-900 focus:border-[#FF77A5] focus:outline-none focus:ring-2 focus:ring-[#FF77A5] focus:ring-opacity-25"
          placeholder="Enter your email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "true" : "false"}
        />
        <p id="email-hint" className="text-xs text-gray-600">
          We&apos;ll use this email to send you the project quote.
        </p>
        {email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
          <p className="text-xs text-red-600" role="alert">
            Please enter a valid email address.
          </p>
        )}
      </div>

      {/* Days Slider */}
      <div className="mx-auto w-[calc(100%-2rem)] space-y-2">
        <label htmlFor="days-slider" className="block text-sm font-medium text-gray-900">
          Project Duration (Days)
        </label>
        <div aria-labelledby="days-slider">
          <DaysSlider days={days} setDays={setDays} />
        </div>
        <div className="text-sm text-gray-700" aria-live="polite">
          Selected: {days} day{days > 1 ? "s" : ""}
        </div>
        <p className="text-xs text-gray-600">
          Use the slider to indicate your preferred project timeline.
        </p>
      </div>

      {/* Budget Range */}
      <div className="mx-auto w-[calc(100%-2rem)] space-y-2">
        <label
          htmlFor="budget-range"
          className="block text-sm font-medium text-gray-900"
        >
          Budget Range
        </label>
        <div aria-labelledby="budget-range">
          <AmountRangeSelector
            value={[min, max]}
            min={min - 400}
            max={max + 400}
            step={100}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end pt-4">
        <Button
          className="min-w-[200px] min-h-[44px] px-8 py-3 text-white bg-[#FF77A5] hover:bg-[#ff6699] focus:ring-2 focus:ring-[#FF77A5] focus:ring-opacity-50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          type="submit"
          disabled={selectedServices.length === 0 || days === 0 || email === ""}
          aria-describedby="submit-requirements"
        >
          Submit Quote Request
        </Button>
      </div>
      <p id="submit-requirements" className="text-xs text-gray-600 text-center mt-2">
        Please select at least one service and provide your email to submit the quote request.
      </p>
    </form>
  );
};

export default ServicesQuoteForm;
