import { HeroSection } from "./components/hero-section/hero-section";
import { InstagramSection } from "./components/instagram-section/instagram-section";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <HeroSection />

      <InstagramSection />
    </div>
  );
}
