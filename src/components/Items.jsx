import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";

function Items() {
  const items = [
    { name: "apple", price: 199 },
    {
      name: "banana",
      price: 50,
    },
    {
      name: "orange",
      price: 150,
    },
  ];
  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => (
        <ItemCard name={item.name} price={item.price} key={index} />
      ))}
    </div>
  );
}

export default Items;
