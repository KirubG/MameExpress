import ProductDetail from "@/components/ProductDetail";
import { stripe } from "@/lib/stripe";
import React from "react";

const productsPage = async ({ params }: { params: { id: string } }) => {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });
        const plainProduct = JSON.parse(JSON.stringify(product));
  return (
    <div>

      <ProductDetail product={plainProduct}/> {/* because this page is server side component it fetch data from the server and pass it to the ProductDetail component */}
    </div>
  );
};

export default productsPage;
