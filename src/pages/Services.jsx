import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";

function Services() {
  const services = [
    { title: "Web Development", description: "Build scalable web apps.", icon: "🌐" },
    { title: "AI & ML", description: "Intelligent systems for research.", icon: "🤖" },
    // Add more
  ];

  return (
    <>
      <Navbar />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </section>
      <Footer />
    </>
  );
}
export default Services;
