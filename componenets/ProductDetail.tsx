"use client";
import { Button } from "@/components/ui/button";
import Stripe from "stripe";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useCartStore } from "@/store/cart-store";

interface Props {
  product: Stripe.Product;
}

const ProductDetail = ({ product }: Props) => {
  const { items, addItem } = useCartStore();
  const router = useRouter();
  const price = product.default_price as Stripe.Price;
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number, 
      quantity: 1,
      imageUrl: product.images && product.images[0] ? product.images[0] : null,
    })
  }
  return (
    <>
      <div>
        <Button
          className="flex items-center gap-2 text-white m-4"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </Button>
      </div>

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Image */}
          {product.images && product.images[0] && (
            <div className="flex-shrink-0 w-full md:w-[400px] h-auto border rounded-xl overflow-hidden flex justify-center items-center">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={400}
                height={300}
                className="rounded-xl object-cover"
                priority
              />
            </div>
          )}

          {/* Right: Details */}
          <div className="flex flex-col justify-between space-y-2 w-full">
            <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              {product.description || "No description available."}
            </p>

            <div className="text-2xl font-semibold text-green-600">
              {product.default_price && product.default_price.unit_amount
                ? `$${(product.default_price.unit_amount / 100).toFixed(2)}`
                : "Price not available"}
            </div>

            {/* Quantity */}
            <div className="flex items-center">
              <Button className="px-4">-</Button>
              <h2 className="mx-6 font-bold text-2xl">{quantity}</h2>
              <Button onClick={onAddItem} className="px-4">+</Button>
            </div>

            <Button className="w-full py-3 text-lg font-medium  text-white rounded-xl transition duration-200">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
