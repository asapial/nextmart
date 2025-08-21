"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import SectionContainer from "@/Utils/SectionContainer"; // optional wrapper
import { ErrorToast, SuccessToast } from "@/Utils/ToastMaker";
import { handleRegister } from "./register";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      ErrorToast("Passwords do not match!");
      setLoading(false);
      return;
    }

    const {  confirmPassword, ...payload}=formData;


    const res= await handleRegister(payload);
    console.log(res);

    if(res.success){
        SuccessToast("User registered successfully");
        setLoading(false);
    }
    else
    {
        ErrorToast("Something wrong!");
        setLoading(false);
    }

    // try {
    //   // Call your server API here
    //   console.log("Submitting", formData);
    //   alert("✅ Registration submitted!");
    //   setFormData({ fullName: "", email: "", password: "", confirmPassword: "" });
    // } catch (error) {
    //   console.error(error);
    //   alert("⚠️ Something went wrong.");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <SectionContainer>
      <div className="max-w-md mx-auto mt-12 bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6">📝 Create Account</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-[#00ff87]">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-[#00ff87]">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-[#00ff87]">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-[#00ff87]">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#00ff87] to-[#60efff] text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
          >
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-[#00ff87] font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </SectionContainer>
  );
}
