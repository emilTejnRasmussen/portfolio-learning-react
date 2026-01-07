import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-slate-950 pt-14">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
          <div className="lg:col-span-2">
            <p className="text-sm text-white/60">About / CV</p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Emil Tejn Rasmussen
            </h1>

            <p className="mt-3 text-base text-white/70">
              Software Engineer Trainee and Bachelor of Engineering student. I enjoy building
              reliable applications across frontend and backend, with a focus on clean structure,
              maintainable code, and learning by shipping real projects.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-white/90"
              >
                View projects
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Contact
              </Link>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white/80 transition hover:text-white"
              >
                Download CV (PDF)
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm font-semibold text-white">What I care about</p>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Clear structure, readable code, and solutions that are easy to extend. I like
                  breaking down problems and building step-by-step until it’s “good enough” and
                  shipped.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm font-semibold text-white">What I’m looking for</p>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Trainee / student opportunities where I can contribute, get feedback, and grow
                  as a software engineer—both technically and in teamwork.
                </p>
              </div>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm font-semibold text-white">Quick info</p>

            <div className="mt-4 space-y-4 text-sm">
              <div>
                <p className="text-white/60">Role</p>
                <p className="text-white">Software Engineer Trainee</p>
              </div>

              <div>
                <p className="text-white/60">Education</p>
                <p className="text-white">B.Eng. student (ongoing)</p>
                <p className="text-white/60">Currently: 1st semester</p>
              </div>

              <div>
                <p className="text-white/60">Stack</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Java", "JavaScript", "Python", "React", "Tailwind", "HTML", "CSS"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <p className="text-white/60">Links</p>
                <div className="mt-2 flex flex-col gap-2">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 hover:text-white transition"
                  >
                    GitHub →
                  </a>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold text-white">Skills</h2>
              <p className="mt-2 text-sm text-white/70">
                A practical overview of what I use and what I’m building with right now.
              </p>
            </div>

            <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm font-semibold text-white">Languages</p>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm font-semibold text-white">Frontend</p>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li>React</li>
                  <li>Tailwind CSS</li>
                  <li>HTML / CSS</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:col-span-2">
                <p className="text-sm font-semibold text-white">Working style</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-3 text-sm text-white/70">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    Clean structure
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    Iterative improvements
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    Feedback-driven
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold text-white">Experience & education</h2>
              <p className="mt-2 text-sm text-white/70">
                Keep this short on the page—details can live in the CV PDF.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-semibold text-white">Software Engineer Trainee</p>
                  <p className="text-xs text-white/50">Present</p>
                </div>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Building practical software, strengthening fundamentals, and working toward
                  becoming a reliable engineer through hands-on projects and continuous learning.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-semibold text-white">
                    Bachelor of Engineering (Software) — Student
                  </p>
                  <p className="text-xs text-white/50">Ongoing · 1st semester</p>
                </div>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Focus on applied software engineering, programming fundamentals, and building
                  real systems with a clean approach.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm font-semibold text-white">Highlights</p>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li>Built and iterated on projects with a focus on structure and maintainability</li>
                  <li>Comfortable working with Java, JS/React, and Python across different tasks</li>
                  <li>Prefer simple solutions that are easy to understand and extend</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Want to see more?</h3>
            <p className="mt-2 text-sm text-white/70">
              Check out my projects or send me a message—I'm always open to feedback and opportunities.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-white/90"
              >
                View projects
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
