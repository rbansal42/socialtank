export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Deep ocean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-900 via-ocean-950 to-ocean-950" />

      {/* Caustic light overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(ellipse 600px 400px at 30% 20%, rgba(14,165,233,0.4), transparent),
                            radial-gradient(ellipse 500px 350px at 70% 60%, rgba(6,182,212,0.3), transparent),
                            radial-gradient(ellipse 400px 300px at 50% 80%, rgba(14,165,233,0.2), transparent)`,
          animation: "caustics 12s ease-in-out infinite",
        }}
      />

      {/* Shark silhouette — decorative SVG */}
      <svg
        viewBox="0 0 800 400"
        className="absolute top-[10%] right-[-5%] w-[60vw] max-w-3xl opacity-[0.04] animate-float-slow"
        fill="currentColor"
      >
        <path d="M650 200 C630 180 580 140 500 150 C450 155 420 170 380 175 C340 178 300 170 260 180 C220 190 200 210 180 215 C140 225 100 220 80 225 C60 230 50 240 60 245 C70 250 100 248 140 240 C160 236 180 230 200 228 C240 224 280 230 320 225 C360 220 390 205 430 198 C470 192 510 195 540 200 C570 205 590 215 610 210 C630 205 645 195 660 200 C670 203 670 210 660 212 C650 214 640 210 630 212 C620 214 615 220 625 222 C640 225 660 220 670 215 C680 210 680 205 670 202 Z" />
      </svg>

      {/* Another shark, smaller, left side */}
      <svg
        viewBox="0 0 400 200"
        className="absolute bottom-[20%] left-[-3%] w-[35vw] max-w-md opacity-[0.03] animate-float"
        fill="currentColor"
        style={{ animationDelay: "3s" }}
      >
        <path d="M320 100 C310 90 280 70 240 75 C210 78 190 88 170 90 C150 92 130 88 110 93 C90 98 80 108 70 110 C50 115 30 112 20 115 C10 118 5 123 10 125 C15 127 30 126 50 122 C60 120 70 117 80 116 C100 114 120 117 140 115 C160 113 175 105 195 102 C215 99 235 100 250 103 C265 106 275 111 285 108 C295 105 302 100 310 103 C315 105 315 108 310 109 C305 110 300 108 295 109 C290 110 288 113 293 114 C300 115 310 113 315 110 C320 108 320 105 315 103 Z" />
      </svg>

      {/* Bubbles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-white/10 bg-white/5"
          style={{
            width: `${4 + Math.random() * 12}px`,
            height: `${4 + Math.random() * 12}px`,
            left: `${10 + i * 11}%`,
            animation: `bubble-rise ${8 + i * 2}s linear infinite`,
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* INTERACT badge */}
        <div className="animate-fade-in-up mb-6">
          <span className="inline-block rounded-full border border-gold-500/30 bg-gold-500/10 px-5 py-1.5 font-[family-name:var(--font-display)] text-sm tracking-[0.3em] text-gold-400">
            INTERACT
          </span>
        </div>

        {/* Main title */}
        <h1 className="animate-fade-in-up delay-200 font-[family-name:var(--font-display)] leading-[0.9]">
          <span className="block text-[clamp(4rem,15vw,12rem)] tracking-tight text-white">
            SOCIAL
          </span>
          <span className="block text-[clamp(4rem,15vw,12rem)] tracking-tight text-gradient-gold">
            TANK
          </span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-in-up delay-400 mx-auto mt-6 max-w-2xl text-lg font-medium text-slate-300 sm:text-xl md:text-2xl">
          Turn your empathy into an{" "}
          <span className="text-gold-400 font-semibold">actionable plan</span>
        </p>

        <p className="animate-fade-in-up delay-500 mt-3 font-[family-name:var(--font-display)] text-lg tracking-[0.15em] text-ocean-300 sm:text-xl">
          THE SHARKS ARE HUNGRY FOR CHANGE
        </p>

        {/* Event info pills */}
        <div className="animate-fade-in-up delay-600 mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
          <div className="flex items-center gap-2 text-slate-300">
            <svg className="h-5 w-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-semibold">17th April 2026</span>
          </div>
          <div className="hidden h-4 w-px bg-ocean-600 sm:block" />
          <div className="flex items-center gap-2 text-slate-300">
            <svg className="h-5 w-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-semibold">Army Public School, Delhi Cantt</span>
          </div>
        </div>

        {/* CTA */}
        <div className="animate-fade-in-up delay-700 mt-12">
          <a
            href="https://racddl.com/form"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-block rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-10 py-4 font-[family-name:var(--font-display)] text-2xl tracking-wider text-ocean-950 transition-all hover:from-gold-400 hover:to-gold-500"
          >
            REGISTER NOW
          </a>
          <p className="mt-3 text-sm text-slate-500">
            Registration deadline: 10th April
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ocean-950 to-transparent" />
    </section>
  );
}
