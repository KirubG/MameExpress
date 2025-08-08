import { stripe } from "@/lib/stripe";
import ProductDetail from "@/components/ProductDetail";

// async({params} : {params: Promise<{id? : string}>}) => {
//  const id = (await params).id;
export default async function ProductsPage({
  params,
}: {
  params: Promise<{ id?: string }>;
}) {
  const id = (await params).id;
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
