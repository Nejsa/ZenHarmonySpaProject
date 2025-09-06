import { forwardRef } from "react";

const Navbar = forwardRef(function Navbar({ items, active, onJump }, _ref) {
  return (
    <header
      ref={_ref}
      className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur"
    >
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onJump("home");
          }}
          className="font-semibold text-lg tracking-tight"
        >
          Zen Harmony Spa
        </a>
        <div className="flex items-center gap-5 text-sm">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              onClick={(e) => {
                e.preventDefault();
                onJump(it.id);
              }}
              className={
                it.id === active
                  ? "font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }
            >
              {it.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
});

export default Navbar;
