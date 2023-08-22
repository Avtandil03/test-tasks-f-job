import { ProductCard } from "./components/product-card/product-card";
import { products } from "./constants";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}
