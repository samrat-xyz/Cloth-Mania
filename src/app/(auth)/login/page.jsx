"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext/AuthContext";

export default function LoginForm() {
  const { login, googleLogin } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      toast.success("Login Successful!");
      router.push("/"); // navigate to home
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("Login Successful!");
      router.push("/"); // navigate to home
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto my-16 p-8 bg-white text-black rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border border-black rounded-md bg-white text-black placeholder-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 border border-black rounded-md bg-white text-black placeholder-gray-500"
        />
        <button
          onClick={handleLogin}
          className="bg-black text-white p-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
        >
          Login
        </button>
      </form>

      <p className="text-center mt-4">
        Don't have an account?{" "}
        <Link href="/signup" className="text-red-500 underline">
          Sign Up
        </Link>
      </p>

      <hr className="my-6 border-gray-300" />

      <button
        onClick={handleGoogleLogin}
        className="border border-black text-black p-3 w-full rounded-md hover:bg-black hover:text-white transition-colors"
      >
        Continue with Google
      </button>
    </div>
  );
}
