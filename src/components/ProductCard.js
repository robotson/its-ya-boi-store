import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import currency from 'currency.js';
import { useCartContext } from '@/contexts/CartContext';
import AddToCartButton from '@/components/AddToCartButton';


const ProductCard = ({ product }) => {
  const theme = useTheme();

  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
      <CardMedia
        component="img"
        sx={{ objectFit: "contain" }}
        image={`images/${product.local_image}`}
        title={product.name}
      />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: theme.palette.primary.dark }}>
          {product.name}
        </Typography>
        <Typography variant="subtitle1">
          {currency(product.price.unit_amount, { fromCents: true }).format()}
          {" each"}
        </Typography>
        <Typography variant='subtitle2' sx={{ color: "grey" }}>
          plus {currency(product.price.metadata.us_ship_rate, { fromCents: true }).format()}
          {" Shipping"}
        </Typography>
      </CardContent>
      <CardActions p={2}>
        <Box textAlign="center" width="100%" p={1}>
          <AddToCartButton product={product} ></AddToCartButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProductCard;