import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Footer from "./components/Footer";
import Solutions from "./sections/Solutions";
import TestimonialsAndCaseStudies from "./sections/Testimonials";
import Resources from "./sections/Resources";
import Contact from "./sections/Contact";
// import Button from "./components/Button";
// import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
      <Hero />
      <About />
      <Solutions />
      <TestimonialsAndCaseStudies />
      <Resources />
      <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
