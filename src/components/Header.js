import React from 'react'
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="header">
        <div className="header-container">
          <h1 className="header-title">Ryan's Fitness Store</h1>
          <div className="header-right-side">
            <nav className="header-nav">
              <ul className="nav-list">
                <li><Link to="/" className='text-link'>Home</Link></li>
                <li><Link to="/shop" className='text-link'>Shop</Link></li>
                <li><Link to="/contact" className='text-link'>Contact</Link></li>
              </ul>
            </nav>
            <button className="cart-button"></button>
          </div>
        </div>
      </header>
  )
}
