import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative h-[calc(100dvh-3.5rem)] overflow-hidden bg-slate-950">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-4 sm:px-6">
        <p className="text-sm text-white/70">Emil Tejn Rasmussen</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Software Engineer Trainee
          <span className="block text-white/80">
            building reliable, modern applications.
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
          Software Engineer student working across frontend and backend, with
          experience in Java, JavaScript, and Python, and a strong focus on
          clean structure and maintainable code.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-white/90"
          >
            View projects
          </Link>

          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            About / CV
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 max-w-xl">
          <span className="text-sm text-white/70 border-b border-white/10 pb-1">
            Java
          </span>
          <span className="text-sm text-white/70 border-b border-white/10 pb-1">
            JavaScript
          </span>
          <span className="text-sm text-white/70 border-b border-white/10 pb-1">
            Python
          </span>
          <span className="text-sm text-white/70 border-b border-white/10 pb-1">
            React
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
