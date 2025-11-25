"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      const res = await fetch("http://localhost:3030/cart");
      const data = await res.json();
      setCartItems(data);
    }
    fetchCart();
  }, []);

  const handleRemove = async (id) => {
    try {
      await fetch(`http://localhost:3030/cart/${id}`, { method: "DELETE" });
      setCartItems(cartItems.filter((item) => item._id !== id));
      Swal.fire({
        icon: "success",
        title: "Removed!",
        text: "Item removed from your cart.",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <div className="container mx-auto py-10 px-4 min-h-screen ">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 pl-8">
         Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center text-lg mt-20">Your cart is empty 😔</p>
      ) : (
        <div className="space-y-4 md:space-y-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-lg hover:shadow-xl transition-shadow rounded-xl p-4 sm:p-6"
            >
              <div className="flex items-center w-full sm:w-auto space-x-4 sm:space-x-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-xl border border-gray-200"
                />
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{item.name}</h2>
                  <p className="text-gray-700 mt-1">${item.price}</p>
                  <span className="inline-block mt-2 px-2 py-1 text-xs bg-gradient-to-r from-green-200 to-green-400 text-green-900 rounded-full font-medium">
                    In Cart
                  </span>
                </div>
              </div>

              <div className="mt-3 sm:mt-0 flex justify-end w-full sm:w-auto">
                <button
                  onClick={() => handleRemove(item._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition shadow"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          
        </div>
      )}
    </div>
  );
}

export default CartPage;
