"use client";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/app/components/header/header"), {
  ssr: false,
});

const AppProvider = dynamic(() => import("@/app/providers/AppProvider"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/app/components/footer/footer"), {
  ssr: false,
});

const AboutUs = dynamic(() => import("@/app/components/about-us/about-us"), {
  ssr: false,
});
const ContactsSection = dynamic(
  () => import("@/app/components/contacts-section/contacts-section"),
  {
    ssr: false,
  }
);
const DeliveryConditions = dynamic(
  () => import("@/app/components/delivery-conditions/delivery-conditions"),
  {
    ssr: false,
  }
);
const HeroSection = dynamic(
  () => import("@/app/components/hero-section/hero-section"),
  {
    ssr: false,
  }
);
const InstagramSection = dynamic(
  () => import("@/app/components/instagram-section/instagram-section"),
  {
    ssr: false,
  }
);
const OurStudios = dynamic(
  () => import("@/app/components/our-studios/our-studios"),
  {
    ssr: false,
  }
);

const Preloader = dynamic(
  () => import("@/app/components/preloader/preloader"),
  {
    ssr: false,
  }
);

const DiscountBanner = dynamic(
  () => import("@/app/components/discount-banner/discount-banner"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center">
      <Preloader />

      <AppProvider>
        <Header isHoliday />

        <HeroSection />

        <DiscountBanner />

        <InstagramSection />

        <AboutUs />

        <OurStudios />

        <DeliveryConditions />

        <ContactsSection />

        <Footer />
      </AppProvider>
    </main>
  );
}
