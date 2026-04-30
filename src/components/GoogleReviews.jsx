import { Helmet } from "react-helmet-async";

export default function GoogleReviews() {
  return (
    <div className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-brand mb-4">
            Kundeanmeldelser
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-brand-light mb-6">
            Hva våre gjester sier
          </h2>
          <div className="w-24 h-px bg-brand-dark mx-auto"></div>
        </div>

        {/* Elfsight Script */}
        <Helmet>
          <script src="https://elfsightcdn.com/platform.js" async />
        </Helmet>

        {/* Widget container */}
        <div className="min-h-[600px] relative">
          <div
            className="elfsight-app-b2f6aff6-634b-41d0-99d9-9e941e4be8b1"
            data-elfsight-app-lazy
          />

          {/* Loading skeleton (vises mens Elfsight laster) */}
          <div className="absolute inset-0 -z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-bg-card border border-brand/10 rounded-lg p-6 h-48"
                >
                  <div className="h-4 bg-brand/20 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-brand/20 rounded w-full mb-2"></div>
                  <div className="h-4 bg-brand/20 rounded w-5/6 mb-2"></div>
                  <div className="h-4 bg-brand/20 rounded w-4/6"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
