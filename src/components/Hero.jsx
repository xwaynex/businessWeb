import { ComputersCanvas } from "./canvas";
// import AI from "../assets/img/AI2.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen w-full mx-auto flex items-center overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 text-white dark:bg-hero-pattern-dark bg-cover bg-center dark:bg-cover dark:bg-center transition duration-500 ease-in-out "
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row  items-center h-full relative z-10">
        {/* Left Section */}
        <div className="flex-1 flex flex-row items-start md:space-x-6 space-y-0">
          {/* Decoration (Circle + Violet Div) */}
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-white dark:bg-[#915eff]" />
            <div className="hidden dark:block w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-left space-y-6 z-20">
            {" "}
            {/* Added z-20 to bring text on top */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 -translate-x-10 transition duration-1000 ease-in-out delay-300 animate-slide-left dark:text-[#915eff]">
              Accelerating the Future of AI
            </h1>
            <p className="text-lg md:text-xl mb-6 opacity-0 -translate-x-10 transition duration-1000 ease-in-out delay-500 animate-slide-left">
              Better data. Smarter models. Faster deployments.
            </p>
            <p className="text-sm md:text-base mb-8 opacity-0 -translate-x-10 transition duration-1000 ease-in-out delay-700 animate-slide-left">
              Empowering industries with cutting-edge solutions in{" "}
              <span className="font-semibold">Health AI</span>,{" "}
              <span className="font-semibold">Security AI</span>,{" "}
              <span className="font-semibold">Modern Research</span>, and{" "}
              <span className="font-semibold">Open Innovation</span>.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 opacity-0 -translate-x-10 transition duration-1000 ease-in-out delay-900 animate-slide-left">
              <a
                href="#solutions"
                className="px-6 py-3 dark:bg-[#915eff] dark:text-white bg-white text-blue-600 font-semibold rounded-md shadow hover:bg-gray-100 transition duration-300"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-transparent border dark:border-[#915eff] border-white text-white font-semibold rounded-md shadow dark:hover:bg-[#915eff] dark:hover:text-dimWhite hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
          {/* Right Section */}
          {/* <div className="flex-1 flex justify-center items-start h-full opacity-0 translate-y-10 transition duration-1500 ease-out delay-1200 animate-fade-up z-20">
              <img
                src={AI}
                alt="AI Future Visualization"
                className="max-w-full h-auto object-contain max-h-[100%] transition duration-700 ease-in-out transform hover:scale-105"
              />
            </div> */}
        </div>

        {/* Right Section: 3D Model (Behind Text) */}
        <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
          <ComputersCanvas />
        </div>
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      </div>
    </section>
  );
};

export default Hero;
