import AI from "../assets/img/AI2.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white h-screen flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center h-full">
        {/* Left Section: Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 opacity-0 -translate-x-10 transition duration-1000 ease-in-out delay-300 animate-slide-left"
          >
            Accelerating the Future of AI
          </h1>
          <p
            className="text-lg md:text-xl mb-6 opacity-0 -translate-x-10 transition duration-1000 ease-in-out delay-500 animate-slide-left"
          >
            Better data. Smarter models. Faster deployments.
          </p>
          <p
            className="text-sm md:text-base mb-8 opacity-0 -translate-x-10 transition duration-1000 ease-in-out delay-700 animate-slide-left"
          >
            Empowering industries with cutting-edge solutions in{" "}
            <span className="font-semibold">Health AI</span>,{" "}
            <span className="font-semibold">Security AI</span>,{" "}
            <span className="font-semibold">Modern Research</span>, and{" "}
            <span className="font-semibold">Open Innovation</span>.
          </p>
          <div
            className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 opacity-0 -translate-x-10 transition duration-1000 ease-in-out delay-900 animate-slide-left"
          >
            <a
              href="#solutions"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow hover:bg-gray-100 transition duration-300"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-md shadow hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Section: Image */}
        <div
          className="flex-1 flex justify-center items-start h-full opacity-0 translate-y-10 transition duration-1500 ease-out delay-1200 animate-fade-up"
        >
          <img
            src={AI}
            alt="AI Future Visualization"
            className="max-w-full h-auto object-contain max-h-[100%] transition duration-700 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
