import { FaCartPlus } from "react-icons/fa";
import { AiOutlineDollarCircle } from "react-icons/ai";
import SectionContainer from "@/Utils/SectionContainer";
import { getTheProducts } from "../product";

// ✅ Fetch single product from DB
async function getProduct(id) {
  const products = await getTheProducts();
  return products.find((p) => p._id === id);
}

export default async function ProductDetails({ params }) {
  const product = await getProduct(params?.id || "");

  if (!product) {
    return (
      <div className="text-center py-10 text-red-500 font-semibold text-xl">
        ❌ Product not found
      </div>
    );
  }

  return (
    <SectionContainer className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-10 p-8">
        {/* Left: Product Image */}
        <div className="flex justify-center items-center">
          {product?.image?.startsWith("http") ? (
            <img
              src={product.image}
              alt={product.name || "Product"}
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 object-contain max-h-[500px]"
            />
          ) : (
            <div className="w-full h-64 flex items-center justify-center bg-gray-100 text-gray-400 text-lg rounded-2xl">
              No Image
            </div>
          )}
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product?.name}</h1>
            <p className="text-gray-600 text-lg leading-relaxed">{product?.description}</p>

            {/* Category */}
            <div className="flex flex-wrap gap-3 mt-4">
              {Array.isArray(product.category)
                ? product.category.map((cat, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition-transform cursor-pointer"
                    >
                      {cat}
                    </span>
                  ))
                : (
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                )}
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 mt-6 text-gray-700">
              <AiOutlineDollarCircle className="text-xl text-green-600" />
              <span className="font-medium text-lg">Price:</span>
              <span className="text-2xl font-bold text-green-700">
                ${product?.price}
              </span>
            </div>
          </div>

          {/* Add to Cart */}
          <button className="mt-6 w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all duration-300 text-lg">
            <FaCartPlus className="text-xl" />
            Add to Cart
          </button>
        </div>
      </div>
    </SectionContainer>
  );
}
