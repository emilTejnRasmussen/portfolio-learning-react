import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-semibold text-white">
          Let’s get in touch
        </h2>

        <p className="mt-4 text-base text-white/70">
          If you’re looking for a motivated Software Engineer Trainee or want to
          talk about a project, feel free to reach out.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-white/90"
          >
            Contact me
          </Link>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
