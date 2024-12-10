import { useState, useEffect, useRef  } from "react";
import { FaDatabase, FaTools, FaCloud, FaShieldAlt } from "react-icons/fa";
import AIFlowchart from "../assets/img/AI_Project_Implementation_Steps.png";

const Solutions = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const imageRef = useRef(null);
  const [isImageVisible, setIsImageVisible] = useState(false);

  const solutionsData = [
    {
      icon: <FaDatabase className="text-blue-600 text-4xl mb-4 mx-auto" />,
      title: "Data Preparation",
      description:
        "Ensure high-quality, structured data to drive more accurate and efficient AI models.",
      details:
        "Data preparation is crucial for AI lifecycle success. Our process ensures structured, clean data for enhanced model performance. We utilize advanced preprocessing, validation, and transformation techniques to optimize datasets.",
    },
    {
      icon: <FaTools className="text-blue-600 text-4xl mb-4 mx-auto" />,
      title: "Model Development",
      description:
        "Build cutting-edge models tailored to your specific business needs and goals.",
      details:
        "Our model development involves selecting the right algorithms, optimizing hyperparameters, and tailoring solutions to meet business goals. We leverage cutting-edge tools to deliver high-performance AI systems.",
    },
    {
      icon: <FaCloud className="text-blue-600 text-4xl mb-4 mx-auto" />,
      title: "Deployment",
      description:
        "Seamless deployment of AI models with minimal disruption to existing workflows.",
      details:
        "We ensure seamless integration of AI models into existing workflows. Our approach minimizes downtime and delivers faster deployment for immediate business impact.",
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-4xl mb-4 mx-auto" />,
      title: "Monitoring",
      description:
        "Continuous monitoring and optimization to ensure sustained AI performance.",
      details:
        "Our monitoring solutions ensure AI models remain accurate and effective over time. We use robust feedback loops to continuously improve performance and adapt to new challenges.",
    },
  ];
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index, 10);
          if (!visibleCards.includes(index)) {
            setVisibleCards((prev) => [...prev, index]);
          }
        }
      });
    }, observerOptions);

    const cardElements = document.querySelectorAll(".solution-card");
    cardElements.forEach((el) => observer.observe(el));

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
      cardElements.forEach((el) => observer.unobserve(el));
      if (imageRef.current) {
        imageObserver.unobserve(imageRef.current);
      }
    };
  }, [visibleCards]);

  const closePopup = () => {
    setShowPopup(false);
    setShowImagePopup(false);
  };

  return (
    <section
      id="solutions"
      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-dimWhite  py-16"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          End-to-End AI Solutions
        </h2>
        <p className="text-lg mb-12">
          Accelerating the future of AI application development with better
          data, smarter models, and faster deployment.
        </p>

        {/* Solutions Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutionsData.map((solution, index) => (
            <div
            key={index}
            data-index={index}
            className={`solution-card bg-white shadow-md rounded-lg p-6 cursor-pointer transition-transform duration-700 ease-out transform ${
              visibleCards.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            onClick={() => {
              setPopupContent(solution.details);
              setShowPopup(true);
            }}
          >
            {solution.icon}
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              {solution.title}
            </h3>
            <p className="text-gray-600">{solution.description}</p>
          </div>
        ))}
      </div>

        {/* Flowchart */}
        <div
          ref={imageRef}
          className={`relative cursor-pointer transition-transform duration-700 ease-out transform ${
            isImageVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          onClick={() => setShowImagePopup(true)}
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
          <p className="text-sm text-white mt-4">
            AI Lifecycle: From Data to Deployment
          </p>
        </div>
      </div>

      {/* Popup for Solutions */}
      {showPopup && (
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
      )}

      {/* Popup for Flowchart */}
      {showImagePopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50 overflow-hidden scroll-smooth"
          onClick={closePopup}
        >
          <div
            className="relative bg-white rounded-lg overflow-y-auto max-h-screen"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar for non-webkit browsers
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={AIFlowchart}
              alt="AI Workflow"
              className="w-full max-w-4xl mx-auto object-contain"
            />
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 px-4 py-2 bg-red-600 text-white rounded-md"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Solutions;
