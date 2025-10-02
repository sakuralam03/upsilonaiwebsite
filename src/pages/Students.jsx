import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Students() {
  return (
    <>
      <Navbar />
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-4">Students’ Corner</h2>
        <p>Explore roadmaps, FAQs, and get guidance for your final year projects.</p>
        {/* Add signup form */}
      </section>
      <Footer />
    </>
  );
}
export default Students;
