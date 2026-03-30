export default function Organizers() {
  return (
    <section id="organizers" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="text-center">
          <span className="font-[family-name:var(--font-display)] text-sm tracking-[0.3em] text-gold-500">
            BROUGHT TO YOU BY
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl tracking-tight text-white sm:text-6xl">
            ORGANIZERS
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-gold-500 to-gold-600" />
        </div>

        {/* Primary organizer */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col items-center rounded-2xl border border-gold-500/20 bg-ocean-900/50 px-12 py-8">
            <span className="text-xs tracking-[0.2em] text-gold-500/70 uppercase">
              Organized by
            </span>
            <div className="mt-4 flex h-20 w-20 items-center justify-center rounded-full bg-ocean-800/80 border border-ocean-700/50">
              <span className="font-[family-name:var(--font-display)] text-3xl text-gold-500">
                DDL
              </span>
            </div>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl tracking-wide text-white">
              ROTARACT CLUB OF
            </h3>
            <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-gradient-gold">
              DELHI DYNAMIC LEADERS
            </h3>
            <p className="mt-2 text-sm text-slate-400">RI District 3011</p>
          </div>
        </div>

        {/* Partners row */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {/* Venue Partner */}
          <div className="flex flex-col items-center rounded-2xl border border-ocean-700/40 bg-ocean-900/30 p-6">
            <span className="text-xs tracking-[0.2em] text-slate-500 uppercase">
              Venue Partner
            </span>
            <div className="mt-3 flex h-14 w-14 items-center justify-center rounded-full bg-ocean-800/80 border border-ocean-700/50">
              <span className="font-[family-name:var(--font-display)] text-xl text-slate-300">
                APS
              </span>
            </div>
            <p className="mt-3 text-center text-sm font-medium text-white">
              Army Public School
            </p>
            <p className="text-xs text-slate-500">Delhi Cantonment</p>
          </div>

          {/* Rotary District */}
          <div className="flex flex-col items-center rounded-2xl border border-ocean-700/40 bg-ocean-900/30 p-6">
            <span className="text-xs tracking-[0.2em] text-slate-500 uppercase">
              Parent Organization
            </span>
            <div className="mt-3 flex h-14 w-14 items-center justify-center rounded-full bg-ocean-800/80 border border-ocean-700/50">
              <span className="font-[family-name:var(--font-display)] text-xl text-slate-300">
                R
              </span>
            </div>
            <p className="mt-3 text-center text-sm font-medium text-white">
              Rotary International
            </p>
            <p className="text-xs text-slate-500">District 3011</p>
          </div>

          {/* Rotaract District */}
          <div className="flex flex-col items-center rounded-2xl border border-ocean-700/40 bg-ocean-900/30 p-6">
            <span className="text-xs tracking-[0.2em] text-slate-500 uppercase">
              Parent Organization
            </span>
            <div className="mt-3 flex h-14 w-14 items-center justify-center rounded-full bg-ocean-800/80 border border-ocean-700/50">
              <span className="font-[family-name:var(--font-display)] text-xl text-slate-300">
                RC
              </span>
            </div>
            <p className="mt-3 text-center text-sm font-medium text-white">
              Rotaract
            </p>
            <p className="text-xs text-slate-500">District 3011</p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Replace placeholder initials with actual logos by adding images to the{" "}
          <code className="text-ocean-400">public/</code> directory.
        </p>
      </div>
    </section>
  );
}
