import React from "react";
import "../css/home.css";

export default function Home() {
  return (
    <>
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
        <section>
          <div>
            <h2>Ryan's Fitness Store</h2>
            <p>Serving all your fitness needs since 2022.</p>
            <p>Visit the shop</p>
          </div>
        </section>
      </main>

      <footer>
        <div>&copy; 2022 Ryan Holland</div>
      </footer>
    </>
  );
}
