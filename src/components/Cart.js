import React, { useContext } from "react";
import { cartContext, itemContext } from "./App";
import CartItem from "./CartItem";

export default function Cart() {
  const { toggleCart } = useContext(cartContext);
  const { items } = useContext(itemContext);

  let itemTotal = 0;
  items.forEach((item) => {
    itemTotal += item.quantity;
  });

  let totalCost = 0;
  items.forEach((item) => {
    totalCost += item.quantity * item.price;
  });

  return (
    <div className="overlay ">
      <div className="cart-container">
        <h2 className="cart-title">Cart</h2>

        <div className="cart-content">
          {itemTotal === 0 && <p>There's nothing here.</p>}
          {itemTotal > 0 &&
            items.map((item) => {
              if (item.quantity > 0)
                return <CartItem key={item.id} {...item} />;
              return null;
            })}

          {itemTotal > 0 && <div>Total: ${totalCost.toFixed(2)}</div>}
          {itemTotal > 0 && (
            <button className="cart-action cart-action--checkout">
              Checkout
            </button>
          )}
        </div>

        <button className="cart-action cart-action--close" onClick={toggleCart}>
          Close
        </button>
      </div>
    </div>
  );
}
