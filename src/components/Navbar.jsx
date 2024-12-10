import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full z-10">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-blue-600">AI Solutions</a>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu"  className="relative z-20">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 text-gray-800 transform transition-transform duration-300 ${
                isMenuOpen ? 'rotate-90' : ''
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
        </div>

        {/* Navigation Links for larger screens */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="text-gray-800 hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="text-gray-800 hover:text-blue-600">About</a></li>
          <li><a href="#solutions" className="text-gray-800 hover:text-blue-600">Solutions</a></li>
          <li><a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Dropdown Menu for smaller screens */}
        <div
          className={`absolute top-16 left-0 w-full bg-white shadow-md transform transition-all duration-500 ease-in-out md:hidden ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          <ul className="flex flex-col space-y-4 p-6">
            <li><a href="#home" className="text-gray-800 hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="text-gray-800 hover:text-blue-600">About</a></li>
            <li><a href="#solutions" className="text-gray-800 hover:text-blue-600">Solutions</a></li>
            <li><a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
