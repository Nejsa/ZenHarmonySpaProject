export default function Home() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl overflow-hidden shadow">
        <video
          src="/video/spa-tour.mp4"
          className="w-full h-[360px] md:h-[520px] object-cover"
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
        </div>
      </div>
    </div>
  );
}
