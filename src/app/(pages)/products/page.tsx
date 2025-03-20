"use client";

import dynamic from "next/dynamic";

const HolidayOffers = dynamic(
  () => import("@/app/components/holiday-offers/holiday-offers"),
  {
    ssr: false,
  }
);

export default function Page() {
  return <HolidayOffers />;
}
