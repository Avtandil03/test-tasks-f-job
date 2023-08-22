import { products } from "@/app/constants";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <h1>This is review page of : </h1>
      {products.map((product) =>
        product.id === Number(params.id) ? JSON.stringify(product) : null
      )}
    </>
  );
}
