export function cartReducer(prevCartItems, { type, product }) {
  if (type === "ADD_TO_CART") {
    const existing = prevCartItems.find((item) => item.id === product.id);
    if (existing) {
      return prevCartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    }
    return [...prevCartItems, { ...product, quantity: 1 }];
  } else if (type === "REMOVE_FROM_CART") {
    return prevCartItems.filter((item) => item.id !== product.id);
  }
}
