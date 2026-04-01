import Image from "next/image";

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

        {/* Two cards side by side */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {/* Organized by — DDL */}
          <div className="flex flex-col items-center rounded-2xl border border-gold-500/20 bg-ocean-900/50 px-8 py-10">
            <span className="text-xs tracking-[0.2em] text-gold-500/70 uppercase">
              Organized by
            </span>
            <div className="mt-5">
              <Image
                src="/logo-ddl.png"
                alt="Rotaract Club of Delhi Dynamic Leaders"
                width={280}
                height={140}
                className="h-auto w-[280px] object-contain"
              />
            </div>
          </div>

          {/* Venue Partner — APS */}
          <div className="flex flex-col items-center rounded-2xl border border-ocean-700/40 bg-ocean-900/30 px-8 py-10">
            <span className="text-xs tracking-[0.2em] text-slate-500 uppercase">
              Venue Partner
            </span>
            <div className="mt-5">
              <Image
                src="/logo-aps.webp"
                alt="Army Public School, Delhi Cantt"
                width={100}
                height={100}
                className="h-[100px] w-auto object-contain"
              />
            </div>
            <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl tracking-wide text-white">
              ARMY PUBLIC SCHOOL
            </h3>
            <p className="mt-1 text-sm text-slate-400">Delhi Cantonment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
