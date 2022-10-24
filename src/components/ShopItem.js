import React from "react";
import gympic from "../images/gymbg.jpg";

export default function ShopItem(props) {
  const { id, name, price } = props;
  return (
    <div className="item-div">
      <img src={gympic} alt="placeholder"></img>
      <div className="item-name">{name}</div>
      <div className="item-price">${price}</div>
      <button>Add to Cart</button>
    </div>
  );
}
