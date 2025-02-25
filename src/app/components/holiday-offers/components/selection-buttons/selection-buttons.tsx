import { TypeOfProduct } from "@/app/types/product";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { typesOfProduct } from "./typesOfProducts";
import { SelectionButton } from "./selection-button";

interface Props {
  setSelectedType: Dispatch<SetStateAction<TypeOfProduct>>;
  selectedType: TypeOfProduct;
}

export const SelectionButtons = ({ selectedType, setSelectedType }: Props) => {
  const { t } = useTranslation();

  const newTypes = typesOfProduct.map((type) => ({
    ...type,
    title: t(`holiday.${type.typeOfProduct}`),
  }));

  // const tulips = newTypes.filter((item) =>
  //   item.typeOfProduct.includes("tulips")
  // );
  const monoTypes = newTypes.filter(
    (item) =>
      item.typeOfProduct.includes("mono") ||
      item.typeOfProduct.includes("tulips")
  );
  const mixedTypes = newTypes.filter((item) =>
    item.typeOfProduct.includes("mixed")
  );
  const otherTypes = newTypes.filter(
    (item) =>
      !item.typeOfProduct.includes("mixed") &&
      !item.typeOfProduct.includes("mono") &&
      !item.typeOfProduct.includes("tulips")
  );

  return (
    <div className="w-full flex items-center flex-col gap-3 px-[15px] md:px-[45px] xl:px-[0px]">
      <p className="mt-[15px] md:mt-[25px] flex flex-col gap-3 md:gap-5 items-center text-black text-[14px] sm:text-[16px] md:text-[25px] font-medium text-center">
        {t("holiday.choose-type")}
      </p>

      <div className="flex flex-col gap-3 items-center flex-wrap">
        <div className="inline-grid md:grid-cols-4 gap-2 grid-cols-2 items-center">
          {/* {tulips.map((tp) => (
            <SelectionButton
              key={tp.title}
              typeOfProduct={tp}
              setSelectedType={setSelectedType}
              selectedType={selectedType}
            />
          ))} */}
          {monoTypes.map((tp) => (
            <SelectionButton
              key={tp.title}
              typeOfProduct={tp}
              setSelectedType={setSelectedType}
              selectedType={selectedType}
            />
          ))}

          {mixedTypes.map((tp) => (
            <SelectionButton
              key={tp.title}
              typeOfProduct={tp}
              setSelectedType={setSelectedType}
              selectedType={selectedType}
            />
          ))}

          {otherTypes.map((tp) => (
            <SelectionButton
              key={tp.title}
              typeOfProduct={tp}
              setSelectedType={setSelectedType}
              selectedType={selectedType}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
