import React, { useContext } from "react";
import ShopItem from "./ShopItem";
import { itemContext } from "./App";

export default function Shop() {
  const { itemList } = useContext(itemContext);

  return (
    <main>
      <div className="main-div shop-container">

        {itemList.map((item) => {
          return <ShopItem key={item.id} {...item} />
        })}


      </div>
    </main>
  );
}
