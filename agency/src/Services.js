import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
      {/* Gradient Title */}
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
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 flex flex-col items-center">
      {/* Updated Title with More Colorful Gradient */}
      <h1 className="text-3xl font-bold text-center 
                     bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300 
                     text-transparent bg-clip-text">
        💼 Previous Works
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {[
          { title: "🌍 Ecommerce Store", desc: "We create modern websites that help businesses grow.", color: "from-blue-400 to-blue-600", link: "Click Here" },
        ].map((service, index) => (
          <ServiceCard key={index} title={service.title} desc={service.desc} color={service.color} delay={index * 0.1} link={service.link} />
        ))}
      </div>
    </div>
  );
};

export default Services;
