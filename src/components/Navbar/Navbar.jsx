import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

function Navbar() {
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="">Home</Link>
      </li>
      <li>
        <Link href="">Home</Link>
      </li>
    </>
  );
  return (
    <>
      <Marquee
        speed={60}
        gradient={false}
        className="py-2 bg-black text-white"
      >
        <p className="px-10">Free Shipping on All Orders Over $50</p>
        <p className="px-10">New Winter Collection 2025 — Available Now</p>
        <p className="px-10">
          Flat 20% Off on First Purchase — Use Code: WELCOME20
        </p>
        <p className="px-10">Premium Quality Clothes at Affordable Prices</p>
      </Marquee>

      <div className="navbar bg-base-100 shadow-sm  py-3 px-2">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>
          <a className="text-3xl">Cloth Mania</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
