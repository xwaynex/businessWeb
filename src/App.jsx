import { BrowserRouter } from "react-router-dom";
import { ThemeProvider,  } from "./context/ThemeContext";
import {About, Hero, Navbar, Contact, Experience, Tech, Works, Feedbacks, StarsCanvas, Solutions} from "./components";

import Footer from "./components/Footer";
// import Solutions from "./sections/Solutions";
import TestimonialsAndCaseStudies from "./sections/Testimonials";
import Resources from "./sections/Resources";

function App() {
  return (
    <ThemeProvider >
    <BrowserRouter>
    <div className="relative z-0 bg-primary-light dark:bg-primary-dark text-black dark:text-white transition-all duration-500">
    <div className="bg-hero-pattern-light dark:bg-hero-pattern-dark bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
      <About />
      <Solutions />
      <TestimonialsAndCaseStudies />
      <Resources />
      {/* <Tech />
      <Works />
      <Feedbacks /> */}


      <div className="relative z-0">
      <StarsCanvas />
      <Contact />
      </div>
      <Footer />
    </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
