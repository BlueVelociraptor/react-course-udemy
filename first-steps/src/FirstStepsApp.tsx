import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  productQuantity?: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Obj. 777", productQuantity: 30 },
  { productName: "SDP 60 Gonkiewicza", productQuantity: 100 },
  { productName: "Concept 1B", productQuantity: 20 },
  { productName: "WT Ritter" },
];

export default function FirstStepsApp() {
  return (
    <>
      <h1>Tienda de tanques - Alina Tsvetkov</h1>

      {itemsInCart.map((item) => (
        <ItemCounter
          key={item.productName}
          name={item.productName}
          quantity={item.productQuantity}
        />
      ))}
    </>
  );
}
