import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <Navigation />

      {/* HERO VIDEO SECTION */}
      <section className="relative flex items-center justify-center h-screen overflow-hidden">
        <video
          src="/video/SpaVideo.mp4"
          className="absolute z-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light mb-6 text-[#f0e8d8]">
            Velkommen til{" "}
            <span className="italic text-[#c9a96e]">Zen Harmony Spa</span>
          </h1>
          <p className="text-lg md:text-xl text-[#d4c9b0] max-w-2xl mx-auto leading-relaxed">
            Opplev avslapning og harmoni i vårt luksuriøse private spa – perfekt
            for deg, venner eller familie.
          </p>
        </div>
      </section>
    </>
  );
}
