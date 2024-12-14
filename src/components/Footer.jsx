import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const today = new Date();

  return (
    <section className="bg-white dark:bg-primary text-center py-8">
      {/* Footer Main Section */}
      <div className="flex flex-col items-center">
        {/* Logo or Brand */}
        <div className="mb-6">
          <p className="text-2xl font-semibold dark:text-[#915eff] text-blue-600">AI Solutions</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-6">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-blue-600 dark:text-[#915eff]  hover:text-blue-800 w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-blue-600 dark:text-[#915eff]  hover:text-blue-800 w-6 h-6" />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-600 dark:text-[#915eff]  hover:text-blue-800 w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-blue-600 dark:text-[#915eff]  hover:text-blue-800 w-6 h-6" />
          </a>
        </div>

        {/* Footer Copyright */}
        <div className="border-t dark:border-[#915eff]  border-gray-300 pt-4">
          <p className="text-sm text-gray-600">
            {today.getFullYear()} AI Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
