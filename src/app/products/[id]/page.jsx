
import { FaCartPlus, FaDollarSign, FaTags } from "react-icons/fa";
import { motion } from "framer-motion";
import { getOneProduct} from "../product";
import SectionContainer from "@/Utils/SectionContainer";

// ✅ Fetch single product from DB
// async function getProduct(id) {
//   const products = await getTheProducts();
//   return products.find((p) => p._id === id);
// }

export default async function ProductDetails({ params }) {
  const product = await getOneProduct(params?.id || "");

  if (!product) {
    return (
      <div className="text-center py-10 text-red-500 font-semibold text-xl">
        ❌ Product not found
      </div>
    );
  }

  return (
    <SectionContainer className="min-h-screen bg ">
      <div
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-10 p-8"
        // initial={{ opacity: 0, y: 40 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.6, type: "spring" }}
      >
        {/* Left: Product Image */}
        <div
          className="flex justify-center items-center"
          // whileHover={{ scale: 1.03 }}
          // transition={{ duration: 0.4 }}
        >
          {product?.image?.startsWith("http") ? (
            <img
              src={product.image}
              alt={product.productName || "Product"}
              className="rounded-2xl shadow-lg object-contain max-h-[500px] w-full"
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
            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
              {product?.productName}
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              {product?.productDescription}
            </p>

            {/* Category */}
            <div className="flex flex-wrap gap-3 mt-5">
              {Array.isArray(product.productCategory)
                ? product.productCategory.map((cat, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-2 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md cursor-pointer"
                      // whileHover={{ scale: 1.1 }}
                      // transition={{ type: "spring", stiffness: 200 }}
                    >
                      <FaTags className="text-xs" /> {cat}
                    </span>
                  ))
                : (
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                    {product.productCategory}
                  </span>
                )}
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mt-6 text-gray-700">
              <FaDollarSign className="text-2xl text-green-600" />
              <span className="font-medium text-lg">Price:</span>
              <span className="text-3xl font-extrabold text-green-700">
                {product?.productPrice}
              </span>
            </div>

            {/* Stock Info */}
            <p
              className={`mt-3 text-sm font-semibold ${
                product.stock > 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {product.stock > 0
                ? `${product.stock} items available`
                : "Currently out of stock"}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300 text-lg"
          >
            <FaCartPlus className="text-xl" />
            Add to Cart
          </button>
        </div>
      </div>
    </SectionContainer>
  );
}
