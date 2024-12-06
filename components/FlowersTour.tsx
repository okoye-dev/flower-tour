"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export type Flower = {
  id: number;
  name: string;
  image: string;
  description: React.ReactNode;
  extras?: React.ReactNode;
};

type FlowersTourProps = {
  config: Flower[];
};

const FlowersTour: React.FC<FlowersTourProps> = ({ config }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setImageLoaded(false); // Reset loading state for the next image
    if (currentIndex === config.length - 1) {
      return router.push("/end-of-tour");
    }
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const currentFlower = config[currentIndex];

  return (
    <div className="flex justify-center items-center py-10 relative overflow-hidden">
      <Image
        src={"/confetti.svg"}
        alt=""
        width={1000}
        height={1000}
        className="absolute rotate-90 scale-[2.75] opacity-50 z-10"
      />

      <div className="flex flex-col items-center justify-center min-h-screen px-4 gap-3 max-w-md z-20 transition-all duration-300">
        <motion.div
          key={currentFlower.id}
          className={`rounded-[40px] overflow-hidden flex items-center justify-center relative ${
            !imageLoaded ? "bg-pink-200 animate-pulse" : ""
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={currentFlower.image}
            alt={currentFlower.name}
            width={1000}
            height={1000}
            className="min-w-[22rem] h-80 object-cover"
            onLoad={() => setImageLoaded(true)}
          />

          <Link
            href={`https://www.pexels.com/search/${currentFlower.name}%20flower/`}
            className="absolute bg-blue-200/30 bottom-3 right-3 p-3 rounded-full backdrop-blur-sm text-xs"
          >
            <Image src={"/images/arrow.svg"} alt="" width={20} height={20} />
          </Link>
        </motion.div>

        <section className="flex flex-col gap-3 bg-pink-600/10 rounded-[40px] p-3 backdrop-blur-sm transition-all duration-300">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="bg-blue-500/20 backdrop-blur-md  rounded-3xl p-3 w-full flex justify-center items-center transition-all duration-300"
          >
            <motion.h2
              key={`${currentFlower.id}-name`}
              className="text-3xl flex justify-center items-center font-bold mb-2 text-center bg-gradient-to-tr from-blue-500 via-white/70 to-[60%] via-[40%] to-pink-500 text-transparent bg-clip-text pt-2 transition-all duration-300 font-eagle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 2 }}
            >
              {currentFlower.name}
            </motion.h2>
          </motion.div>

          <motion.div
            key={`${currentFlower.id}-desc`}
            className="text-indigo-300 pl-1 mb-2 transition-all duration-300"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {currentFlower.description}
          </motion.div>

          <motion.div
            key={`${currentFlower.id}-extras`}
            className={`text-sm text-pink-300 border border-white/30 rounded-3xl bg-pink-300/30 p-4 ${
              currentFlower.extras ? "" : "hidden"
            }`}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {currentFlower.extras}
          </motion.div>

          <button
            onClick={handleNext}
            className="px-6 py-3 bg-purple-500 text-white rounded-full text-xl"
          >
            Next
          </button>
        </section>
      </div>
    </div>
  );
};

export default FlowersTour;
4;
