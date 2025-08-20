"use client";
import React from "react";
import Lottie from "lottie-react";
import shopAnimation from "../../../public/Animation/Product.json";

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 bg-gradient-to-r from-[#00ff87] to-[#60efff] ">
      {/* Left Side: Text */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Welcome to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
            NextMart
          </span>
        </h1>
        <p className="mt-4 text-lg text-white/90">
          Discover products, explore details, and manage your store with ease.
          Secure. Simple. Smart.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <button className="px-6 py-3 bg-white text-[#00ff87] font-semibold rounded-xl shadow-md hover:scale-105 transition">
            Explore Products
          </button>
          <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#00ff87] transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Side: Lottie Animation */}
      <div className="w-[300px] md:w-[450px] mt-10 md:mt-0">
        <Lottie animationData={shopAnimation} loop={true} />
      </div>
    </section>
  );
};

export default Banner;
