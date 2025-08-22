"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { ErrorToast, SuccessToast } from "@/Utils/ToastMaker";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl: "/",
      });

      console.log("Result from signin page:", result);

      if (result?.error) {
        // ❌ Login failed
        ErrorToast("Invalid email or password");
      } else if (result?.ok) {
        // ✅ Login success
        SuccessToast("Login successful!");
        // Redirect manually if needed
        window.location.href = result.url || "/";
      } else {
        // ⚠️ Unexpected case
        ErrorToast("Something went wrong, please try again");
      }
    } catch (err) {
      console.error("Signin error:", err);
      ErrorToast(err.message || "Something went wrong");
    }
  };

  const handleGoogleSignIn = () => {
    // 🔐 Handle Google sign in (your server logic here)
    console.log("Google sign in clicked");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Welcome Back 👋
        </h2>

        {/* Email/Password Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <MdEmail className="absolute left-3 top-3 text-gray-400 text-xl" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-gray-300 pl-10 pr-3 py-2 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400 text-xl" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-gray-300 pl-10 pr-3 py-2 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>

        {/* Divider
        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">or</span>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        Google Sign In
        <button
          onClick={handleGoogleSignIn}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 py-2 font-semibold text-gray-700 transition hover:bg-gray-100"
        >
          <FcGoogle className="text-2xl" />
          Sign in with Google
        </button> */}

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="/authentication/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </motion.div>
    </div>
  );
}
