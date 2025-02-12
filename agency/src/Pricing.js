import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
      {/* Gradient Title */}
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
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Title with Gradient */}
      <h1 className="text-4xl font-bold text-center 
                     bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300 
                     text-transparent bg-clip-text">
        💰 Our Pricing
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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
  );
};

export default Pricing;
