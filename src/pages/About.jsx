import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p>We build custom, high-performance AI pipelines for scientific R&D teams in medicine, biotech, finance and materials. 
          Combining LLMs, embeddings, and scientific computing, we supercharge your proprietary workflows no plug-and-play, just precision-engineered AI.</p>
        {/* Add team profiles, awards, partnerships */}
      </section>
      <Footer />
    </>
  );
}
export default About;
