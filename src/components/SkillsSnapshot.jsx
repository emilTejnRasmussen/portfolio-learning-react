export default function SkillsSnapshot() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-white">Skills</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/70">
          A quick overview of the tools I use. Details are on the About / CV page.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-sm font-semibold text-white">Languages</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Java", "JavaScript", "Python"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-sm font-semibold text-white">Frontend</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "Tailwind", "HTML", "CSS"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-sm font-semibold text-white">Other</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Git", "REST APIs", "Testing"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
