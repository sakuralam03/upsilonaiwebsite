import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";
import "../styles/ServiceCard.css";

function Services() {
  const services = [
    {
      title: "Software & Web Development",
      description:
        "Custom software solutions and modern web applications built for scalability, performance, and usability.",

      color: "white",
    },
    {
      title: "Electronics & Embedded Systems",
      description:
        "Design and prototyping of electronic circuits, IoT devices, and embedded systems for real-world applications.",
      
    },
    {
      title: "AI & Machine Learning",
      description:
        "Develop intelligent systems using deep learning, natural language processing, and predictive analytics.",
      
    },
    {
      title: "Data Science / IoT / Cybersecurity",
      description:
        "Harness data pipelines, IoT integrations, and robust cybersecurity frameworks to drive insights and protect assets.",
     
    },
    {
      title: "Mechanical / Civil Prototyping",
      description:
        "Rapid prototyping and testing of mechanical or civil engineering concepts, bridging design to real-world implementation.",

    },
  ];

  return (
    <>
      <Navbar />

      {/* Intro Section */}
      <section className="p-10 text-center bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-6">
          We provide end-to-end technical expertise across software, hardware,
          and applied sciences. From building scalable applications to
          prototyping physical systems, our services are designed to empower
          innovation and accelerate research.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <span className="px-4 py-2 bg-green-100 rounded"> Request services</span>
          <span className="px-4 py-2 bg-green-100 rounded"> Remote</span>
          <span className="px-4 py-2 bg-green-100 rounded"> Contact for pricing</span>
        </div>
      </section>

      {/* Services Grid */}
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
