import styles from "../styles/Cartmodal.module.css";
function CartModal(props) {
  const { reset, toggleCart } = props;
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggleCart}>
        Close
      </div>
      <div className={styles.clearButton} onClick={reset}>
        Clear
      </div>
      <div className={styles.itemContainer}></div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>Price</div>
      </div>
    </div>
  );
}

export default CartModal;
