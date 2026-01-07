function Projects() {
  return (
    <div className="bg-slate-950 pt-14">
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h1 className="text-3xl font-semibold text-white">Projects</h1>
        <p className="mt-3 max-w-2xl text-white/70">
          A collection of projects I’ve worked on during my studies and in my
          own time. Each project focuses on clean structure and practical
          problem-solving.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* reuse ProjectCard here */}
        </div>
      </section>
    </div>
  );
}

export default Projects;
