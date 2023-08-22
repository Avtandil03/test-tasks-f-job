"use client";
import styles from "./product-card.module.scss";
import Image from "next/image";
import { useState } from "react";
import { UiColorPicker } from "../ui/ui-color-picker/ui-color-picker";
import UiButton from "../ui/ui-button/ui-button";
import Link from "next/link";
import { IProduct } from "@/app/types";

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    alert(`(${selectedColor}) ${product.name} addet to cart`);
  };

  const handleBuyNow = () => {
    alert(`Your'e trying to buy (${selectedColor}) ${product.name} `);
  };

  return (
    <div className={`${styles.productCard} ${styles[selectedColor]}`}>
      <Image
        src={product.images[selectedColor] || "/no-image.png"}
        alt={product.name}
        className={styles.productImage}
        width={256}
        height={215}
      />
      <h2 className={styles.productPrice}>${product.price}</h2>
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productDescription}>{product.description}</p>
      <div className={styles.chooseColor}>
        <p>Choose your colour</p>
        <UiColorPicker
          colors={product.colors}
          selectedColor={selectedColor}
          onColorChange={handleColorChange}
        />
      </div>
      <div className={styles.cardButtons}>
        <UiButton type="primary" onClick={handleAddToCart}>
          Add to cart
        </UiButton>
        <UiButton type="outline" onClick={handleBuyNow}>
          Buy now
        </UiButton>
      </div>
      <Link className={styles.reviews} href={`/review/${product.id}`}>
        Read reviews
      </Link>
    </div>
  );
};
