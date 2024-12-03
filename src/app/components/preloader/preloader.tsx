import Lottie from "lottie-react";
import groovyWalkAnimation from "@/app/assets/lottie/tree.json";

export default function Preloader() {
  return (
    <div className="bg-mainPink fixed top-0 left-0 right-0 bottom-0 z-[1000] flex items-center justify-center">
      <div className="w-[300px] h-[300px]">
        <Lottie animationData={groovyWalkAnimation} loop={true} />
      </div>
    </div>
  );
}
