import { useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { AiFillPhone } from "react-icons/ai"; // Phone Icon

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const form = useRef(null); // ✅ Create a ref for the form

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post("http://localhost:3000/contact", formData);
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
