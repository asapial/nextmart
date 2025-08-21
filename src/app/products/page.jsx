"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaTag, FaDollarSign, FaBoxes, FaInfoCircle } from "react-icons/fa";
import SectionContainer from "@/Utils/SectionContainer";
import { getTheProducts } from "./product";
import Image from "next/image";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading,setLoading]=useState(true);

  // Fetch products from API
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

  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <SectionContainer>
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
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition"
              >
                {/* Product Image */}
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={400}
                    
                  />
                ) : (
                  <div className="w-full h-48 flex items-center justify-center bg-gray-100 text-gray-400">
                    No Image
                  </div>
                )}

                {/* Product Info */}
                <div className="p-5 space-y-3">
                  <h2 className="text-xl font-semibold">{product.name}</h2>

                  {/* Category */}
                  <p className="flex items-center gap-2 text-sm text-gray-500">
                    <FaTag className="text-[#00b86b]" /> {product.category}
                  </p>

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
                  <p className="flex items-start gap-2 text-gray-600 text-sm line-clamp-2">
                    <FaInfoCircle className="mt-0.5 text-gray-400" />
                    {product.description}
                  </p>

                  {/* Details Button */}
                  <Link
                    href={`/products/${product._id}`}
                    className="inline-block w-full text-center mt-4 px-4 py-2 bg-gradient-to-r from-[#00ff87] to-[#60efff] text-white font-semibold rounded-lg hover:opacity-90 transition"
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
