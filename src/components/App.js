import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";
import "../css/app.css";

import barbell from "../images/barbell.jpg";
import bench from "../images/bench.jpg";
import creatine from "../images/creatine.jpg";
import dumbbells from "../images/dumbbells.jpg";
import pants from "../images/pants.jpg";
import post from "../images/post.jpg";
import pre from "../images/pre.jpg";
import protein from "../images/protein.jpg";
import shorts from "../images/shorts.jpg";
import squat from "../images/squat.jpg";
import tankDark from "../images/tank_dark.jpg";
import tankLight from "../images/tank_light.jpg";

export const itemContext = React.createContext();
export const cartContext = React.createContext();

export default function App() {
  const [items, setItems] = useState(itemList);
  let [showCart, setShowCart] = useState(false);

  const itemContextValue = {
    items,
    incrementQuantity,
    decrementQuantity,
  };

  const cartContextValue = {
    toggleCart,
  };

  function incrementQuantity(id) {
    const selectedItem = items.find((item) => item.id === id);
    selectedItem.quantity += 1;

    const newItems = [...items];
    const index = newItems.findIndex((i) => i.id === id);
    newItems[index] = selectedItem;
    setItems(newItems);
  }

  function decrementQuantity(id) {
    const selectedItem = items.find((item) => item.id === id);
    selectedItem.quantity -= 1;

    const newItems = [...items];
    const index = newItems.findIndex((i) => i.id === id);
    newItems[index] = selectedItem;
    setItems(newItems);
  }

  function toggleCart() {
    const display = showCart ? false : true;
    setShowCart(display)
  }

  return (
    <BrowserRouter>
      <itemContext.Provider value={itemContextValue}>
        <cartContext.Provider value={cartContextValue}>
          {showCart && <Cart />}
          <div className="wrapper">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </cartContext.Provider>
      </itemContext.Provider>
    </BrowserRouter>
  );
}

const itemList = [
  {
    id: 1,
    name: "Olympic Weight Set",
    price: 399.99,
    image: barbell,
    quantity: 0,
  },
  {
    id: 2,
    name: "Bench",
    price: 49.99,
    image: bench,
    quantity: 0,
  },
  {
    id: 3,
    name: "Creatine",
    price: 29.99,
    image: creatine,
    quantity: 0,
  },
  {
    id: 4,
    name: "Dumbbell Set",
    price: 99.99,
    image: dumbbells,
    quantity: 0,
  },
  {
    id: 5,
    name: "Gym Pants",
    price: 20.99,
    image: pants,
    quantity: 0,
  },
  {
    id: 6,
    name: "Post-Workout",
    price: 39.99,
    image: post,
    quantity: 0,
  },
  {
    id: 7,
    name: "Pre-Workout",
    price: 32.99,
    image: pre,
    quantity: 0,
  },
  {
    id: 8,
    name: "Protein Powder",
    price: 44.99,
    image: protein,
    quantity: 0,
  },
  {
    id: 9,
    name: "Gym Shorts",
    price: 14.99,
    image: shorts,
    quantity: 0,
  },
  {
    id: 10,
    name: "Squat Rack",
    price: 299.99,
    image: squat,
    quantity: 0,
  },
  {
    id: 11,
    name: "Tank Top (Dark)",
    price: 10.99,
    image: tankDark,
    quantity: 0,
  },
  {
    id: 12,
    name: "Tank Top (Light)",
    price: 9.99,
    image: tankLight,
    quantity: 0,
  },
];
