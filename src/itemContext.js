import { createContext, useContext, useState } from "react";
import CartModal from "./components/CartModal";

const itemContext = createContext();
function useValue() {
  const value = useContext(itemContext);
  if (!value) {
    console.log("custom hook should be used within Provider");
  }
  return value;
}
function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAdd = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index == -1) {
      setCart([...cart, { ...product, qty: 1 }]);
    } else {
      cart[index].qty += 1;
      setCart(cart);
    }
    setTotal(total + product.price);
    setItem(item + 1);
  };

  const handleRemove = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      cart[index].qty--;
      setItem(item - 1);
      setTotal(total - cart[index].price);
      if (cart[index].qty === 0) {
        cart.splice(index, 1);
      }
    }
    setCart(cart);
  };

  const handleReset = () => {
    setItem(0);
    setTotal(0);
    setCart([]);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <itemContext.Provider
      value={{ total, item, handleAdd, handleRemove, handleReset, toggleCart }}
    >
      {showCart && (
        <CartModal
          toggleCart={toggleCart}
          reset={handleReset}
          cart={cart}
          total={total}
        />
      )}
      {children}
    </itemContext.Provider>
  );
}

export { useValue };
export default CustomItemContext;
