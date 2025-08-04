import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-100 shadow-md">
      <div className="text-black">
        <Link href={"/"}>
          <span className="text-red-500 text-xl font-bold">Mame</span>Express
        </Link>
      </div>

      <div className="flex space-x-4 text-black font-semibold px-4">
        <Link className=" hover:text-red-500" href="/">
          Home
        </Link>
        <Link className=" hover:text-red-500" href="/products">
          Product
        </Link>
        <Link className=" hover:text-red-500" href="/checkout">
          Checkout
        </Link>
      </div>

      <div>

      </div>
    </nav>
  );
}

export default Navbar