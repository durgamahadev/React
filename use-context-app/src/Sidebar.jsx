import CartSummary from "./CartSummary";

export default function Sidebar() {
  return (
    <div
      style={{
        flex: 1,
        border: "1px solid #ccc",
        padding: "15px",
        background: "#f9f9f9",
      }}
    >
      <h2>Your Cart</h2>
      {/* Drilling down further */}
      <CartSummary/>
    </div>
  );
}
