// En hjelpekomponent for å lage pene listepunkter
function InfoListItem({ children, icon = "🌿" }) {
  return (
    <li className="flex items-center gap-3">
      <span className="text-brand mt-1 text-xl">{icon}</span>
      <span className="text-slate-300">{children}</span>
    </li>
  );
}

export default function About() {
  return (
    <div className="py-2">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-heading text-4xl text-center text-brand-light mb-12">
          Om Oss
          <div className="w-32 h-0.5 bg-brand mx-auto mt-4"></div>
        </h2>

        {/* --- Nytt kort som rammer inn innholdet --- */}
        <div className="bg-neutral-900 border border-brand/20 rounded-xl shadow-lg p-8 md:p-12">
          <div className="space-y-8 text-lg leading-relaxed text-slate-300">
            {/* Introduksjon */}
            <div className="space-y-4">
              <p>
                Velkommen til Zen Harmony Spa – din private oase av luksus og
                avslapning! Hos oss kan varmen fra badstuen, og nyt forfriskende
                spa-dusjer.
              </p>
              <p>
                Enten det er for en bursdag, en vennekveld, eller bare fordi
                dere fortjener en pause fra hverdagen, gir vi dere en
                uforglemmelig opplevelse i moderne og elegante fasiliteter. La
                oss friste med fargerike fruktfat og smakfulle mocktails, laget
                akkurat slik dere ønsker.
              </p>
            </div>
            {/* Hva vi tilbyr */}
            <div>
              <h3 className="font-heading text-2xl text-brand-light mb-4">
                For din komfort
              </h3>
              <ul className="space-y-2">
                <InfoListItem>Badekåper, håndklær og tøfler</InfoListItem>
                <InfoListItem>
                  Hygieneprodukter (sjampo, balsam, såpe)
                </InfoListItem>
                <InfoListItem>Te og kaffe er alltid tilgjengelig</InfoListItem>
              </ul>
            </div>
            {/* Beliggenhet */}
            <div>
              <h3 className="font-heading text-2xl text-brand-light mb-4">
                Vår beliggenhet
              </h3>
              <p>
                Vår spa-avdeling ligger i underetasjen på Kløfta Helsehus, med
                praktisk parkering rett utenfor. Vi anbefaler å ankomme 5
                minutter før avtalt tid for å få mest mulig ut av besøket.
              </p>
            </div>

            {/* Viktig informasjon */}
            <div>
              <h3 className="font-heading text-2xl text-brand-light mb-4">
                Viktig informasjon
              </h3>
              <ul className="space-y-2">
                <InfoListItem>
                  Alle reservasjoner må forhåndsbestilles.
                </InfoListItem>
                <InfoListItem>
                  Ved avbestilling senere enn 48 timer før avtalt tid, påløper
                  et gebyr på kr 500.
                </InfoListItem>
                <InfoListItem>
                  Det gis ingen refusjon ved avbestilling senere enn 24 timer
                  før avtalt tid.
                </InfoListItem>
              </ul>
            </div>

            <p className="text-center text-brand-light pt-8">
              Vi takker for forståelsen og ser frem til å ønske deg velkommen!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
