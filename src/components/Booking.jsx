import { useState } from "react";
import Calendar from "./Calendar"; // Merk: Calandar (ikke Calendar)

export default function Booking() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const total = adults * 995 + children * 599;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert('Vennligst velg dato og tidspunkt');
      return;
    }
    alert(`Booking sendt for ${selectedDate.toLocaleDateString('nb-NO')} kl ${selectedTime}!`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-neutral-900 to-black py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl text-brand-light mb-6">
            Book din spa-opplevelse
            <div className="w-48 h-0.5 bg-brand mx-auto mt-6"></div>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Reserver din private spa-opplevelse og nyt ultimate avslapning
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-neutral-900 border border-brand/20 rounded-xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Kalender seksjon */}
              <Calendar
                selectedDate={selectedDate}
                onDateChange={setSelectedDate}
                selectedTime={selectedTime}
                onTimeChange={setSelectedTime}
              />

              {/* Gjester og pris */}
              <div>
                <h3 className="font-heading text-2xl text-brand-light mb-6">
                  Antall gjester
                </h3>
                <div className="bg-neutral-800 rounded-lg p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-brand-light">
                      Voksne (995 kr)
                    </span>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-8 h-8 rounded-full border border-brand text-brand hover:bg-brand hover:text-black"
                      >
                        -
                      </button>
                      <span className="text-xl font-semibold text-white w-8 text-center">
                        {adults}
                      </span>
                      <button
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="w-8 h-8 rounded-full border border-brand text-brand hover:bg-brand hover:text-black"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg text-brand-light">Barn (599 kr)</span>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-8 h-8 rounded-full border border-brand text-brand hover:bg-brand hover:text-black"
                      >
                        -
                      </button>
                      <span className="text-xl font-semibold text-white w-8 text-center">
                        {children}
                      </span>
                      <button
                        type="button"
                        onClick={() => setChildren(children + 1)}
                        className="w-8 h-8 rounded-full border border-brand text-brand hover:bg-brand hover:text-black"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 mt-4 border-t border-brand/20">
                    <span className="text-xl font-semibold text-brand-light">
                      Totalt:
                    </span>
                    <span className="text-2xl font-bold text-brand">
                      {total} kr
                    </span>
                  </div>
                </div>
              </div>

              {/* Personlig informasjon */}
              <div>
                <h3 className="font-heading text-2xl text-brand-light mb-6">
                  Personlig informasjon
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Fullt navn *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-brand/30 rounded-lg px-4 py-3 bg-neutral-800 text-white placeholder-slate-400 focus:border-brand focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-post *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-brand/30 rounded-lg px-4 py-3 bg-neutral-800 text-white placeholder-slate-400 focus:border-brand focus:outline-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefonnummer *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-brand/30 rounded-lg px-4 py-3 bg-neutral-800 text-white placeholder-slate-400 focus:border-brand focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-brand hover:bg-brand-dark text-black font-bold px-12 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Send booking-forespørsel - {total} kr
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


