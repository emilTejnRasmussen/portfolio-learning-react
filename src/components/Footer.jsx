import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">
              Emil Tejn Rasmussen
            </p>
            <p className="mt-2 text-sm text-white/70">
              Software Engineer Trainee · Bachelor of Engineering student
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <p className="font-medium text-white">Pages</p>
              <Link to="/" className="text-white/70 hover:text-white">
                Home
              </Link>
              <Link to="/projects" className="text-white/70 hover:text-white">
                Projects
              </Link>
              <Link to="/about" className="text-white/70 hover:text-white">
                About
              </Link>
              <Link to="/contact" className="text-white/70 hover:text-white">
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-medium text-white">Links</p>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Emil Tejn Rasmussen. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
