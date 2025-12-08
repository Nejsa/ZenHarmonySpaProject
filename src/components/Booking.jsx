import { useState } from "react";
import Calendar from "./Calendar";

export default function Booking() {
  const [step, setStep] = useState(1);
  const [people, setPeople] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    // legg til flere felter for tillegstjenester om ønskelig
  });

  const total = people * 995; // Endre pris om ønskelig

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = (e) => {
    e && e.preventDefault();
    setStep((s) => Math.min(s + 1, 3));
  };

  const handleBack = (e) => {
    e && e.preventDefault();
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking sendt!");
    // legg til faktisk bookinglogikk her
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
              {/* STEG 1: Dato og tid */}
              {step === 1 && (
                <>
                  <h2 className="font-heading text-2xl text-brand-light mb-6">Velg dato og tid</h2>
                  <Calendar
                    selectedDate={selectedDate}
                    onDateChange={setSelectedDate}
                    selectedTime={selectedTime}
                    onTimeChange={setSelectedTime}
                  />
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-brand hover:bg-brand-dark text-black font-bold px-8 py-3 rounded-lg text-base transition-all duration-300 hover:scale-105 shadow-lg"
                      disabled={!selectedDate || !selectedTime}
                    >
                      Neste
                    </button>
                  </div>
                </>
              )}

              {/* STEG 2: Personer, info, tillegstjenester */}
              {step === 2 && (
                <>
                  <h2 className="font-heading text-2xl text-brand-light mb-6">Antall gjester og personlig informasjon</h2>
                  <div className="bg-neutral-800 rounded-lg p-6 space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-brand-light">Antall personer (995 kr per person)</span>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setPeople(Math.max(1, people - 1))}
                          className="w-8 h-8 rounded-full border border-brand text-brand hover:bg-brand hover:text-black"
                        >
                          -
                        </button>
                        <span className="text-xl font-semibold text-white w-8 text-center">{people}</span>
                        <button
                          type="button"
                          onClick={() => setPeople(people + 1)}
                          className="w-8 h-8 rounded-full border border-brand text-brand hover:bg-brand hover:text-black"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
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
                  {/* Tillegstjenester kan legges til her */}
                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-8 py-3 rounded-lg text-base transition-all duration-300 shadow-lg"
                    >
                      Tilbake
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-brand hover:bg-brand-dark text-black font-bold px-8 py-3 rounded-lg text-base transition-all duration-300 hover:scale-105 shadow-lg"
                      disabled={!formData.name || !formData.email || !formData.phone}
                    >
                      Neste
                    </button>
                  </div>
                </>
              )}

              {/* STEG 3: Betaling */}
              {step === 3 && (
                <>
                  <h2 className="font-heading text-2xl text-brand-light mb-6">Betaling</h2>
                  <div className="bg-neutral-800 rounded-lg p-6 space-y-4 mb-6">
                    <p className="text-lg text-brand-light">Totalt: <span className="text-2xl font-bold text-brand">{total} kr</span></p>
                    {/* Her kan du legge til betalingsfelt eller info */}
                    <textarea
                      name="message"
                      placeholder="Evt. melding til oss (valgfritt)"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-brand/30 rounded-lg px-4 py-3 bg-neutral-800 text-white placeholder-slate-400 focus:border-brand focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-8 py-3 rounded-lg text-base transition-all duration-300 shadow-lg"
                    >
                      Tilbake
                    </button>
                    <button
                      type="submit"
                      className="bg-brand hover:bg-brand-dark text-black font-bold px-12 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Send booking-forespørsel
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


