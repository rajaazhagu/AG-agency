import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "./images/logo.jpeg";
import { FaInstagram, FaLinkedin, FaHome, FaEnvelope, FaDollarSign, FaBars, FaTimes } from "react-icons/fa";

const ServiceCard = ({ title, desc, color, delay, link }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  return (
    <motion.div
      ref={ref}
      className="p-6 rounded-lg shadow-lg transition-all duration-300 
                 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-950 flex flex-col items-center"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.07 }}
    >
      <h2 className={`text-xl font-semibold bg-gradient-to-r ${color} text-transparent bg-clip-text`}>
        {title}
      </h2>
      <p className="mt-2 text-gray-300 text-center">{desc}</p>

      {/* Centered Gradient Button */}
      <div className="mt-4 flex justify-center w-full">
        <a
          href="https://dualdealmart.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-md text-lg font-semibold text-white 
                     bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 
                     shadow-lg transition-all duration-300 hover:scale-105"
        >
          {link}
        </a>
      </div>
    </motion.div>
  );
};

const Services = () => {
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
      
      {/* Sidebar Toggle Button for Mobile */}
      <div className="absolute top-4 left-4 z-50 md:hidden">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white text-3xl">
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar - Always visible on desktop */}
      <motion.div
        className={`fixed top-0 left-0 w-64 bg-gray-800 h-full flex flex-col pt-10 shadow-lg 
                   transition-transform duration-300 md:translate-x-0 
                   ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:block`}
      >
        <div className="flex justify-center w-full">
          <img src={Logo} alt="AG Logo" className="w-24 h-24 rounded-full border-4 border-gray-700 shadow-lg mb-6" />
        </div>

        <div className="flex flex-col w-full text-lg font-semibold space-y-4 px-6">
          <Link to="/" className="flex items-center gap-3 py-3 hover:bg-gray-700 rounded-md transition">
            <FaHome className="text-white" /> Home
          </Link>
          <Link to="/contact" className="flex items-center gap-3 py-3 hover:bg-gray-700 rounded-md transition">
            <FaEnvelope className="text-white" /> Contact
          </Link>
          <Link to="/pricing" className="flex items-center gap-3 py-3 hover:bg-gray-700 rounded-md transition">
            <FaDollarSign className="text-white" /> Pricing
          </Link>
        </div>

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
      <div className="flex-1 p-6 ml-0 md:ml-64">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center 
                       bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300 
                       text-transparent bg-clip-text mt-6">
          💼 Previous Works
        </h1>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4">
          {[
            { title: "🌍 Ecommerce Store", desc: "We create modern websites that help businesses grow.", color: "from-blue-400 to-blue-600", link: "Click Here" },
            
          ].map((service, index) => (
            <ServiceCard key={index} title={service.title} desc={service.desc} color={service.color} delay={index * 0.1} link={service.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
