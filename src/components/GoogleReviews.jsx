import { Helmet } from "react-helmet";

export default function GoogleReviews() {
  return (
    <>
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
