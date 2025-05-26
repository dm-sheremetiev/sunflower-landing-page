"use client";

import dynamic from "next/dynamic";

const PaymentDetails = dynamic(() => import("@/app/components/payment/payment"), {
  ssr: false,
});

export default function Page() {
  return <PaymentDetails />;
}
