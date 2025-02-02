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

  const monoTypes = newTypes.filter((item) =>
    item.typeOfProduct.includes("mono")
  );
  const mixedTypes = newTypes.filter((item) =>
    item.typeOfProduct.includes("mixed")
  );

  return (
    <div className="w-full flex items-center flex-col gap-3 px-[15px] md:px-[45px] xl:px-[0px]">
      <p className="mt-[15px] md:mt-[25px] flex flex-col gap-3 md:gap-5 items-center text-black text-[14px] sm:text-[16px] md:text-[25px] font-medium text-center">
        {t("holiday.choose-type")}
      </p>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          {monoTypes.map((tp) => (
            <SelectionButton
              key={tp.title}
              typeOfProduct={tp}
              setSelectedType={setSelectedType}
              selectedType={selectedType}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          {mixedTypes.map((tp) => (
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
