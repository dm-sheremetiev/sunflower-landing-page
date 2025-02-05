import { ProductType } from "@/app/types/product";
import { t } from "i18next";

export const typesOfProduct: ProductType[] = [
  {
    typeOfProduct: "mono-bouquet",
    title: t("holiday.mono-bouquet"),
  },
  {
    typeOfProduct: "mono-box",
    title: t("holiday.mono-box"),
  },
  {
    typeOfProduct: "mono-bucket",
    title: t("holiday.mono-bucket"),
  },
  {
    typeOfProduct: "mixed-bouquet",
    title: t("holiday.mixed-bouquet"),
  },
  {
    typeOfProduct: "mixed-box",
    title: t("holiday.mixed-box"),
  },
  {
    typeOfProduct: "mixed-bucket",
    title: t("holiday.mixed-bucket"),
  },
  {
    typeOfProduct: "balloons",
    title: t("holiday.balloons"),
  },
  {
    typeOfProduct: "xxl",
    title: t("holiday.xxl"),
  },
];
