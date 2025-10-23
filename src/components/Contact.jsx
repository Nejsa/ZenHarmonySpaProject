export default function Contact() {
  return (
    <div className="py-1">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-4xl text-center text-brand-light mb-12">
          Kontakt Oss
          <div className="w-48 h-0.5 bg-brand mx-auto mt-4"></div>
        </h2>

        <div className="bg-neutral-900 border border-brand/20 rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Kontaktskjema */}
            <div>
              <h3 className="font-heading text-2xl text-brand-light mb-6">
                Send oss en melding
              </h3>
              <form className="space-y-4">
                <input
                  className="w-full border border-brand/30 rounded-lg px-4 py-3 bg-neutral-800 text-white placeholder-slate-400 focus:border-brand focus:outline-none"
                  placeholder="Navn"
                  required
                />
                <input
                  className="w-full border border-brand/30 rounded-lg px-4 py-3 bg-neutral-800 text-white placeholder-slate-400 focus:border-brand focus:outline-none"
                  placeholder="E-post"
                  type="email"
                  required
                />
                <textarea
                  className="w-full border border-brand/30 rounded-lg px-4 py-3 bg-neutral-800 text-white placeholder-slate-400 focus:border-brand focus:outline-none"
                  placeholder="Melding"
                  rows="4"
                  required
                />
                <button className="w-full py-3 rounded-lg bg-brand text-black font-bold text-lg hover:bg-brand-dark transition">
                  Send Melding
                </button>
              </form>
            </div>

            {/* Kart */}
            <div>
              <h3 className="font-heading text-2xl text-brand-light mb-6">
                Finn oss
              </h3>
              <iframe
                title="Kløfta Helsehus - Zen Harmony Spa"
                className="w-full h-64 rounded-lg border border-brand/20"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.123456789!2d11.123456!3d60.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKl%C3%B8fta!5e0!3m2!1sen!2sno!4v1234567890"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
