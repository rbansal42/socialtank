const HIGHLIGHTS = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Pitch Your Idea",
    description:
      "Present your social impact solution to a panel of distinguished judges in a Shark Tank-style format.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Get Mentored",
    description:
      "Receive feedback and guidance from experienced leaders in social entrepreneurship and community service.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-5.54 0" />
      </svg>
    ),
    title: "Win Prizes",
    description:
      "Compete for exciting prizes and the chance to bring your social impact project to life with real support.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Make an Impact",
    description:
      "Transform your ideas into real-world solutions that address pressing social challenges in your community.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="text-center">
          <span className="font-[family-name:var(--font-display)] text-sm tracking-[0.3em] text-gold-500">
            WHAT IS
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl tracking-tight text-white sm:text-6xl">
            SOCIALTANK
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-gold-500 to-gold-600" />
        </div>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-slate-400">
          SocialTank is a{" "}
          <span className="text-white font-medium">Shark Tank-style inter-school pitch competition</span>{" "}
          where students present innovative solutions to real social challenges.
          Organized by the Rotaract Club of Delhi Dynamic Leaders, this event
          empowers the next generation of changemakers to turn empathy into
          action.
        </p>

        {/* Highlight cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item, i) => (
            <div
              key={item.title}
              className="group relative rounded-2xl border border-ocean-700/40 bg-ocean-900/50 p-6 transition-all duration-500 hover:border-gold-500/30 hover:bg-ocean-800/50 hover:shadow-[0_0_40px_rgba(245,184,65,0.05)]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-4 inline-flex rounded-xl bg-ocean-800/80 p-3 text-gold-500 transition-colors group-hover:bg-gold-500/10">
                {item.icon}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wide text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>

              {/* Hover corner accent */}
              <div className="absolute right-0 top-0 h-12 w-12 overflow-hidden rounded-tr-2xl">
                <div className="absolute right-[-24px] top-[-24px] h-12 w-12 rotate-45 bg-gold-500/0 transition-all duration-500 group-hover:bg-gold-500/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
