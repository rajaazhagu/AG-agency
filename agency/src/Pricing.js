import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "./images/logo.jpeg";
import { FaInstagram, FaLinkedin, FaHome, FaEnvelope, FaDollarSign, FaBars, FaTimes } from "react-icons/fa";

const PricingCard = ({ title, features, price, color, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  return (
    <motion.div
      ref={ref}
      className="p-6 rounded-lg shadow-lg transition-all duration-300
                 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-950"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05 }}
    >
      <h2 className={`text-2xl font-semibold bg-gradient-to-r ${color} text-transparent bg-clip-text`}>
        {title}
      </h2>
      <ul className="mt-3 text-gray-300 space-y-2">
        {features.map((feature, index) => (
          <li key={index}>✔️ {feature}</li>
        ))}
      </ul>
      <p className="text-2xl font-bold mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
        ₹{price}
      </p>
    </motion.div>
  );
};

const Pricing = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      
      {/* Sidebar for Desktop & Mobile */}
      <motion.div
        className={`fixed md:static top-0 left-0 w-60 bg-gray-800 h-screen flex flex-col pt-10 shadow-lg 
                    transition-transform duration-300 md:translate-x-0 z-50
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:block`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-center w-full">
          <img src={Logo} alt="Logo" className="w-24 h-24 rounded-full border-4 border-gray-700 shadow-lg mb-6" />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col w-full text-lg font-semibold space-y-4 px-6">
          <Link to="/" className="flex items-center gap-3 py-3 hover:bg-gray-700 rounded-md transition">
            <FaHome className="text-white" /> Home
          </Link>
          <Link to="/contact" className="flex items-center gap-3 py-3 hover:bg-gray-700 rounded-md transition">
            <FaEnvelope className="text-white" /> Contact
          </Link>
          <Link to="/services" className="flex items-center gap-3 py-3 hover:bg-gray-700 rounded-md transition">
          📂 Previous work
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="mt-10 pb-6 flex justify-center gap-6">
          <a href="https://www.instagram.com/azhaguraja20" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 text-2xl">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/azhaguraja-r-48232723a/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-2xl">
            <FaLinkedin />
          </a>
        </div>
      </motion.div>

      {/* Main Content (Pricing Cards) */}
      <div className="flex-1 p-6 relative">
        
        {/* Mobile Sidebar Toggle Button */}
        <div className="absolute top-4 left-4 z-50 md:hidden">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white text-3xl">
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Pricing Title */}
        <h1 className="text-4xl font-bold text-center 
                       bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300 
                       text-transparent bg-clip-text">
          💰 Our Pricing
        </h1>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            { 
              title: "💼 Basic Plan", 
              features: ["Business Website", "3 Pages (Home, About, Contact)", "SEO Optimization"], 
              price: "10,000", 
              color: "from-blue-400 to-blue-600" 
            },
            { 
              title: "📦 Standard Plan", 
              features: ["Business Website + Blog", "5 Pages (Home, About, Services, Blog, Contact)", "Basic Digital Marketing"], 
              price: "12,000", 
              color: "from-green-400 to-green-600" 
            },
            { 
              title: "🚀 Premium Plan", 
              features: ["eCommerce / Custom Web App", "10 Pages", "Advanced SEO + Marketing", "3 Months Support"], 
              price: "15,000", 
              color: "from-purple-400 to-purple-600" 
            },
          ].map((plan, index) => (
            <PricingCard 
              key={index} 
              title={plan.title} 
              features={plan.features} 
              price={plan.price} 
              color={plan.color} 
              delay={index * 0.15} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
