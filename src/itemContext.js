import { createContext, useContext, useState } from "react";

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

  return (
    <itemContext.Provider value={{ total, item, handleAdd, handleRemove }}>
      {children}
    </itemContext.Provider>
  );
}

export { useValue };
export default CustomItemContext;
