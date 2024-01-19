import React, { useContext } from "react";
import styles from "../styles/Navbar.module.css";
import { useValue } from "../itemContext";

function Navbar() {
  const { total, item, handleReset, toggleCart } = useValue();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={toggleCart}>
          Cart
        </button>
        <button className={styles.button} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Navbar;
