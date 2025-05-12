"use client";
import { useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

import LoginModal from "./LoginModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background shadow-card px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo + Links */}
          <div className="flex items-center text-appText">
            <Image
              src="/logo1.svg"
              alt="Logo"
              width={140}
              height={40}
              className="mr-3"
            />
            <div className="hidden md:flex space-x-6 ml-6">
              <a href="/" className="font-medium">
                Sell Online
              </a>
              <a href="/" className="font-medium">
                Fees and Commission
              </a>
              <a href="/" className="font-medium">
                Grow
              </a>
              <a href="#" className="font-medium">
                Learn
              </a>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <button
              // href="/"
              onClick={() => setShowLogin(true)}
              className="text-appText font-medium my-auto"
            >
              Login
            </button>
            <a
              href="/register"
              className="text-black font-bold bg-appYellow hover:bg-appDarkYellow hover:text-white transition duration-200 px-5 py-3 rounded-sm"
            >
              Start Selling
            </a>
          </div>

          {/* Hamburger Menu (Mobile) */}
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 text-appText text-center">
            <a href="/" className="block font-medium ">
              Sell Online
            </a>
            <a href="/" className="block font-medium">
              Fees and Commission
            </a>
            <a href="/" className="block font-medium">
              Grow
            </a>
            <a href="#" className="block font-medium">
              Learn
            </a>
            <button
              onClick={() => setShowLogin(true)}
              href="/"
              className="block font-medium"
            >
              Login
            </button>
            <a
              href="/register"
              className="block text-center text-black bg-appYellow hover:bg-appDarkYellow hover:text-white transition duration-200 px-5 py-3 rounded-sm font-bold"
            >
              Start Selling
            </a>
          </div>
        )}
      </nav>
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
}
