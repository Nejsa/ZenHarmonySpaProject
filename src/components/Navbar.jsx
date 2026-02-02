import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = (isActive) =>
    `px-4 py-2 rounded-md transition-colors ${
      isActive ? "bg-brand text-black" : "text-slate-200 hover:bg-white/5"
    }`;

  return (
    <nav className="bg-neutral-900 border-b border-brand/10">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <NavLink to="/" className="text-2xl font-heading text-brand-light">
              Zen Harmony
            </NavLink>
            <div className="hidden md:flex items-center gap-2">
              <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>
                Hjem
              </NavLink>
              <NavLink
                to="/fasiliteter"
                className={({ isActive }) => linkClass(isActive)}
              >
                Fasiliteter
              </NavLink>
              <NavLink
                to="/booking"
                className={({ isActive }) => linkClass(isActive)}
              >
                Booking
              </NavLink>

              <a
                href="prisliste"
                className="px-4 py-2 rounded-md text-slate-200 hover:bg-white/5"
              >
                Prisliste
              </a>
              <a
                href="kontakt"
                className="px-4 py-2 rounded-md text-slate-200 hover:bg-white/5"
              >
                Kontakt
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4"></div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:bg-white/5"
            aria-label="Meny"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 flex flex-col gap-2">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) => linkClass(isActive)}
            >
              Hjem
            </NavLink>
            <NavLink
              to="/fasiliteter"
              onClick={() => setOpen(false)}
              className={({ isActive }) => linkClass(isActive)}
            >
              Fasiliteter
            </NavLink>
            <NavLink
              to="/booking"
              onClick={() => setOpen(false)}
              className={({ isActive }) => linkClass(isActive)}
            >
              Booking
            </NavLink>
            <a
              href="prisliste"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-md text-slate-200 hover:bg-white/5"
            >
              Prisliste
            </a>
            <a
              href="kontakt"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-md text-slate-200 hover:bg-white/5"
            >
              Kontakt
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
