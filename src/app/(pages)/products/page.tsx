"use client";

import dynamic from "next/dynamic";

const HolidayOffers = dynamic(
  () => import("@/app/components/products-content/products-content"),
  {
    ssr: false,
  }
);

export default function Page() {
  return <HolidayOffers />;
}
