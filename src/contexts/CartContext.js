import { createContext, useContext, useState, useEffect } from "react";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // state to be shared for cart across the app heirarchy
  const [cartContext, setCartContext] = useState([]);

  // read in any cart items left in the browser's local storage
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartContext(cartItems);
  }, []);

  // monitor cartContext for updates and store in localStorage to persist for refreshes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartContext));
    // console.log('cart changed', cartContext);
  }, [cartContext]);

  return (
    <CartContext.Provider
      value={{
        cartContext,
        setCartContext,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  return useContext(CartContext);
}
