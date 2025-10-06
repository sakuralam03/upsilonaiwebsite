import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Universities() {
  return (
    <>
      <Navbar />

      {/* Banner Image */}
      <div
        className="w-full h-64 bg-cover bg-center mb-10"
        style={{ backgroundImage: "url('/download (4).jpeg')" }}
        aria-label="University collaboration banner"
      />

      <section className="p-10 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">For Universities</h2>
        <p className="text-lg text-gray-700 mb-10 text-center">
          We collaborate with academic institutions to drive innovation, support student growth, and co-develop impactful research.
        </p>

        {/* Academic Innovation & Research Support */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Academic Innovation & Research Support</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Placeholder:</strong> Joint research on AI for scientific discovery (e.g., biotech, materials, finance).</li>
            <li><strong>Placeholder:</strong> Faculty-led workshops on LLMs, embeddings, and custom AI pipelines.</li>
            <li><strong>Placeholder:</strong> Co-authored publications and open-source contributions.</li>
          </ul>
        </section>

        {/* Internship & Capstone Collaborations */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Internship & Capstone Project Collaborations</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Placeholder:</strong> Semester-long capstone mentorship with real-world AI deployments.</li>
            <li><strong>Placeholder:</strong> Remote and hybrid internships focused on backend, data science, and UX research.</li>
            <li><strong>Placeholder:</strong> Student access to proprietary datasets and engineering mentorship.</li>
          </ul>
        </section>

        {/* Why Partner With Us */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Why Partner With Us</h3>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="/download (4).jpeg"
              alt="University collaboration visual"
              className="w-full md:w-1/3 rounded-lg shadow-md"
            />
            <ul className="list-disc list-inside text-gray-700 space-y-2 md:w-2/3">
              <li><strong>Placeholder:</strong> Proven track record in hackathons, startup incubation, and technical awards.</li>
              <li><strong>Placeholder:</strong> Custom AI solutions tailored to academic and industry needs.</li>
              <li><strong>Placeholder:</strong> Commitment to accessibility, reproducibility, and student empowerment.</li>
            </ul>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default Universities;
