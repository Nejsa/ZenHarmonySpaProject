import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./components/AboutUs";
import Gallery from "./components/Gallery";
import PriceList from "./components/PriceList";
import GoogleReviews from "./components/GoogleReviews";
import Contact from "./components/Contact";
import Facilities from "./components/Facilities";
import OurHistory from "./components/OurHistory";
import Booking from "./components/Booking";

// HOMEPAGE - med alle seksjoner
function HomePage({ onBookingClick }) {
  return (
    <>
      <Header onBookingClick={onBookingClick} /> {/* Video hero */}
      <div></div>
      {/* OM OSS */}
      <div id="om-oss">
        <About />
      </div>
      <div></div>
      {/* GALLERY */}
      <Gallery />
      <div></div>
      {/* PRISLISTE */}
      <div id="prisliste">
        <PriceList />
      </div>
      <div></div>
      {/* ANMELDELSER */}
      <div id="anmeldelser">
        <GoogleReviews />
      </div>
      <div></div>
      {/* KONTAKT */}
      <div id="kontakt">
        <Contact />
      </div>
      <div></div>
    </>
  );
}

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />

      {/* NAVIGATION - ALLTID SYNLIG PÅ ALLE SIDER */}
      <Navigation onBookingClick={() => setIsBookingOpen(true)} />

      <div className="min-h-screen bg-[#000000] text-[#d4c9b0]">
        <Routes>
          {/* HOMEPAGE */}
          <Route
            path="/"
            element={<HomePage onBookingClick={() => setIsBookingOpen(true)} />}
          />

          {/* FASILITETER - egen side */}
          <Route path="/fasiliteter" element={<Facilities />} />

          {/* VÅR HISTORIE - egen side */}
          <Route path="/var-historie" element={<OurHistory />} />
        </Routes>
      </div>

      {/* BOOKING MODAL - TILGJENGELIG PÅ ALLE SIDER */}
      <Booking isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </Router>
  );
}

export default App;
