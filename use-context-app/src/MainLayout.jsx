import ProductSection from "./ProductSection";
import Sidebar from "./Sidebar";
import { CartContext } from "./CartContext";

function MainLayout({ products, cart, addToCart, removeFromCart }) {
  
  return (
    <div style={{ display: "flex", gap: "40px", marginTop: "20px" }}>
      <CartContext value={{products,cart,addToCart,removeFromCart}} >
        <ProductSection products={products} addToCart={addToCart} />
        <Sidebar cart={cart} removeFromCart={removeFromCart} />
      </CartContext>
    </div>
  );
}

export default MainLayout;
