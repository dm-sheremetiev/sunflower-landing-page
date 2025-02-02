import { Product } from "@/app/types/product";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { t } = useTranslation();

  const { photo, name, art, variety } = product;

  return (
    <li className="hover:shadow-md transition-all hover:scale-[1.009] rounded-md border-[1px] flex flex-col min-h-[300px]">
      {/* Фото */}
      <LazyLoadImage
        width="100%"
        src={photo}
        alt="inst_photo"
        placeholderSrc="/blur.png"
        className="rounded-md h-[205px] xsm:h-[235px] sm:h-[285px] md:h-[400px] w-full"
      />

      {/* Контент */}
      <div className="p-2 flex flex-col flex-grow">
        <div className="flex flex-col gap-2 flex-grow">
          <p className="text-black text-sm md:text-base break-words">{name}</p>

          <div className="h-[1px] w-full bg-gray-100 my-1" />

          <div className="flex justify-between items-center">
            <p className="text-black text-xs md:text-sm">
              {t("holiday.quantity")}
            </p>
            <p className="text-mainRed text-xs md:text-sm">
              {t("holiday.price")}
            </p>
          </div>

          <ul className="flex flex-col gap-1">
            {variety?.map((varr, index) => (
              <li key={varr.quantity} className="flex flex-col">
                <div className="flex justify-between text-xs md:text-sm break-words gap-2">
                  <div>{varr.quantity}</div>
                  <div>{varr.price}</div>
                </div>

                {index !== variety?.length - 1 && (
                  <div className="h-[1px] w-full bg-gray-100 my-1" />
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="h-[1px] w-full bg-gray-100 my-1" />

        <p className="text-black mt-auto ml-auto text-xs md:text-sm break-words">
          {t("holiday.code")}: <span className="italic">{art}</span>
        </p>
      </div>
    </li>
  );
};
