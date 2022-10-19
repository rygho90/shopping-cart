import React from "react";
import "../css/home.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />

      <main>
          <div className="main-info">
            <h2>Ryan's Fitness Store</h2>
            <p>Serving all your fitness needs since 2022.</p>
            <p className="shop-link-p"><button>Visit the shop</button></p>
          </div>
      </main>

      <Footer />
    </div>
  );
}
