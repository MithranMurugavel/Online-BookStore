import React from 'react';
import bannerimg from "../../assets/banner.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="px-5 py-10 flex flex-col md:flex-row-reverse justify-between items-center gap-8 md:gap-12">
      
      {/* Banner Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img 
          src={bannerimg} 
          alt="Banner" 
          className="w-72 sm:w-80 md:w-full h-auto object-contain"
        />
      </div>

      {/* Text & Button */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        
        {/* Heading with Emojis */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium md:font-bold">
          <motion.span
            role="img"
            aria-label="rocket"
            className="text-5xl sm:text-6xl inline-block mx-1"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🚀
          </motion.span>
          Now Release This Week
          <motion.span
            role="img"
            aria-label="party"
            className="text-4xl sm:text-5xl inline-block mx-1"
            animate={{ y: [0, -10, 0], rotate: [5, 10, -10, 5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            🎉
          </motion.span>
        </h1>

        {/* Paragraph */}
       
        <p className="text-gray-700 font-tertiary text-sm sm:text-base md:text-lg max-w-2xl text-justify mx-auto leading-relaxed">
          Got it! You want a search input in a React (JSX) app that remembers past searches and shows them when the user focuses or types in the box. Here’s a simple approach using local storage to persist past searches and display them as suggestions.
        </p> 
        {/* Button */}
        <button className="btn-primary !bg-red-500 hover:!bg-yellow-500 text-white hover:!text-black px-6 py-3 rounded-md mt-2 sm:mt-4 md:mt-6">
          Subscribe
        </button>

      </div>
    </div>
  );
};

export default Banner;
