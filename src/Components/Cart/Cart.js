import React from "react";
import { useSelector } from "react-redux";
import "./Cart.scss";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="cart-container">
      <div className="cart-heading">
        <h4>Product Name</h4>
        <p>Product Price</p>
        <p>Product Quantity</p>
      </div>
      {cartItems.map((item) => (
        <div className="cart-items">
          <h4>{item.card.info.name}</h4>
          <p>
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </p>
          <p>{item.length}</p>
        </div>
      ))}
      {cartItems.length !== 0 ? <p className="cart-total">
        TO PAY
        <button className="pay-btn">
          Pay <span className="pay-amount">₹</span>
        </button>
      </p> : ""}
    </div>
  );
};

export default Cart;
