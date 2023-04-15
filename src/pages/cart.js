import { useCartContext } from "@/contexts/CartContext";
import { getProducts } from "@/lib/products";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { purple } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import currency from "currency.js";

export async function getStaticProps() {
  const allProducts = await getProducts();
  return {
    props: {
      allProducts,
    },
  };
}

export async function checkoutCart(cart) {
  // console.log(process.env.NEXT_PUBLIC_CHECKOUT_ENDPOINT)
  fetch(process.env.NEXT_PUBLIC_CHECKOUT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ cart })
  })
    .then(response => response.json())
    .then(data => {
      window.location.href = data.url;
    })
    .catch(error => {
      // handle error
      console.error(error)
  });
}

export default function CartPage({ allProducts }) {
  const { cartContext, setCartContext } = useCartContext();
  const [productsInCart, setProductsInCart] = useState([]);
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.up('md'));

  const handleChange = (event, productId) => {
    const quantity = event.target.value;

    const updatedCartContext = cartContext.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    setCartContext(updatedCartContext);
  };

  useEffect(() => {
    const filteredProducts = allProducts
      .filter((product) => cartContext.find((item) => item.id === product.id))
      .map((product) => ({
        ...product,
        quantity: cartContext.find((item) => item.id === product.id).quantity,
      }));
    setProductsInCart(filteredProducts);
  }, [cartContext, allProducts]);

  const handleRemoveButton = (product) => {
    const updatedCartContext = cartContext.filter(
      (item) => item.id !== product.id
    );
    setCartContext(updatedCartContext);
  };

  const handleCheckout = () => {
    checkoutCart(cartContext);
  }
  if (cartContext.length === 0) {
    return (
      <Container maxWidth="lg">
        <Typography variant="h6">
          Your cart is empty. <Link href="/" component={NextLink}>
                {`Return to products`}
          </Link> to find something you like.
        </Typography>
      </Container>
    )
  }
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} lg={6}>
          <Card
            elevation={1}
            sx={{ display: "flex", flexDirection: "column", p: "1em" }}
          >
            {productsInCart.map((product, idx) => (
              <Box key={product.id}>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: "8em", height: "8em" }}
                    image={`images/${product.local_image}`}
                    alt={product.name}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      pt: "1em",
                      pl: "1em",
                      pr: 0,
                      "&:last-child": { paddingBottom: 0 },
                    }}
                  >
                    <Typography variant="button">{product.name}</Typography>
                    <Typography variant="subtitle2">
                      1 {product.unit_label}{" "}
                      <Box sx={{ display: "inline", fontWeight: "bold" }}>
                        {currency(product.price.unit_amount, {
                          fromCents: true,
                        }).format()}{" "}
                      </Box>
                      each
                    </Typography>
                    <Divider sx={{ borderColor: "whitesmoke", my: ".1em" }} />

                    <Typography variant="caption" sx={{ fontStyle: "italic" }}>
                      US shipping rate{" "}
                      <Box sx={{ display: "inline", fontWeight: "bold" }}>
                        {currency(product.price.metadata.us_ship_rate, {
                          fromCents: true,
                        }).format()}{" "}
                      </Box>
                    </Typography>
                    <Typography variant="caption" sx={{ fontStyle: "italic" }}>
                      (
                      {currency(product.price.metadata.us_ship_additional, {
                        fromCents: true,
                      }).format()}{" "}
                      shipping for each add&apos;l item)
                    </Typography>
                  </CardContent>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <FormControl
                    sx={{ mt: 1, mb: 1, minWidth: "8em" }}
                    size="small"
                  >
                    <InputLabel sx={{ zIndex: 0 }}>Quantity</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={product.quantity}
                      label="Quantity"
                      onChange={(event) => handleChange(event, product.id)}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                      <MenuItem value={8}>8</MenuItem>
                      <MenuItem value={9}>9</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      ml: "1em",
                      alignItems: "center",
                    }}
                  >
                    {currency(product.price.unit_amount * product.quantity, {
                      fromCents: true,
                    }).format()}
                  </Typography>

                  <Button
                    variant="outlined"
                    sx={{
                      height: "2em",
                      ml: "auto",
                      mt: "1.15em",
                      mr: "0.2em",
                    }}
                    onClick={() => handleRemoveButton(product)}
                  >
                    Remove
                  </Button>
                </Box>
                {idx !== productsInCart.length - 1 && (
                  <Divider sx={{ my: "1em" }} />
                )}
              </Box>
            ))}
          </Card>
        </Grid>
        <Grid item xs={12} md={5} lg={6} sx={{ bottom: 15, position: "sticky" }}>
          <Box >
            <Card
              elevation={isSmallerScreen ? 4 : 8}
              sx={{
                display: "flex",
                flexDirection: "column",
                p: ".2em",
                mt: `${isSmallerScreen ? ".5em" : "0"}`,
                backgroundColor: "#fafafa",
                backgroundImage: `linear-gradient(to bottom, #fafafa, ${purple[50]})`,
              }}
            >
              <CardContent
                sx={{
                  color: "SlateGray",
                  "&:last-child": { paddingBottom: ".5em" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: 1,
                    borderColor: "silver",
                    pb: 1,
                    mb: 1,
                  }}
                >
                  <Typography variant="subtitle2">Subtotal:</Typography>
                  <Typography variant="subtitle2" sx={{ textAlign: "right" }}>
                    {currency(
                      cartContext.reduce((acc, item) => {
                        const product = allProducts.find(
                          (p) => p.id === item.id
                        );
                        return acc + product.price.unit_amount * item.quantity;
                      }, 0),
                      { fromCents: true }
                    ).format()}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: 1,
                    borderColor: "silver",
                    pb: 1,
                    mb: 1,
                  }}
                >
                  <Typography variant="subtitle2">Shipping:</Typography>
                  <Typography variant="subtitle2" sx={{ textAlign: "right" }}>
                    {currency(
                      cartContext.reduce((acc, item) => {
                        const product = allProducts.find(
                          (p) => p.id === item.id
                        );
                        const shipping = Number(
                          product.price.metadata.us_ship_rate
                        );
                        const additionalShipping =
                          Number(product.price.metadata.us_ship_additional) *
                          (item.quantity - 1);
                        return acc + shipping + additionalShipping;
                      }, 0),
                      { fromCents: true }
                    ).format()}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    color: "black",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="subtitle1">Total:</Typography>
                  <Typography variant="subtitle1" sx={{ textAlign: "right" }}>
                    {currency(
                      cartContext.reduce((acc, item) => {
                        const product = allProducts.find(
                          (p) => p.id === item.id
                        );
                        const shipping = Number(
                          product.price.metadata.us_ship_rate
                        );
                        const additionalShipping =
                          Number(product.price.metadata.us_ship_additional) *
                          (item.quantity - 1);
                        return (
                          acc +
                          shipping +
                          additionalShipping +
                          product.price.unit_amount * item.quantity
                        );
                      }, 0),
                      { fromCents: true }
                    ).format()}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: ".7em", width: "100%" }}
              onClick={handleCheckout}
            >
              Checkout with Stripe
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
