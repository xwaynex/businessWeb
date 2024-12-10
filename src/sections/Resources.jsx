import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const resources = [
  {
    id: 1,
    title: "The Future of AI: Trends to Watch",
    image: "https://picsum.photos/160/160?random=867",
    description:
      "Discover the emerging trends shaping the future of artificial intelligence and how they impact businesses.",
    link: "/article-1",
    date: "Dec 8, 2024",
    comments: 12,
  },
  {
    id: 2,
    title: "Whitepaper: Advanced Data Management",
    image: "https://robohash.org/laboratory.png?size=160x160",
    description:
      "Learn how efficient data management can enhance machine learning lifecycle optimization.",
    link: "/whitepaper-1",
    date: "Dec 7, 2024",
    comments: 8,
  },
  {
    id: 3,
    title: "Research: AI Lifecycle Optimization",
    image: "https://picsum.photos/160/160?random=5",
    description:
      "Dive deep into our latest research publications on optimizing the AI lifecycle for better outcomes.",
    link: "/research-1",
    date: "Dec 6, 2024",
    comments: 15,
  },
  {
    id: 4,
    title: "Understanding Data in the AI Era",
    image: "https://robohash.org/data.png?size=160x160",
    description:
      "Explore the role of data in driving AI solutions and overcoming challenges in modern systems.",
    link: "/article-4",
    date: "Dec 5, 2024",
    comments: 20,
  },
];

const Resources = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <section id="resources" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Insights & Resources
          </h2>
          <p className="text-gray-600 mt-4">
            Explore the latest trends in AI development, data management, and lifecycle optimization.
          </p>
        </div>

        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider relative">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="keen-slider__slide bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="overflow-hidden group">
                  
                  <a href={resource.link} >
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                  <a href={resource.link}>{resource.title}</a>
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {resource.date} • {resource.comments} Comments
                </p>
                <p className="text-gray-600 mt-4">
                  {resource.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6">
          {resources.map((_, idx) => (
            <button
              key={idx}
              onClick={() => sliderRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full mx-1 ${
                currentSlide === idx
                  ? "bg-blue-600"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-transform transform hover:scale-105">
            View More Feed
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
