export default function CartItem({ item, removeFromCart }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <div>
        <span>{item.name}</span> <small>x{item.quantity}</small>
        <div style={{ color: "#666" }}>{item.price * item.quantity}</div>
      </div>
      {/* The handler from App is finally executed here */}
      <button
        onClick={() => removeFromCart(item)}
        style={{
          padding: "3px 8px",
          cursor: "pointer",
          background: "#dc3545",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Remove
      </button>
    </div>
  );
}
