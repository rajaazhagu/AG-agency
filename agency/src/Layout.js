import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./images/logo.jpeg";
import { FaInstagram, FaLinkedin, FaHome, FaEnvelope, FaDollarSign, FaBars, FaTimes } from "react-icons/fa";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Disable background scrolling when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebarOpen]);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex">
      
      {/* Hamburger Menu (Mobile) */}
      <div className="absolute top-4 left-4 z-50 md:hidden">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white text-3xl">
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar (Always Visible on Desktop) */}
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
            📂 Services
          </Link>
          <Link to="/contact" className="flex items-center gap-3 py-3 hover:bg-gray-700 rounded-md transition">
            <FaEnvelope className="text-white" /> Contact
          </Link>
          <Link to="/pricing" className="flex items-center gap-3 py-3 hover:bg-gray-700 rounded-md transition">
            <FaDollarSign className="text-white" /> Pricing
          </Link>
        </div>

        {/* Social Icons (Centered) */}
        <div className="mt-auto pb-6 flex justify-center gap-6">
          <a href="https://www.instagram.com/azhaguraja20" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 text-2xl">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/azhaguraja-r-48232723a/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-2xl">
            <FaLinkedin />
          </a>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="md:ml-64 w-full p-6">
        <Outlet /> {/* This renders the specific page content */}
      </div>
    </div>
  );
};

export default Layout;
