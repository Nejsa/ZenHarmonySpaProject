export default function Facilities() {
  const facilities = [
    {
      src: "/newImages/image00011.jpeg",
      title: "Jacuzzi",
      description:
        "Slipp spenningen, kjenn roen. Bobler og varme på 37.5°C som lindrer muskler, bedrer søvn og senker stressnivået.",
      tags: "Avslappende · Sosialt · Terapeutisk",
    },
    {
      src: "/newImages/image00017.jpeg",
      title: "Finsk Badstue",
      description:
        "Der stress blir til ro. Varme på 80–90°C som løser opp spenning og senker stress.",
      tags: "Beroligende · Detox · Velvære",
    },
    {
      src: "/newImages/image00014.jpeg",
      title: "Varme Spadusjer",
      description:
        "Din egen oase. Varme dusjer, dempet lys og god stemning, tilrettelagt for total avslapning. ",
      tags: "Privat · Avslappende · Eksklusivt",
    },
    {
      src: "/newImages/image00012.jpeg",
      title: "Nordisk Kalddusj",
      description:
        "Kontrasten som vekker deg. Gå fra badstue til kald dusj og kjenn kroppen våkne til live. ",
      tags: "Forfriskende · Energigivende · Stimulerende",
    },
    {
      src: "/newImages/image00010.jpeg",
      title: "Avslapningslounge",
      description:
        "Den perfekte avslutningen. Et avslappet rom hvor du kan hvile etter spaopplevelsen med en kopp te eller kaffe, god musikk og behagelig sittegruppe.",
      tags: "Ro · Komfort · Avkobling",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header seksjon */}
      <div className="bg-gradient-to-b from-neutral-900 to-black py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl text-brand-light mb-6">
            Våre Fasiliteter
            <div className="w-72 h-0.5 bg-brand mx-auto mt-6"></div>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Utforsk våre eksklusive spa-fasiliteter. Hver detalj er nøye
            designet for å gi deg maksimal velvære og avslapning.
          </p>
        </div>
      </div>

      {/* Facilities - Fullscreen bilder */}
      {facilities.map((facility, index) => (
        <div
          key={index}
          className="relative h-screen w-full overflow-hidden group"
        >
          {/* Bilde */}
          <img
            src={facility.src}
            alt={facility.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

          {/* Tekst overlay - NEDERST */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="max-w-4xl mx-auto">
              {/* Tittel */}
              <h2 className="font-heading text-4xl md:text-6xl text-white mb-4">
                {facility.title}
              </h2>

              {/* Beskrivelse */}
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-4 max-w-3xl">
                {facility.description}
              </p>

              {/* Tags */}
              <p className="text-brand-light text-sm md:text-base">
                {facility.tags}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Call to action */}
      <div className="bg-gradient-to-t from-neutral-900 to-black py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl text-brand-light mb-6">
            Klar for å oppleve våre fasiliteter?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Book din spa-opplevelse i dag og opplev alle våre eksklusive
            fasiliteter.
          </p>
          <button
            onClick={() => window.close()}
            className="inline-flex items-center gap-3 bg-brand hover:bg-brand-dark text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>Tilbake til hovedsiden</span>
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
