"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type Flower = {
  id: number;
  name: string;
  image: string;
  description: React.ReactNode;
};

type FlowersTourProps = {
  config: Flower[];
};

const FlowersTour: React.FC<FlowersTourProps> = ({ config }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % config.length);
  };

  const currentFlower = config[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 bg-gray-100">
      <motion.img
        key={currentFlower.id}
        src={currentFlower.image}
        alt={currentFlower.name}
        className="w-64 h-64 object-cover rounded-full shadow-lg mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      />

      <motion.h2
        key={`${currentFlower.id}-name`}
        className="text-2xl font-bold mb-2 text-center text-blue-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {currentFlower.name}
      </motion.h2>

      <motion.div
        key={`${currentFlower.id}-desc`}
        className="text-center text-gray-700 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {currentFlower.description}
      </motion.div>

      <button
        onClick={handleNext}
        className="px-6 py-2 bg-blue-500 text-white rounded-full shadow-lg"
      >
        Next
      </button>
    </div>
  );
};

export default FlowersTour;
