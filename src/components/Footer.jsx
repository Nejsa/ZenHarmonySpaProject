export default function Footer() {
  return (
    <footer className="w-full bg-black text-yellow-700 py-4 mt-8 border-t border-white-700">
      <div className="mx-auto max-w-6xl px-4 flex items-center">
        {/* Venstre side */}
        <span className="text-sm flex-1">© 2025 Zen Harmony Spa</span>
        
        {/* Midten: sosiale medier */}
        <div className="flex items-center gap-4 justify-center flex-1">
          <a
            href="https://www.facebook.com/p/Zen-Harmony-Spa-61567016723855/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-500 flex items-center"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/zenharmonyspa"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-500 flex items-center"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@zenharmonyspa"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-500 flex items-center"
            aria-label="TikTok"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M16.5 2c.2 2.6 2.1 4.6 4.5 4.8v3.2c-1.2.1-2.3-.2-3.3-.7v7.7c0 3.2-2.6 5.8-5.8 5.8s-5.8-2.6-5.8-5.8 2.6-5.8 5.8-5.8c.2 0 .4 0 .6.1v3.3c-.2 0-.4-.1-.6-.1-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5V2h2.1z" />
            </svg>
          </a>
        </div>

        {/* Høyre side: epost og telefon */}
        <div className="flex items-center gap-6 flex-1 justify-end">
          <a
            href="mailto:post@zenharmonyspa.no"
            className="flex items-center underline hover:text-yellow-500"
          >
            {/* Mail SVG logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2 0v.01l8 5.49 8-5.49V6H4zm16 2.24-7.47 5.13a2 2 0 0 1-2.06 0L4 8.24V18h16V8.24z" />
            </svg>
            post@zenharmonyspa.no
          </a>
          <a
            href="tel:+4740343633"
            className="flex items-center underline hover:text-yellow-500"
          >
            {/* Phone SVG logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C7.61 22 2 16.39 2 9.5a1 1 0 0 1 1-1H6.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" />
            </svg>
            +47 403 43 633
          </a>
        </div>
      </div>
    </footer>
  );
}
