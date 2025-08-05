import ProductDetail from "@/componenets/ProductDetail";
import { stripe } from "@/lib/stripe";
import React from "react";

const productsPage = async ({ params }: { params: { id: string } }) => {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });
  return (
    <div>
      <ProductDetail product={product}/> {/* because this page is server side component it fetch data from the server and pass it to the ProductDetail component */}
    </div>
  );
};

export default productsPage;
