import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../ReduxToolKit/cartSlice";
import "./Cart.scss";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => {
    const price =
      item.card.info.defaultPrice / 100 || item.card.info.price / 100;
    return total + item.quantity * price;
  }, 0);

  console.log(totalPrice);

  return (
    <div className="cart-container">
      <div className="cart-heading">
        <h4>Product Name</h4>
        <p>Product Price</p>
        <p>Product Quantity</p>
      </div>
      {cartItems.map((item) => (
        <div className="cart-items" key={item.card.info.id}>
          <h4>{item.card.info.name}</h4>
          <p>
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </p>
          <p>{item.quantity}</p>
        </div>
      ))}
      {cartItems.length !== 0 ? (
        <div className="cart-footer">
          <div className="cart-total">
            <span>TO PAY</span>
            <button className="pay-btn">
              Pay <span className="pay-amount">₹ {totalPrice}</span>
            </button>
          </div>
          <button className="clear-btn" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
