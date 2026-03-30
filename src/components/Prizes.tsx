const PRIZES = [
  {
    place: "1st",
    title: "Grand Champion",
    description: "Trophy, certificate, cash prize, and mentorship opportunity",
    accent: "from-gold-400 to-gold-600",
    iconBg: "bg-gold-500/15",
    borderColor: "border-gold-500/40",
    icon: (
      <svg className="h-12 w-12 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-5.54 0" />
      </svg>
    ),
  },
  {
    place: "2nd",
    title: "First Runner-Up",
    description: "Trophy, certificate, and cash prize",
    accent: "from-slate-300 to-slate-400",
    iconBg: "bg-slate-400/10",
    borderColor: "border-slate-400/30",
    icon: (
      <svg className="h-12 w-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    place: "3rd",
    title: "Second Runner-Up",
    description: "Trophy, certificate, and cash prize",
    accent: "from-amber-600 to-amber-700",
    iconBg: "bg-amber-600/10",
    borderColor: "border-amber-600/30",
    icon: (
      <svg className="h-12 w-12 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

export default function Prizes() {
  return (
    <section id="prizes" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950 via-ocean-900/30 to-ocean-950" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="text-center">
          <span className="font-[family-name:var(--font-display)] text-sm tracking-[0.3em] text-gold-500">
            WHAT AWAITS
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl tracking-tight text-white sm:text-6xl">
            PRIZES
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-gold-500 to-gold-600" />
        </div>

        {/* Prize cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {PRIZES.map((prize) => (
            <div
              key={prize.place}
              className={`group relative overflow-hidden rounded-2xl border ${prize.borderColor} bg-ocean-900/50 p-8 text-center transition-all duration-500 hover:shadow-[0_0_50px_rgba(245,184,65,0.08)]`}
            >
              {/* Gradient top bar */}
              <div className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${prize.accent}`} />

              {/* Place badge */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                {prize.icon}
              </div>

              <span className={`font-[family-name:var(--font-display)] text-4xl tracking-tight bg-gradient-to-r ${prize.accent} bg-clip-text text-transparent`}>
                {prize.place}
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl tracking-wide text-white">
                {prize.title}
              </h3>
              <p className="mt-3 text-sm text-slate-400">{prize.description}</p>
            </div>
          ))}
        </div>

        {/* Special mentions */}
        <div className="mt-10 rounded-2xl border border-ocean-700/40 bg-ocean-900/30 p-8 text-center">
          <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-white">
            SPECIAL MENTIONS
          </h3>
          <p className="mt-3 text-slate-400">
            Best Social Impact Idea &bull; Most Innovative Solution &bull; Best
            Presentation &bull; People&apos;s Choice Award
          </p>
          <p className="mt-2 text-sm text-slate-500">
            All participants receive certificates of participation
          </p>
        </div>
      </div>
    </section>
  );
}
