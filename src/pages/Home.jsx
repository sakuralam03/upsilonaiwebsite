import "../styles/HomeLayout.css"; // Import your custom CSS
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-page">
      <header>
        <Navbar />
      </header>

      <main>
        <HeroSection />

        {/* Overview Section */}
 

        {/* Visuals or Testimonials could go here */}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
