import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="dark:text-white text-dimWhite shadow-md w-full z-10">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        <Link
          to="/"
          className="text-2xl font-bold text-dimWhite dark:text-darkHeader"
        >
          AI Solutions
        </Link>
        <div className="md:hidden space-x-4">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="relative z-20 text-dimWhite dark:text-darkHeader"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transform transition-transform duration-300 ${
                isMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="focus:outline-none"
          >
            {theme === "light" ? (
              <FaMoon className="h-6 w-6 text-dimWhite dark:text-white hover:text-white" />
            ) : (
              <FaSun className="h-6 w-6 text-darkHeader" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-white dark:hover:text-darkHeader"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-white dark:hover:text-darkHeader"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#solutions"
              className="hover:text-white dark:hover:text-darkHeader"
            >
              Solutions
            </a>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-white dark:hover:text-darkHeader"
            >
              Contact
            </Link>
          </li>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="focus:outline-none "
          >
            {theme === "light" ? (
              <FaMoon className="h-6 w-6 text-dimWhite dark:text-textDark hover:text-white" />
            ) : (
              <FaSun className="h-6 w-6 text-darkHeader" />
            )}
          </button>
        </ul>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-hero-pattern-light dark:bg-hero-pattern-dark text-dimWhite dark:text-textDark shadow-md transition-all duration-1000 delay-500 ease-in-out md:hidden z-20">
            <ul className="flex flex-col space-y-4 p-6">
              <li>
                <Link to="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-blue-600">
                  Solutions
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
