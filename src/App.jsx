import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

// Eksisterende komponenter
import Header from "./components/Header";
import About from "./components/AboutUs";
import Pricelist from "./components/priceList";
import Gallery from "./components/Gallery";
import GeneralInfo from "./components/GeneralInfo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Ny komponent
import Facilities from "./components/Facilities";
import Booking from "./components/Booking";
import Navbar from "./components/navbar";

// Hovedside komponenten
function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Header />

      {/* Hero Video Section */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden">
        <div className="w-full px-8 md:px-16 lg:px-24">
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden border-2 border-brand/30 shadow-2xl">
            <video
              src="/video/SpaVideo.mp4"
              className="absolute z-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
              <div>
                <h1 className="font-heading text-4xl md:text-6xl mb-4 text-brand-light">
                  Zen Harmony Spa
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
                  Din private oase av luksus og avslapning
                </p>
                <button
                  onClick={() => navigate("/booking")}
                  className="bg-brand hover:bg-brand-dark text-black font-bold px-6 py-3 rounded-lg text-base transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Book nå!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="py-8"></div>

      <About />

      {/* Separator */}
      <div className="py-8"></div>

      <Gallery />

      {/* Separator */}
      <div className="py-8"></div>

      <div id="prisliste">
        <Pricelist />
      </div>

      {/* Separator */}
      <div className="py-8"></div>

      <GeneralInfo />

      {/* Separator */}
      <div className="py-8"></div>

      <div id="kontakt">
        <Contact />
      </div>

      {/* Separator */}
      <div className="py-8"></div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/fasiliteter"
            element={
              <>
                <Navbar />
                <Facilities />
              </>
            }
          />
          <Route
            path="/booking"
            element={
              <>
                <Navbar />
                <Booking />
              </>
            }
          />
          <Route
            path="/kontakt"
            element={
              <>
                <Navbar />
                <Contact />
              </>
            }
          />
          <Route
            path="/prisliste"
            element={
              <>
                <Navbar />
                <Pricelist />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
