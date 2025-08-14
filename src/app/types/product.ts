export interface Product {
  name: string;
  category: string;
  art: number;
  photo: string;
  variety: ProductVariety[];
}

export interface ProductVariety {
  quantity: number;
  price: string;
}

export type TypeOfProduct =
  // | "tulips"
  | "mono-bouquet"
  | "mono-bucket"
  | "mono-box"
  | "mixed-bouquet"
  | "mixed-bucket"
  | "roses"
  | "mixed-box"
  | "xxl"
  | "test";

export interface ProductType {
  typeOfProduct: TypeOfProduct;
  title: string;
}
