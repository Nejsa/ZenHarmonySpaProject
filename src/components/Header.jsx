export default function Header() {
  return (
    <div className="w-full bg-white border-b sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        
        {/* Logo og navn */}
        <div className="flex items-center gap-3">
          {/* Du kan bytte denne sirkelen til et ekte logo-bilde */}
          <div className="w-9 h-9 rounded-full bg-brand/20 flex items-center justify-center">
            <span className="text-brand font-bold text-lg">Z</span>
          </div>
          <div>
            <div className="font-heading text-xl tracking-tight">Zen Harmony Spa</div>
            <div className="text-xs text-slate-500">Calm • Wellness • Private Spa</div>
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
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
