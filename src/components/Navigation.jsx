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
      // Beregn offset for sticky navbar (80px høyde)
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

  // Determine active section based on scroll position
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["prisliste", "kontakt"];
      const navbarHeight = 100; // Litt margin

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If section is in viewport (within navbar offset)
          if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      // If no section is active, we're at top (home)
      setActiveSection("");
    };

    // Only add scroll listener on homepage
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial position
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
        <div className="hidden lg:flex items-center justify-between h-20">
          {/* LOGO - VENSTRE */}
          <Link to="/" className="flex items-center gap-3">
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
              className={({ isActive }) =>
                navLinkClass(isActive && activeSection === "")
              }
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
              className={sectionButtonClass("prisliste")}
            >
              Prisliste
            </button>

            <button
              onClick={() => handleSectionClick("kontakt")}
              className={sectionButtonClass("kontakt")}
            >
              Kontakt Oss
            </button>
          </div>

          {/* KONTAKTINFO - HØYRE */}
          <div className="flex items-center gap-4 text-xs text-text-dim">
            <span>Kløfta</span>
            <span>10:30–22:00</span>
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
                    isActive && activeSection === ""
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
                className={`px-4 py-2 rounded-md text-sm text-left ${
                  activeSection === "prisliste"
                    ? "bg-brand/10 text-brand-light border-l-2 border-brand"
                    : "text-text-primary"
                }`}
              >
                Prisliste
              </button>

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

              <div className="mt-4 pt-4 border-t border-brand/10 px-4 flex flex-col gap-2 text-xs text-text-dim">
                <span>📍 Kløfta</span>
                <span>🕐 10:30–22:00</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
