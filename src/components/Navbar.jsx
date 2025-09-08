import { forwardRef, useState } from "react";

const Navbar = forwardRef(function Navbar({ items, active, onJump }, ref) {
  const [open, setOpen] = useState(false);

  const jump = (id) => {
    onJump(id);
    setOpen(false); // Denne lukker mobilmenyen ved klikk
  };

  return (
    <header
      ref={ref}
      className="sticky top-16 z-40 w-full border-b bg-black/80 backdrop-blur"
    >
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        {/* Dette er logoen og/eller tittelen */}
        <div className="font-heading text-base md:text-lg">
          <img
            src="/images/ZenHarmonySpaLogo.png"
            alt="Logo"
            className="h-16 inline-block mr-1"
          />
          Meny
        </div>

        {/* Desktop lenker */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              onClick={(e) => {
                e.preventDefault();
                jump(it.id);
              }}
              className={
                it.id === active
                  ? "font-semibold text-brand"
                  : "text-yellow-700 hover:text-white"
              }
            >
              {it.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA-knapp */}
        <button
          onClick={() => jump("booking")}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand text-white hover:bg-brand-dark transition"
        >
          Book now!
        </button>

        {/* Mobilmeny-knapp */}
        <button
          className="md:hidden inline-flex items-center justify-center w-9 h-9 border rounded"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobil dropdown */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-sm">
            {items.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  jump(it.id);
                }}
                className={
                  it.id === active
                    ? "font-semibold text-brand"
                    : "text-slate-700 hover:text-slate-900"
                }
              >
                {it.label}
              </a>
            ))}
            <button
              onClick={() => jump("booking")}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand text-white hover:bg-brand-dark transition"
            >
              Book now!
            </button>
          </div>
        </div>
      )}
    </header>
  );
});

export default Navbar;
