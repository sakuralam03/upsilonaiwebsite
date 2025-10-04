import "../styles/HeroSection.css"; // import the dedicated CSS file
import { Link } from "react-router-dom"; // import Link for routing

function HeroSection() {
  return (
    <section className="hero-section relative text-center text-white py-20 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 animate-fadeInUp">
        <h1 className="hero-title text-4xl font-bold mb-4">
          Innovating Academic Projects for Future Leaders
        </h1>
        <p className="hero-subtitle mb-6">
          Collaborate, Build, and Inspire through Technology
        </p>
        <div className="space-x-4">
          <Link to="/projects">
            <button className="bg-white text-indigo-600 px-4 py-2 rounded">
              Explore Projects
            </button>
          </Link>
          <Link to="/careers">
            <button className="bg-white text-purple-600 px-4 py-2 rounded">
              Work With Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
