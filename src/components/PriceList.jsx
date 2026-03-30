// --- Pris-konstanter ---
const EXTRA_PERSON_PRICE = 690;

// --- Pakkedata MED persongrenser ---
const PACKAGES = [
  {
    id: 0,
    title: "Spa Express",
    basePrice: 1490,
    duration: 90,
    minPersons: 2,
    maxPersons: 3,
  },
  {
    id: 1,
    title: "Standard Pakke",
    basePrice: 1990,
    duration: 120,
    isRecommended: true,
    minPersons: 2,
    maxPersons: 6,
  },
  {
    id: 2,
    title: "Utvidet Pakke",
    basePrice: 2790,
    duration: 180,
    minPersons: 3,
    maxPersons: 8,
  },
];

// --- Komponenter ---

function PriceCard({ pkg }) {
  // Generer priser basert på faktiske grenser
  const pricesForMultiplePeople = Array.from(
    { length: pkg.maxPersons - pkg.minPersons + 1 },
    (_, i) => {
      const personCount = pkg.minPersons + i;
      return {
        count: personCount,
        price: pkg.basePrice + (personCount - 2) * EXTRA_PERSON_PRICE,
      };
    },
  );

  return (
    <div
      className={`bg-bg-card border ${
        pkg.isRecommended ? "border-brand" : "border-brand/20"
      } rounded-xl p-6 flex flex-col relative hover:border-brand/40 transition-colors`}
    >
      {pkg.isRecommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-bg-primary text-xs font-bold px-4 py-1.5 rounded-full">
          Mest Populær
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-heading text-2xl text-brand-light mb-2">
          {pkg.title}
        </h3>
        <p className="text-text-dim text-sm">
          {pkg.minPersons}-{pkg.maxPersons} personer • {pkg.duration} minutter
        </p>
      </div>

      <div className="mb-6">
        <p className="text-4xl font-semibold text-warm-white">
          kr {pkg.basePrice}
        </p>
        <p className="text-sm text-text-dim mt-1">
          Startpris for {pkg.minPersons} personer
        </p>
      </div>

      <div className="border-t border-brand/10 pt-4">
        <p className="text-xs tracking-wide uppercase text-brand-dark mb-3">
          Pris per antall personer
        </p>
        <ul className="space-y-2">
          {pricesForMultiplePeople.map(({ count, price }) => (
            <li
              key={count}
              className="flex justify-between items-center text-sm"
            >
              <span className="text-text-primary">{count} personer</span>
              <span className="font-semibold text-warm-white">kr {price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function IncludedItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <svg
        className="w-5 h-5 text-brand flex-shrink-0 mt-0.5"
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
      <span className="text-text-primary leading-relaxed">{children}</span>
    </li>
  );
}

export default function Pricelist() {
  return (
    <div className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-brand mb-4">
            Priser
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-brand-light mb-6">
            Våre Pakker & Tillegg
          </h2>
          <div className="w-24 h-px bg-brand-dark mx-auto"></div>
        </div>

        {/* 3 KOLONNER */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* KOLONNE 1: Våre Pakker */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-3xl text-brand-light mb-8 text-center">
              Våre Pakker
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PACKAGES.map((pkg) => (
                <PriceCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        </div>

        {/* 2 KOLONNER: Inkludert + Tillegg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Alltid Inkludert */}
          <div>
            <h3 className="font-heading text-3xl text-brand-light mb-8 text-center">
              Alltid Inkludert
            </h3>
            <div className="bg-bg-card border border-brand/20 rounded-xl p-8 h-full">
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
                <IncludedItem>Myke håndklær, badekåper og tøfler</IncludedItem>
                <IncludedItem>Te- og kaffebuffet</IncludedItem>
              </ul>
            </div>
          </div>

          {/* Tillegg */}
          <div>
            <h3 className="font-heading text-3xl text-brand-light mb-8 text-center">
              Tillegg
            </h3>
            <div className="bg-bg-card border border-brand/20 rounded-xl p-8 h-full">
              <ul className="space-y-5">
                <li className="flex justify-between items-start">
                  <div className="flex-1">
                    <span className="text-brand-light font-medium text-lg block mb-1">
                      Fruktfat
                    </span>
                    <p className="text-text-dim text-sm">
                      Fersk, sesongbasert frukt
                    </p>
                  </div>
                  <span className="font-semibold text-warm-white text-lg ml-4">
                    kr 289
                  </span>
                </li>

                <li className="flex justify-between items-start">
                  <div className="flex-1">
                    <span className="text-brand-light font-medium text-lg block mb-1">
                      Dekorasjon
                    </span>
                    <p className="text-text-dim text-sm">
                      Romantisk eller bursdag
                    </p>
                  </div>
                  <span className="font-semibold text-warm-white text-lg ml-4">
                    kr 259
                  </span>
                </li>

                <li className="flex justify-between items-start">
                  <div className="flex-1">
                    <span className="text-brand-light font-medium text-lg block mb-1">
                      Mocktails
                    </span>
                    <p className="text-text-dim text-sm">
                      Jordbær, pasjonsfrukt, Blue Lagoon
                    </p>
                  </div>
                  <span className="font-semibold text-warm-white text-lg ml-4">
                    kr 99
                  </span>
                </li>

                <li className="flex justify-between items-start">
                  <div className="flex-1">
                    <span className="text-brand-light font-medium text-lg block mb-1">
                      Brus 0.33l
                    </span>
                    <p className="text-text-dim text-sm">Diverse varianter</p>
                  </div>
                  <span className="font-semibold text-warm-white text-lg ml-4">
                    kr 39
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-36 text-center">
          <p className="text-text-dim text-sm">
            Alle priser er inkludert merverdiavgift. Tillegg bestilles sammen
            med pakken.
          </p>
        </div>
      </div>
    </div>
  );
}
