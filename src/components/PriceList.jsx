// --- Pris-konstanter ---
const EXTRA_PERSON_PRICE = 690;

// --- Pakkedata ---
const PACKAGES = [
  { id: 0, title: "Spa Express", basePrice: 1490, duration: 90 },
  {
    id: 1,
    title: "Standard Pakke",
    basePrice: 1990,
    duration: 120,
    isRecommended: true,
  },
  { id: 2, title: "Utvidet Pakke", basePrice: 2790, duration: 180 },
];

// --- Komponenter ---

function PriceCard({ pkg }) {
  const pricesForMultiplePeople = Array.from({ length: 5 }, (_, i) => ({
    count: i + 2,
    price: pkg.basePrice + i * EXTRA_PERSON_PRICE,
  }));

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
        <div>
          <h3 className="font-heading text-2xl text-brand-light mb-4">
            {pkg.title}
          </h3>
          <p className="text-4xl font-semibold text-white">
            kr {pkg.basePrice}
            <p className="text-lg font-normal text-slate-400 mt-4">
              / {pkg.duration} min
            </p>
          </p>
        </div>

        <div className="text-right text-slate-400 text-sm pl-2">
          <p className="font-semibold mb-2">Pris per gruppe:</p>
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

function IncludedItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <svg
        className="w-5 h-5 text-brand flex-shrink-0 mt-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
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
          Priser & Praktisk Informasjon
          <div className="w-32 h-0.5 bg-brand mx-auto mt-4"></div>
        </h2>

        {/* 3 KOLONNER */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* KOLONNE 1: Våre Pakker */}
          <div>
            <h3 className="font-heading text-3xl text-brand-light mb-8 text-center">
              Våre Pakker
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {PACKAGES.map((pkg) => (
                <PriceCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>

          {/* KOLONNE 2: Alltid Inkludert + Tillegg */}
          <div className="space-y-12">
            {/* Alltid Inkludert */}
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

          {/* KOLONNE 3: Praktisk Informasjon */}
          <div>
            <h3 className="font-heading text-3xl text-brand-light mb-8 text-center">
              Praktisk Informasjon
            </h3>
            <div className="bg-neutral-900 border border-brand/20 rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-brand text-xl">📍</span>
                  <div>
                    <p className="text-brand-light font-semibold text-lg mb-1">
                      Adresse
                    </p>
                    <p className="text-slate-300">Eksempelveien 123</p>
                    <p className="text-slate-300">0123 Oslo</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-brand text-xl">🕐</span>
                  <div>
                    <p className="text-brand-light font-semibold text-lg mb-1">
                      Åpningstider
                    </p>
                    <p className="text-slate-300">
                      Mandag - Fredag: 10:00 - 20:00
                    </p>
                    <p className="text-slate-300">
                      Lørdag - Søndag: 12:00 - 18:00
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-brand text-xl">⚠️</span>
                    <p className="text-brand-light font-semibold text-lg">
                      Viktige Regler
                    </p>
                  </div>
                  <ul className="space-y-3 ml-9">
                    <li className="flex items-start gap-3">
                      <span className="text-brand mt-1">🌿</span>
                      <span className="text-slate-300">
                        Ankomst 10 minutter før
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand mt-1">🌿</span>
                      <span className="text-slate-300">
                        Avbestillingsregler gjelder
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand mt-1">🌿</span>
                      <span className="text-slate-300">
                        Barn må være i følge med en voksen
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand mt-1">🌿</span>
                      <span className="text-slate-300">
                        Maks 10 drinker per bestilling
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
