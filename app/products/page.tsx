import React from "react";
import { stripe } from "@/lib/stripe";
import ProductList from "@/componenets/ProductList";
const productsPage = async () => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
  return (
    <div>
      <ProductList products={products.data} />
    </div>
  );
};

export default productsPage;
