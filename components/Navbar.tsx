"use client";
import { useCartStore } from "@/store/cart-store";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const { items } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);
  let cartCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-black text-xl font-bold">
            <Link href="/">
              <span className="text-red-500">Mame</span>Express
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6 font-semibold text-black">
            <Link href="/" className="hover:text-red-500">
              Home
            </Link>
            <Link href="/products" className="hover:text-red-500">
              Product
            </Link>
            <Link href="/checkout" className="hover:text-red-500">
              Checkout
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="relative">
            <Link
              href="/checkout"
              className="relative flex items-center justify-center"
            >
              <ShoppingCartIcon
                width={28}
                height={28}
                className="text-gray-700 hover:text-black transition-colors"
              />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center h-5 w-5 rounded-full bg-red-600 text-white text-xs font-semibold shadow-md">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-black font-semibold">
          <Link
            href="/"
            className="block hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Product
          </Link>
          <Link
            href="/checkout"
            className="block hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Checkout
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
