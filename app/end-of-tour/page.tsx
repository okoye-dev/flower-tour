"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getFlowersConfig } from "@/utils/flowers";

const EndOfTour: React.FC = () => {
  const flowers = getFlowersConfig();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 pt-8 pb-12">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-pink-700 mb-6">
        🌸 End of the Tour 🌸
      </h1>
      <p className="text-lg text-center text-balance text-gray-700 mb-10">
        Thank you for exploring this{" "}
        <i className="text-purple-700 font-semibold">
          enchanting world of flowers.
        </i>{" "}
        I hope you found a <i className="text-pink-600 font-semibold">bloom</i>{" "}
        that resonates with your heart, my love. What's next?
      </p>

      {/* Grid of Flowers */}
      <div className="grid grid-cols-3 gap-2 mb-8">
        {flowers.map((flower) => (
          <div
            key={flower.id}
            className="text-center transform hover:scale-105 transition-transform duration-200 bg-pink-100 rounded-3xl"
          >
            <Image
              src={flower.image}
              alt={flower.name}
              width={600}
              height={600}
              className="rounded-3xl object-cover aspect-square"
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center gap-6">
        <Link
          href="https://t.me/Inyun8000"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border text-pink-600 rounded-full border-pink-500 hover:bg-pink-200 duration-300 transition"
        >
          Glaze Me
        </Link>

        <Link href="/tour">
          <span className="px-6 py-4 bg-gradient-to-tr from-indigo-400 to-purple-600 text-white rounded-full shadow-md transition duration-300">
            Re-take Tour
          </span>
        </Link>
      </div>
    </div>
  );
};

export default EndOfTour;
