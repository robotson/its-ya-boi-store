import Head from 'next/head';
import { getProducts } from '@/lib/products';
import currency from 'currency.js';

export default function ItsYaBoi({ allProducts }) {
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
          </li>
        ))}
      </ul>
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