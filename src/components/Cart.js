import { useCartContext } from '@/contexts/CartContext';

function Cart() {
    const { cartContext, setCartContext } = useCartContext();

    return (<></>
      // <>
      //   <h1>Your cart:</h1>
      //   {cartContext.length > 0 ? (
      //     <ul>
      //       {cartContext.map((item) => (
      //         <li key={item.id}>
      //           {item.name} x {item.quantity}{' ('}
      //           {currency(item.quantity * item.price.unit_amount, {
      //             fromCents: true,
      //           }).format()}{') '}
      //           <button onClick={() => onIncrement(item)}>+</button>{' '}
      //           <button onClick={() => onDecrement(item)}>-</button>{' '}
      //           <button onClick={() => onDelete(item)}>delete</button>
      //         </li>
      //       ))}
      //       <li>
      //         Total:{' '}
      //         {currency(
      //           cartContext.reduce(
      //             (total, item) => total + item.quantity * item.price.unit_amount,
      //             0
      //           ),
      //           { fromCents: true }
      //         ).format()} <button disabled onClick={() => onCheckout(cartContext)}>Proceed to Checkout</button>
      //       </li>
      //     </ul>
      //   ) : (
      //     <p>(cart is empty)</p>
      //   )}
      // </>
    );
  }

export default Cart;