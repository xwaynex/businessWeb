import AI from "../assets/img/AI2.png";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center h-full">
        {/* Left Section: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Accelerating the Future of AI
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Better data. Smarter models. Faster deployments.
          </p>
          <p className="text-sm md:text-base mb-8">
            Empowering industries with cutting-edge solutions in <span className="font-semibold">Health AI</span>, <span className="font-semibold">Security AI</span>, <span className="font-semibold">Modern Research</span>, and <span className="font-semibold">Open Innovation</span>.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <a
              href="#solutions"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow hover:bg-gray-100 mb-4 md:mb-0"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-md shadow hover:bg-white hover:text-blue-600"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Section: Image/Animation */}
        <div className="flex-1 flex justify-center items-start h-full">
          <img
            src={AI}
            alt="AI Future Visualization"
            className="max-w-full h-auto object-contain max-h-[100%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
