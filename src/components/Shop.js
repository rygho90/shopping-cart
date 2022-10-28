import React, { useContext } from "react";
import ShopItem from "./ShopItem";
import { itemContext } from "./App";

export default function Shop() {
  const { filteredItems, query, setQuery, setCategory } = useContext(itemContext);

  return (
    <main>
      <div className="main-div search-div">
        <input
          type="search"
          className="shop-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className="search-button"></button>
      </div>
      <div className="shop-wrapper">
        <div className="shop-side-bar main-div">
          <ul className="nav-list category-list">
            <li onClick={() => setCategory("")}>All</li>
            <li onClick={() => setCategory("equipment")}>Equipment</li>
            <li onClick={() => setCategory("supplements")}>Supplements</li>
            <li onClick={() => setCategory("clothing")}>Clothing</li>
          </ul>
        </div>
        <div className="main-div shop-container">
          {filteredItems.map((item) => {
            return <ShopItem key={item.id} {...item} />;
          })}
        </div>
      </div>
    </main>
  );
}
