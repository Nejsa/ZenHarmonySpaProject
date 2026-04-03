import { useEffect } from "react";

export default function Booking({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      // Last inn Bookero script
      const script = document.createElement("script");
      script.src = "https://app.bookero.no/build/widget.js?v=1775044152";
      script.async = true;
      document.body.appendChild(script);

      // Cleanup når komponenten unmountes
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop/Overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-[100] animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-auto relative shadow-2xl pointer-events-auto animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Lukk"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Bookero Widget */}
          <div className="p-6">
            <div
              data-booking-widget
              data-widget-id="ac0cae76-75f1-43e8-841e-9afeb77482d7"
              data-locale="no"
              data-base-url="https://app.bookero.no"
            />
          </div>
        </div>
      </div>
    </>
  );
}
