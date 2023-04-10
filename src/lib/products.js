import products from '@/data/products';

export async function getProducts() {
    try {
        return products;
    }
    catch (error) {
        console.error(error);
        return []; // Return null or an empty array to indicate that an error occurred
    }
}
  
