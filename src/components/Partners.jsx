import { useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  GoogleLogo,
  MetaLogo,
  OpenAILogo,
  ReactLogo,
  SpotifyLogo,
  AppleLogo,
  SamsungLogo,
  NasaLogo,
} from "../assets/logo";

const Partners = () => {
   // Memoize the logos array to prevent unnecessary re-renders
   const logos = useMemo(() => [
    GoogleLogo,
    MetaLogo,
    OpenAILogo,
    ReactLogo,
    SpotifyLogo,
    AppleLogo,
    SamsungLogo,
    NasaLogo
  ], []);

  const carouselRef = useRef(null);
  const animationFrameRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const containerWidthRef = useRef(0);

  useEffect(() => {
    const container = carouselRef.current;

    if (!container) return;

    const cloneLogos = () => {
      // Avoid duplicate cloning by checking if elements are already cloned
      const originalLogos = Array.from(container.children);
      if (originalLogos.length === logos.length * 2) return;

      // Clone the logos
      originalLogos.forEach((child) => {
        const clone = child.cloneNode(true);
        container.appendChild(clone);
      });

      // Store the container width for smooth reset logic
      containerWidthRef.current = container.scrollWidth / 2;
    };

    const smoothScroll = () => {
      const containerWidth = containerWidthRef.current;
      scrollPositionRef.current -= 1; // Adjust speed here

      // Reset position when the first batch of logos is fully off-screen
      if (Math.abs(scrollPositionRef.current) >= containerWidth) {
        scrollPositionRef.current = 0;
      }

      container.style.transform = `translateX(${scrollPositionRef.current}px)`;
      animationFrameRef.current = requestAnimationFrame(smoothScroll);
    };

    cloneLogos();
    animationFrameRef.current = requestAnimationFrame(smoothScroll);

    return () => {
      // Cleanup: Cancel animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [logos]);

  return (
    <div className="relative bg-secondary dark:bg-primary py-8">
      {/* Carousel */}
      <div className=" w-full">
        <div
          className="flex space-x-6"
          ref={carouselRef}
          style={{ whiteSpace: "nowrap" }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-24 md:w-48 md:h-28 rounded-md shadow-md flex items-center justify-center mx-3"
            >
              <img
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className="w-28 h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contact Button */}
      <div className="flex justify-center mt-16">
        <Link to="/contact">
          <button className="px-6 py-2 sm:px-8 sm:py-3 bg-blue-600 dark:bg-[#915eff] text-white rounded-lg shadow hover:bg-blue-700 transition-transform transform hover:scale-105">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Partners;
