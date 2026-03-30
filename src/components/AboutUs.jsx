// En hjelpekomponent for å lage pene listepunkter
function InfoListItem({ children, icon = "🌿" }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-brand mt-1 text-xl">{icon}</span>
      <span className="text-text-primary leading-relaxed">{children}</span>
    </li>
  );
}

export default function About() {
  return (
    <div className=" bg-bg-primary pt-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-brand mb-4">
            Om Oss
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-brand-light mb-6">
            Din private oase
          </h2>
          <div className="w-24 h-px bg-brand-dark mx-auto"></div>
        </div>

        {/* Card wrapper */}
        <div className="bg-bg-card border border-brand/20 rounded-xl shadow-lg p-8 md:p-12">
          <div className="space-y-8 text-lg leading-relaxed text-text-primary">
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
              <ul className="space-y-3">
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

            {/* Åpningtider */}
            <h3 className="font-heading text-2xl text-brand-light mb-4">
              Åpningstider
            </h3>

            <ul>
              <li>
                <p>Søndag - Torsdag: 10:30-22:00</p>
                <p>Fredag - Lørdag: 11:00-23:00</p>
              </li>
            </ul>

            {/* Viktig informasjon */}
            <div>
              <h3 className="font-heading text-2xl text-brand-light mb-4">
                Viktig informasjon
              </h3>
              <ul className="space-y-3">
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

            <p className="text-center text-brand-light pt-8 italic">
              Vi takker for forståelsen og ser frem til å ønske deg velkommen!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
