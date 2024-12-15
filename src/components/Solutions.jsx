import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FaDatabase, FaTools, FaCloud, FaShieldAlt } from "react-icons/fa";
import AIFlowchart from "../assets/img/AI_Project_Implementation_Steps.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "../utils/motion";
// import ChatBox from "./canvas/ChatBox";


// SolutionsCard Component with Prop Validation
const SolutionsCard = ({ solution, isDarkMode }) => {
  const backgroundColor = isDarkMode ? "#1d1836" : "#2563eb"; // Dark or Light Background
  const textColor = isDarkMode ? "#fff" : "#FFFFFFB2"; // Text Color for Dark or Light Mode

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: backgroundColor,
        color: textColor,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${isDarkMode ? "#232631" : "#2563eb"}`,
      }}
      date={solution.description}
      iconStyle={{ background: solution.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <div className="text-[3rem] lg:text-[4rem] w-[500px] h-[500px]">
            {solution.icon}
          </div>
        </div>
      }
    >
      <div>
        <h3 className={`text-[24px] font-bold ${isDarkMode ? "text-white" : "text-dimWhite"}`}>
          {solution.title}
        </h3>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {solution.points.map((point, index) => (
          <li
            key={`solution-point-${index}`}
            className={`text-[14px] pl-1 tracking-wider ${
              isDarkMode ? "text-white-100" : "text-dimWhite"
            }`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

SolutionsCard.propTypes = {
  solution: PropTypes.shape({
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  isDarkMode: PropTypes.bool.isRequired, // Add prop validation for dark mode
};


const Solutions = () => {
  // const [showPopup, setShowPopup] = useState(false);
  // const [popupContent, setPopupContent] = useState("");
  // const [showImagePopup, setShowImagePopup] = useState(false);
  // const [visibleCards, setVisibleCards] = useState([]);
  const imageRef = useRef(null);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleDarkModeChange = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Initial check and observer for dark mode changes
    handleDarkModeChange();
    const observer = new MutationObserver(handleDarkModeChange);
    observer.observe(document.documentElement, { attributes: true });

    // Clean up observer
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
        }
      });
    }, observerOptions);

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
    };
  }, []);


  // const closePopup = () => {
  //   setShowPopup(false);
  //   setShowImagePopup(false);
  // };

  const solutionsData = [
    {
      icon: <FaDatabase className="text-blue-600 dark:text-darkHeader text-4xl mb-4 mx-auto" />,
      title: "Data Preparation",
      iconBg: "#383E56",
      description:
        "Ensure high-quality, structured data to drive more accurate and efficient AI models.",
      points:[
        "Data preparation is crucial for AI lifecycle success. Our process ensures structured, clean data for enhanced model performance. We utilize advanced preprocessing, validation, and transformation techniques to optimize datasets."],
    },
    {
      icon: <FaTools className="text-blue-600 dark:text-darkHeader text-4xl mb-4 mx-auto" />,
      title: "Model Development",
      iconBg: "#E6DEDD",
      description:
        "Build cutting-edge models tailored to your specific business needs and goals.",
      points:[
        "Our model development involves selecting the right algorithms, optimizing hyperparameters, and tailoring solutions to meet business goals. We leverage cutting-edge tools to deliver high-performance AI systems."],
    },
    {
      icon: <FaCloud className="text-blue-600 dark:text-darkHeader text-4xl mb-4 mx-auto" />,
      title: "Deployment",
      iconBg: "#383E56",
      description:
        "Seamless deployment of AI models with minimal disruption to existing workflows.",
      points:[ 
        "We ensure seamless integration of AI models into existing workflows. Our approach minimizes downtime and delivers faster deployment for immediate business impact."],
    },
    {
      icon: <FaShieldAlt className="text-blue-600 dark:text-darkHeader text-4xl mb-4 mx-auto" />,
      title: "Monitoring",
      iconBg: "#E6DEDD",
      description:
        "Continuous monitoring and optimization to ensure sustained AI performance.",
        points: [
          "Our monitoring solutions ensure AI models remain accurate and effective over time. We use robust feedback loops to continuously improve performance and adapt to new challenges.",
        ],
    },
  ];


  return (
    <>
      <section
        id="solutions"
        className={`${
          isDarkMode
            ? "bg-primary"
            : "bg-hero-pattern-light"
        } text-dimWhite py-16 bg-cover bg-no-repeat bg-center`}
      >
        <div className="container mx-auto px-6 text-center">
          {/* Section Header */}
          <motion.div variants={textVariant()}>
            <h2 className="text-3xl md:text-4xl dark:text-darkHeader font-bold mb-8">
              End-to-End AI Solutions
            </h2>
            <p className="text-lg mb-12">
              Accelerating the future of AI application development with better
              data, smarter models, and faster deployment.
            </p>
          </motion.div>
          {/* Solutions Overview */}
          <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {solutionsData.map((solution, index) => (
            <SolutionsCard
              key={`solution-${index}`}
              solution={solution}
              isDarkMode={isDarkMode} // Pass the state to child component
            />
          ))}
        </VerticalTimeline>
      </div>
           
          {/* Flowchart */}
          <div
            ref={imageRef}
            className={`relative cursor-pointer transition-transform duration-700 ease-out transform ${
              isImageVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            // onClick={() => setShowImagePopup(true)}
          >
            {/* Image Wrapper */}
            <div className="overflow-hidden max-h-[300px]">
              <img
                src={AIFlowchart}
                alt="AI Workflow"
                className="w-full max-w-3xl mx-auto object-cover"
              />
            </div>
            {/* Caption */}
            <p className="text-sm dark:text-textDark text-dimWhite mt-4">
              AI Lifecycle: From Data to Deployment
            </p>
          </div>
        </div>

        {/* Popup for Solutions */}
        {/* {showPopup && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closePopup}
          >
            <div
              className=" bg-white rounded-lg p-6 max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  More Information
                </h3>
              </div>
              <p className="text-gray-600">{popupContent}</p>
              <div className="flex justify-end">
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded-md"
                  onClick={closePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )} */}

        {/* Popup for Flowchart */}
        {/* {showImagePopup && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50 overflow-hidden scroll-smooth"
            onClick={closePopup}
          >
            <div
              className="relative bg-white rounded-lg overflow-y-auto max-h-screen"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar for non-webkit browsers
              onClick={(e) => e.stopPropagation()}
            >
             
              <img
                src={AIFlowchart}
                alt="AI Workflow"
                className="w-full max-w-4xl mx-auto object-contain"
              />
             
              <button
                className="absolute top-4 right-4 px-4 py-2 bg-red-600 text-white rounded-md"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        )} */}

        {/* 3D ChatBox */}
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <ChatBox />
        </div> */}
      </section>
    </>
  );
};

export default Solutions;