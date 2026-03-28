export default function OurHistory() {
  return (
    <div className="min-h-screen bg-[#1a1812]">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-radial from-[#c9a96e]/10 via-transparent to-transparent opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1812]/80 via-transparent to-transparent" />

        {/* Decorative circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-[#c9a96e]/10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 space-y-6 animate-fade-in">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#c9a96e]">
            Zen Harmony Spa
          </p>

          <div className="w-10 h-px bg-[#8a7248] mx-auto" />

          <h1 className="font-heading text-7xl md:text-8xl lg:text-9xl font-light text-[#f0e8d8] leading-none">
            Vår
            <br />
            <em className="italic text-[#c9a96e]">historie</em>
          </h1>

          <p className="text-sm tracking-wide text-[#7a7060] max-w-md mx-auto mt-8">
            Vi skapte et sted for de som trenger en pause – helt på egne
            premisser.
          </p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#8a7248]">
            Les videre
          </span>
          <div className="w-px h-9 bg-gradient-to-b from-[#8a7248] to-transparent" />
        </div>
      </section>

      {/* INTRO QUOTE */}
      <section className="max-w-3xl mx-auto px-8 py-24 text-center">
        <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light italic text-[#e8d5aa] leading-relaxed">
          Noen ganger trenger vi bare å trekke oss unna litt. Ikke langt bort –
          bare bort fra støyen. Fra blikkene. Fra tempoet.
        </p>
      </section>

      {/* DIVIDER */}
      <div className="flex items-center gap-4 max-w-lg mx-auto px-8">
        <div className="flex-1 h-px bg-[#c9a96e]/20" />
        <div className="w-1.5 h-1.5 bg-[#8a7248] rotate-45" />
        <div className="flex-1 h-px bg-[#c9a96e]/20" />
      </div>

      {/* STORY BLOCKS */}
      <section className="max-w-4xl mx-auto px-8 py-20">
        {/* Block 1 */}
        <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-8 items-start py-12 border-t border-[#c9a96e]/10">
          <div className="font-heading text-5xl md:text-6xl font-light text-[#c9a96e]/20 leading-none pt-1">
            01
          </div>
          <div className="space-y-4 text-[#d4c9b0] leading-relaxed">
            <p>
              Zen Harmony Spa ble til fordi vi savnet et sted hvor man kunne
              slappe av uten å dele opplevelsen med fremmede. Et sted hvor man
              slipper å føle seg observert. Hvor man ikke må forholde seg til
              andres rytme.
            </p>
            <p>Vi ønsket å skape et rom som føles trygt. Rolig. Privat.</p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-8 items-start py-12 border-t border-[#c9a96e]/10">
          <div className="font-heading text-5xl md:text-6xl font-light text-[#c9a96e]/20 leading-none pt-1">
            02
          </div>
          <div className="space-y-4 text-[#d4c9b0] leading-relaxed">
            <p>
              Her booker du ikke en plass i et felles spa. Du får hele stedet
              for deg selv.
            </p>
            <p>
              Det betyr at du kan senke skuldrene med én gang du kommer inn
              døren. Ingen garderober fulle av folk. Ingen tilfeldige møter.
              Ingen avbrytelser. Bare dere – og tiden dere har sammen.
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-8 items-start py-12 border-t border-b border-[#c9a96e]/10">
          <div className="font-heading text-5xl md:text-6xl font-light text-[#c9a96e]/20 leading-none pt-1">
            03
          </div>
          <div className="space-y-4 text-[#d4c9b0] leading-relaxed">
            <p>
              For mange handler det om mer enn luksus. Det handler om å føle seg
              komfortabel i egen kropp. Å slippe å tenke på hvordan man ser ut.
              Å kunne dekke seg til eller ikke – helt uten press.
            </p>
            <p>
              Når privatlivet er ivaretatt, blir det lettere å slappe ordentlig
              av.
            </p>
          </div>
        </div>
      </section>

      {/* PULLQUOTE */}
      <section className="bg-[#221f18] border-y border-[#c9a96e]/15 py-20">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <div className="font-heading text-6xl text-[#8a7248] leading-none mb-4 opacity-50">
            "
          </div>
          <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl font-light italic text-[#e8d5aa] leading-relaxed">
            Vi har valgt enkle, rolige detaljer – varmt vann, mykt lys, en
            stille atmosfære. Ikke for å imponere, men for å skape en følelse av
            trygghet og velvære.
          </blockquote>
        </div>
      </section>

      {/* CLOSING */}
      <section className="max-w-3xl mx-auto px-8 py-24 text-center">
        <div className="space-y-4 text-[#d4c9b0] leading-relaxed mb-16">
          <p>
            Zen Harmony Spa er ikke laget for å være storslått. Det er laget for
            å føles godt.
          </p>
          <p>
            Enten du kommer med partneren din, venner eller noen i familien,
            ønsker vi at dere skal sitte igjen med én følelse:
          </p>
        </div>

        {/* Triple emphasis box */}
        <div className="relative border border-[#c9a96e]/20 p-10 mt-16">
          {/* Inner border */}
          <div className="absolute inset-[5px] border border-[#c9a96e]/10 pointer-events-none" />

          {/* Content */}
          <div className="relative space-y-1 flex flex-col">
            <span className="font-heading text-xl md:text-2xl italic text-[#c9a96e] leading-relaxed">
              At dere fikk en pause.
            </span>
            <span className="font-heading text-xl md:text-2xl italic text-[#c9a96e] leading-relaxed">
              At dere kunne være dere selv.
            </span>
            <span className="font-heading text-xl md:text-2xl italic text-[#c9a96e] leading-relaxed">
              At øyeblikket virkelig var deres.
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-14">
          <button className="bg-[#c9a96e] hover:bg-[#e8d5aa] text-[#1a1812] text-xs font-medium tracking-[0.25em] uppercase px-11 py-4 transition-all duration-300 hover:-translate-y-0.5">
            Book nå
          </button>
        </div>
      </section>
    </div>
  );
}
