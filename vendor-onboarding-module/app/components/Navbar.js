"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import LoginModal from "./LoginModal";
import Link from "next/link";
import useToast from "@/hooks/useToast";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Navbar: Failed to fetch ${url}: ${res.status}`);
    return { isAuthenticated: false };
  }
  return res.json();
};

// Loading skeleton component
const NavbarSkeleton = () => (
  <div className="hidden md:flex space-x-4">
    <div className="h-6 w-16 bg-gray-200 animate-pulse rounded"></div>
    <div className="h-10 w-24 bg-gray-200 animate-pulse rounded-sm"></div>
  </div>
);

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { showToast } = useToast();
  
  // Use optimistic defaults to prevent layout shift
  const { data, error, isLoading } = useSWR("/api/auth/status", fetcher, {
    refreshInterval: 0,
    revalidateOnFocus: false,
    revalidateOnMount: true,
    fallbackData: { isAuthenticated: false },
    // Add timeout to prevent hanging
    errorRetryCount: 2,
    errorRetryInterval: 1000,
  });

  const isAuthenticated = data?.isAuthenticated ?? false;

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(
      "Navbar: isLoading=",
      isLoading,
      "isAuthenticated=",
      isAuthenticated,
      "error=",
      error
    );
  }

  if (error && process.env.NODE_ENV === 'development') {
    console.error("Navbar: SWR error:", error);
  }

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        showToast({ type: "success", message: "Logged out successfully" });
        // Use window.location for full page refresh to clear all state
        window.location.href = "/";
      } else {
        showToast({ type: "error", message: "Logout failed" });
      }
    } catch (error) {
      showToast({ type: "error", message: "Network error during logout" });
      console.error("Navbar: Logout error:", error);
    }
  };

  // Render navbar immediately with loading states instead of hiding
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-card px-16 py-4 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-appText">
            <button onClick={() => router.push("/")} className="cursor-pointer">
              <Image
                src="/logo1.svg"
                alt="Logo"
                width={140}
                height={40}
                className="mr-3"
                priority // Load logo with high priority
              />
            </button>
            {/* Show navigation links optimistically */}
            {(!mounted || !isAuthenticated) && (
              <div className="hidden md:flex space-x-6 ml-6">
                <Link href="/SellOnline" className="font-medium">
                  Sell Online
                </Link>
                <Link href="/Grow" className="font-medium">
                  Grow
                </Link>
                <Link href="/Learn" className="font-medium">
                  Learn
                </Link>
              </div>
            )}
          </div>
          
          <div className="hidden md:flex space-x-4">
            {!mounted || isLoading ? (
              // Show skeleton while loading
              <NavbarSkeleton />
            ) : isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="text-appGreen font-bold hover:text-appDarkGreen transition duration-200"
              >
                LOGOUT
              </button>
            ) : (
              <>
                <button
                  onClick={() => setShowLogin(true)}
                  className="cursor-pointer text-appText font-medium my-auto hover:text-appGreen transition duration-200"
                >
                  Login
                </button>
                <Link
                  href="/register"
                  className="text-black font-bold bg-appYellow hover:bg-appDarkYellow hover:text-white transition duration-200 px-5 py-3 rounded-sm"
                >
                  Start Selling
                </Link>
              </>
            )}
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-3xl text-appText hover:text-appGreen transition duration-200"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 text-appText text-center">
            {!mounted || isLoading ? (
              // Mobile loading state
              <div className="space-y-4">
                <div className="h-6 w-24 bg-gray-200 animate-pulse rounded mx-auto"></div>
                <div className="h-6 w-20 bg-gray-200 animate-pulse rounded mx-auto"></div>
                <div className="h-6 w-16 bg-gray-200 animate-pulse rounded mx-auto"></div>
                <div className="h-10 w-32 bg-gray-200 animate-pulse rounded mx-auto"></div>
              </div>
            ) : !isAuthenticated ? (
              <>
                <Link 
                  href="/SellOnline" 
                  className="block font-medium hover:text-appGreen transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Sell Online
                </Link>
                <Link 
                  href="/Grow" 
                  className="block font-medium hover:text-appGreen transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Grow
                </Link>
                <Link 
                  href="/Learn" 
                  className="block font-medium hover:text-appGreen transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Learn
                </Link>
                <button
                  onClick={() => {
                    setShowLogin(true);
                    setIsOpen(false);
                  }}
                  className="block mx-auto font-medium hover:text-appGreen transition duration-200"
                >
                  Login
                </button>
                <Link
                  href="/register"
                  className="block text-center text-black bg-appYellow hover:bg-appDarkYellow hover:text-white transition duration-200 px-5 py-3 rounded-sm font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  Start Selling
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="block mx-auto font-medium text-appGreen hover:text-appDarkGreen transition duration-200"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>
      
      {mounted && (
        <LoginModal
          key={showLogin ? "login-modal-open" : "login-modal-closed"}
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
        />
      )}
    </>
  );
}