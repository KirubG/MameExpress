import Carousel from "@/components/Carousel";
import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import { log } from "console";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div>
      <section className="h-[25rem]">
        <div className="flex items-center justify-between bg-slate-100 mx-16 my-10 p-6 h-full">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">
              Welcome to <span className="text-red-500">Mame</span>
              <span className="font-semibold">Express</span>
            </h2>
            <p className="text-slate-500">
              discover the latest products at best prices
            </p>
            <Button asChild variant={"default"}>
              <Link href="/products">Browse All Products</Link>
            </Button>
          </div>
          <Carousel products={products.data} />
          {/* <Image
            alt="Banner Image"
            width={300}
            height={300}
            src={products.data[0].images[0]}
          /> */}
        </div>
      </section>
      <section>{/* <Carousel products={products.data} />     */}</section>
    </div>
  );
};

export default page;
