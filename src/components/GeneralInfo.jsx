export default function GeneralInfo() {
  return (
    <div className="py-2">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-heading text-4xl text-center text-brand-light mb-12">
          Generell Informasjon
          <div className="w-80 h-0.5 bg-brand mx-auto mt-4"></div>
        </h2>

        {/* --- Wrapper-div som rammer inn innholdet --- */}
        <div className="bg-neutral-900 border border-brand/20 rounded-xl shadow-lg p-8">
          <div className="space-y-8 text-lg leading-relaxed text-slate-300">
            {/* Åpningstider */}
            <div>
              <h3 className="font-heading text-2xl text-brand-light mb-4">
                Åpningstider
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between">
                  <span>Mandag - Torsdag:</span>
                  <span className="font-semibold text-white">16:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Fredag - Lørdag:</span>
                  <span className="font-semibold text-white">12:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Søndag:</span>
                  <span className="font-semibold text-white">12:00 - 21:00</span>
                </div>
              </div>
            </div>

            {/* Viktige regler */}
            <div>
              <h3 className="font-heading text-2xl text-brand-light mb-4">
                Viktige Regler
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-brand mt-1.5 text-xl">🌿</span>
                  <span>Ankomst 10 minutter før</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand mt-1.5 text-xl">🌿</span>
                  <span>Avbestillingsregler gjelder.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand mt-1.5 text-xl">🌿</span>
                  <span>Barn må være i følge med en voksen.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand mt-1.5 text-xl">🌿</span>
                  <span>Maks 10 drinker per bestilling.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
