"use client";
import { useState } from "react";
import SectionContainer from "@/Utils/SectionContainer";
import { ErrorToast, SuccessToast } from "@/Utils/ToastMaker";
import { useRouter } from "next/navigation";
import { handleAddProducts } from "./addProduct";

const AddProductPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productCategory: "",
    image: "",
    stock: "",
    brand: "",
    material: "",
    dimensions: "",
    warranty: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        productCategory: formData.productCategory
          .split(",")
          .map((c) => c.trim()),
        productPrice: Number(formData.productPrice),
        stock: Number(formData.stock),
      };

      const res = await handleAddProducts(payload);

      if (res.success) {
        SuccessToast("✅ Product added successfully!");
        router.push("/dashboard");
      } else {
        ErrorToast("❌ Something went wrong. Product not added.");
      }
    } catch (error) {
      ErrorToast("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionContainer>
      <section className="max-w-3xl mx-auto py-12 px-6">
        <form
          onSubmit={handleSubmit}
          className="bg-base-100 p-6 flex flex-col gap-4 rounded-lg shadow-md"
        >
          <h1 className="text-3xl font-bold text-center mb-6">
            ➕ Add New Product
          </h1>

          {/* Product Name */}
          <div>
            <label className="block font-medium mb-1">Product Name</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00ff87]"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="productDescription"
              value={formData.productDescription}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00ff87]"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium mb-1">Price ($)</label>
            <input
              type="number"
              name="productPrice"
              value={formData.productPrice}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00ff87]"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium mb-1">Category</label>
            <input
              type="text"
              name="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
              placeholder="e.g., Kitchenware, Drinkware, Home Decor"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00ff87]"
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
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00ff87]"
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block font-medium mb-1">Stock Quantity</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00ff87]"
            />
          </div>

          {/* Brand */}
          <div>
            <label className="block font-medium mb-1">Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="e.g., HomeEssentials"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00ff87]"
            />
          </div>

          {/* Material */}
          <div>
            <label className="block font-medium mb-1">Material</label>
            <input
              type="text"
              name="material"
              value={formData.material}
              onChange={handleChange}
              placeholder="e.g., Ceramic, Plastic, Metal"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00ff87]"
            />
          </div>

          {/* Dimensions */}
          <div>
            <label className="block font-medium mb-1">Dimensions</label>
            <input
              type="text"
              name="dimensions"
              value={formData.dimensions}
              onChange={handleChange}
              placeholder="e.g., 4in x 3.5in x 4in"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00ff87]"
            />
          </div>

          {/* Warranty */}
          <div>
            <label className="block font-medium mb-1">Warranty</label>
            <input
              type="text"
              name="warranty"
              value={formData.warranty}
              onChange={handleChange}
              placeholder="e.g., 1 year"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00ff87]"
            />
          </div>

          {/* Submit */}
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
