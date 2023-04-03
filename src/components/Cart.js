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
                {item.name} x {item.quantity}{' '}

                = {currency(item.quantity * item.price.unit_amount, {
                  fromCents: true,
                }).format()}
                <button onClick={() => onIncrement(item)}>+</button>{' '}
                <button onClick={() => onDecrement(item)}>-</button>{' '}
                <button onClick={() => onDelete(item)}>delete</button>{' '}
              </li>
            ))}
            <li>
              Total:{' '}
              {currency(
                cartItems.reduce(
                  (total, item) => total + item.quantity * item.price.unit_amount,
                  0
                ),
                { fromCents: true }
              ).format()}
            </li>
          </ul>
        ) : (
          <p>(cart is empty)</p>
        )}
      </>
    );
  }

export default Cart;