import { useState, useMemo } from "react";

const ADULT_PRICE = 995;
const CHILD_PRICE = 599;
const MAX_DRINKS = 10;

// --- Counter Component ---
// Denne komponenten er gjenbrukt for å telle voksne, barn og drikke.
function Counter({ label, value, setValue, min = 0, max = Infinity }) {
  const increment = () => setValue((v) => Math.min(v + 1, max));
  const decrement = () => setValue((v) => Math.max(v - 1, min));

  return (
    <div className="flex items-center justify-between py-4 border-b border-brand/10">
      <span className="text-lg text-brand-light">{label}</span>
      <div className="flex items-center gap-4">
        <button
          onClick={decrement}
          disabled={value <= min}
          className="w-8 h-8 rounded-full border border-brand text-brand disabled:opacity-30 hover:bg-brand hover:text-black transition"
        >
          -
        </button>
        <span className="w-8 text-center text-xl font-semibold text-white">
          {value}
        </span>
        <button
          onClick={increment}
          disabled={value >= max}
          className="w-8 h-8 rounded-full border border-brand text-brand disabled:opacity-30 hover:bg-brand hover:text-black transition"
        >
          +
        </button>
      </div>
    </div>
  );
}

// --- Hoved Booking Component ---
export default function Booking() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [drinks, setDrinks] = useState(0);

  const totalGuests = adults + children;
  const maxDrinksAllowed = Math.min(MAX_DRINKS, totalGuests);

  const total = useMemo(
    () => adults * ADULT_PRICE + children * CHILD_PRICE,
    [adults, children]
  );

  return (
    <div className="py-24">
      <div className="max-w-2xl mx-auto bg-neutral-900 border border-brand/20 rounded-xl shadow-lg p-8">
        <h2 className="font-heading text-3xl text-center text-brand-light mb-8">
          Book Din Private Spa-Opplevelse
        </h2>

        <div className="space-y-2">
          <Counter
            label={`Voksne (kr ${ADULT_PRICE})`}
            value={adults}
            setValue={setAdults}
            min={1}
          />
          <Counter
            label={`Barn (kr ${CHILD_PRICE})`}
            value={children}
            setValue={setChildren}
          />
          <Counter
            label="Drikke (valgfritt)"
            value={drinks}
            setValue={setDrinks}
            max={maxDrinksAllowed}
          />
        </div>

        <div className="mt-8 flex justify-between items-center text-2xl font-semibold">
          <span className="text-brand-light">Total Pris:</span>
          <span className="text-white">kr {total}</span>
        </div>

        <button className="w-full mt-8 py-3 rounded-lg bg-brand text-black font-bold text-lg hover:bg-brand-dark transition">
          Gå til betaling
        </button>
      </div>
    </div>
  );
}
