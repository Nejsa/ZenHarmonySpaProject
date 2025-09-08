export default function Contact() {
  return (
    <div className="grid md:grid-cols-2 gap-8 w-full border-t border-white-700">
      <form className="space-y-4">
        <h2 className="text-2xl font-semibold text-yellow-700">Contact</h2>
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Name"
          required
        />
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Email"
          type="email"
          required
        />
        <textarea
          className="w-full border rounded px-3 py-2"
          placeholder="Message"
          rows="4"
          required
        />
        <button className="px-4 py-2 rounded bg-slate-900 text-white">
          Send
        </button>
      </form>
      <iframe
        title="map"
        className="w-full h-64 rounded"
        src="https://www.google.com/maps"
      ></iframe>
    </div>
  );
}
