import Header from "./components/Header";
import Navbar from "./components/Navbar";

// Seksjoner
import Home from "./components/Home";
import Booking from "./components/Booking";
import Pricelist from "./components/Pricelist";
import Gallery from "./components/Gallery";
import GeneralInfo from "./components/GeneralInfo";
import Contact from "./components/Contact";
import About from "./components/AboutUs";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "booking", label: "Booking" },
  { id: "pricelist", label: "Pricelist" },
  { id: "gallery", label: "Gallery" },
  { id: "general-information", label: "General Information" },
  { id: "contact", label: "Contact" },
  { id: "about-us", label: "About Us" },
];

export default function App() {
  const [active, setActive] = useState("home");
  const navbarRef = useRef(null);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerH = navbarRef.current?.offsetHeight || 0;
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerH - 8;
    window.scrollTo({ top: y, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  useEffect(() => {
    const headerH = navbarRef.current?.offsetHeight || 0;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: `-${headerH + 24}px 0px -60% 0px`, threshold: 0.1 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-yellow-700">
      {/* Header øverst */}
      <Header />

      {/* Navbar rett under header */}
      <Navbar
        ref={navbarRef}
        items={SECTIONS}
        active={active}
        onJump={scrollToId}
      />

      {/* Innhold */}
      <main className="mx-auto max-w-6xl px-4">
        <section id="home" className="scroll-mt-16 py-10">
          <Home />
        </section>
        <section id="booking" className="scroll-mt-16 py-10">
          <Booking />
        </section>
        <section id="pricelist" className="scroll-mt-16 py-10">
          <Pricelist />
        </section>

        <section id="gallery" className="scroll-mt-16 py-10">
          <Gallery />
        </section>  
        <section id="general-information" className="scroll-mt-16 py-10">
          <GeneralInfo />
        </section>
        <section id="contact" className="scroll-mt-16 py-10">
          <Contact />
        </section>
        <section id="about-us" className="scroll-mt-16 py-10">
          <About />
        </section>
      </main>
      <Footer />
    </div>
  );
}
