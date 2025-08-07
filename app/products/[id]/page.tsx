// app/products/[id]/page.tsx

import { stripe } from "@/lib/stripe";
import ProductDetail from "@/components/ProductDetail";

export default async function ProductsPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product));

  return (
    <div>
      <ProductDetail product={plainProduct} />
    </div>
  );
}
