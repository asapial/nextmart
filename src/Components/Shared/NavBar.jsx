"use client";
import React from "react";
import NamePlate from "../NamePlate/NamePlate";
import Link from "next/link";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const session = useSession();
  console.log(session);
  const menu = (
    <>
      <li>
        <Link href={"/addProduct"}> Add Product</Link>
      </li>
      <li>
        <Link href={"/products"}> All Product</Link>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bgnav ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menu}
            </ul>
          </div>
          <div className="btn btn-ghost text-3xl">
            <NamePlate></NamePlate>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end flex gap-5">
          <Link className="btncss " href={"/authentication/register"}>
            Register
          </Link>
          <Link className="btncss" href={"/authentication/signin"}>
            Login
          </Link>

          <div className="tooltip  tooltip-bottom ">
            <div className="tooltip-content">
              <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">
                {session?.data?.user?.name}
              </div>
            </div>
            <button className="">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                  <img
                    src={`${
                      session?.data?.user?.image ||
                      "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                    }`}
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
