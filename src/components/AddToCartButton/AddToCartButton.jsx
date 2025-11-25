"use client";

import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function AddToCartButton({ cloth }) {
  const router = useRouter();

  const handleAddToCart = async () => {
    try {
      // MongoDB API call
      const res = await fetch("https://cloth-mania-server.vercel.app/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...cloth, quantity: 1 }),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Added to Cart!",
          text: `${cloth.name} has been added to your cart.`,
          showConfirmButton: false,
          timer: 1500,
        }).then(() => router.push("/cart"));
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to add to cart.",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="cursor-pointer bg-black text-white px-6 py-3 rounded-lg"
    >
      Add to Cart
    </button>
  );
}
