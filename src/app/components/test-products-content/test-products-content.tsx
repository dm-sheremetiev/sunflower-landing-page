"use client";

import AppProvider from "@/app/providers/AppProvider";
import Preloader from "../preloader/preloader";
import Header from "../header/header";
import DiscountBanner from "../discount-banner/discount-banner";
import { ProductsList } from "../products-content/components/products-list/products-list";

export default function HolidayOffers() {
  return (
    <main className="w-full h-full flex flex-col items-center">
      <Preloader />

      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,t,u,c){
                var s=d.createElement(t),j=d.getElementsByTagName(t)[0];
                s.src=u;
                s["async"]=true;
                s.defer=true;
                s.onload=function(){KeyCRM.render(c);};
                j.parentNode.insertBefore(s,j)
              })(window, document, "script","https://chat.key.live/bundles/widget.min.js",{token:"ad043bcc-dc46-4deb-8088-9d5e24bb92f5"});`,
        }}
      />

      <AppProvider>
        <Header isExternal />

        <DiscountBanner />

        <ProductsList selectedType={"test"} />
      </AppProvider>
    </main>
  );
}
