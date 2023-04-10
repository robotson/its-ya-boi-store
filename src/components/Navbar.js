import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router'
import { useCartContext } from '@/contexts/CartContext';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const { cartContext, setCartContext } = useCartContext();
  const [badgeCount, setBadgeCount] = useState();
  const router = useRouter();

  useEffect(() => {
    // update the badge whenever the cart contents change
    setBadgeCount(cartContext.reduce((memo, item) => memo + item.quantity, 0));
  }, [cartContext]);

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
        <Container disableGutters>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "light" }}>
              <Link href="/" component={NextLink} underline="none" color="inherit">
                {`it's ya boi webstore`}
              </Link>
            </Typography>
            <IconButton
              size="large"
              aria-label="shopping cart"
              color="inherit"
              onClick={() => router.push('cart')}
            >
              <Badge badgeContent={badgeCount} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      {/* show two different spacers here depending on media query */}
      <Toolbar sx={{ height: "4.5em", display: { xs: 'block', sm: 'none' }  }} />
      <Toolbar sx={{ height: "5em", display: { xs: 'none', sm: 'block' }  }} />
    </Box>
  )
};
export default Navbar;