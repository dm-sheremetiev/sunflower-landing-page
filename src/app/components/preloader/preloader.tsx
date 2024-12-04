import Lottie from "lottie-react";
import animation from "@/app/assets/lottie/sunflower-sign.json";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Включаем скролл

    const timer = setTimeout(() => {
      document.body.style.overflow = ""; // Включаем скролл

      setIsFading(true);
      setTimeout(() => setIsVisible(false), 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`bg-white fixed top-0 left-0 right-0 bottom-0 z-[1000] flex items-center justify-center transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full h-full flex items-center justify-center scale-105">
        <Lottie animationData={animation} loop={true} />
      </div>
    </div>
  );
}
