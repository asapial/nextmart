"use client";
import { useEffect, useState } from "react";
import { getSixData } from "./product";
import SectionContainer from "@/Utils/SectionContainer";

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
    <SectionContainer>
      <section className="">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition"
              >
                <img
                  src={product.image || "/placeholder.png"}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-lg font-bold mt-2">${product.price}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </SectionContainer>
  );
};

export default ProductSection;
