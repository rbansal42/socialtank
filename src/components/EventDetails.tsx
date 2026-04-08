const TIMELINE = [
  {
    date: "Now",
    title: "Registrations Open",
    description: "Register online before the deadline. Individuals and teams welcome.",
  },
  {
    date: "12th April",
    title: "Registration Deadline",
    description: "Last date to register for SocialTank.",
  },
  {
    date: "17th April",
    title: "Final Round (10 AM - 3 PM)",
    description: "Participants present their social impact ideas to the sharks at Army Public School, Delhi Cantt.",
  },
];

export default function EventDetails() {
  return (
    <section id="details" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950 via-ocean-900/30 to-ocean-950" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="text-center">
          <span className="font-[family-name:var(--font-display)] text-sm tracking-[0.3em] text-gold-500">
            MARK YOUR CALENDAR
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl tracking-tight text-white sm:text-6xl">
            EVENT DETAILS
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-gold-500 to-gold-600" />
        </div>

        {/* Info cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              ),
              label: "Date",
              value: "17th April 2026",
            },
            {
              icon: (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              ),
              label: "Venue",
              value: "Army Public School, Delhi Cantt",
            },
            {
              icon: (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              ),
              label: "Team Size",
              value: "1-5 Members",
            },
          ].map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-ocean-700/40 bg-ocean-900/50 p-6 text-center"
            >
              <div className="mx-auto mb-3 inline-flex rounded-xl bg-ocean-800/80 p-3 text-gold-500">
                {card.icon}
              </div>
              <p className="text-sm text-slate-500">{card.label}</p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-xl tracking-wide text-white">
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-white">
            COMPETITION TIMELINE
          </h3>

          <div className="relative mx-auto mt-12 max-w-2xl">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-ocean-600 to-transparent sm:left-1/2" />

            {TIMELINE.map((item, i) => (
              <div
                key={item.date}
                className={`relative mb-10 flex items-start gap-6 sm:gap-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[19px] top-1 z-10 h-[10px] w-[10px] rounded-full border-2 border-gold-500 bg-ocean-950 sm:left-1/2 sm:-translate-x-1/2" />

                {/* Content */}
                <div className={`ml-12 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <span className="font-[family-name:var(--font-display)] text-lg tracking-wider text-gold-500">
                    {item.date}
                  </span>
                  <h4 className="mt-1 font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-sm text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
