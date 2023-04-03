import React from 'react';
import currency from 'currency.js';

function Cart({ cartItems, onIncrement, onDecrement, onDelete }) {
  return (
    <>
      <h1>Your cart:</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity}{" "}
              <button onClick={() => onIncrement(item.id)}>+</button>{" "}
              <button onClick={() => onDecrement(item.id)}>-</button>{" "}
              <button onClick={() => onDelete(item.id)}>delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>(cart is empty)</p>
      )}
    </>
  );
}

export default Cart;