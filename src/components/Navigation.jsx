import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navigation({ onBookingClick }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setOpen(false);
    }
  };

  // Handle navigation to homepage sections from other pages
  const handleSectionClick = (sectionId) => {
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
    setOpen(false);
  };

  // Scroll to section on mount if hash exists
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [location]);

  // Determine active section based on scroll position
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["om-oss", "prisliste", "kontakt"];
      const navbarHeight = 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection("");
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setActiveSection("");
    }
  }, [location.pathname]);

  // Link style for NavLink (separate pages)
  const navLinkClass = (isActive) =>
    `px-3 py-1 text-sm border-b-2 transition-colors ${
      isActive
        ? "border-brand text-brand-light"
        : "border-transparent text-text-primary hover:text-brand-light hover:border-brand/50"
    }`;

  // Button style (homepage sections)
  const sectionButtonClass = (sectionId) =>
    `px-3 py-1 text-sm border-b-2 transition-colors cursor-pointer ${
      activeSection === sectionId
        ? "border-brand text-brand-light"
        : "border-transparent text-text-primary hover:text-brand-light hover:border-brand/50"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-bg-primary/95 backdrop-blur-sm border-b border-brand/10">
      <div className="max-w-7xl mx-auto px-4">
        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:flex items-center justify-between h-20 gap-8">
          {/* LOGO - VENSTRE */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/newImages/ZenHarmonySpaLogo.png"
              alt="Zen Harmony Spa Logo"
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <div className="font-heading text-xl tracking-tight text-brand">
                Zen Harmony Spa
              </div>
              <div className="text-[9px] tracking-[0.2em] uppercase text-text-dim">
                Calm · Wellness · Private Spa
              </div>
            </div>
          </Link>

          {/* NAVIGATION - MIDTEN */}
          <div className="flex items-center gap-6">
            {/* HJEM */}
            <NavLink
              to="/"
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                  setActiveSection("");
                }
              }}
              className={({ isActive }) =>
                navLinkClass(isActive && activeSection === "")
              }
            >
              Hjem
            </NavLink>

            {/* OM OSS */}
            <button
              onClick={() => handleSectionClick("om-oss")}
              className={sectionButtonClass("om-oss")}
            >
              Om Oss
            </button>

            {/* FASILITETER */}
            <NavLink
              to="/fasiliteter"
              className={({ isActive }) => navLinkClass(isActive)}
            >
              Fasiliteter
            </NavLink>

            {/* PRISLISTE */}
            <button
              onClick={() => handleSectionClick("prisliste")}
              className={sectionButtonClass("prisliste")}
            >
              Prisliste
            </button>

            {/* VÅR HISTORIE */}
            <NavLink
              to="/var-historie"
              className={({ isActive }) => navLinkClass(isActive)}
            >
              Vår Historie
            </NavLink>

            {/* KONTAKT OSS */}
            <button
              onClick={() => handleSectionClick("kontakt")}
              className={sectionButtonClass("kontakt")}
            >
              Kontakt Oss
            </button>
          </div>

          {/* HØYRE SIDE - BOOK NÅ KNAPP */}
          <div className="flex items-center justify-end flex-shrink-0">
            <button
              onClick={onBookingClick}
              className="group relative bg-brand hover:bg-brand-light text-bg-primary font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Book Nå
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE LAYOUT */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between h-16">
            {/* Mobile logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/newImages/ZenHarmonySpaLogo.png"
                alt="Zen Harmony Spa Logo"
                className="h-8 w-auto"
              />
              <div className="font-heading text-base text-brand">
                Zen Harmony Spa
              </div>
            </Link>

            {/* Hamburger button */}
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand hover:bg-white/5 transition-colors"
              aria-label="Meny"
            >
              <span className="text-2xl">{open ? "✕" : "☰"}</span>
            </button>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="py-4 flex flex-col gap-2 border-t border-brand/10 pb-24">
              {/* BOOK NÅ - ØVERST I MENU */}
              <button
                onClick={() => {
                  onBookingClick();
                  setOpen(false);
                }}
                className="mx-4 mb-4 bg-brand hover:bg-brand-light text-bg-primary font-semibold py-3.5 rounded-lg transition-all active:scale-95 shadow-lg shadow-brand/20 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Book Nå
              </button>

              {/* HJEM */}
              <NavLink
                to="/"
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    setActiveSection("");
                  }
                  setOpen(false);
                }}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm ${
                    isActive && activeSection === ""
                      ? "bg-brand/10 text-brand-light border-l-2 border-brand"
                      : "text-text-primary"
                  }`
                }
              >
                Hjem
              </NavLink>

              {/* OM OSS */}
              <button
                onClick={() => handleSectionClick("om-oss")}
                className={`px-4 py-2 rounded-md text-sm text-left ${
                  activeSection === "om-oss"
                    ? "bg-brand/10 text-brand-light border-l-2 border-brand"
                    : "text-text-primary"
                }`}
              >
                Om Oss
              </button>

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

              {/* PRISLISTE */}
              <button
                onClick={() => handleSectionClick("prisliste")}
                className={`px-4 py-2 rounded-md text-sm text-left ${
                  activeSection === "prisliste"
                    ? "bg-brand/10 text-brand-light border-l-2 border-brand"
                    : "text-text-primary"
                }`}
              >
                Prisliste
              </button>

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

              {/* KONTAKT OSS */}
              <button
                onClick={() => handleSectionClick("kontakt")}
                className={`px-4 py-2 rounded-md text-sm text-left ${
                  activeSection === "kontakt"
                    ? "bg-brand/10 text-brand-light border-l-2 border-brand"
                    : "text-text-primary"
                }`}
              >
                Kontakt Oss
              </button>

              {/* KONTAKTINFO NEDERST */}
              <div className="mt-4 pt-4 border-t border-brand/10 px-4 flex flex-col gap-2 text-xs text-text-dim">
                <span>📍 Kløfta</span>
                <span>🕐 10:30–22:00</span>
              </div>
            </div>
          )}

          {/* STICKY BOTTOM KNAPP - MOBILE */}
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-bg-primary/95 backdrop-blur-sm border-t border-brand/10 lg:hidden z-50">
            <button
              onClick={() => {
                onBookingClick();
                setOpen(false);
              }}
              className="w-full bg-brand hover:bg-brand-light text-bg-primary font-semibold py-4 rounded-lg transition-all active:scale-95 shadow-xl shadow-brand/30 flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Book Nå</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
