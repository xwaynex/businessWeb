import { useParams } from "react-router-dom";
import { Navbar } from "../components";
import Footer from "../components/Footer";
import { resources } from "../constants";

const NewsDetail = () => {
  const { id } = useParams();
  const news = resources.find((resource) => resource.id === parseInt(id));

  if (!news) {
    return <div className="text-center py-16">News not found.</div>;
  }

  return (
    <>
      {/* Navbar */}
      <div className="relative z-0 transition-all duration-500">
        <div className="bg-hero-pattern-light dark:bg-hero-pattern-dark bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
      </div>

      {/* News Content */}
      <div className="min-h-screen flex justify-center items-center mx-auto px-6 py-16 dark:bg-primary bg-secondary">
        <div className="max-w-4xl w-full">
          {/* Image */}
          <img
            src={news.image}
            alt={news.title}
            className="h-64 object-cover mb-6 rounded-lg shadow-lg mx-auto"
          />
          {/* Title */}
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white text-center">
            {news.title}
          </h1>
          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 text-left">
            {news.description}
          </p>
          {/* Content */}
          <div className="text-gray-700 dark:text-gray-200">
            <p>{news.content}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default NewsDetail;
