"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Stripe from "stripe";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  products: Stripe.Product[];
}
const Carousel = ({ products }: Props) => {
  let [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[currentIndex];
  const price = currentProduct.default_price as Stripe.Price;
  return (
    <Card className="mr-24 overflow-hidden shadow-md flex items-center justify-between w-72 h-fit">
      {currentProduct.images && currentProduct.images[0] && (
        <div className="w-48 h-48 ">
          <Image
            src={currentProduct.images[0]}
            alt={currentProduct.name}
            width={500}
            height={500}
            className="transition-opacity duration-500 ease-in-out"
          />
        </div>
      )}
      {/* <CardContent>
        <CardTitle>
          {currentProduct.name} {""}
          {price && price.unit_amount
            ? `$${(price.unit_amount / 100).toFixed(2)}`
            : "Price not available"}
        </CardTitle>
      </CardContent> */}
    </Card>
  );
};

export default Carousel;
