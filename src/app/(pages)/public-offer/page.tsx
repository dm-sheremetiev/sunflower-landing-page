"use client";

import dynamic from "next/dynamic";

const PublicOffer = dynamic(
  () => import("@/app/components/public-offer/public-offer"),
  {
    ssr: false,
  }
);

export default function Page() {
  return <PublicOffer />;
}
