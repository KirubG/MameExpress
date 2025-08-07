"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Stripe from "stripe";

interface Props {
  products: Stripe.Product;
}

const ProductList = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch =
      product.description?.toLowerCase().includes(term) || false;
    return nameMatch || descriptionMatch;
  });
  return (
    <div>
      <div className="w-full">
        <input
          type="text"
          placeholder="Search Products ...."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex justify-between items-center mx-16 mt-8 outline-1 outline-gray-300 p-4 rounded-lg"
        />
      </div>
      <h1 className="text-3xl font-semibold mx-16 mt-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-16 mt-8">
        {filteredProducts.map((product: Stripe.Product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <Link href={`/products/${product.id}`}>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              {product.images && product.images[0] && (
                <Image
                  width={192}
                  height={192}
                  src={product.images[0]}
                  alt={product.name}
                  className="w-48 h-48 object-cover mt-4"
                />
              )}
              <div className="flex items-center justify-between mt-4">
                <p>
                  {product.default_price && product.default_price
                    ? `$${(product.default_price.unit_amount / 100).toFixed(2)}`
                    : "Price not available"}
                </p>
                <Button>
                  <Link href={`/products/${product.id}`}>View Detail </Link>
                </Button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
