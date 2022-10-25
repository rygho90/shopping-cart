import React from "react";
import ItemCounter from "./ItemCounter";

export default function ShopItem(props) {
  const { name, price, image, quantity } = props;
  return (
    <div className="item-div">
      <img src={image} alt={name} className="item-img" />
      <div className="item-name">{name}</div>
      <div className="item-price">${price}</div>
      {quantity === 0 && <button>Add to Cart</button>}
      {quantity > 0 && <ItemCounter quantity={quantity}/>}
    </div>
  );
}
