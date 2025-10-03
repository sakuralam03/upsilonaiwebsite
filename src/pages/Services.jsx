import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";

function Services() {
  const services = [
    { title: "Enterprise Content Management", description: "Organize, store, and retrieve enterprise knowledge efficiently.", icon: "📂" },
    { title: "Information Management", description: "Streamline data governance and accessibility across teams.", icon: "🗄️" },
    { title: "Information Security", description: "Protect sensitive research data with robust security frameworks.", icon: "🔒" },
    { title: "SaaS Development", description: "Design and deploy scalable SaaS platforms tailored to labs.", icon: "☁️" },
    { title: "Web Design", description: "Craft modern, responsive, and user-friendly interfaces.", icon: "🎨" },
    { title: "Web Development", description: "Build scalable, high-performance web applications.", icon: "🌐" },
    { title: "Copywriting", description: "Communicate complex ideas with clarity and impact.", icon: "✍️" },
    { title: "User Experience Writing", description: "Guide users seamlessly through digital workflows.", icon: "🧭" },
  ];

  return (
    <>
      <Navbar />

      {/* Intro Section */}
      <section className="p-10 text-center bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-6">
          We build tailored AI pipelines for scientific R&D labs — across medicine, materials, and biotech — 
          where plug-and-play tools fail. Our systems ingest proprietary datasets and optimize critical workflows 
          using LLMs, embeddings, symbolic reasoning, and scientific computing.
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
