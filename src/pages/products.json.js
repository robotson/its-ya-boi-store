export async function getStaticProps() {
    const allProducts = await getProducts();
  
    // Return the data as props with a revalidate time of 1 hour
    return {
      props: {
        allProducts,
      }
    };
  }