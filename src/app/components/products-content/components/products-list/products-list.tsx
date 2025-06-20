import { Product, TypeOfProduct } from "@/app/types/product";
import { ProductCard } from "../product-card/product-card";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";

import RiseLoader from "react-spinners/RiseLoader";

interface Props {
  selectedType: TypeOfProduct;
}

export const ProductsList = ({ selectedType }: Props) => {
  const { t } = useTranslation();

  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(false);

  const init = async () => {
    try {
      setIsLoading(true);

      const url = selectedType === 'test' ? "/api/bouquets/test-bouquets" : "/api/bouquets"

      const res: { data: Product[] } = await axios
        .get(url, {
          params: {
            type: selectedType,
          },
        })
        .then((res) => res.data);

      setProducts(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (selectedType) {
      init();
    }
  }, [selectedType]);

  return !products?.length || isLoading ? (
    <div className="w-full flex items-center justify-center my-[100px]">
      <RiseLoader color="#F9462F" />
    </div>
  ) : (
    <section className="xl:container w-full mt-[20px] px-[15px] md:px-[45px] xl:px-[0px] mb-[100px] sm:mb-[150px] md:mb-[200px]">
      <div className="flex flex-col gap-3">
        <h2 className="text-black text-[12px] sm:text-[20px] font-medium w-full">
          {t("holiday.note")}
        </h2>
        <h2 className="text-black text-[12px] sm:text-[20px] font-medium w-full">
          {t("holiday.note-2")}
        </h2>

        <h2 className="text-black text-[15px] sm:text-[25px] font-medium w-full text-center">
          {t("holiday.for-order")}

          <a
            href="https://www.instagram.com/sun.flower.kyiv"
            target="_blank"
            className="text-mainRed"
          >
            @sun_flower_kyiv
          </a>
        </h2>
      </div>

      <ul className="mt-5 xsm:mt-10 sm:mt-[50px] md:mt-[60px] grid w-full grid-cols-2 gap-[15px] sm:gap-5 sm:grid-cols-3 xl:grid-cols-4">
        {products?.length &&
          products.map((product, index) => (
            <ProductCard key={product.art + index} product={product} />
          ))}
      </ul>
    </section>
  );
};
