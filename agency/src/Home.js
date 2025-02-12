import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Logo from "./images/logo.webp"; // Replace with your logo path

// Reusable Service Card Component
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
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center text-center p-6 md:justify-start md:pt-12">
      
      {/* Logo and Title */}
      <motion.div 
        className="flex items-center space-x-4 md:space-x-6" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={Logo}
          alt="AG Logo"
          className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-gray-700 shadow-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.h1
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 
                     text-transparent bg-clip-text animate-gradient"
        >
          AG Innovate
        </motion.h1>
      </motion.div>

      {/* New Subtitle Box with Vibrant Colors */}
      <motion.div
  className="mt-6 px-8 py-4 rounded-lg text-lg md:text-xl font-bold text-white 
             bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 
             shadow-lg"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  Elevate your business with cutting-edge websites & apps!
</motion.div>



      {/* Animated Buttons Section with Flowing Gradient Animation */}
     {/* Animated Buttons Section */}
{/* Buttons Section */}
<div className="mt-8 flex flex-col md:flex-row gap-8">
  {["Services", "Contact", "Pricing"].map((text, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-full md:w-auto"
    >
      <Link
        to={`/${text.toLowerCase().replace(" ", "")}`}
        className="px-6 py-3 rounded-md text-lg font-semibold transition-all duration-300 
                   bg-blue-500 text-white hover:bg-blue-800 
                   shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        {text}
      </Link>
    </motion.div>
  ))}
</div>


      {/* Previous Work Section */}
      <div className="mt-12 w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          📂 Our Previous Work
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            { title: "🛒 eCommerce Store", desc: "Built a fully functional online store with secure checkout.", color: "from-blue-400 to-blue-600" },
            { title: "🏢 Business Website", desc: "Designed a professional website for a startup.", color: "from-green-400 to-green-600" },
            { title: "📱 Mobile App UI", desc: "Created a responsive UI for a mobile app.", color: "from-purple-400 to-purple-600" },
          ].map((service, index) => (
            <ServiceCard key={index} title={service.title} desc={service.desc} color={service.color} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
