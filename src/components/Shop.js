import React, { useContext } from "react";
import ShopItem from "./ShopItem";
import gympic from "../images/gymbg.jpg";
import { itemContext } from "./App";

export default function Shop() {
  const { itemList } = useContext(itemContext);

  return (
    <main>
      <div className="main-div shop-container">

        {itemList.map((item) => {
          return <ShopItem key={item.id} {...item} />
        })}


        <div className="item-div">
          <img src={gympic} alt="placeholder"></img>
          <div className="item-name">My Third Item</div>
          <div className="item-price">$99.99</div>
          <button>Add to Cart</button>
        </div>
        <div className="item-div">
          <img src={gympic} alt="placeholder"></img>
          <div className="item-name">My Fourth Item</div>
          <div className="item-price">$99.99</div>
          <button>Add to Cart</button>
        </div>
        <div className="item-div">
          <img src={gympic} alt="placeholder"></img>
          <div className="item-name">My Fifth Item</div>
          <div className="item-price">$99.99</div>
          <button>Add to Cart</button>
        </div>
        <div className="item-div">
          <img src={gympic} alt="placeholder"></img>
          <div className="item-name">My Sixth Item</div>
          <div className="item-price">$99.99</div>
          <button>Add to Cart</button>
        </div>
        <div className="item-div">
          <img src={gympic} alt="placeholder"></img>
          <div className="item-name">My Seventh Item</div>
          <div className="item-price">$99.99</div>
          <button>Add to Cart</button>
        </div>
      </div>
    </main>
  );
}
