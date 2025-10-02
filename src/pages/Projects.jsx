import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

function Projects() {
  const projects = [
    { title: "AI Chatbot", domain: "AI", image: "/images/chatbot.png", link: "#" },
    // Add more
  ];

  return (
    <>
      <Navbar />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </section>
      <Footer />
    </>
  );
}
export default Projects;
