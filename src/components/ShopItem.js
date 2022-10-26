import React, { useContext } from "react";
import { itemContext } from "./App";
import ItemCounter from "./ItemCounter";

export default function ShopItem(props) {
  const { name, price, image, quantity, id } = props;
  const { incrementQuantity } = useContext(itemContext);
  return (
    <div className="item-div">
      <img src={image} alt={name} className="item-img" />
      <div className="item-name">{name}</div>
      <div className="item-price">${price}</div>
      {quantity === 0 && (
        <button className="add-to-cart" onClick={() => incrementQuantity(id)}>Add to Cart</button>
      )}
      {quantity > 0 && <ItemCounter quantity={quantity} id={id} />}
    </div>
  );
}
