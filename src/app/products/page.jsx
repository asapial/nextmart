"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaDollarSign, FaBoxes, FaInfoCircle } from "react-icons/fa";
import SectionContainer from "@/Utils/SectionContainer";
import { getTheProducts } from "./product";
import Image from "next/image";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getTheProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <h1 className="text-center py-20 text-xl font-semibold"><span className="loading loading-spinner text-secondary"></span></h1>
    );
  }

  return (
    <SectionContainer className=" min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-10">
          🛍️ Explore Our Products
        </h1>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">
            No products available. Add some!
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition flex flex-col"
              >
                {/* Product Image */}
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <div className="w-full h-64 flex items-center justify-center bg-gray-100 text-gray-400">
                    No Image
                  </div>
                )}

                {/* Product Info */}
                <div className="flex flex-col justify-between p-5 flex-1">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">{product.name}</h2>

                    {/* Categories as buttons */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {product.category.map((cat, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-[#00ff87] to-[#60efff] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition-transform cursor-pointer"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <p className="flex items-center gap-2 text-lg font-bold text-[#00b86b]">
                      <FaDollarSign /> ${product.price}
                    </p>

                    {/* Stock */}
                    <p
                      className={`flex items-center gap-2 text-sm ${
                        product.stock > 0 ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      <FaBoxes />
                      {product.stock > 0
                        ? `${product.stock} available`
                        : "Out of stock"}
                    </p>

                    {/* Description */}
                    <p className="flex items-start gap-2 text-gray-600 text-sm line-clamp-3">
                      <FaInfoCircle className="mt-0.5 text-gray-400" />
                      {product.description}
                    </p>
                  </div>

                  {/* Details Button */}
                  <Link
                    href={`/products/${product._id}`}
                    className="mt-4 w-full text-center px-4 py-2 bg-gradient-to-r from-[#00ff87] to-[#60efff] text-white font-semibold rounded-lg hover:opacity-90 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </SectionContainer>
  );
};

export default ProductsPage;
