import { createContext } from "react";

export const CartContext = createContext({
    products: [],
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
  });
