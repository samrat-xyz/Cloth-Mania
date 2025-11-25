"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, ShoppingBag } from "lucide-react";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext/AuthContext";

export default function Navbar() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false); // profile dropdown
  const { user, logout } = useAuth();

  // Search Function
  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim().length === 0) {
      setResults([]);
      return;
    }

    try {
      const res = await fetch(`http://localhost:3030/search?q=${value}`);
      const data = await res.json();
      setResults(data);
      setShowDropdown(true);
    } catch (error) {
      console.log(error);
    }
  };

  // Nav links
  const links = (
    <>
      <li>
        <Link
          href="/women-collection"
          className={`${
            pathname === "/women-collection"
              ? "text-black border-b-2 border-black font-semibold"
              : "text-black"
          } pb-1`}
        >
          WOMAN
        </Link>
      </li>
      <li>
        <Link
          href="/men-collection"
          className={`${
            pathname === "/men-collection"
              ? "text-black border-b-2 border-black font-semibold"
              : "text-black"
          } pb-1`}
        >
          MAN
        </Link>
      </li>
      <li>
        <Link
          href="/kids-collection"
          className={`${
            pathname === "/kids-collection"
              ? "text-black border-b-2 border-black font-semibold"
              : "text-black"
          } pb-1`}
        >
          KIDS
        </Link>
      </li>
      <li>
        <Link
          href="/boys-collection"
          className={`${
            pathname === "/boys-collection"
              ? "text-black border-b-2 border-black font-semibold"
              : "text-black"
          } pb-1`}
        >
          BOYS
        </Link>
      </li>
      
    </>
  );

  return (
    <div className="sticky top-0 z-50">
      {/* Top Marquee */}
      <Marquee
        speed={60}
        gradient={false}
        className="py-2 bg-black text-white text-sm"
      >
        <p className="px-10">Free Shipping on All Orders Over $50</p>
        <p className="px-10">Winter Collection 2025 — Available Now</p>
        <p className="px-10">Flat 20% Off — Use Code: WELCOME20</p>
      </Marquee>

      {/* Main Navbar */}
      <div className="w-full shadow-sm relative z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* LEFT MENU */}
          <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wide">
            {links}
          </ul>

          {/* LOGO */}
          <Link href="/" className="text-3xl font-bold tracking-widest">
            CLOTH MANIA
          </Link>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-6">
            {/* SEARCH BAR */}
            <div className="hidden md:flex items-center gap-2 border-b pb-1 relative">
              <Search size={18} />
              <input
                type="text"
                placeholder="What are you looking for?"
                className="text-sm outline-none"
                value={query}
                onChange={handleSearch}
                onFocus={() => setShowDropdown(true)}
              />

              {/* SEARCH DROPDOWN */}
              {showDropdown && results.length > 0 && (
                <div className="absolute top-8 left-0 bg-white shadow-lg  w-64 max-h-80 overflow-y-auto rounded-md p-2 z-50">
                  {results.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <img
                        src={item.image}
                        className="w-10 h-10 rounded object-cover"
                        alt={item.name}
                      />
                      <Link href={`/clothes/${item._id}`}>
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-gray-500">${item.price}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Wish */}
            <Link href="" className="text-black pb-1">
              <Heart size={22} className="cursor-pointer" />
            </Link>

            {/* User */}
            {user ? (
              <div className="relative">
                <img
                  src={user.photoURL || "https://i.ibb.co/k2dFLYfY/319222-1-Iv-I0s1421931178.png"} 
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover cursor-pointer"
                  onClick={() => setProfileMenu(!profileMenu)}
                />
                {profileMenu && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg border rounded-md z-50">
                    <Link
                      href=""
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      href=""
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={logout}
                      className="btn rounded-xl w-full text-left px-4 py-2 text-sm bg-black text-white"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-black text-white font-semibold  border py-1 px-2 rounded-lg"
              >
                Login
              </Link>
            )}

            {/* Cart */}
            <Link href="/cart" className="text-black pb-1">
              <ShoppingBag size={22} className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
