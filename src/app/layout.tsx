import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const gilroy = localFont({
  src: [
    {
      path: "./assets/fonts/Gilroy-Light.ttf",
      weight: "300",
    },
    {
      path: "./assets/fonts/Gilroy-Regular.ttf",
      weight: "400",
    },
    {
      path: "./assets/fonts/Gilroy-Medium.ttf",
      weight: "500",
    },
    {
      path: "./assets/fonts/Gilroy-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./assets/fonts/Gilroy-Bold.ttf",
      weight: "700",
    },
    {
      path: "./assets/fonts/Gilroy-ExtraBold.ttf",
      weight: "900",
    },
  ],
  variable: "--font-gilroy",
});

const cassandra = localFont({
  src: [
    {
      path: "./assets/fonts/Cassandra.ttf",
      weight: "300",
    },
    {
      path: "./assets/fonts/Cassandra.ttf",
      weight: "400",
    },
  ],
  variable: "--font-cassandra",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SUNFLOWER",
  description:
    "SUNFLOWER пропонує найкрасивіші букети та квіткові композиції для будь-якої нагоди. Доставка по Києву.",
  url: "https://sun-flower.shop",
  logo: "https://sun-flower.shop/icon.svg",
  image: "https://sun-flower.shop/icon.svg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Предславинська 55",
    addressLocality: "Київ",
    postalCode: "01601",
    addressCountry: "UA",
  },
  telephone: "+380669928410",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    ratingCount: "101",
  },
  sameAs: ["https://www.instagram.com/sun.flower.kyiv"],
};

export const metadata: Metadata = {
  title: "SUNFLOWER - поцілунки після квітів",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon-dark.png",
        href: "/images/favicon-dark.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-light.png",
        href: "/images/favicon-light.png",
      },
    ],
  },
  description:
    "SUNFLOWER пропонує найкрасивіші букети та квіткові композиції для будь-якої нагоди. Здійснюємо доставку по Києву та області. Найсвіжіші квіти за найкращою ціною по місту. Власні постачання. Швидка доставка.",
  keywords:
    "sunflower, sunflower квітковий, sunflower магазин, букеты, цветы, цветочный, доставка цветов, розы, пионы, гортензии, квіти, букети, доставка квітів, квітковий магазин, Київ, замовлення квітів, флористика, весільні букети, квіткові композиції, корпоративні подарунки, доставка квітів по Києву, квіти на свято, букети з троянд, замовити букет онлайн, свіжі квіти, букети на день народження, квіти на весілля, доставка квітів на замовлення, квіткові сервіси, композиції з квітів, покупки квітів, квітковий бізнес, оформлення квітами, букети на замовлення, інтернет-магазин квітів, поради щодо вибору квітів, святкові квіти, доставка в офіс, букети з лілеї, замовлення святкових квітів, букеты Киев, доставка цветов Киев, букеты на заказ, доставка цветов на день рождения, цветы для свадьбы, оформление свадебных букетов, флорист для свадьбы, заказ цветов онлайн, букеты для дома, оформление интерьера цветами, подарок на юбилей, оформление цветов для корпоратива, доставка цветов в офис",
  authors: [{ name: "SUNFLOWER" }],
  openGraph: {
    title: "SUNFLOWER - поцілунки після квітів",
    description:
      "SUNFLOWER - найкращі квіти для тебе. Доставка по Києву та області. Найкращі ціни та якість.",
    url: "https://sun-flower.shop",
    images: ["/icon.svg"],
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "SUNFLOWER - Квітковий магазин в Києві",
  //   description:
  //     "SUNFLOWER - найкращі квіти для тебе. Доставка по Києву та області. Найкращі ціни та якість.",
  //   images: ["/icon.svg"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cassandra.variable} ${gilroy.variable} font-gilroy bg-white text-mainBlack`}
      >
        {/* <script
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
        /> */}

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MPHL6NC5');
            `,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MPHL6NC5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager */}

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (c, s, q, u, a, r, e) {
        c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
        c._hjSettings = { hjid: a };
        r = s.getElementsByTagName('head')[0];
        e = s.createElement('script');
        e.async = true;
        e.src = q + c._hjSettings.hjid + u;
        r.appendChild(e);
    })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 5272915);
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GoogleAnalytics gaId="G-6QT2LR9HSE" />

        {children}
      </body>
    </html>
  );
}
