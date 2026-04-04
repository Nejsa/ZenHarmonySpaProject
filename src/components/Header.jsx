import { useState } from "react";
import Navigation from "./Navigation";
import Booking from "./Booking";

export default function Header() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToPrisliste = () => {
    const element = document.getElementById("prisliste");
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="relative">
        {/* Navigation */}
        <Navigation onBookingClick={() => setIsBookingOpen(true)} />

        {/* HERO VIDEO SECTION */}
        <div className="relative h-screen">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/SpaVideo.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

          {/* CONTENT OVER VIDEO */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
            {/* Main Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-warm-white mb-4 sm:mb-6 leading-tight">
              Zen Harmony Spa
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl md:text-2xl text-warm-white/90 mb-8 sm:mb-12 max-w-2xl px-4">
              Din private oase for ro, avslapning og velværende
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* PRIMARY: Book Nå */}
              <button
                onClick={() => setIsBookingOpen(true)}
                className="group bg-brand hover:bg-brand-light text-bg-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-brand/40 hover:shadow-brand/60"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 transition-transform group-hover:rotate-12"
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

              {/* SECONDARY: Se Pakker */}
              <button
                onClick={scrollToPrisliste}
                className="group border-2 border-warm-white hover:bg-warm-white/10 text-warm-white font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm hover:border-brand hover:text-brand shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>Se Våre Pakker</span>
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
              <svg
                className="w-6 h-6 text-warm-white/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <Booking isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
