import { useState } from "react";
import { useCartContext } from "@/contexts/CartContext";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const AddToCartButton = ({ product }) => {
  const router = useRouter();
  const { cartContext, setCartContext } = useCartContext();
  const [inCart, setInCart] = useState(
    cartContext.find((item) => item.id === product.id) !== undefined
  );

  useEffect(() => {
      setInCart(cartContext.find((item) => item.id === product.id) !== undefined)
  }, [cartContext, product.id]);
  
  const [cartQuantity, setCartQuantity] = useState(() => {
    if (inCart) {
      product = cartContext.find((item) => item.id === product.id);
      return product.quantity;
    } else {
      return 0;
    }
  });

  const handleAddToCart = () => {
    if (inCart) {
      router.push("cart");
    } else {
      setCartContext((prevCartContext) => [
        ...prevCartContext,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ]);
      setInCart(true);
      setCartQuantity(1);
    }
  };

  return (
    <Button
      sx={{ width: "100%" }}
      variant={inCart ? "outlined" : "contained"}
      onClick={handleAddToCart}
    >
      {inCart ? `IN YOUR CART (${cartQuantity})` : "ADD TO CART"}
    </Button>
  );
};

export default AddToCartButton;
