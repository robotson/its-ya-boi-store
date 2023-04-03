export function addToCart(product, cartItems, setCartItems) {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      // If the item is already in the cart, update the quantity
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }
  
  export function removeFromCart(product, cartItems, setCartItems) {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  }
  
  export function incrementQuantity(product, cartItems, setCartItems) {
    const updatedCartItems = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  }
  
  export function decrementQuantity(product, cartItems, setCartItems) {
    const updatedCartItems = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCartItems.filter((item) => item.quantity > 0));
  }