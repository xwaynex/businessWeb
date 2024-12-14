import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "3D web app",
        from_email: form.email,
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    )
    .then(() => {
      setLoading(false);
      alert("Thank  you. We will get back to you as soon as possible.");
    
    setForm({
      name: "",
      email: "",
      message: ""
    })
    }, (error) => {
      setLoading(false)

      console.log(error)
      alert("Something went wrong")
    })
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <section id="contact" className="bg-gray-100 dark:bg-primary py-16">
    
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-[#915eff] mb-8">
          Contact Us
        </h2>

        {/* Responsive Contact Form and Canvas */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Contact Form */}
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="w-full md:w-1/2 dark:bg-black-100 p-8 rounded-2xl z-10 dark:opacity-50"
          >
            <p className={`${styles.sectionSubText} text-gray-600`}>Get in touch</p>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-tertiary shadow-md rounded-lg p-6"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-[#915eff] font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-md dark:bg-tertiary focus:outline-none focus:ring"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-[#915eff] font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none dark:bg-tertiary focus:ring"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-[#915eff] font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none dark:bg-tertiary focus:ring"
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
                  I agree to the{" "}
                  <a href="/privacy" className="text-blue-600 dark:text-[#915eff] underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
              <button
                type="submit"
                className={`w-full bg-blue-600 dark:bg-[#915eff] text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition ${
                  !isChecked ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!isChecked}
              >
                {loading ? "Sending..." : "Send "}
              </button>
            </form>
          </motion.div>

          {/* EarthCanvas */}
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="w-full md:w-1/2 h-[350px] md:h-[550px]"
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
