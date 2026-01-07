import { Link } from "react-router-dom";

function ProjectCard({ title, desc, tech, live, github }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="text-white/50 hover:text-white transition"
            aria-label="Live project"
          >
            ↗
          </a>
        )}
      </div>

      <p className="mt-2 text-sm leading-relaxed text-white/70">
        {desc}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-white/70 hover:text-white transition"
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  );
}


export default function FeaturedProjects() {
  const projects = [
  {
    title: "Anime Tracker (JavaFX)",
    desc: "Desktop app for tracking watch status with database integration and a clean UI structure.",
    tech: ["Java", "JavaFX", "Database"],
    live: null,
    github: "https://github.com/yourname/anime-tracker",
  },
  {
    title: "Portfolio (ETR)",
    desc: "Personal portfolio built with React and Tailwind, focused on clean layout and responsiveness.",
    tech: ["React", "Tailwind"],
    live: "https://yourdomain.com",
    github: "https://github.com/yourname/portfolio",
  },
  {
    title: "Python Utility Project",
    desc: "Small Python tool for automation or data tasks, focused on readability and simple structure.",
    tech: ["Python"],
    live: null,
    github: "https://github.com/yourname/python-tool",
  },
];


  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Featured projects</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              A few projects that show how I build and structure software. More projects are on
              the projects page.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            View all projects →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
