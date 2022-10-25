import React, { useContext } from "react";
import { itemContext } from "./App";

export default function ItemCounter({ quantity, id }) {
  const { incrementQuantity, decrementQuantity } = useContext(itemContext);
  return (
    <div className="counter-container">
      <button onClick={() => decrementQuantity(id)}>&minus;</button>
      <div className="quantity-display">{quantity}</div>
      <button onClick={() => incrementQuantity(id)}>&#43;</button>
    </div>
  );
}
