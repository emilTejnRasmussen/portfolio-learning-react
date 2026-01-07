import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const base = "px-3 py-2 rounded-lg text-sm font-medium transition-colors";
  const active = "text-slate-950 bg-white";
  const inactive = "text-white/80 hover:text-white hover:bg-white/10";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 shadow-lg shadow-black/10 bg-slate-700/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between">
          <Link
            to="/"
            className="text-white font-semibold tracking-wide text-lg"
            onClick={() => setOpen(false)}
          >
            ETR
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Contact
            </NavLink>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg bg-slate-900/80 p-2 text-white hover:bg-slate-900 transition"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>

          <div
            className={`absolute right-0 top-14 w-48 rounded-xl border border-white/10 bg-slate-950/95 backdrop-blur shadow-lg transition-all md:hidden ${
              open
                ? "opacity-100 translate-y-0"
                : "pointer-events-none opacity-0 -translate-y-2"
            }`}
          >
            <div className="flex flex-col gap-1 p-2">
              <NavLink
                to="/"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${base} ${isActive ? active : inactive}`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/projects"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${base} ${isActive ? active : inactive}`
                }
              >
                Projects
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${base} ${isActive ? active : inactive}`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${base} ${isActive ? active : inactive}`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
