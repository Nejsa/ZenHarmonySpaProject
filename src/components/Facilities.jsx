export default function Facilities() {
  const facilities = [
    {
      src: "/images/spa1.jpg",
      title: "Boblebad",
      description: "Opplev avslapning i vårt moderne boblebad, designet for maksimal komfort og ro.",
      benefits: [
        "Forbedrer blodsirkulasjonen",
        "Reduserer muskelspenning",
        "Senker stressnivået",
        "Bidrar til bedre søvn",
        "Lindrer leddsmerter"
      ],
      features: [
        "Temperaturregulering 37-40°C",
        "Hydroterapi-dyser",
        "LED-belysning",
        "Plass til opptil 6 personer",
        "Vannrensesystem"
      ]
    },
    {
      src: "/images/spa2.jpg",
      title: "Avslapningsområde",
      description: "Et fredelig område perfekt for hvile mellom behandlingene, omgitt av myke tekstiler og varme toner.",
      benefits: [
        "Senker kortisol-nivåer",
        "Fremmer mental ro",
        "Forbedrer fokus og klarhet",
        "Reduserer angst",
        "Øker kreativitet"
      ],
      features: [
        "Ergonomiske hvilestoler",
        "Dempet belysning",
        "Naturlige materialer",
        "Rolig bakgrunnsmusikk",
        "Temperaturkontroll"
      ]
    },
    {
      src: "/images/spa3.jpg",
      title: "Privat spa-rom",
      description: "Et eksklusivt rom for deg og din partner med private fasiliteter og rolig atmosfære.",
      benefits: [
        "Privat og intim atmosfære",
        "Personlig tilpasset opplevelse",
        "Styrker relasjoner",
        "Fullstendig avslapning",
        "Økt intimitet"
      ],
      features: [
        "Private dusjer",
        "Egen garderobe",
        "Klimakontroll",
        "Premium lydsystem",
        "Dimmbare lys"
      ]
    },
    {
      src: "/images/spa4.jpg",
      title: "Badstue og dampbad",
      description: "Forfrisk kroppen og sinnet med våre moderne badstuer og dampbad i naturlige materialer.",
      benefits: [
        "Renser huden grundig",
        "Støtter immunforsvaret",
        "Forbedrer kardiovaskulær helse",
        "Øker stoffskiftet",
        "Frigjør endorfiner"
      ],
      features: [
        "Finsk badstue (80-90°C)",
        "Dampbad (45°C, 100% fuktighet)",
        "Tre fra FSC-sertifiserte skoger",
        "Aromatiske oljer",
        "Ventilasjonssystem"
      ]
    },
    {
      src: "/images/spa5.jpg",
      title: "Massasjerom",
      description: "Et fredelig rom designet for total avslapning og profesjonell massasje.",
      benefits: [
        "Lindrer muskelspenning",
        "Forbedrer fleksibilitet",
        "Reduserer inflammasjon",
        "Øker energinivået",
        "Fremmer dyp avslapning"
      ],
      features: [
        "Oppvarmede massasjebenker",
        "Premium massasjeprodukter",
        "Lyddemping",
        "Duftterapi",
        "Justerbar belysning"
      ]
    },
    {
      src: "/images/spa6.jpg",
      title: "Utendørs terrasse",
      description: "En vakker terrasse med utsikt, perfekt for å nyte frisk luft og ro.",
      benefits: [
        "Frisk luft og vitamin D",
        "Kontakt med naturen",
        "Reduserer stress",
        "Forbedrer humøret",
        "Øker mindfulness"
      ],
      features: [
        "Panoramautsikt",
        "Komfortable sittemøbler",
        "Værbestandige materialer",
        "Private områder",
        "Plantebegrønning"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-neutral-900 to-black py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl text-brand-light mb-6">
            Våre Fasiliteter
            <div className="w-48 h-0.5 bg-brand mx-auto mt-6"></div>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Utforsk våre eksklusive spa-fasiliteter i detalj. Hver fasilitet er nøye designet 
            for å gi deg maksimal velvære og avslapning.
          </p>
        </div>
      </div>

      {/* Fasiliteter */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 space-y-20">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Bilde */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-brand/30">
                  <img
                    src={facility.src}
                    alt={facility.title}
                    className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>

              {/* Innhold */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h2 className="font-heading text-4xl text-brand-light mb-4">
                    {facility.title}
                  </h2>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Fordeler */}
                <div>
                  <h3 className="font-heading text-2xl text-brand-light mb-4">
                    Helsefordeler
                  </h3>
                  <ul className="space-y-3">
                    {facility.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-brand mt-1.5 text-xl">🌿</span>
                        <span className="text-slate-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Funksjoner */}
                <div>
                  <h3 className="font-heading text-2xl text-brand-light mb-4">
                    Funksjoner & Utstyr
                  </h3>
                  <ul className="space-y-3">
                    {facility.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-brand mt-1.5 text-xl">✨</span>
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-gradient-to-t from-neutral-900 to-black py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl text-brand-light mb-6">
            Klar for å oppleve våre fasiliteter?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Book din spa-opplevelse i dag og opplev alle våre eksklusive fasiliteter.
          </p>
          <button
            onClick={() => window.close()}
            className="inline-flex items-center gap-3 bg-brand hover:bg-brand-dark text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>Tilbake til hovedsiden</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}