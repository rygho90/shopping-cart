import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <div className="main-div">
        <h2>Ryan's Fitness Store</h2>
        <p>Serving all your fitness needs since 2022.</p>
        <p className="shop-link-p">
          <button>
            <Link to="/shop" className="text-link">
              Visit the shop
            </Link>
          </button>
        </p>
      </div>
    </main>
  );
}
