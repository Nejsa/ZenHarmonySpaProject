import { Helmet } from "react-helmet";

export default function GoogleReviews() {
  return (
    <>
      <h2 className="font-heading text-4xl text-center text-brand-light ">
        Våre Kundeanmeldelser
      </h2>
      <div className="w-32 h-0.5 bg-brand mx-auto mt-4 mb-8"></div>
      {/* script */}
      <Helmet>
        <script src="https://elfsightcdn.com/platform.js" async />
      </Helmet>
      {/* Widget container */}
      <div
        className="elfsight-app-b2f6aff6-634b-41d0-99d9-9e941e4be8b1"
        data-elfsight-app-lazy
      />
    </>
  );
}
