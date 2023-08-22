export interface IProduct {
  id: number;
  name: string;
  images: Record<string, string>;
  description: string;
  price: number;
  colors: string[];
}
