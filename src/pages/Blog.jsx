import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Blog() {
  return (
    <>
      <Navbar />
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-4">Resources & Blog</h2>
        <p>Insights, guides, and trends in academic tech domains.</p>
      </section>
      <Footer />
    </>
  );
}
export default Blog;
