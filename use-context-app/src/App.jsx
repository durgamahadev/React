import React, { useReducer, useState } from "react";
import MainLayout from "./MainLayout";
import { cartReducer } from "./cartReducer";

export default function App() {
  const [products] = useState([
    { id: 1, name: "Wireless Headphones", price: 99 },
    { id: 2, name: "Mechanical Keyboard", price: 149 },
    { id: 3, name: "Gaming Mouse", price: 79 },
  ]);

  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", product });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Gadget Central Store</h1>
      <MainLayout
        products={products}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}
