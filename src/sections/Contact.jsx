import { useState } from 'react';

const Contact = () => {
    // State to track the checkbox status
    const [isChecked, setIsChecked] = useState(false);

    // Function to handle checkbox change
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    }
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Contact Us</h2>

        {/* Contact Form and Details Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form className="bg-white shadow-md rounded-lg p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                ></textarea>
              </div>
              <div className="flex items-center mb-4">
              <input
                  type="checkbox"
                  id="privacy"
                  className="mr-2"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="privacy" className="text-gray-700 text-sm">
                  I agree to the <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>.
                </label>
              </div>
              <button
                type="submit"
                className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition ${!isChecked ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!isChecked}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Get In Touch</h3>
              <p className="text-gray-700 mb-4">We would love to hear from you! Reach out to us via the form or contact us directly using the details below.</p>
              <ul className="text-gray-700">
                <li className="mb-2">
                  <span className="font-medium">Address:</span> 123 AI Solutions Lane, Tech City, Innovation State
                </li>
                <li className="mb-2">
                  <span className="font-medium">Email:</span> <a href="mailto:contact@aisolutions.com" className="text-blue-600 underline">contact@aisolutions.com</a>
                </li>
                <li>
                  <span className="font-medium">Phone:</span> <a href="tel:+1234567890" className="text-blue-600 underline">+1 (234) 567-890</a>
                </li>
              </ul>
            </div>

            {/* Interactive Map Placeholder */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.95592601531647!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xfb3d88854ec4b78!2s123%20AI%20Solutions%20Lane%2C%20Tech%20City!5e0!3m2!1sen!2sus!4v1638490839093!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Office Location"
                className="rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
