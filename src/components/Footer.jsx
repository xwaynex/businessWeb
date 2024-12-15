import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();

  // Reusable Links Data
  const sections = [
    {
      title: "Company",
      links: [
        { label: "About", path: "/about" },
        { label: "Careers", path: "/careers" },
        { label: "Security", path: "/security" },
        { label: "Terms", path: "/terms" },
        { label: "Privacy", path: "/privacy" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", path: "/blog" },
        { label: "Contact Us", path: "/contact" },
        { label: "Customers", path: "/customers" },
        { label: "Events", path: "/events" },
        { label: "Open Datasets", path: "/datasets" },
      ],
    },
    {
      title: "Guides",
      links: [
        { label: "Data Labeling", path: "/guides/data-labeling" },
        { label: "ML Model Training", path: "/guides/ml-training" },
        { label: "Large Language Models", path: "/guides/llms" },
      ],
    },
  ];

  return (
    <section className="bg-secondary dark:bg-primary text-center py-8">
      {/* Footer Main Section */}
      <div className="container mx-auto px-6">
        {/* Brand Section */}
        <div className="mb-8">
          <p className="text-2xl font-semibold dark:text-[#915eff] text-blue-600">AI Solutions</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-blue-600 dark:text-[#915eff] hover:text-blue-800 w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-blue-600 dark:text-[#915eff] hover:text-blue-800 w-6 h-6" />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-600 dark:text-[#915eff] hover:text-blue-800 w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-blue-600 dark:text-[#915eff] hover:text-blue-800 w-6 h-6" />
          </a>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left mb-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-[#915eff] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Copyright */}
        <div className="border-t dark:border-[#915eff] border-gray-300 pt-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            © {today.getFullYear()} AI Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
