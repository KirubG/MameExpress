import { stripe } from "@/lib/stripe";
import ProductDetail from "@/components/ProductDetail";
import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const ProductsPage = async ({ params }: PageProps) => {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product));

  return (
    <div>
      <ProductDetail product={plainProduct} />
    </div>
  );
};

export default ProductsPage;
