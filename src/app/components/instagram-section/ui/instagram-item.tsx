"use client";

import { useMemo } from "react";

import AlbumIcon from "@/app/assets/img/svg/instagram-album-icon.svg";
import InstagramVideo from "@/app/assets/img/svg/instagram-reels-icon.svg";
import { InstagramPost } from "../instagram-section";
import { sendGAEvent } from "@next/third-parties/google";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  post: InstagramPost;
}

export const InstagramItem = ({
  post: { media_url, thumbnail_url, permalink, media_type },
}: Props) => {
  const isVideo = useMemo(() => media_type === "VIDEO", [media_type]);

  const imageSrc = useMemo(
    () => (isVideo ? thumbnail_url || "" : media_url || thumbnail_url || ""),
    [media_type, media_url, thumbnail_url, isVideo]
  );

  return (
    <a
      href={permalink}
      target="_blank"
      rel="noreferrer"
      onClick={() => sendGAEvent("event", "instagram_item_click")}
    >
      <LazyLoadImage
        width="100%"
        src={imageSrc}
        alt="inst_photo"
        placeholderSrc="/blur.png"
        className="flex relative h-[205px] xsm:h-[235px] sm:h-[285px] md:h-[435px] max-h-[205px] xsm:max-h-[235px] sm:max-h-[285px] md:max-h-[435px] w-full hover:scale-[1.009] transition-all"
      />

      <div className="absolute right-2 top-2 h-5 w-5">
        {isVideo ? <InstagramVideo color="#fff" /> : <AlbumIcon color="#fff" />}
      </div>
    </a>
  );
};
