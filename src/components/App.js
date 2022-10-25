import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
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

export default function App() {
  const itemContextValue = {
    itemList,
  };

  return (
    <BrowserRouter>
      <itemContext.Provider value={itemContextValue}>
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
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
  },
  {
    id: 2,
    name: "Bench",
    price: 49.99,
    image: bench,
  },
  {
    id: 3,
    name: "Creatine",
    price: 29.99,
    image: creatine,
  },
  {
    id: 4,
    name: "Dumbbell Set",
    price: 99.99,
    image: dumbbells,
  },
  {
    id: 5,
    name: "Gym Pants",
    price: 20.99,
    image: pants,
  },
  {
    id: 6,
    name: "Post-Workout",
    price: 39.99,
    image: post,
  },
  {
    id: 7,
    name: "Pre-Workout",
    price: 32.99,
    image: pre,
  },
  {
    id: 8,
    name: "Protein Powder",
    price: 44.99,
    image: protein,
  },
  {
    id: 9,
    name: "Gym Shorts",
    price: 14.99,
    image: shorts,
  },
  {
    id: 10,
    name: "Squat Rack",
    price: 299.99,
    image: squat,
  },
  {
    id: 11,
    name: "Tank Top (Dark)",
    price: 10.99,
    image: tankDark,
  },
  {
    id: 12,
    name: "Tank Top (Light)",
    price: 9.99,
    image: tankLight,
  },
];
