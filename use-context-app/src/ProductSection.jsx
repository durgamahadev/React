import ProductList from "./ProductList";

export default function ProductSection() {
  return (
    <div style={{ flex: 2, border: "1px solid #ccc", padding: "15px" }}>
      <h2>Available Items</h2>
      <ProductList/>
    </div>
  );
}
