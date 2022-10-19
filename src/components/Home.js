import React from "react";
import "../css/home.css";

export default function Home() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header-container">
          <h1 className="header-title">Ryan's Fitness Store</h1>
          <div className="header-right-side">
            <nav className="header-nav">
              <ul className="nav-list">
                <li>Home</li>
                <li>Shop</li>
                <li>Contact</li>
              </ul>
            </nav>
            <button className="cart-button"></button>
          </div>
        </div>
      </header>

      <main>
   
          <div className="main-info">
            <h2>Ryan's Fitness Store</h2>
            <p>Serving all your fitness needs since 2022.</p>
            <p className="shop-link-p"><button>Visit the shop</button></p>
          </div>

      </main>

      <footer>
        <div>&copy; 2022 Ryan Holland</div>
      </footer>
    </div>
  );
}
