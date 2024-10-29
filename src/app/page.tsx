import { AboutUs } from "./components/about-us/about-us";
import { HeroSection } from "./components/hero-section/hero-section";
import { InstagramSection } from "./components/instagram-section/instagram-section";
import { OurStudios } from "./components/our-studios/our-studios";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <HeroSection />

      <InstagramSection />

      <AboutUs />

      <OurStudios />
    </div>
  );
}
