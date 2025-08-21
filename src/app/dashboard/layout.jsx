// DashboardLayout.jsx
"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaBoxOpen,
  FaCog,
} from "react-icons/fa";

const DashboardLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const menuLink = (
    <>
      <li className="flex items-center gap-2 px-4 py-2 hover:bg-green-700 cursor-pointer">
        <Link href={"/dashboard/addProduct"} className="flex items-center justify-center gap-5">
          <FaHome /> {!isCollapsed && "Home"}
        </Link>
      </li>
      <li className="flex items-center gap-2 px-4 py-2 hover:bg-green-700 cursor-pointer">
        <FaUser /> {!isCollapsed && "Users"}
      </li>
      <li className="flex items-center gap-2 px-4 py-2 hover:bg-green-700 cursor-pointer">
        <FaBoxOpen /> {!isCollapsed && "Products"}
      </li>
      <li className="flex items-center gap-2 px-4 py-2 hover:bg-green-700 cursor-pointer">
        <FaCog /> {!isCollapsed && "Settings"}
      </li>
    </>
  );

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isCollapsed ? "w-16" : "w-2/12"
        } bg-[#00ff88a5] text-white transition-all duration-300 flex flex-col`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-4 focus:outline-none flex items-center justify-center"
        >
          {isCollapsed ? <FaBars size={20} /> : <FaTimes size={20} />}
        </button>

        {/* Sidebar Items */}
        <ul className="flex flex-col gap-4 mt-4">{menuLink}</ul>
      </div>

      {/* Main Content */}
      <div className="w-10/12 p-5">
        {children || <div className="">Welcome to Dashboard</div>}
      </div>
    </div>
  );
};

export default DashboardLayout;
