import React from 'react'

export default function Header() {
  return (
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
  )
}
