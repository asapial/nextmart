"use client";
import { useEffect, useState } from "react";
import SectionContainer from "@/Utils/SectionContainer";
import { getSixData } from "./product";
import { motion } from "framer-motion";
import {
  FaBoxOpen,
  FaDollarSign,
  FaInfo,
  FaTag,
  FaThLarge,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getSixData();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <SectionContainer className="bg">
      <section className="py-10">
        <h2 className="text-3xl text-green-900 font-bold text-center mb-8 flex items-center justify-center gap-3">
          <FaBoxOpen className="text-green-500" /> {/* Icon */}
          <Typewriter
            words={[
              "Our Products",
              "Check Out The Latest Items",
              "Amazing Deals Await!",
            ]}
            loop={0} // 0 = infinite
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">
            No products available. Add some!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, idx) => (
              <motion.div
                key={product._id}
                className="relative group rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 80 }}
              >
                {/* Product Image */}
                <div className="w-full h-96 relative overflow-hidden">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.productName}
                      fill
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                      No Image
                    </div>
                  )}

                  {/* Stock Badge */}
                  <span
                    className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full shadow-md ${
                      product.stock > 0
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {product.stock > 0
                      ? `${product.stock} in stock`
                      : "Out of stock"}
                  </span>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-5">
                    <div className="space-y-3">
                      {/* Product Name */}
                      <h2 className="text-lg font-bold flex items-center gap-2">
                        <FaTag /> {product.productName}
                      </h2>

                      {/* Categories */}
                      <div className="flex flex-wrap gap-2">
                        {product.productCategory?.map((cat, idx) => (
                          <span
                            key={idx}
                            className="flex items-center gap-1 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold"
                          >
                            <FaThLarge /> {cat}
                          </span>
                        ))}
                      </div>

                      {/* Price */}
                      <p className="flex items-center gap-2 text-lg font-bold text-green-300">
                        <FaDollarSign /> ${product.productPrice}
                      </p>

                      {/* Short Description */}
                      <p className="flex items-start gap-2 text-sm text-gray-200 line-clamp-3 text-justify">
                        <FaInfo />
                        {product.productDescription}
                      </p>
                    </div>

                    {/* Details Button */}
                    <Link
                      href={`/products/${product._id}`}
                      className="w-full text-center px-4 py-2 bg-gradient-to-r from-[#00ff87] to-[#60efff] text-white font-semibold rounded-lg hover:opacity-90 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </SectionContainer>
  );
};

export default ProductSection;
