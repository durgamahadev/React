export default function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "4px",
        textAlign: "center",
      }}
    >
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      {/* The handler from App is finally executed here */}
      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "6px 12px",
          cursor: "pointer",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
