import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Pricelist from "./components/PriceList";
import GoogleReviews from "./components/GoogleReviews";
import Contact from "./components/Contact";
import Facilities from "./components/Facilities";
import OurHistory from "./components/OurHistory";

// HOMEPAGE - med alle seksjoner
function HomePage() {
  return (
    <>
      <Header /> {/* Video hero + navbar */}
      <div></div>
      {/* OM OSS */}
      <div id="om-oss">
        <About />
      </div>
      <div></div>
      {/* GALLERY (med knapp til /fasiliteter) */}
      <Gallery />
      <div></div>
      {/* PRISLISTE */}
      <div id="prisliste">
        <Pricelist />
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
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#000000] text-[#d4c9b0]">
        <Routes>
          {/* HOMEPAGE */}
          <Route path="/" element={<HomePage />} />

          {/* FASILITETER - egen side */}
          <Route
            path="/fasiliteter"
            element={
              <>
                <Navigation />
                <Facilities />
              </>
            }
          />

          {/* VÅR HISTORIE - egen side */}
          <Route
            path="/var-historie"
            element={
              <>
                <Navigation />
                <OurHistory />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
