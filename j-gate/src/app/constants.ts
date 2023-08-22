import { IProduct } from "./types";

export const products: IProduct[] = [
  {
    id: 1,
    name: "Zebronics head phone",
    images: {
      red: "https://zebronics.com/cdn/shop/products/Zeb-Thunder-pic2_36d90fc3-1b00-4110-acb2-14d1935f6c7d.jpg?v=1644570492&width=800",
      blue: "https://zebronics.com/cdn/shop/products/Zeb-Thunder-pic4_eeb69d37-5609-445c-81d4-d1958a8d9046.jpg?v=1644570492&width=800",
      black:
        "https://zebronics.com/cdn/shop/products/Zeb-Thunder-pic5_1561ffa6-0094-4a79-a366-9d35604bd014.jpg?v=1644570492&width=800",
    },
    description:
      "A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.",
    price: 100,
    colors: ["red", "blue", "black"],
  },
  {
    id: 2,
    name: "Zebronics head phone",
    images: {
      red: "https://zebronics.com/cdn/shop/products/Zeb-Thunder-pic2_36d90fc3-1b00-4110-acb2-14d1935f6c7d.jpg?v=1644570492&width=800",
      blue: "https://zebronics.com/cdn/shop/products/Zeb-Thunder-pic4_eeb69d37-5609-445c-81d4-d1958a8d9046.jpg?v=1644570492&width=800",
      black:
        "https://zebronics.com/cdn/shop/products/Zeb-Thunder-pic5_1561ffa6-0094-4a79-a366-9d35604bd014.jpg?v=1644570492&width=800",
    },
    description:
      "A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.",
    price: 100,
    colors: ["red", "blue", "black", "gray", "violet"],
  },
];