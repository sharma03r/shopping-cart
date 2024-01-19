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

  const handleAdd = (price) => {
    setTotal(total + price);
    setItem(item + 1);
  };

  const handleRemove = (price) => {
    if (total <= 0) {
      return;
    }
    setTotal(total - price);
    setItem(item - 1);
  };

  const handleReset = () => {
    setItem(0);
    setTotal(0);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <itemContext.Provider
      value={{ total, item, handleAdd, handleRemove, handleReset, toggleCart }}
    >
      {showCart && <CartModal toggleCart={toggleCart} reset={handleReset} />}
      {children}
    </itemContext.Provider>
  );
}

export { useValue };
export default CustomItemContext;
