import { getCurrentSession } from "@/actions/auth";
import SalesCampaignBanner from "@/components/layouts/salesCampaignBanner";
import ProductGrid from "@/components/product/productGrid";
import { getAllProducts } from "@/sanity/lib/client";

export default async function Home() {

  const { user } = await getCurrentSession();

  const products = await getAllProducts();

  return (
    <div>
      <SalesCampaignBanner/>
      <section>
        <ProductGrid products={products}/>
      </section>
    </div>
  );
}