import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import "../css/app.css";

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
  },
  {
    id: 2,
    name: "Protein Powder",
    price: 49.99,
  },
];
