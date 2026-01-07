import { Link } from "react-router-dom";

function AboutTeaser() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-white">
          About me
        </h2>

        <p className="mt-4 text-base text-white/70 leading-relaxed">
          I’m a Software Engineer Trainee and Bachelor of Engineering student with
          a strong interest in building well-structured, reliable software. I
          enjoy working across frontend and backend, and learning by solving real
          problems through projects.
        </p>

        <div className="mt-6">
          <Link
            to="/about"
            className="inline-flex items-center text-sm font-medium text-white hover:underline"
          >
            Read more about me →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutTeaser;
