export default function Gallery() {
  const images = [
    { src: "/images/spa1.jpg", alt: "Boblebad og spa-område" },
    { src: "/images/spa2.jpg", alt: "Avslapningsområde" },
    { src: "/images/spa3.jpg", alt: "Privat spa-rom" },
    { src: "/images/spa4.jpg", alt: "Badstue og dampbad" },
    { src: "/images/spa5.jpg", alt: "Luksuriøs spa-opplevelse" },
    { src: "/images/spa6.jpg", alt: "Moderne spa-fasiliteter" },
    { src: "/images/spa7.jpg", alt: "Elegante detaljer" },
    { src: "/images/spa8.jpg", alt: "Privat atmosfære" },
    { src: "/images/spa9.jpg", alt: "Spa-dusjer og fasiliteter" },
    { src: "/images/spa10.jpg", alt: "Komfortabel innredning" },
    { src: "/images/spa11.jpg", alt: "Ro og harmoni" },
    { src: "/images/spa12.jpg", alt: "Luksuriøse detaljer" },
    { src: "/images/spa13.jpg", alt: "Moderne design" },
    { src: "/images/spa14.jpg", alt: "Den perfekte spa-opplevelsen" },
  ];

  return (
    <div className="py-2">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-heading text-4xl text-center text-brand-light mb-16 relative">
          Vårt Spa
          <div className="w-36 h-0.5 bg-brand mx-auto mt-4"></div>
        </h2>

        {/* Bildegalleri */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-brand/20 shadow-lg bg-neutral-800 h-64"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-brand-light text-lg font-semibold text-center px-4">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tekst under galleriet */}
        <div className="text-center mt-12">
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Opplev luksus og avslapning i våre moderne spa-fasiliteter.
            Hver detalj er nøye utformet for å gi deg den ultimate spa-opplevelsen.
          </p>
        </div>
      </div>
    </div>
  );
}
