"use client"; // Next.js 13+ app directory হলে

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
const provider = new GoogleAuthProvider();
// AuthContext create
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Login function
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // SignUp function
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () =>{
    return signInWithPopup(auth, provider)
  }
  // Logout function
  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, loading,googleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access
export const useAuth = () => useContext(AuthContext);
