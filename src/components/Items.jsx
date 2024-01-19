import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";

function Items() {
  const items = [
    { id: 1, name: "apple", price: 199 },
    {
      id: 2,
      name: "banana",
      price: 50,
    },
    {
      id: 3,
      name: "orange",
      price: 150,
    },
  ];
  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => (
        <ItemCard
          name={item.name}
          price={item.price}
          key={item.id}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default Items;
