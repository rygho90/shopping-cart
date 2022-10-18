import React from "react";
import "../css/home.css"


export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="header-title">RFS</h1>
          <nav className="header-nav">
            <ul className="nav-list">
              <li>Home</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </nav>
          <button>Cart</button>
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
