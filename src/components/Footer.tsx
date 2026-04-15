"use client";

import { FormEvent, useState } from "react";

type SubmitState = {
  status: "idle" | "success" | "error";
  message: string;
};

const INITIAL_STATE: SubmitState = {
  status: "idle",
  message: "",
};

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>(INITIAL_STATE);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState(INITIAL_STATE);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        throw new Error(payload?.error || "Unable to send your message right now.");
      }

      setName("");
      setEmail("");
      setMessage("");
      setSubmitState({
        status: "success",
        message: "Thanks — your message has been sent to the SocialTank team.",
      });
    } catch (error) {
      const nextMessage =
        error instanceof Error
          ? error.message
          : "Unable to send your message right now.";

      setSubmitState({
        status: "error",
        message: nextMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <footer className="relative border-t border-ocean-700/30 bg-ocean-950">
      {/* CTA band */}
      <div className="relative overflow-hidden bg-gradient-to-r from-ocean-900 via-ocean-800 to-ocean-900 py-16">
        {/* Subtle glow */}
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight text-white sm:text-5xl">
            REGISTRATIONS ARE CLOSED
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Registrations closed on 10 April 2026. The event is scheduled for 17 April 2026.
          </p>
          <div className="mt-8 inline-block rounded-xl border border-rose-400/30 bg-rose-500/10 px-10 py-4 font-[family-name:var(--font-display)] text-2xl tracking-wider text-rose-200">
            REGISTRATIONS CLOSED
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr_0.8fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 font-[family-name:var(--font-display)] text-lg font-bold text-ocean-950">
                ST
              </div>
              <span className="font-[family-name:var(--font-display)] text-lg tracking-wide text-white">
                SOCIALTANK
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              A social entrepreneurship simulation by Rotaract Club of Delhi Dynamic Leaders.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-gold-500">
              CONTACT US
            </h4>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1 block text-xs uppercase tracking-[0.16em] text-slate-500">
                    Name
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    maxLength={120}
                    className="w-full rounded-xl border border-ocean-700/60 bg-ocean-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-gold-500"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs uppercase tracking-[0.16em] text-slate-500">
                    Email
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    maxLength={320}
                    className="w-full rounded-xl border border-ocean-700/60 bg-ocean-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-gold-500"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-[0.16em] text-slate-500">
                  Message
                </span>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                  maxLength={4000}
                  rows={4}
                  className="w-full rounded-xl border border-ocean-700/60 bg-ocean-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-gold-500"
                  placeholder="Ask about participation, timelines, or the event format."
                />
              </label>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-6 py-3 font-[family-name:var(--font-display)] text-base tracking-[0.18em] text-ocean-950 transition-all hover:from-gold-400 hover:to-gold-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>
                {submitState.status !== "idle" ? (
                  <p
                    className={`text-sm ${
                      submitState.status === "success" ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {submitState.message}
                  </p>
                ) : null}
              </div>
            </form>
            <div className="mt-4 space-y-2">
              <a
                href="mailto:rtrayushikashyap@gmail.com"
                className="block text-sm text-slate-400 transition-colors hover:text-gold-500"
              >
                rtrayushikashyap@gmail.com
              </a>
              <a
                href="mailto:rotaractclubofdynamicleaders@gmail.com"
                className="block text-sm text-slate-400 transition-colors hover:text-gold-500"
              >
                rotaractclubofdynamicleaders@gmail.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-3 font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-gold-500">
              LINKS
            </h4>
            <div className="space-y-2">
              <span className="block text-sm text-rose-200">
                Registrations Closed
              </span>
              <a
                href="https://racddl.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-slate-400 transition-colors hover:text-gold-500"
              >
                racddl.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-8 border-t border-ocean-700/30 pt-6 text-center">
          <span className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} SocialTank &mdash; Rotaract Club of Delhi Dynamic Leaders
          </span>
        </div>
      </div>
    </footer>
  );
}
