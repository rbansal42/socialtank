"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Who can participate in SocialTank?",
    a: "SocialTank is open to all school students from classes 9-12. Teams of 4 members from the same school can register. There is no limit on the number of teams per school.",
  },
  {
    q: "What kind of ideas can we pitch?",
    a: "Any idea that addresses a social challenge — education, healthcare, environment, community welfare, mental health, accessibility, or any other area where you see a need for change. The more innovative and feasible, the better!",
  },
  {
    q: "Do we need a fully built product?",
    a: "No! SocialTank is about ideas and plans, not finished products. You need a compelling pitch that explains the problem, your solution, how it works, and its potential social impact.",
  },
  {
    q: "Is there a registration fee?",
    a: "Registration details will be shared on the registration form. Please visit the registration page for the latest information on fees and deadlines.",
  },
  {
    q: "What should our presentation include?",
    a: "Your presentation should cover: the social problem you're addressing, your proposed solution, how it will be implemented, expected impact, and sustainability plan. You get 5 minutes to present followed by 3 minutes of Q&A.",
  },
  {
    q: "Can we use props or prototypes during our pitch?",
    a: "Absolutely! Visual aids, prototypes, demos, and props are encouraged. Anything that helps communicate your idea more effectively is welcome.",
  },
  {
    q: "How are winners selected?",
    a: "Teams are judged on four criteria: Innovation & Creativity (25%), Social Impact Potential (25%), Feasibility & Sustainability (25%), and Presentation Quality (25%). The judges' decision is final.",
  },
  {
    q: "Where can I contact the organizers?",
    a: "For any queries, reach out to the Rotaract Club of Delhi Dynamic Leaders through the contact information provided in the registration form or on our social media channels.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950 via-ocean-900/30 to-ocean-950" />

      <div className="relative mx-auto max-w-3xl px-6">
        {/* Section header */}
        <div className="text-center">
          <span className="font-[family-name:var(--font-display)] text-sm tracking-[0.3em] text-gold-500">
            GOT QUESTIONS?
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl tracking-tight text-white sm:text-6xl">
            FAQ
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-gold-500 to-gold-600" />
        </div>

        {/* Questions */}
        <div className="mt-14 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
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
                  <span className="pr-4 font-medium text-white">{faq.q}</span>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-slate-400">
                    {faq.a}
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
