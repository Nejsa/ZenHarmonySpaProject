import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  // Handle navigation to homepage sections from other pages
  const handleSectionClick = (sectionId) => {
    if (location.pathname === "/") {
      // Already on homepage - just scroll
      scrollToSection(sectionId);
    } else {
      // On another page - navigate to homepage then scroll
      navigate("/");
      // Wait for navigation, then scroll
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
    setOpen(false);
  };

  // Scroll to section on mount if hash exists
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove #
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [location]);

  // Link style for NavLink (separate pages)
  const navLinkClass = (isActive) =>
    `px-3 py-1 text-sm border-b-2 transition-colors ${
      isActive
        ? "border-brand text-brand-light"
        : "border-transparent text-text-primary hover:text-brand-light hover:border-brand/50"
    }`;

  // Button style (homepage sections)
  const buttonClass =
    "px-3 py-1 text-sm border-b-2 border-transparent text-text-primary hover:text-brand-light hover:border-brand/50 transition-colors cursor-pointer";

  return (
    <nav className="sticky top-0 z-50 bg-bg-primary/95 backdrop-blur-sm border-b border-brand/10">
      <div className="max-w-7xl mx-auto px-4">
        {/* DESKTOP LAYOUT */}
        <div className="hidden md:flex items-center justify-between h-20">
          {/* LOGO - VENSTRE */}
          <Link to="/" className="flex flex-col">
            <div className="font-heading text-xl tracking-tight text-brand">
              Zen Harmony Spa
            </div>
            <div className="text-[9px] tracking-[0.2em] uppercase text-text-dim">
              Calm · Wellness · Private Spa
            </div>
          </Link>

          {/* NAVIGATION - MIDTEN */}
          <div className="flex items-center gap-6">
            {/* HJEM */}
            <NavLink
              to="/"
              className={({ isActive }) => navLinkClass(isActive)}
            >
              Hjem
            </NavLink>

            {/* FASILITETER - egen side */}
            <NavLink
              to="/fasiliteter"
              className={({ isActive }) => navLinkClass(isActive)}
            >
              Fasiliteter
            </NavLink>

            {/* VÅR HISTORIE - egen side */}
            <NavLink
              to="/var-historie"
              className={({ isActive }) => navLinkClass(isActive)}
            >
              Vår Historie
            </NavLink>

            {/* HOMEPAGE SECTIONS - fungerer fra alle sider */}
            <button
              onClick={() => handleSectionClick("prisliste")}
              className={buttonClass}
            >
              Prisliste og Praktisk Info
            </button>

            <button
              onClick={() => handleSectionClick("kontakt")}
              className={buttonClass}
            >
              Kontakt Oss
            </button>
          </div>

          {/* KONTAKTINFO - HØYRE */}
          <div className="flex items-center gap-4 text-xs text-text-dim">
            <span>Oslo</span>
            <span>10:00–22:00</span>
          </div>
        </div>

        {/* MOBILE LAYOUT */}
        <div className="md:hidden">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex flex-col">
              <div className="font-heading text-lg text-brand">
                Zen Harmony Spa
              </div>
              <div className="text-[8px] tracking-[0.2em] uppercase text-text-dim">
                Calm · Wellness · Private Spa
              </div>
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand hover:bg-white/5"
              aria-label="Meny"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>

          {open && (
            <div className="py-4 flex flex-col gap-2 border-t border-brand/10">
              {/* HJEM */}
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm ${
                    isActive
                      ? "bg-brand/10 text-brand-light border-l-2 border-brand"
                      : "text-text-primary"
                  }`
                }
              >
                Hjem
              </NavLink>

              {/* FASILITETER */}
              <NavLink
                to="/fasiliteter"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm ${
                    isActive
                      ? "bg-brand/10 text-brand-light border-l-2 border-brand"
                      : "text-text-primary"
                  }`
                }
              >
                Fasiliteter
              </NavLink>

              {/* VÅR HISTORIE */}
              <NavLink
                to="/var-historie"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm ${
                    isActive
                      ? "bg-brand/10 text-brand-light border-l-2 border-brand"
                      : "text-text-primary"
                  }`
                }
              >
                Vår Historie
              </NavLink>

              {/* HOMEPAGE SECTIONS */}
              <button
                onClick={() => handleSectionClick("prisliste")}
                className="px-4 py-2 rounded-md text-sm text-text-primary text-left"
              >
                Prisliste og Praktisk Info
              </button>

              <button
                onClick={() => handleSectionClick("kontakt")}
                className="px-4 py-2 rounded-md text-sm text-text-primary text-left"
              >
                Kontakt Oss
              </button>

              <div className="mt-4 pt-4 border-t border-brand/10 px-4 flex flex-col gap-2 text-xs text-text-dim">
                <span>📍 Oslo</span>
                <span>🕐 10:00–22:00</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
