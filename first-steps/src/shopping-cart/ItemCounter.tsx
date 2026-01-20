import { useState } from "react";
// import "./ItemCounter.css";
import styles from "./ItemCounter.module.css";

interface ItemCounterProps {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 10 }: ItemCounterProps) => {
  const [quantityValue, setQuantityValue] = useState(quantity);

  const handleIncrementQuantityValue = () => {
    quantityValue < 100 && setQuantityValue((value) => value + 1);
  };

  const handleDecrementQuantityValue = () => {
    quantityValue > 0 && setQuantityValue((value) => value - 1);
  };

  return (
    <section className={styles["container-style"]}>
      <span className={styles["w-150"]}>{name}</span>
      <button onClick={handleIncrementQuantityValue}>+1</button>
      <span
        style={{
          color: quantityValue === 0 ? "red" : "green",
        }}
      >
        {quantityValue}
      </span>
      <button onClick={handleDecrementQuantityValue}>-1</button>
    </section>
  );
};
