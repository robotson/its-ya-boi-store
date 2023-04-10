import Head from 'next/head';
import ProductCard from '@/components/ProductCard';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styles from "@/styles/Home.module.css";
import { getProducts } from '@/lib/products';

export async function getStaticProps() {
  const allProducts = await getProducts();
  return {
    props: {
      allProducts,
    },
  };
}

export default function Home({ allProducts }) {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>{process.env.GREETING + " webstore"}</title>
      </Head>
      <Container maxWidth="lg">
        <Grid className={styles.container} container spacing={3}>
          {allProducts.map((product) => (
              <Grid item xs={12} sm={6} key={product.id}>
                <ProductCard product={product}/>
              </Grid>
          ))}
        </Grid>
      </Container>
  </>
  )
}