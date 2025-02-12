import { useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { AiFillPhone } from "react-icons/ai"; // Phone Icon
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Logo from "./images/logo.jpeg";
import { FaInstagram, FaLinkedin, FaHome, FaEnvelope, FaDollarSign, FaBars, FaTimes } from "react-icons/fa";

const Contact = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Disable background scrolling when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [sidebarOpen]);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const form = useRef(null); // ✅ Create a ref for the form

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post("https://ag-agency-1.onrender.com/contact", formData);
      setStatus(res.data.message);
  
      const emailData = {
        to_name: "azhaguazhagu30@gmail.com", // Set the recipient email
        from_name: formData.email,
        message: formData.message,
      };
  
      emailjs
        .send(
          "service_y7xj0zf", // Your EmailJS service ID
          "template_idu1t8y", // Your EmailJS template ID
          emailData, // Data with recipient email
          "kAmXiNVYiUnGKFlVQ" // Your EmailJS public key
        )
        .then(() => {
          setStatus("Message sent successfully! ✅");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("Email send error:", error);
          setStatus("Failed to send message ❌");
        });
    } catch (error) {
      console.log("Backend Error:", error);
      setStatus("Error sending message ❌");
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      {/* Hamburger Menu for Mobile */}
      <div className="absolute top-4 left-4 z-50 md:hidden">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white text-3xl">
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <motion.div
        className={`fixed top-0 left-0 w-60 bg-gray-800 h-screen flex flex-col pt-10 shadow-lg 
                   transition-transform duration-300 md:translate-x-0 
                   ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:block`}
      >
        {/* Centered Logo */}
        <div className="flex justify-center w-full">
          <img src={Logo} alt="AG Logo" className="w-24 h-24 rounded-full border-4 border-gray-700 shadow-lg mb-6" />
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col w-full text-lg font-semibold space-y-4 px-6">
          <Link to="/" className="flex items-center gap-3 py-3 hover:bg-gray-700 rounded-md transition">
            <FaHome className="text-white" /> Home
          </Link>
          <Link to="/services" className="flex items-center gap-3 py-3 hover:bg-gray-700 rounded-md transition">
            📂 Previous Work
          </Link>
          <Link to="/pricing" className="flex items-center gap-3 py-3 hover:bg-gray-700 rounded-md transition">
            <FaDollarSign className="text-white" /> Pricing
          </Link>
        </div>

        {/* Social Icons */}
        <div className="mt-10 pb-6 flex justify-center gap-6">
          <a href="https://www.instagram.com/azhaguraja20" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 text-2xl">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/azhaguraja-r-48232723a/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-2xl">
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
      {/* ✅ Assign ref to form */}
      <motion.form
        ref={form} // ✅ Attach ref
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Contact Us
        </h2>

        {["name", "email", "message"].map((field, index) => (
          <motion.div
            key={field}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            {field !== "message" ? (
              <input
                className="bg-gray-700 p-3 rounded w-full mb-3 text-white outline-none focus:ring-2 focus:ring-blue-400"
                name={field}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            ) : (
              <textarea
                className="bg-gray-700 p-3 rounded w-full mb-3 text-white outline-none focus:ring-2 focus:ring-purple-400"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            )}
          </motion.div>
        ))}

        <motion.button
          type="submit"
          className="w-full py-3 rounded-md text-lg font-semibold text-white 
                     bg-gradient-to-r from-blue-500 to-purple-500 
                     hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send
        </motion.button>

        {status && (
          <motion.p
            className="mt-3 text-green-400 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {status}
          </motion.p>
        )}
      </motion.form>

      {/* Contact Details */}
      <motion.div
        className="mt-6 text-center p-4 bg-gray-800 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text">
          📞 Contact Numbers
        </h3>
        <div className="mt-3 space-y-2">
          <motion.a
            href="tel:9791818045"
            className="flex items-center justify-center text-blue-400 hover:text-blue-500 transition-all text-lg"
            whileHover={{ scale: 1.1 }}
          >
            <AiFillPhone className="mr-2 text-xl" /> 9791818045
          </motion.a>

          <motion.a
            href="tel:9786644696"
            className="flex items-center justify-center text-purple-400 hover:text-purple-500 transition-all text-lg"
            whileHover={{ scale: 1.1 }}
          >
            <AiFillPhone className="mr-2 text-xl" /> 9786644696
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
