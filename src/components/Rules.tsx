"use client";

import { useState } from "react";

const RULES = [
  {
    title: "Eligibility",
    content:
      "The competition is open to all school students (classes 9-12). Individuals or teams of up to 4 members from the same school can participate. A school can send multiple teams.",
  },
  {
    title: "Pitch Format",
    content:
      "Each team gets 5 minutes to present their social impact idea, followed by 3 minutes of Q&A with the judges. Presentations can include slides, prototypes, or any visual aids.",
  },
  {
    title: "Judging Criteria",
    content:
      "Teams will be evaluated on: Innovation & Creativity (25%), Social Impact Potential (25%), Feasibility & Sustainability (25%), and Presentation Quality (25%).",
  },
  {
    title: "Submission Guidelines",
    content:
      "Register online before the deadline. You will have 3 days after registration to submit your idea abstract. Final presentations should be in PDF or PPTX format.",
  },
  {
    title: "Code of Conduct",
    content:
      "All participants must maintain respectful behavior. Plagiarized ideas will be disqualified. The judges' decision is final and binding.",
  },
  {
    title: "What to Bring",
    content:
      "School ID card, a copy of your registration confirmation, your presentation on a USB drive or accessible via cloud, and any physical prototypes if applicable.",
  },
];

export default function Rules() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="rules" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        {/* Section header */}
        <div className="text-center">
          <span className="font-[family-name:var(--font-display)] text-sm tracking-[0.3em] text-gold-500">
            KNOW THE GAME
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl tracking-tight text-white sm:text-6xl">
            RULES & GUIDELINES
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-gold-500 to-gold-600" />
        </div>

        {/* Accordion */}
        <div className="mt-14 space-y-3">
          {RULES.map((rule, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={rule.title}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-gold-500/30 bg-ocean-800/40"
                    : "border-ocean-700/40 bg-ocean-900/30 hover:border-ocean-600/60"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-[family-name:var(--font-display)] text-lg text-gold-500/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold text-white">{rule.title}</span>
                  </div>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 pl-16 text-sm leading-relaxed text-slate-400">
                    {rule.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
