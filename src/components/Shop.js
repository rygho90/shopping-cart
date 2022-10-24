import React from "react";
import gympic from '../images/gymbg.jpg'


export default function Shop() {
  return (
    <main>
      <div className="main-div shop-container">
        <div className="item-div">
          <img src={gympic} alt="placeholder"></img>
          <div className="item-description">My First Item</div>
          <div className="item-price">$99.99</div>
          <button>Add to Cart</button>
        </div>
        <div className="item-div">
          <img src={gympic} alt="placeholder"></img>
          <div className="item-description">My Second Item</div>
          <div className="item-price">$99.99</div>
          <button>Add to Cart</button>
        </div>
        <div className="item-div">
          <img src={gympic} alt="placeholder"></img>
          <div className="item-description">My Third Item</div>
          <div className="item-price">$99.99</div>
          <button>Add to Cart</button>
        </div>
        <div className="item-div">
          <img src={gympic} alt="placeholder"></img>
          <div className="item-description">My Fourth Item</div>
          <div className="item-price">$99.99</div>
          <button>Add to Cart</button>
        </div>
        <div className="item-div">
          <img src={gympic} alt="placeholder"></img>
          <div className="item-description">My Fifth Item</div>
          <div className="item-price">$99.99</div>
          <button>Add to Cart</button>
        </div>
        <div className="item-div">
          <img src={gympic} alt="placeholder"></img>
          <div className="item-description">My Sixth Item</div>
          <div className="item-price">$99.99</div>
          <button>Add to Cart</button>
        </div>
        <div className="item-div">
          <img src={gympic} alt="placeholder"></img>
          <div className="item-description">My Seventh Item</div>
          <div className="item-price">$99.99</div>
          <button>Add to Cart</button>
        </div>
      </div>
    </main>
  );
}
