import { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "./CartContext";

export default function CartSummary() {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div>
      {cart.map((item) => (
        /* Final drilling step to cart item displays */
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <hr />
      <strong>
        Total: ₹
        {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
      </strong>
    </div>
  );
}
