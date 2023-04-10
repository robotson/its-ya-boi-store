import { createContext, useContext, useState } from 'react';
// import {loadStripe} from '@stripe/stripe-js';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartContext, setCartContext] = useState([]);

//   const checkoutCart = async () => {
//     const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
//     // may have to provide stripe to other parts of the app?
//     //setStripe(stripe);

//     fetch(process.env.NEXT_PUBLIC_CHECKOUT_ENDPOINT, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ cart: cartItems })
//     })
//       .then(response => response.json())
//       .then(data => {
//         stripe.redirectToCheckout({
//           sessionId: data.sessionId
//         });
//       })
//       .catch(error => {
//         // handle error
//         console.error(error)
//       });
//   };

  return (
    <CartContext.Provider
      value={{
        cartContext,
        setCartContext,
        // addToCart,
        // removeFromCart,
        // incrementQuantity,
        // decrementQuantity,
        // checkoutCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
    return useContext(CartContext);
}