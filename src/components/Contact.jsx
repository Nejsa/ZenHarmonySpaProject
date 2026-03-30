export default function Contact() {
  return (
    <div className="pt-20 pb-20 bg-bg-primary">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-brand mb-4">
            Kontakt Oss
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-brand-light mb-6">
            Vi gleder oss til å høre fra deg
          </h2>
          <div className="w-24 h-px bg-brand-dark mx-auto"></div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Form */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-2xl text-brand-light mb-2">
                Send oss en melding
              </h3>
              <p className="text-text-dim text-sm leading-relaxed">
                Har du spørsmål eller ønsker å booke? Vi svarer innen 24 timer.
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="block text-sm text-text-primary mb-2">
                  Navn
                </label>
                <input
                  type="text"
                  className="w-full border border-brand/20 rounded-lg px-4 py-3 bg-bg-card text-text-primary placeholder-text-dim focus:border-brand focus:outline-none transition-colors"
                  placeholder="Ditt navn"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-text-primary mb-2">
                  E-post
                </label>
                <input
                  type="email"
                  className="w-full border border-brand/20 rounded-lg px-4 py-3 bg-bg-card text-text-primary placeholder-text-dim focus:border-brand focus:outline-none transition-colors"
                  placeholder="din@epost.no"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-text-primary mb-2">
                  Telefon (valgfritt)
                </label>
                <input
                  type="tel"
                  className="w-full border border-brand/20 rounded-lg px-4 py-3 bg-bg-card text-text-primary placeholder-text-dim focus:border-brand focus:outline-none transition-colors"
                  placeholder=" +47 123 45 678"
                />
              </div>

              <div>
                <label className="block text-sm text-text-primary mb-2">
                  Melding
                </label>
                <textarea
                  className="w-full border border-brand/20 rounded-lg px-4 py-3 bg-bg-card text-text-primary placeholder-text-dim focus:border-brand focus:outline-none transition-colors resize-none"
                  placeholder="Skriv din melding her..."
                  rows="5"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-brand hover:bg-brand-light text-bg-primary font-medium text-sm tracking-[0.1em] uppercase transition-all duration-300 hover:-translate-y-0.5"
              >
                Send Melding
              </button>
            </form>
          </div>

          {/* Right: Direct Contact Options */}
          <div className="space-y-8">
            {/* Intro Text */}
            <div>
              <h3 className="font-heading text-2xl text-brand-light mb-4">
                Andre måter å kontakte oss
              </h3>
              <p className="text-text-dim text-sm leading-relaxed">
                Foretrekker du å ringe eller sende e-post direkte? Alle veier
                fører til rom.
              </p>
            </div>

            {/* Contact Options */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="bg-bg-card border border-brand/10 rounded-lg p-6 hover:border-brand/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-brand mt-1">📞</div>
                  <div className="flex-1">
                    <h4 className="font-heading text-lg text-brand-light mb-2">
                      Ring oss
                    </h4>
                    <p className="text-text-primary text-sm mb-3">
                      For akutte spørsmål eller rask booking
                    </p>
                    <a
                      href="tel:+4712345678"
                      className="text-brand hover:text-brand-light transition-colors font-medium"
                    >
                      +47 403 43 633
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-bg-card border border-brand/10 rounded-lg p-6 hover:border-brand/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-brand mt-1">✉️</div>
                  <div className="flex-1">
                    <h4 className="font-heading text-lg text-brand-light mb-2">
                      Send e-post
                    </h4>
                    <p className="text-text-primary text-sm mb-3">
                      Vi svarer normalt innen 24 timer
                    </p>
                    <a
                      href="mailto:kontakt@zenharmonyspa.no"
                      className="text-brand hover:text-brand-light transition-colors font-medium"
                    >
                      post@zenharmonyspa.no
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-bg-card border border-brand/10 rounded-lg p-6 hover:border-brand/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-brand mt-1">💬</div>
                  <div className="flex-1">
                    <h4 className="font-heading text-lg text-brand-light mb-2">
                      Følg oss
                    </h4>
                    <p className="text-text-primary text-sm mb-3">
                      Hold deg oppdatert på tilbud og arrangementer
                    </p>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="text-brand hover:text-brand-light transition-colors"
                      >
                        Instagram
                      </a>
                      <span className="text-text-dim">•</span>
                      <a
                        href="#"
                        className="text-brand hover:text-brand-light transition-colors"
                      >
                        Facebook
                      </a>
                      <span className="text-text-dim">•</span>
                      <a
                        href="#"
                        className="text-brand hover:text-brand-light transition-colors"
                      >
                        Tiktok
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h4 className="font-heading text-lg text-brand-light mb-4">
                Finn oss
              </h4>
              <div className="rounded-lg overflow-hidden border border-brand/20">
                <iframe
                  title="Kløfta Helsehus - Zen Harmony Spa"
                  className="w-full h-64"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.123456789!2d11.123456!3d60.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKl%C3%B8fta!5e0!3m2!1sen!2sno!4v1234567890"
                  loading="lazy"
                ></iframe>
              </div>
              <p className="text-text-dim text-xs mt-3 text-center">
                Gratis parkering • Lett tilgjengelig fra E6
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center space-y-2">
          <p className="text-text-dim text-sm italic">
            Vi svarer normalt innen 24 timer. For akutte henvendelser, ring oss
            direkte.
          </p>
          <p className="text-text-dim text-xs pt-4">
            © {new Date().getFullYear()} Zen Harmony Spa. Alle rettigheter
            reservert.
          </p>
        </div>
      </div>
    </div>
  );
}
