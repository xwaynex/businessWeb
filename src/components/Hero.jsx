import { ComputersCanvas } from "./canvas";
// import AI from "../assets/img/AI2.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen w-full mx-auto flex items-center overflow-hidden text-dimWhite transition duration-500 ease-in-out relative "
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row  items-center h-full relative ">
        {/* Left Section */}
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="flex-1 flex flex-row items-start space-y-0"
        >
          {/* Decoration (Circle + Violet Div) */}
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-dimWhite transition-colors duration-1000 delay-300 dark:bg-[#915eff]" />
            <div className="hidden dark:block w-1 sm:h-80 h-40 transition-colors duration-1000 delay-300 violet-gradient" />
          </div>

           {/* Text */}
           <div className="flex-1 text-left space-y-6 z-10 ml-4 pt-16 sm:pt-20 xs:pt-24">
            <h1 className="text-4xl md:text-6xl font-bold transition-colors duration-1000 delay-300  dark:text-[#915eff]">
              Accelerating the Future of AI
            </h1>
            <p className="text-lg md:text-xl">
              Better data. Smarter models. Faster deployments.
            </p>
            <p className="text-sm md:text-base">
              Empowering industries with cutting-edge solutions in{" "}
              <span className="font-semibold">Health AI</span>,{" "}
              <span className="font-semibold">Security AI</span>,{" "}
              <span className="font-semibold">Modern Research</span>, and{" "}
              <span className="font-semibold">Open Innovation</span>.
            </p>
            {/* Buttons */}
            <div className="flex flex-row space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#solutions"
                className="px-6 py-3 dark:bg-[#915eff] dark:text-white bg-dimWhite text-blue-600 font-semibold rounded-md shadow hover:bg-gray-100 transition-colors duration-1000"
              >
                Learn More
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#contact"
                className="px-6 py-3 bg-transparent border dark:border-[#915eff] border-dimWhite text-dimWhite font-semibold rounded-md shadow dark:hover:bg-[#915eff] dark:hover:text-dimWhite hover:bg-white hover:text-blue-600 transition-colors duration-1000"
              >
                Contact Us
              </motion.a>
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
            
        {/* </div> */}
        </motion.div>
        
        {/* Right Section: ComputersCanvas */}
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="flex-1 h-full flex justify-end items-center relative z-10"
        >
           <div className="relative w-full h-full max-w-[600px] max-h-[500px] overflow-hidden">
            <ComputersCanvas />
          </div>
        </motion.div>
        </div>
          
           {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 dark:border-darkHeader border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full dark:bg-darkHeader bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
