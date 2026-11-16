import { notFound } from "next/navigation";
import ProductDetail from "./product-detail";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [{ slug: "difusor-efecto-llama" }];
}

export const dynamicParams = false;

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  if (slug !== "difusor-efecto-llama") {
    notFound();
  }

  return <ProductDetail />;
}
