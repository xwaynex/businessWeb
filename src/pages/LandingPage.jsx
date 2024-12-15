import {
  About,
  Hero,
  Navbar,
  Solutions,
} from "../components";
import Footer from "../components/Footer";
import TestimonialsAndCaseStudies from "../sections/Testimonials";
import Resources from "../sections/Resources";
import Partners from "../components/Partners";

function LandingPage() {
  return (
    <div className="relative z-0 transition-all duration-500">
      <div className="bg-hero-pattern-light dark:bg-hero-pattern-dark bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Solutions />
      <TestimonialsAndCaseStudies />
      <Resources />
      <Partners />
      <Footer />
    </div>
  );
}

export default LandingPage;
