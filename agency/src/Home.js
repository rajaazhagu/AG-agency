import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Logo from "./images/logo.jpeg";
import { FaInstagram, FaLinkedin, FaHome, FaEnvelope, FaDollarSign, FaBars, FaTimes } from "react-icons/fa";

const ServiceCard = ({ title, desc, color, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  return (
    <motion.div
      ref={ref}
      className="p-6 rounded-lg shadow-lg transition-all duration-300 
                 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-950"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.07 }}
    >
      <h2 className={`text-xl font-semibold bg-gradient-to-r ${color} text-transparent bg-clip-text`}>
        {title}
      </h2>
      <p className="mt-2 text-gray-300">{desc}</p>
    </motion.div>
  );
};

const Home = () => {
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

  return (
    <div className="bg-gray-900 text-white min-h-screen flex">
      
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
          <Link to="/contact" className="flex items-center gap-3 py-3 hover:bg-gray-700 rounded-md transition">
            <FaEnvelope className="text-white" /> Contact
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

      {/* Main Content */}
      <div className="md:ml-64 w-full ml-2 flex flex-col items-center text-center p-6 md:pt-12 overflow-y-auto">
        
        {/* Logo and Title */}
        <motion.div 
          className="flex items-center space-x-0 ml-5" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={Logo}
            alt="AG Logo"
            className="w-14 h-14 md:w-24 md:h-24 rounded-full border-3 border-gray-700 shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.h1
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 
                      text-transparent bg-clip-text animate-gradient mt-3"
          >
            AG Innovate
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="mt-6 px-8 py-4 rounded-lg text-lg md:text-xl font-bold text-white 
                    bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Elevate your business with cutting-edge websites & apps!
        </motion.div>

        {/* Our Services Section */}
        <div className="mt-12 w-full max-w-6xl">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300 text-transparent bg-clip-text">
            💼 Our Services
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[
              { title: "🌍 Business Websites", desc: "We create modern websites that help businesses grow.", color: "from-blue-400 to-blue-600" },
              { title: "🛍️ eCommerce Stores", desc: "Fully functional online stores with payment integration.", color: "from-green-400 to-green-600" },
              { title: "💻 Custom Web Apps", desc: "Tailored web applications for businesses & startups.", color: "from-purple-400 to-purple-600" },
              { title: "⚡ No-Code Development", desc: "We build apps using No-Code & Low-Code platforms like Webflow & Bubble.", color: "from-yellow-400 to-yellow-600" },
              { title: "📢 Digital Marketing", desc: "SEO, Google Ads, & Social Media Marketing to grow your business.", color: "from-red-400 to-red-600" },
            ].map((service, index) => (
              <ServiceCard key={index} title={service.title} desc={service.desc} color={service.color} delay={index * 0.1} />
            ))}
          </div>
        </div>

        <footer className="mt-12 py-6 w-full text-center bg-gray-900">
          <p className="text-gray-400 text-sm font-semibold">© 2025 AG Innovate. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
};

export default Home;
