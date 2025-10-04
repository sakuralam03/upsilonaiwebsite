import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css"; // import the CSS file

function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    }
  }, [location]);

  return (
    <>
      <Navbar />

      {/* Who We Are Section */}
      <section id="who-we-are" className="p-10 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          We build custom, high-performance AI pipelines for scientific R&D
          teams in medicine, biotech, finance and materials. Combining LLMs,
          embeddings, and scientific computing, we supercharge your proprietary
          workflows — no plug-and-play, just precision-engineered AI.
        </p>
      </section>

      {/* Team Section */}
      <section id="our-team" className="p-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {["A", "B", "C", "D"].map((member) => (
            <div key={member} className="team-member">
              <img
                src="/download.jpeg"
                alt={`Team member ${member}`}
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold">Member {member}</h3>
              <p className="text-gray-600">AI Engineer</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="p-10 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
        <div className="max-w-5xl mx-auto text-left">

          {/* Hackathon Awards */}
          <h3 className="text-2xl font-semibold mb-4">Hackathon Awards</h3>
          <div className="awards-grid">
            {[
              ["Best Overall Hack / Grand Prize", "Awarded to the top project across the event."],
              ["Runner-Up / Top 3 Projects", "Recognition for strong contenders."],
              ["Best Startup Potential Award", "Judged on market readiness and scalability."],
              ["Investor’s Choice Award", "Selected by VCs or angel investors attending."],
              ["Best Go-To-Market Strategy", "Clear path from prototype to real-world adoption."],
              ["Best B2B / Enterprise AI Solution", "Targeting businesses effectively."],
              ["Best Student Startup Award", "If your team is mostly students."]
            ].map(([title, desc]) => (
              <div className="award-box" key={title}>
                <div className="award-title">{title}</div>
                <div className="award-description">{desc}</div>
              </div>
            ))}
          </div>

          {/* Tech & Engineering Awards */}
          <h3 className="text-2xl font-semibold mt-8 mb-4">Tech & Engineering Awards</h3>
          <div className="awards-grid">
            {[
              ["Best Technical Implementation", "Strongest backend/engineering effort."],
              ["Best UI/UX Award", "Clean, usable, and beautiful design."],
              ["Best Data Science Hack", "Novel use of data analysis or visualization."],
              ["Best Open Source Contribution", "Project contributes to open source."],
              ["Best Integration of APIs / Cloud Tools", "Great use of sponsor tools."]
            ].map(([title, desc]) => (
              <div className="award-box" key={title}>
                <div className="award-title">{title}</div>
                <div className="award-description">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Collaborations Section */}
      <section id="university-collabs" className="p-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">University Collaborations</h2>
        <div className="universities-grid">
          {[
            "National University of Singapore (NUS)",
            "Massachusetts Institute of Technology (MIT)",
            "University of Cambridge",
            "Stanford University",
            "ETH Zurich"
          ].map((uni) => (
            <div
              key={uni}
              className="university-card"
              style={{ backgroundImage: "url('/download (4).jpeg')" }}
            >
              <span>{uni}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
