import { useState, useEffect } from "react";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    {
      src: "/images/spa1.jpg",
      title: "Boblebad",
      description:
        "Opplev avslapning i vårt moderne boblebad, designet for maksimal komfort og ro.",
    },
    {
      src: "/images/spa2.jpg",
      title: "Avslapningsområde",
      description:
        "Et fredelig område perfekt for hvile mellom behandlingene, omgitt av myke tekstiler og varme toner.",
    },
    {
      src: "/images/spa3.jpg",
      title: "Privat spa-rom",
      description:
        "Et eksklusivt rom for deg og din partner med private fasiliteter og rolig atmosfære.",
    },
    {
      src: "/images/spa4.jpg",
      title: "Badstue og dampbad",
      description:
        "Forfrisk kroppen og sinnet med våre moderne badstuer og dampbad i naturlige materialer.",
    },
    {
      src: "/images/spa5.jpg",
      title: "Massasjerom",
      description:
        "Et fredelig rom designet for total avslapning og profesjonell massasje.",
    },
    {
      src: "/images/spa6.jpg",
      title: "Utendørs terrasse",
      description:
        "En vakker terrasse med utsikt, perfekt for å nyte frisk luft og ro.",
    },
    {
      src: "/images/spa8.jpg",
      title: "Luksuriøse fasiliteter",
      description:
        "Moderne spa-fasiliteter som kombinerer komfort, stil og velvære.",
    },
    {
      src: "/images/spa9.jpg",
      title: "Rolige omgivelser",
      description: "Et harmonisk miljø som fremmer indre balanse og ro.",
    },
    {
      src: "/images/spa11.jpg",
      title: "Velværeprodukter",
      description:
        "Naturlige produkter av høy kvalitet brukt i alle behandlinger.",
    },
    {
      src: "/images/spa12.jpg",
      title: "Profesjonelle terapeuter",
      description:
        "Erfarne terapeuter som sørger for personlig og trygg behandling.",
    },
    {
      src: "/images/spa13.jpg",
      title: "Avslappende atmosfære",
      description:
        "Beroligende lys, duft og musikk som skaper en perfekt spaopplevelse.",
    },
    {
      src: "/images/spa10.jpg",
      title: "Eksklusive behandlinger",
      description:
        "Skreddersydde behandlinger for deg som ønsker det lille ekstra.",
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
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-heading text-4xl text-center text-brand-light mb-16">
          Vårt Spa
          <div className="w-36 h-0.5 bg-brand mx-auto mt-4"></div>
        </h2>

        {/* CHANGED: Added image-rendering style for sharper images */}
        <style>{`
          .gallery-image {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        `}</style>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-neutral-800 h-64 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => setSelectedIndex(index)}
            >
              {/* CHANGED: Added gallery-image class and loading="lazy" for better performance */}
              <img
                src={image.src}
                alt={image.title}
                className="gallery-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white text-lg font-semibold drop-shadow-lg">
                    {image.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Opplev luksus og avslapning i våre moderne spa-fasiliteter. Hver
            detalj er nøye utformet for å gi deg den ultimate spa-opplevelsen.
          </p>

          <button
            onClick={() => window.open("/fasiliteter", "_blank")}
            className="inline-flex items-center gap-3 bg-brand hover:bg-brand-dark text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
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

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative bg-neutral-900 rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-3 right-3 text-white bg-black/40 hover:bg-black/70 rounded-full p-2 transition z-10"
              aria-label="Lukk"
            >
              ✕
            </button>

            <button
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex - 1 + images.length) % images.length,
                )
              }
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 rounded-full p-2 transition z-10"
              aria-label="Forrige"
            >
              ←
            </button>
            <button
              onClick={() =>
                setSelectedIndex((selectedIndex + 1) % images.length)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 rounded-full p-2 transition z-10"
              aria-label="Neste"
            >
              →
            </button>

            {/* CHANGED: Added gallery-image class to modal image too */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="gallery-image w-full max-h-[70vh] object-contain"
            />

            <div className="p-6 text-center space-y-2">
              <h3 className="text-2xl text-brand-light font-semibold">
                {selectedImage.title}
              </h3>
              <p className="text-slate-300 text-base max-w-lg mx-auto">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
