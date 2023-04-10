import Container from '@mui/material/Container';
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { useCartContext } from '@/contexts/CartContext';
import currency from 'currency.js';


export default function CartPage() {
  const {cartContext, setCartContext} = useCartContext();

  const handleRemoveButton = (product) => {
    const updatedCartContext = cartContext.filter((item) => item.id !== product.id);
    setCartContext(updatedCartContext);
  }
  return (
    <Container maxWidth="lg">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartContext.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{currency(item.price.unit_amount, {fromCents: true,}).format()}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{currency(item.quantity * item.price.unit_amount, {fromCents: true,}).format()}</TableCell>
                <TableCell>
                  <Button variant="outlined" size="small" onClick={() => handleRemoveButton(item)}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

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