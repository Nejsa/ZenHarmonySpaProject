import { useMemo, useState, useEffect } from "react";

const ADULT_PRICE = 995;
const CHILD_PRICE = 599;
const MAX_DRINKS = 10;

export default function Booking() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [drinks, setDrinks] = useState(0);

  // Brukes til å beregne maks drikker og total
  const totalGuests = adults + children;

  const total = useMemo(
    () => adults * ADULT_PRICE + children * CHILD_PRICE,
    [adults, children]
  );

  // Drikke kan ikke overstige antall gjester eller MAX_DRINKS
  const maxDrinksAllowed = Math.min(MAX_DRINKS, totalGuests);

  // Hvis gjester reduseres, juster drikker ned automatisk
  useEffect(() => {
    if (drinks > maxDrinksAllowed) setDrinks(maxDrinksAllowed);
  }, [drinks, maxDrinksAllowed]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Booking</h2>

      <div className="grid md:grid-cols-3 gap-4">
        <Counter label="Adults" value={adults} setValue={setAdults} />
        <Counter
          label="Children/Youth"
          value={children}
          setValue={setChildren}
        />
        <Counter
          label={`Drinks (max ${maxDrinksAllowed})`}
          value={drinks}
          setValue={setDrinks}
          min={0}
          max={maxDrinksAllowed}
        />
      </div>

      <div className="p-4 rounded-xl bg-white shadow">
        <h4 className="font-semibold mb-2">Summary</h4>
        <ul className="text-sm text-slate-700 space-y-1">
          <li>
            Adults: {adults} × NOK {ADULT_PRICE}
          </li>
          <li>
            Children/Youth: {children} × NOK {CHILD_PRICE}
          </li>
          <li>Total Guests: {totalGuests}</li>
          <li>
            Drinks: {drinks} / {maxDrinksAllowed}
          </li>
        </ul>
        <div className="mt-3 font-semibold">Total: NOK {total}</div>
      </div>
    </div>
  );
}

function Counter({ label, value, setValue, min = 0, max = Infinity }) {
  const dec = () => setValue(Math.max(min, value - 1));
  const inc = () => setValue(Math.min(max, value + 1));

  return (
    <div className="p-4 rounded-xl bg-white shadow flex items-center justify-between">
      <div>
        <div className="text-sm text-slate-500">{label}</div>
        <div className="text-2xl font-semibold">{value}</div>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={dec}
          className="w-9 h-9 rounded-lg border"
          disabled={value <= min}
        >
          -
        </button>
        <button
          type="button"
          onClick={inc}
          className="w-9 h-9 rounded-lg border"
          disabled={value >= max}
        >
          +
        </button>
      </div>
    </div>
  );
}
