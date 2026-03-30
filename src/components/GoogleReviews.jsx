import { Helmet } from "react-helmet";

export default function GoogleReviews() {
  return (
    <div className="pb-20 pt-20 bg-bg-primary">
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
        <div
          className="elfsight-app-b2f6aff6-634b-41d0-99d9-9e941e4be8b1"
          data-elfsight-app-lazy
        />
      </div>
    </div>
  );
}
