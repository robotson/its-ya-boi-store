import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NextLink from 'next/link';
import { Container } from '@mui/material';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router';

export default function SiteBreadcrumbs() {
  const router = useRouter();
  const { pathname } = router;

  // Define breadcrumbs based on the current route
  let breadcrumbs = [];
  if (pathname === '/') {
    breadcrumbs = [
      <Typography key="home" variant="body1" color="textSecondary">
        Home
      </Typography>,
      <Typography key="featured-products" variant="subtitle1" color="textSecondary">
        Featured Products
      </Typography>,
    ];
  } else if (pathname === '/cart') {
    breadcrumbs = [
      <Link key="home" component={NextLink} href="/" underline="hover">
        <Typography variant="body1" color="textSecondary">
          Home
        </Typography>
      </Link>,
      <Typography key="cart" variant="subtitle1" color="textSecondary">
        Your Cart
      </Typography>,
    ];
  } else if (pathname === '/confirmation') {
    breadcrumbs = [
      <Link key="home" component={NextLink} href="/" underline="hover">
        <Typography variant="body1" color="textSecondary">
          Home
        </Typography>
      </Link>,
      <Typography key="confirmation" variant="subtitle1" color="textSecondary">
        Order Confirmation
      </Typography>,
    ];
  }

  return (
    <Container maxWidth="lg">
      <Breadcrumbs separator="›" aria-label="breadcrumb" height="3em">
        {breadcrumbs}
      </Breadcrumbs>
    </Container>
  )
}