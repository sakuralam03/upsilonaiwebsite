export default function Contact() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4 text-indigo-600">Contact Us</h2>
      <p className="text-gray-700 mb-6">
        We'd love to hear from you! Reach out for collaborations, questions, or feedback.
      </p>
      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded h-32"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
