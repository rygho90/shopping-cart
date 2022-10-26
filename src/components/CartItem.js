import React from "react";
import ItemCounter from "./ItemCounter";

export default function CartItem(props) {
  const { name, price, image, quantity, id } = props;
  return (
    <div className="cart-item-div">
      <div className="flex-col">
        <img src={image} alt={name} className="cart-item-img" />
      </div>
      <div className="flex-col">
        <div className="cart-item-name">{name}</div>
        <div className="cart-item-price">${(price * quantity).toFixed(2)}</div>
        <ItemCounter quantity={quantity} id={id} />
      </div>
    </div>
  );
}
