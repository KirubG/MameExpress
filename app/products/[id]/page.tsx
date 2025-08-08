import { stripe } from "@/lib/stripe";
import ProductDetail from "@/components/ProductDetail";

export default async function ProductsPage({
  params,
}: {
  params: { id?: string };
}) {
  const id = params.id!; // or handle undefined if necessary

  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product));

  return (
    <div>
      <ProductDetail product={plainProduct} />
    </div>
  );
}
