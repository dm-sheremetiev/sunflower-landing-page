import { ProductType, TypeOfProduct } from "@/app/types/product";
import { cn } from "@/app/utils/styles";
import { Dispatch, SetStateAction } from "react";

interface Props {
  typeOfProduct: ProductType;
  setSelectedType: Dispatch<SetStateAction<TypeOfProduct>>;
  selectedType: TypeOfProduct;
}

export const SelectionButton = ({
  typeOfProduct,
  setSelectedType,
  selectedType,
}: Props) => {
  const handleClick = () => {
    setSelectedType(typeOfProduct.typeOfProduct);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("type", typeOfProduct.typeOfProduct);
    // Обновляем URL без перезагрузки страницы
    window.history.replaceState(null, "", "?" + searchParams.toString());
  };

  return (
    <button
      className={cn(
        "border border-mainRed text-black px-4 py-2 rounded-xl hover:bg-mainRed hover:text-white text-sm sm:text-base md:text-lg font-medium transition-all duration-300 ease-in-out shadow-md hover:shadow-lg active:scale-95 break-words",
        {
          "border-mainRed bg-mainRed text-white":
            selectedType === typeOfProduct.typeOfProduct,
        }
      )}
      onClick={handleClick}
    >
      {typeOfProduct.title}
    </button>
  );
};
