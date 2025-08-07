"use client";
import { useCartStore } from "@/store/cart-store";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

const Page = () => {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white text-center">
      <CheckCircleIcon className="w-20 h-20 text-green-500 mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Payment Successful
      </h1>
      <p className="text-lg text-gray-600 mb-6 max-w-md">
        Thank you for your purchase. Your order has been received and is now
        being processed.
      </p>
      <Link
        href="/products"
        className="bg-black  text-white font-medium py-2 px-6 rounded transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default Page;
