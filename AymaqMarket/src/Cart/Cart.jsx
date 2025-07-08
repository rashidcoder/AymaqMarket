// src/components/Cart.jsx
import React, { useState } from 'react';
import './Cart.css';
import cocacola from "../Images/cocacola.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      name: "Cool Sneakers",
      price: 49.99,
      quantity: 1,
      image: cocacola,
    },
    {
      name: "Wireless Earbuds",
      price: 29.99,
      quantity: 2,
      image: cocacola,
    }
  ]);

  const isEmpty = cartItems.length === 0;

  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0).toFixed(2);

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {isEmpty ? (
        <p className="empty-cart-msg">Your cart is empty 🛒</p>
      ) : (
        <>
          <div id="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="item-info">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <span>{item.name}</span>
                    <span className="item-price">${item.price.toFixed(2)}</span>
                  </div>
                </div>
                <span>{item.quantity}x</span>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>
          <button className="clear-btn" onClick={handleClearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
