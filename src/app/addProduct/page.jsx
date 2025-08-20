"use client";
import { useState } from "react";
// import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import SectionContainer from "@/Utils/SectionContainer";
import { handleAddProducts } from "./addProduct";

const AddProductPage = () => {
  //   const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productCategory: "",
    image: "",
    stock: "",
  });

  // Redirect unauthenticated users
//   if (status === "unauthenticated") {
//     router.push("/login");
//     return null;
//   }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

    console.log(formData);

    const catArray=formData.category.split(',');
    formData.category=catArray;
    console.log(formData.category)
    handleAddProducts(formData)

    // try {
    //   const res = await fetch("/api/products", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   if (res.ok) {
    //     alert("✅ Product added successfully!");
    //     setFormData({
    //       name: "",
    //       description: "",
    //       price: "",
    //       category: "",
    //       image: "",
    //       stock: "",
    //     });
    //     router.push("/products"); // Redirect after success
    //   } else {
    //     alert("❌ Failed to add product.");
    //   }
    // } catch (error) {
    //   console.error(error);
    //   alert("⚠️ Something went wrong.");
    // } finally {
    //   setLoading(false);
    // }
  };


  return (
    <SectionContainer>
      <section className="max-w-2xl mx-auto py-12 px-6">
        <form
          onSubmit={handleSubmit}
          className="bg-base-100 boxcss flex flex-col gap-3"
        >
          <h1 className="text-3xl font-bold mb-6 text-center">
            ➕ Add New Product
          </h1>
          {/* Product Name */}
          <div>
            <label className="block font-medium mb-1">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff87]"
            />
          </div>

          {/* Product Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff87]"
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium mb-1">Price ($)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff87]"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="e.g., Electronics, Fashion"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff87]"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-medium mb-1">Image URL</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/product.jpg"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff87]"
            />
          </div>

          {/* Stock Quantity */}
          <div>
            <label className="block font-medium mb-1">Stock Quantity</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff87]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#00ff87] to-[#60efff] text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </section>
    </SectionContainer>
  );
};

export default AddProductPage;
