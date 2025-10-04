import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";
import { HashLink } from 'react-router-hash-link';


function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="brand">
        <img src="/upsilonai.jpeg" alt="Upsilon AI Logo" className="logo" />
        <span className="brand-text">UpsilonAI</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {/* About Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <Link to="/about" className="dropdown-toggle">About</Link>
          {aboutOpen && (
            <div className="dropdown-menu">

              <HashLink smooth to="/about#who-we-are">Who We Are</HashLink>
              <HashLink smooth to="/about#our-team">Our Team</HashLink>
              <HashLink smooth to="/about#achievements">Achievements</HashLink>
              <HashLink smooth to="/about#university-collabs">University Collaborations</HashLink>

            </div>
          )}
        </div>

        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/universities">Universities</Link>
        <Link to="/students">Students</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
