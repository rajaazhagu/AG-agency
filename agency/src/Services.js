import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
      {/* Gradient Title Colors for Each Service */}
      <h2 className={`text-xl font-semibold bg-gradient-to-r ${color} text-transparent bg-clip-text`}>
        {title}
      </h2>
      <p className="mt-2 text-gray-300">{desc}</p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Updated Title with More Colorful Gradient */}
      <h1 className="text-4xl font-bold text-center 
                     bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300 
                     text-transparent bg-clip-text">
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
  );
};

export default Services;
