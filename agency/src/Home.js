import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import si1 from "./images/pic1.jpeg";
import si2 from "./images/pic2.webp";
import si3 from "./images/pic3.jpg";
import ci1 from "./images/business.jpg";
import ci2 from "./images/ecom.webp";
import ci3 from "./images/no.png";
import ci4 from "./images/dm.jpg";

const Home = () => {
  const [text, setText] = useState("");
  const [expandedCard, setExpandedCard] = useState(null);
  const words = ["Build With Us"];
  let index = 0;
  let charIndex = 0;

  const images = [si1, si2, si3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const typeEffect = () => {
      const currentWord = words[index];
      setText(currentWord.substring(0, charIndex + 1));
      charIndex++;
    };

    const interval = setInterval(typeEffect, 200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(slideshowInterval);
  }, []);

  const cardTexts = [
    {
      title: "Web Development",
      text: "We build fast, responsive websites tailored to your business needs. Our expert developers focus on accessibility, performance, and user engagement.",
    },
    {
      title: "Mobile App Development",
      text: "Our team creates high-performance mobile applications, ensuring seamless user experience across iOS and Android platforms. Let’s turn your ideas into apps!",
    },
    {
      title: "E-Commerce Solutions",
      text: "Boost your sales with our tailored e-commerce platforms. We integrate secure payment gateways, user-friendly interfaces, and seamless shopping experiences.",
    },
    {
      title: "Digital Marketing",
      text: "Enhance your brand’s visibility with our expert digital marketing services. We provide SEO, PPC, and social media marketing strategies to grow your business.",
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <motion.div 
        className="absolute top-0 left-0 w-20 h-20 bg-yellow-400 rounded-full blur-3xl opacity-90"
        animate={{
          x: [Math.random() * 300, Math.random() * -300, Math.random() * 300, 0],
          y: [Math.random() * 200, Math.random() * -200, Math.random() * 200, 0],
          scale: [1, 1.8, 1],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      />
      <nav className="flex flex-wrap justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-xl md:text-3xl font-bold flex items-center space-x-2">
          <span className="text-white">⚡ AG Innovates</span>
        </div>
      </nav>

      {/* hero section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-24 max-w-7xl mx-auto">
        <header className="text-center py-16 md:py-32 md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-center">
            <span className="text-orange-400">{text}</span>
          </h1>
          <p className="text-gray-400 mt-6 text-lg md:text-xl text-center">
            AG Innovates, an agency that builds custom websites <br className="hidden md:block" />
            for your business.
          </p>
          <button className="mt-8 px-6 py-3 bg-gradient-to-r from-gray-700 to-orange-400 text-white rounded-full text-lg md:text-xl hover:scale-110 transition">
            BOOK APPOINTMENT →
          </button>
        </header>

        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <div className="w-full max-w-lg md:max-w-2xl rounded-lg shadow-lg" style={{ boxShadow: "0px 10px 30px rgba(255, 140, 0, 0.5)" }}>
            <img src={images[currentImage]} alt="Slideshow" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
      
      {cardTexts.map((card, index) => (
        <motion.div 
          key={index}
          className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center w-full bg-black mt-8 shadow-lg p-8 cursor-pointer`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onClick={() => setExpandedCard(expandedCard === index ? null : index)}
        >
          <div className="w-full md:w-1/3 flex justify-center">
            <img src={[ci1, ci2, ci3, ci4][index]} alt="Service" className="w-full md:w-2/3 h-40 md:h-52 object-cover rounded-lg" />
          </div>
          <div className="w-full md:w-2/3 p-2 md:p-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center">{card.title}</h2>
            <p className="text-gray-400 mt-4 text-lg md:block hidden text-center">
              {card.text.split(" ").slice(0, 100).join(" ")}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Home;