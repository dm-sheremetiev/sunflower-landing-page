"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import AlbumIcon from "@/app/assets/img/svg/instagram-album-icon.svg";
import InstagramVideo from "@/app/assets/img/svg/instagram-reels-icon.svg";
import { InstagramPost } from "../instagram-section";
import classNames from "classnames";

interface Props {
  post: InstagramPost;
}

export const InstagramItem = ({
  post: { media_url, thumbnail_url, permalink, media_type },
}: Props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const isVideo = useMemo(() => media_type === "VIDEO", [media_type]);

  const imageSrc = useMemo(
    () => (isVideo ? thumbnail_url || "" : media_url || thumbnail_url || ""),
    [media_type, media_url, thumbnail_url, isVideo]
  );
  return (
    <a
      href={permalink}
      className="relative h-[205px] xsm:h-[235px] sm:h-[285px] md:h-[435px] xl:h-[500px] max-h-[205px] xsm:max-h-[235px] sm:max-h-[285px] md:max-h-[435px] xl:max-h-[500px] w-full hover:scale-[1.009] transition-all"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        fill
        src={imageSrc}
        alt="inst_photo"
        quality={50}
        className={classNames(
          "object-cover opacity-1 transition-all duration-500",
          {
            "opacity-1": isImageLoaded,
          }
        )}
        onLoad={() => setIsImageLoaded(true)}
      />

      <div className="absolute right-2 top-2 h-5 w-5">
        {isVideo ? <InstagramVideo color="#fff" /> : <AlbumIcon color="#fff" />}
      </div>
    </a>
  );
};
