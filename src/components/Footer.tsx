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

      {/* Bottom section */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center font-[family-name:var(--font-display)] text-ocean-950 text-lg font-bold">
                ST
              </div>
              <span className="font-[family-name:var(--font-display)] text-lg text-white tracking-wide">
                SOCIALTANK
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              A social entrepreneurship simulation by Rotaract Club of Delhi Dynamic Leaders.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-gold-500 mb-3">
              CONTACT US
            </h4>
            <div className="space-y-2">
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
            <h4 className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-gold-500 mb-3">
              LINKS
            </h4>
            <div className="space-y-2">
              <a
                href="https://racddl.com/form/socialtank"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-slate-400 transition-colors hover:text-gold-500"
              >
                Register Now
              </a>
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
