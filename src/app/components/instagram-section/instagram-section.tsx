"use client";

import { useTranslation } from "react-i18next";

import { useEffect, useState } from "react";
import { H2 } from "@/app/ui/h2/h2";
// import { InstagramItem } from "./ui/instagram-item";
import { RotatingButton } from "../roatating-button/rotating-button";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";

export interface InstagramPost {
  id: string;
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
}

export default function InstagramSection() {
  const { t } = useTranslation();

  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    async function getInstagramMedia() {
      try {
        const mediaDetails: InstagramPost[] = await fetch(
          "/api/instagram"
        ).then((res) => res.json());

        // const token = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;

        // const mediaResponse = await fetch(
        //   `https://graph.instagram.com/v21.0/me?fields=media&access_token=${token}`
        // );
        // const mediaData = await mediaResponse.json();

        // const mediaItems = mediaData.media?.data.slice(0, 8);

        // if (!Array.isArray(mediaItems)) return;

        // const mediaDetailsPromises = mediaItems.map(async (media) => {
        //   const mediaDetailsResponse = await fetch(
        //     `https://graph.instagram.com/${media.id}?fields=id,media_type,media_url,thumbnail_url,permalink,caption&access_token=${token}`
        //   );
        //   return await mediaDetailsResponse.json();
        // });

        // const mediaDetails: InstagramPost[] = await Promise.all(
        //   mediaDetailsPromises
        // );
        if (mediaDetails) {
          setPosts(mediaDetails);
        }
      } catch (error) {
        console.error("Error fetching Instagram media:", error);
      }
    }

    getInstagramMedia();
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  console.log(posts);

  return (
    <section className="xl:container w-full mt-[100px] sm:mt-[150px] md:mt-[200px] px-[15px] md:px-[45px] xl:px-[0px]">
      <div
        className="flex xsm:items-center gap-3 xsm:gap-5 justify-between md:justify-normal xsm:flex-row flex-col"
        id="showcase"
      >
        <H2>{t("instagram.instagram-showcase")}</H2>

        <a href="https://www.instagram.com/sun.flower.kyiv" target="_blank">
          <p className="text-mainRed text-[13px] leading-[16px] sm:text-[16px] sm:leading-[17.6px] md:text-[25px] md:leading-[30px]">
            {t("instagram.sunflower")}
          </p>
        </a>
      </div>

      <motion.ul
        ref={ref}
        className="mt-5 xsm:mt-10 sm:mt-[50px] md:mt-[60px] grid w-full grid-cols-2 gap-[15px] sm:gap-5 sm:grid-cols-3 xl:grid-cols-4"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        {/* {posts?.map((post) => (
          <InstagramItem key={post.id} post={post} />
        ))} */}
      </motion.ul>

      <div className="mb-[100px] mt-[30px] sm:mt-[40px] sm:mb-[150px] md:mt-[90px] md:mb-[200px] w-full flex justify-center">
        <RotatingButton />
      </div>
    </section>
  );
}
