import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import Footer from "../components/Footer";
import { resources } from "../constants";
import { fadeIn } from "../utils/motion";

const NewsCard = ({ news, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      initial="hidden"
      animate="show"
      className="w-full"
    >
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 400,
        }}
        // className=" p-4 rounded-2xl shadow-card hover:shadow-lg transition-shadow"
      >
        <Link to={`/news/${news.id}`}>
          <div className="green-pink-gradient p-[1px] w-full  rounded-[20px] shadow-card">
            <div className="bg-blue-600 dark:bg-tertiary rounded-lg overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-dimWhite dark:text-white">
                  {news.title}
                </h2>
                <p className="text-sm text-dimWhite dark:text-gray-300 mt-2">
                  {news.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </Tilt>
    </motion.div>
  );
};

// Add PropTypes validation
NewsCard.propTypes = {
  news: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const NewsOverview = () => {
  return (
    <>
      {/* Navbar */}
      <div className="relative z-0 transition-all duration-500">
        <div className="bg-hero-pattern-light dark:bg-hero-pattern-dark bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
      </div>

      {/* News Grid */}
      <div className="mx-auto px-6 py-16 dark:bg-primary bg-secondary">
        <motion.h1
          className="text-3xl font-bold dark:text-darkHeader text-dimWhite mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.75 }}
        >
          News Overview
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {resources.map((news, index) => (
            <NewsCard news={news} index={index} key={news.id} />
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default NewsOverview;
