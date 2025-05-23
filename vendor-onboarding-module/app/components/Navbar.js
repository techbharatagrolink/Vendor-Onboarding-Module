"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { showToast } = useToast();
  const { data, error, isLoading } = useSWR("/api/auth/status", fetcher, {
    refreshInterval: 0,
    revalidateOnFocus: false,
    revalidateOnMount: true,
    fallbackData: { isAuthenticated: false },
  });

  const isAuthenticated = data?.isAuthenticated ?? false;

  console.log(
    "Navbar: isLoading=",
    isLoading,
    "isAuthenticated=",
    isAuthenticated,
    "error=",
    error
  );

  if (error) {
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
        router.push("/");
        router.refresh();
      } else {
        showToast({ type: "error", message: "Logout failed" });
      }
    } catch (error) {
      showToast({ type: "error", message: "Network error during logout" });
      console.error("Navbar: Logout error:", error);
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-card px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-appText">
            <button onClick={() => router.push("/")} className="cursor-pointer">
              <Image
                src="/logo1.svg"
                alt="Logo"
                width={140}
                height={40}
                className="mr-3"
              />
            </button>
            {!isAuthenticated ? (
              <div className="hidden md:flex space-x-6 ml-6">
                <Link href="/SellOnline" className="font-medium">
                  Sell Online
                </Link>
                <Link href="/" className="font-medium">
                  Fees and Commission
                </Link>
                <Link href="/Grow" className="font-medium">
                  Grow
                </Link>
                <Link href="/Learn" className="font-medium">
                  Learn
                </Link>
              </div>
            ) : null}
          </div>
          <div className="hidden md:flex space-x-4">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="text-appGreen font-bold"
              >
                LOGOUT
              </button>
            ) : (
              <>
                <button
                  onClick={() => setShowLogin(true)}
                  className="cursor-pointer text-appText font-medium my-auto"
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
              className="text-3xl text-appText"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 text-appText text-center">
            {!isAuthenticated ? (
              <>
                <Link href="/SellOnline" className="block font-medium">
                  Sell Online
                </Link>
                <Link href="/" className="block font-medium">
                  Fees and Commission
                </Link>
                <Link href="/Grow" className="block font-medium">
                  Grow
                </Link>
                <Link href="/Learn" className="block font-medium">
                  Learn
                </Link>
                <button
                  onClick={() => setShowLogin(true)}
                  className="block mx-auto font-medium"
                >
                  Login
                </button>
                <Link
                  href="/register"
                  className="block text-center text-black bg-appYellow hover:bg-appDarkYellow hover:text-white transition duration-200 px-5 py-3 rounded-sm font-bold"
                >
                  Start Selling
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="block mx-auto font-medium text-appGreen"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>
      <LoginModal
        key={showLogin ? "login-modal-open" : "login-modal-closed"}
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
      />
    </>
  );
}

