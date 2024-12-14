import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-primary bg-center dark:bg-cover dark:bg-center  text-gray-800 dark:text-textDark shadow-md w-full z-10">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        <a
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-[#915eff]"
        >
          AI Solutions
        </a>

        <div className="md:hidden space-x-4">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="relative z-20"
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
              <FaMoon className="h-6 w-6 text-gray-600 dark:text-white" />
            ) : (
              <FaSun className="h-6 w-6 text-yellow-500" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="hover:text-blue-600">
              Home
            </a>
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
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="focus:outline-none"
          >
            {theme === "light" ? (
              <FaMoon className="h-6 w-6 text-gray-600 dark:text-white" />
            ) : (
              <FaSun className="h-6 w-6 text-yellow-500" />
            )}
          </button>
        </ul>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white dark:bg-primary text-gray-800 dark:text-textDark shadow-md transition-all duration-500 ease-in-out md:hidden z-20">
            <ul className="flex flex-col space-y-4 p-6">
              <li>
                <a href="#home" className="hover:text-blue-600">
                  Home
                </a>
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
                <a href="#contact" className="hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
