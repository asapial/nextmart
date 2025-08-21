import { FaCartPlus } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { getTheProducts } from "../product";
import SectionContainer from "@/Utils/SectionContainer";

// ✅ Fetch single product from DB
async function getProduct(id) {
  const products = await getTheProducts();
  return products.find((p) => p._id === id);
}

export default async function ProductDetails({ params}) {
  const product = await getProduct(params?.id || "");

  if (!product) {
    return (
      <div className="text-center py-10 text-red-500 font-semibold text-xl">
        ❌ Product not found
      </div>
    );
  }

  return (
    <SectionContainer className=" bg min-h-screen">
      <div className="">
        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg p-6">
          {/* Left: Image */}
          <div className="flex justify-center items-center">
            {product?.image?.startsWith("http") ? (
              <img src={product.image} alt={product.name || "Product"} />
            ) : (
              <div>No Image</div>
            )}
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">{product?.name}</h1>
            <p className="text-gray-600">{product?.description}</p>

            {/* Category */}
            <div className="flex items-center gap-2 text-gray-700">
              <MdCategory className="text-xl text-indigo-600" />
              <span className="font-medium">Category:</span>
              <span>{product?.category}</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 text-gray-700">
              <AiOutlineDollarCircle className="text-xl text-green-600" />
              <span className="font-medium">Price:</span>
              <span className="text-lg font-semibold text-green-700">
                ${product?.price}
              </span>
            </div>

            {/* Add to Cart */}
            <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl font-medium shadow-md transition-all">
              <FaCartPlus /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
