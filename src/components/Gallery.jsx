import { useState, useEffect } from "react";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    {
      src: "/newImages/jacuzzi.jpeg",
      title: "Private Jacuzzier",
    },
    {
      src: "/newImages/Badstue.jpeg",
      title: "Finsk Badstue",
    },
    {
      src: "/newImages/Spadusjer.jpeg",
      title: "Privat spa-rom",
    },
    {
      src: "/newImages/Kalddusj.jpeg",
      title: "Badstue og dampbad",
    },
    {
      src: "/newImages/Kopper.jpeg",
      title: "Massasjerom",
    },
    {
      src: "/newImages/ZenLove.jpeg",
      title: "Utendørs terrasse",
    },
    {
      src: "/newImages/Garderobe.jpeg",
      title: "Luksuriøse fasiliteter",
    },
    {
      src: "/newImages/Resepsjon.jpeg",
      title: "Rolige omgivelser",
    },
    {
      src: "/newImages/Lounge.jpeg",
      title: "Velværeprodukter",
    },
    {
      src: "/newImages/Drikke.jpeg",
      title: "Profesjonelle terapeuter",
    },
    {
      src: "/newImages/Frukt.jpeg",
      title: "Avslappende atmosfære",
    },
    {
      src: "/images/spa10.jpg",
      title: "Eksklusive behandlinger",
    },
  ];

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  useEffect(() => {
    function handleKeyDown(e) {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <div className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-brand mb-4">
            Galleri
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-brand-light mb-6">
            Vårt Spa
          </h2>
          <div className="w-24 h-px bg-brand-dark mx-auto"></div>
        </div>

        {/* Image rendering optimization */}
        <style>{`
          .gallery-image {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        `}</style>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-bg-card h-64 cursor-pointer transform transition-all duration-300 hover:scale-105 border border-brand/10 hover:border-brand/30"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="gallery-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-brand-light text-lg font-semibold drop-shadow-lg">
                    {image.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-text-primary max-w-2xl mx-auto mb-8 leading-relaxed">
            Opplev luksus og avslapning i våre moderne spa-fasiliteter. Hver
            detalj er nøye utformet for å gi deg den ultimate spa-opplevelsen.
          </p>

          <button
            onClick={() => window.open("/fasiliteter", "_self")}
            className="inline-flex items-center gap-3 bg-brand hover:bg-brand-light text-bg-primary font-medium text-sm tracking-[0.1em] uppercase px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Utforsk våre fasiliteter i detalj</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative bg-bg-card border border-brand/20 rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-3 right-3 text-warm-white bg-bg-primary/80 hover:bg-bg-primary rounded-full p-2 transition z-10"
              aria-label="Lukk"
            >
              ✕
            </button>

            {/* Previous button */}
            <button
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex - 1 + images.length) % images.length,
                )
              }
              className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-white bg-bg-primary/80 hover:bg-bg-primary rounded-full p-2 transition z-10"
              aria-label="Forrige"
            >
              ←
            </button>

            {/* Next button */}
            <button
              onClick={() =>
                setSelectedIndex((selectedIndex + 1) % images.length)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-white bg-bg-primary/80 hover:bg-bg-primary rounded-full p-2 transition z-10"
              aria-label="Neste"
            >
              →
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="gallery-image w-full max-h-[70vh] object-contain"
            />

            {/* Caption */}
            <div className="p-6 text-center space-y-2 bg-bg-card">
              <h3 className="text-2xl text-brand-light font-heading">
                {selectedImage.title}
              </h3>
              <p className="text-text-primary text-base max-w-lg mx-auto leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
