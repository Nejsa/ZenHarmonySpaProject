export default function Header() {
  return (
    <div className="w-full bg-black border-b sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* Logo og navn */}
        <div className="flex-1 flex items-center justify-center gap-4 ml-24">
          {/* Logo */}
          <div className=" bg-black flex items-center justify-center">
            <img
              src="/images/ZenHarmonySpaLogo.png"
              alt="Logo"
              className="h-16 inline-block mr-1"
            />
          </div>
          {/* Title and subtitle */}
          <div className="flex flex-col items-center">
            <div className="font-heading text-xl tracking-tight text-orange-200">
              Zen Harmony Spa
            </div>
            <div className="text-xs text-white">
              Calm • Wellness • Private Spa
            </div>
          </div>
        </div>

        {/* Kontaktinfo (vises kun på desktop) */}
        <div className="hidden md:flex items-center gap-4 text-sm text-slate-600">
          <span>Oslo</span>
          <span>10:00–22:00</span>
          <a
            href="#contact"
            className="underline underline-offset-4 decoration-brand/30 hover:decoration-brand"
          >
            Kontakt oss
          </a>
        </div>
      </div>
    </div>
  );
}
