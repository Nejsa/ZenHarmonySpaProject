export default function Home() {
  return (
      <div className="space-y-8">
      {/* Overskrift på toppen */}
      <div className="text-center pt-12">
        <h1 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
          Velkommen til Zen Harmony Spa
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          Opplev avslapning og harmoni i vårt luksuriøse private spa – 
          perfekt for deg, venner eller familie.
        </p>
      </div>

      {/* Video – lenger ned, smalere bredde */}
      <div className="pt-8">
        <video
          src="/video/spa-tour.mp4"
          className="w-full max-w-3xl mx-auto h-48 md:h-72 object-cover rounded-card shadow-soft"
          autoPlay
          muted
          loop
          controls
        />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-white shadow">
          <h3 className="font-semibold text-lg mb-1">Private Spa</h3>
          <p className="text-sm text-slate-600">Relax and unwind in luxury.</p>
        </div>
        <div className="p-6 rounded-xl bg-white shadow">
          <h3 className="font-semibold text-lg mb-1">Easy Booking</h3>
          <p className="text-sm text-slate-600">Select guests, date, and time easily.</p>
        </div>
        <div className="p-6 rounded-xl bg-white shadow">
          <h3 className="font-semibold text-lg mb-1">Gift Cards</h3>
          <p className="text-sm text-slate-600">Give the gift of wellness.</p>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
 bg-brand text-white hover:bg-brand-dark shadow-soft transition">
  Book now
</button>
        </div>
      </div>
    </div>
  );
}
