import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p>We are a team of innovators supporting academic excellence through technology...</p>
        {/* Add team profiles, awards, partnerships */}
      </section>
      <Footer />
    </>
  );
}
export default About;
