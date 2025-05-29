"use client";

import dynamic from "next/dynamic";

const FeedbackPage = dynamic(
  () => import("@/app/components/feedback/feedback"),
  {
    ssr: false,
  }
);

export default function Page() {
  return <FeedbackPage />;
}
