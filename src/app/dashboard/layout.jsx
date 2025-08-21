"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPen } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { signOut, useSession } from "next-auth/react";
import { ErrorToast } from "@/Utils/ToastMaker";

const DashboardLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      ErrorToast("Please login");
      window.location.href = "/authentication/signin";
    }
  }, [status]);

  if (status === "loading" || !session) {
    return <p className="text-center text-gray-500 min-h-screen"><span className="loading loading-spinner text-secondary"></span></p>;
  }

  const menuLink = (
    <>
      <li className="flex items-center gap-2 px-4 py-2 hover:bg-green-700 cursor-pointer">
        <Link href={"/dashboard"} className="flex items-center justify-center gap-5">
          <MdDashboard /> {!isCollapsed && "Dashboard"}
        </Link>
      </li>
      <li className="flex items-center gap-2 px-4 py-2 hover:bg-green-700 cursor-pointer">
        <Link href={"/dashboard/addProduct"} className="flex items-center justify-center gap-5">
          <FaPen /> {!isCollapsed && "Add Product"}
        </Link>
      </li>
      <li className="flex items-center justify-center">
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="w-[200px] bg-red-500 hover:bg-red-600 text-white font-semibold rounded-2xl py-3 shadow-lg transition-all flex items-center justify-center gap-2"
        >
          <FiLogOut className="text-xl" /> Sign Out
        </button>
      </li>
    </>
  );

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className={`${isCollapsed ? "w-16" : "w-2/12"} bg-[#00ff88a5] text-white transition-all duration-300 flex flex-col`}>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-4 focus:outline-none flex items-center justify-center">
          {isCollapsed ? <FaBars size={20} /> : <FaTimes size={20} />}
        </button>
        <ul className="flex flex-col gap-4 mt-4">{menuLink}</ul>
      </div>

      {/* Main Content */}
      <div className="w-10/12 p-5">{children || <div>Welcome to Dashboard</div>}</div>
    </div>
  );
};

export default DashboardLayout;
