import Head from 'next/head';
import { getProducts } from '@/lib/products';
import currency from 'currency.js';
import { useState, useEffect } from 'react';
import Cart from '@/components/Cart';
import { addToCart, removeFromCart, incrementQuantity, decrementQuantity } from '@/lib/cart.utils';


export default function ItsYaBoi({ allProducts }) {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    addToCart(product, cartItems, setCartItems);
  };
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId, cartItems, setCartItems);
  };
  const handleIncrement = (productId) => {
    incrementQuantity(productId, cartItems, setCartItems);
  };
  const handleDecrement = (productId) => {
    decrementQuantity(productId, cartItems, setCartItems);
  };

  useEffect(() => {
    const cartItemsFromStorage = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(cartItemsFromStorage);
  }, []);
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <Head>
        <title>{process.env.GREETING + " webstore"}</title>
      </Head>
      <h1>
        {"It's ya boi!"}
      </h1>
      <p>{"Doin it right once again"}</p>
      <ul>
          {allProducts.map((product) => (
          <li key={product.id}>
            {product.name}{", "}{currency(product.price.unit_amount, { fromCents: true }).format()} 
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <Cart 
          cartItems={cartItems} 
          onIncrement={handleIncrement} 
          onDecrement={handleDecrement} 
          onDelete={handleRemoveFromCart} 
        />    
  </>
  )
}

export async function getStaticProps() {
  const allProducts = await getProducts();
  return {
    props: {
      allProducts,
    },
  };
}