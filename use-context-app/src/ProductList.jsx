import { useContext } from "react";
import ProductCard from "./ProductCard";
import { CartContext } from "./CartContext";

export default function ProductList() {
  const {products,addToCart}= useContext(CartContext);



  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: "15px",
      }}
    >
      {products.map((product) => (
        /* Final drilling step to item cards */
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}
