"use client";

import dynamic from "next/dynamic";

const TestProductsContent = dynamic(
  () => import("@/app/components/test-products-content/test-products-content"),
  {
    ssr: false,
  }
);

export default function Page() {
  return <TestProductsContent />;
}
