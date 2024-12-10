import A13 from "../assets/img/AIII.png"
import { FaShieldAlt, FaHeartbeat, FaMicroscope, FaHandshake } from "react-icons/fa";


const About = () => {
  return (
    <section id="about" className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            About Us
          </h2>
          <p className="text-lg">
            Empowering businesses and industries with cutting-edge AI solutions for a better tomorrow.
          </p>
        </div>

        {/* Company Background */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          {/* Left: Vision and Mission */}
          <div className="flex-1 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              Our Vision and Mission
            </h3>
            <p className="text-base">
              Founded on the principles of innovation and trust, our mission is to revolutionize industries through AI. From enhancing healthcare outcomes to fortifying security systems, driving modern research, and fostering open innovation, we aim to create a smarter, safer, and more connected world.
            </p>
          </div>

          {/* Right: AI Image */}
          <div className="flex-1">
            <img
              src={A13}
              alt="Our Vision"
              className="rounded-lg shadow-lg object-cover max-w-full h-auto"
            />
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
            Our Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-50 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
            <FaHeartbeat className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">Health AI</h3>
            <p className="text-gray-600">
              Empowering healthcare with AI-driven patient monitoring, diagnostics, and predictive analytics.
            </p>
          </div>
          <div className="bg-blue-50 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
            <FaShieldAlt className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">Security AI</h3>
            <p className="text-gray-600">
              Real-time threat detection and advanced cybersecurity enhancements to protect businesses.
            </p>
          </div>
          <div className="bg-blue-50 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
            <FaMicroscope className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">Modern Research</h3>
            <p className="text-gray-600">
              Driving innovation with cutting-edge AI research projects.
            </p>
          </div>
          <div className="bg-blue-50 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
            <FaHandshake className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">Open Innovation</h3>
            <p className="text-gray-600">
              Collaboration opportunities and tools to empower researchers and innovators globally.
            </p>
          </div>
        </div>
        </div>

        {/* Leadership Section */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4 text-center">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Leader 1 */}
            <div className="text-center">
              <img
                src="https://picsum.photos/160/160?random=1"
                alt="Leader 1"
                className="rounded-full w-32 h-32 mx-auto mb-4 object-cover shadow-md"
              />
              <h4 className="text-lg font-bold">Dr. Jane Doe</h4>
              <p className="text-sm text-gray-600">
                Chief AI Architect
              </p>
            </div>
            {/* Leader 2 */}
            <div className="text-center">
              <img
                src={`https://robohash.org/leader1.png?size=160x160`}
                alt="Leader 2"
                className="rounded-full w-32 h-32 mx-auto mb-4 object-cover shadow-md"
              />
              <h4 className="text-lg font-bold">John Smith</h4>
              <p className="text-sm text-gray-600">
                Head of Data Science
              </p>
            </div>
            {/* Leader 3 */}
            <div className="text-center">
              <img
                src={`https://robohash.org/leader100.png?size=160x160`}
                alt="Leader 3"
                className="rounded-full w-32 h-32 mx-auto mb-4 object-cover shadow-md"
              />
              <h4 className="text-lg font-bold">Emily Davis</h4>
              <p className="text-sm text-gray-600">
                Innovation Strategist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
