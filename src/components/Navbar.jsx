const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full z-10">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-blue-600">AI Solutions</a>
        
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li><a href="#home" className="text-gray-800 hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="text-gray-800 hover:text-blue-600">About</a></li>
          <li><a href="#solutions" className="text-gray-800 hover:text-blue-600">Solutions</a></li>
          <li><a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
