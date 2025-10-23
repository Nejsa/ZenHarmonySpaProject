// --- Pris-konstanter ---
const EXTRA_PERSON_PRICE = 690;

// --- Pakkedata ---
const PACKAGES = [
  { id: 0, title: "Spa Express", basePrice: 1490, duration: 70 },
  {
    id: 1,
    title: "Standard Pakke",
    basePrice: 1990,
    duration: 110,
    isRecommended: true,
  },
  { id: 2, title: "Utvidet Pakke", basePrice: 2790, duration: 180 },
];

// --- Komponenter ---

// Oppdatert priskort med detaljert prisoversikt
function PriceCard({ pkg }) {
  // Genererer en liste med priser for 2 til 6 personer
  const pricesForMultiplePeople = Array.from({ length: 5 }, (_, i) => {
    const personCount = i + 2;
    const price = pkg.basePrice + (personCount - 2) * EXTRA_PERSON_PRICE;
    return { count: personCount, price };
  });

  return (
    <div
      className={`bg-neutral-900 border ${
        pkg.isRecommended ? "border-brand" : "border-brand/20"
      } rounded-xl p-6 flex flex-col relative`}
    >
      {pkg.isRecommended && (
        <div className="absolute top-0 right-6 bg-brand text-black text-xs font-bold px-3 py-1 rounded-b-md">
          Mest Populær
        </div>
      )}

      <div className="flex justify-between items-start">
        {/* Venstre side: Tittel og grunnpris */}
        <div>
          <h3 className="font-heading text-2xl text-brand-light mb-2">
            {pkg.title}
          </h3>
          <p className="text-4xl font-semibold text-white">
            kr {pkg.basePrice}
            <span className="text-base font-normal text-slate-400">
              {" "}
              / {pkg.duration} min
            </span>
          </p>
          <p className="text-slate-400 text-sm mt-1">For 2 personer</p>
        </div>

        {/* Høyre side: Priser for flere personer */}
        <div className="text-right text-slate-400 text-sm pl-4">
          <p className="font-semibold mb-1">Pris per gruppe:</p>
          <ul className="space-y-1">
            {pricesForMultiplePeople.map(({ count, price }) => (
              <li key={count} className="flex justify-between gap-3">
                <span>For {count} personer</span>
                <span className="font-semibold text-white">kr {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// En komponent for "Hva er inkludert"-listen
function IncludedItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <svg
        className="w-5 h-5 text-brand flex-shrink-0 mt-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
      <span className="text-brand-light">{children}</span>
    </li>
  );
}

export default function Pricelist() {
  return (
    <div className="py-2">  
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-heading text-4xl text-center text-brand-light mb-16">
          Prisliste
          <div className="w-32 h-0.5 bg-brand mx-auto mt-4"></div>
        </h2>

        <div className="grid lg:grid-cols-2 lg:gap-x-16 gap-y-12">
          {/* --- VENSTRE KOLONNE: PRISPAKKER --- */}
          <div>
            <h3 className="font-heading text-3xl text-brand-light mb-8">
              Våre Pakker
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {PACKAGES.map((pkg) => (
                <PriceCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>

          {/* --- HØYRE KOLONNE: INFO & TILLEGG --- */}
          <div className="space-y-12">
            {/* Hva er inkludert */}
            <div>
              <h3 className="font-heading text-3xl text-brand-light mb-8 text-center">
                Alltid Inkludert
              </h3>
              <div className="bg-neutral-900 border border-brand/20 rounded-xl p-8">
                <ul className="space-y-4">
                  <IncludedItem>
                    Eksklusiv og privat tilgang til hele spaet
                  </IncludedItem>
                  <IncludedItem>
                    Privat boblebad, badstue og spa-dusjer
                  </IncludedItem>
                  <IncludedItem>
                    Mulighet for egen musikk og lyssetting
                  </IncludedItem>
                  <IncludedItem>
                    Myke håndklær, badekåper og tøfler
                  </IncludedItem>
                  <IncludedItem>Te- og kaffebuffet</IncludedItem>
                </ul>
              </div>
            </div>

            {/* Tillegg */}
            <div>
              <h3 className="font-heading text-3xl text-brand-light mb-8 text-center">
                Tillegg
              </h3>
              <div className="bg-neutral-900 border border-brand/20 rounded-xl p-6">
                <ul className="space-y-4">
                  <li className="flex justify-between items-center text-lg">
                    <span className="text-brand-light">Fruktfat</span>
                    <span className="font-semibold text-white">kr 289</span>
                  </li>
                  <li className="flex justify-between items-start text-lg">
                    <div>
                      <span className="text-brand-light">Dekorasjon</span>
                      <p className="text-sm text-slate-400">
                        (Romantisk eller bursdag)
                      </p>
                    </div>
                    <span className="font-semibold text-white pt-1">
                      kr 259
                    </span>
                  </li>
                  <li className="flex justify-between items-start text-lg">
                    <div>
                      <span className="text-brand-light">Mocktails</span>
                      <p className="text-sm text-slate-400">
                        (Jordbær, pasjonsfrukt, Blue Lagoon)
                      </p>
                    </div>
                    <span className="font-semibold text-white pt-1">kr 99</span>
                  </li>
                  <li className="flex justify-between items-center text-lg">
                    <span className="text-brand-light">Brus 0.33l</span>
                    <span className="font-semibold text-white">kr 39</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
