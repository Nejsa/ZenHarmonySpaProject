export default function Home() {
  return (
    <div>
      {/* --- Hero Seksjon med Video --- */}
      <section className="relative flex items-center justify-center h-[75vh] overflow-hidden">
        {/* Bakgrunnsvideo */}
        <video
          src="/video/SpaVideo.mp4"
          className="absolute z-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline // Viktig for autoplay på mobil
        />

        {/* Mørkt overlegg for tekstlesbarhet */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Tekstinnhold */}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4 text-brand-light">
            Velkommen til Zen Harmony Spa
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Opplev avslapning og harmoni i vårt luksuriøse private spa – perfekt
            for deg, venner eller familie.
          </p>
        </div>
      </section>

      {/* Kort-seksjonen som var her er nå fjernet */}
    </div>
  );
}
