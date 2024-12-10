import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaShieldAlt, FaHeartbeat, /* FaMicroscope */ FaHandshake } from "react-icons/fa";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import Client1 from "../assets/img/Bot3.png";
import Client2 from "../assets/img/Bot5.png";
import Client3 from "../assets/img/Bot3.png";

const caseStudies = [
  {
    title: "Healthcare",
    icon: FaHeartbeat,
    description:
      "Using our AI-driven predictive analytics, a leading hospital reduced patient wait times by 30%, improving overall patient satisfaction.",
    metrics: { Processing: 30, Accuracy: 20 },
  },
  {
    title: "Security AI",
    icon: FaShieldAlt,
    description:
      "Our AI-powered threat detection system prevented 98% of attempted breaches for a global financial institution, ensuring robust data security.",
    metrics: { Prevention: 98, Response: 40 },
  },
  {
    title: "Open Innovation",
    icon: FaHandshake,
    description:
      "Leveraging collaborative AI models, we accelerated prototype development by 50%, enabling quicker time-to-market for emerging startups.",
    metrics: { Development: 50, Cost: 25 },
  },
];

const testimonials = [
  {
    name: "John Doe",
    role: "CTO at TechCorp",
    feedback:
      "The data insights provided by the AI models were game-changing. We achieved our deployment goals two months ahead of schedule.",
    image: Client1,
  },
  {
    name: "Jane Smith",
    role: "CEO at InnovateAI",
    feedback:
      "This platform gave us unprecedented control over our data and improved our model performance by 25%. A true innovation partner.",
    image: Client2,
  },
  {
    name: "Mark Johnson",
    role: "VP of Engineering at FutureTech",
    feedback:
      "Thanks to their AI-powered solutions, we saw a 40% improvement in operational efficiency within the first quarter.",
    image: Client3,
  },
];

const TestimonialsAndCaseStudies = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);
  const [animatedMetrics, setAnimatedMetrics] = useState({});
  const IconComponent = caseStudies[currentCaseStudy].icon;
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };
  

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  useEffect(() => {
    const metrics = caseStudies[currentCaseStudy].metrics;
    const keys = Object.keys(metrics);
  
    // Initialize animation state
    const initialMetrics = keys.reduce((acc, key) => {
      acc[key] = 0;
      return acc;
    }, {});
  
    setAnimatedMetrics(initialMetrics);
  
    const interval = setInterval(() => {
      setAnimatedMetrics((prevMetrics) => {
        const updatedMetrics = { ...prevMetrics };
        let done = true;
  
        keys.forEach((key) => {
          if (updatedMetrics[key] < metrics[key]) {
            updatedMetrics[key] += 1; // Increment metric value
            done = false;
          }
        });
  
        if (done) clearInterval(interval); // Stop interval when all metrics reach their target
  
        return updatedMetrics;
      });
    }, 30);
  
    return () => clearInterval(interval);
  }, [currentCaseStudy]);
  

  return (
    <section className="bg-gray-100 py-16">
  {/* Section Heading */}
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
    Success Stories: Transforming Businesses with AI
  </h2>
  <div className="container mx-auto px-6 relative lg:h-[600px]">
    {/* Responsive Container */}
    <div className="flex flex-col lg:block gap-6">
      {/* Case Studies */}
      <div className="lg:absolute lg:top-4 lg:left-4 max-w-md mx-auto lg:mx-0">
      <motion.div
    className="relative bg-blue-600 text-white rounded-lg shadow-lg p-8"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={fadeInUp}
  >
        <div className="relative bg-blue-600 text-white rounded-lg shadow-lg p-8">
          {/* Icon and Title */}
          <div className="text-center mb-4">
            <IconComponent size={40} className="mx-auto mb-2" />
            <h3 className="text-3xl font-bold">{caseStudies[currentCaseStudy].title}</h3>
          </div>
          <p className="mb-6">{caseStudies[currentCaseStudy].description}</p>
          <ul>
            {Object.entries(animatedMetrics).map(([key, value]) => (
              <li key={key} className="text-lg font-semibold">
                {key.replace(/([A-Z])/g, " $1")}: <span>{value}%</span>
              </li>
            ))}
          </ul>
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button
              onClick={prevCaseStudy}
              className="text-white opacity-50 hover:opacity-100 hover:text-gray-300 focus:outline-none transition-opacity duration-200"
            >
              <FaArrowLeft size={24} />
            </button>
            <button
              onClick={nextCaseStudy}
              className="text-white opacity-50 hover:opacity-100 hover:text-gray-300 focus:outline-none transition-opacity duration-200"
            >
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>
      </motion.div>
      </div>

      {/* Testimonials */}
      <div className="lg:absolute lg:bottom-4 lg:right-4 max-w-lg mx-auto lg:mx-0">
         {/* Section Heading */}
         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Clients Say
        </h2>
        <motion.div
    className="relative bg-blue-600 text-white rounded-lg shadow-lg p-8"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={fadeInUp}
  >
        <div className="relative bg-blue-600 text-white rounded-lg shadow-lg p-8">
          <div className="absolute top-4 left-4 text-4xl opacity-20">
            <FaQuoteLeft />
          </div>
          <div className="flex justify-center -mt-16">
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="w-24 h-24 rounded-full border-4 border-white shadow-md"
            />
          </div>
          <p className="text-lg text-center mt-6 italic">
            "{testimonials[currentTestimonial].feedback}"
          </p>
          <div className="text-center mt-6">
            <p className="font-bold">{testimonials[currentTestimonial].name}</p>
            <p className="text-sm text-gray-200">{testimonials[currentTestimonial].role}</p>
          </div>
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button
              onClick={prevTestimonial}
              className="text-white opacity-50 hover:opacity-100 hover:text-gray-300 focus:outline-none transition-opacity duration-200"
            >
              <FaArrowLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="text-white opacity-50 hover:opacity-100 hover:text-gray-300 focus:outline-none transition-opacity duration-200"
            >
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

  );
};

export default TestimonialsAndCaseStudies;
