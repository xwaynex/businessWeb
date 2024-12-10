import { useState } from "react";
import { motion } from "framer-motion";
import A13 from "../assets/img/AIII.png"
import { FaShieldAlt, FaHeartbeat, FaMicroscope, FaHandshake } from "react-icons/fa";
import Modal from "../components/Modal";


const About = () => {
  const [modalData, setModalData] = useState(null);

  const handleCardClick = (title, content) => {
    setModalData({ title, content });
  };

  const closeModal = () => {
    setModalData(null);
  };

  // Framer Motion variants for animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="about" className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            About Us
          </h2>
          <p className="text-lg">
            Empowering businesses and industries with cutting-edge AI solutions for a better tomorrow.
          </p>
        </motion.div>

        {/* Company Background */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <motion.div
            className="flex-1 mb-8 md:mb-0 md:pr-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInLeft}
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-4 opacity-70">
              Our Vision and Mission
            </h3>
            <p className="text-base">
              Founded on the principles of innovation and trust, our mission is to revolutionize industries through AI. From enhancing healthcare outcomes to fortifying security systems, driving modern research, and fostering open innovation, we aim to create a smarter, safer, and more connected world.
            </p>
          </motion.div>

          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInRight}
          >
            <img
              src={A13}
              alt="Our Vision"
              className="rounded-lg shadow-lg object-cover max-w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Expertise Section */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
            Our Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaHeartbeat className="text-blue-600 text-4xl mb-4 mx-auto" />,
                title: "Health AI",
                description: "Empowering healthcare with AI-driven patient monitoring, diagnostics, and predictive analytics.",
              },
              {
                icon: <FaShieldAlt className="text-blue-600 text-4xl mb-4 mx-auto" />,
                title: "Security AI",
                description: "Real-time threat detection and advanced cybersecurity enhancements to protect businesses.",
              },
              {
                icon: <FaMicroscope className="text-blue-600 text-4xl mb-4 mx-auto" />,
                title: "Modern Research",
                description: "Driving innovation with cutting-edge AI research projects.",
              },
              {
                icon: <FaHandshake className="text-blue-600 text-4xl mb-4 mx-auto" />,
                title: "Open Innovation",
                description: "Collaboration opportunities and tools to empower researchers and innovators globally.",
              },
            ].map((expertise, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => handleCardClick(expertise.title, expertise.description)}
                variants={fadeInUp}
              >
                {expertise.icon}
                <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">
                  {expertise.title}
                </h3>
                <p className="text-gray-600">{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          className="transition-opacity duration-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center opacity-70">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Jane Doe",
                role: "Chief AI Architect",
                image: "https://picsum.photos/160/160?random=1",
                bio: "Dr. Jane has over 20 years of experience in AI research and development.",
              },
              {
                name: "John Smith",
                role: "Head of Data Science",
                image: "https://robohash.org/leader1.png?size=160x160",
                bio: "John specializes in big data analytics and model optimization.",
              },
              {
                name: "Emily Davis",
                role: "Innovation Strategist",
                image: "https://robohash.org/leader100.png?size=160x160",
                bio: "Emily leads the strategy for fostering innovation across AI projects.",
              },
            ].map((leader, index) => (
              <motion.div
                key={index}
                className="text-center cursor-pointer"
                onClick={() => handleCardClick(leader.name, leader.bio)}
                variants={fadeInUp}
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="rounded-full w-32 h-32 mx-auto mb-4 object-cover shadow-md"
                />
                <h4 className="text-lg font-bold">{leader.name}</h4>
                <p className="text-sm text-gray-600">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal for details */}
      {modalData && <Modal title={modalData.title} content={modalData.content} onClose={closeModal} />}
    </section>
  );
};

export default About;
