export default function Footer() {
  return (
    <footer className="relative border-t border-ocean-700/30 bg-ocean-950">
      {/* CTA band */}
      <div className="relative overflow-hidden bg-gradient-to-r from-ocean-900 via-ocean-800 to-ocean-900 py-16">
        {/* Subtle glow */}
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight text-white sm:text-5xl">
            READY TO DIVE IN?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Register your team and pitch your social impact idea to the sharks.
          </p>
          <a
            href="https://racddl.com/form/socialtank"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow mt-8 inline-block rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-10 py-4 font-[family-name:var(--font-display)] text-2xl tracking-wider text-ocean-950 transition-all hover:from-gold-400 hover:to-gold-500"
          >
            REGISTER NOW
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center font-[family-name:var(--font-display)] text-ocean-950 text-lg">
            ST
          </div>
          <span className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} SocialTank &mdash; Rotaract Club of Delhi Dynamic Leaders
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://racddl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 transition-colors hover:text-gold-500"
          >
            racddl.com
          </a>
          <span className="h-3 w-px bg-ocean-700" />
          <a
            href="https://racddl.com/form/socialtank"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 transition-colors hover:text-gold-500"
          >
            Register
          </a>
        </div>
      </div>
    </footer>
  );
}
