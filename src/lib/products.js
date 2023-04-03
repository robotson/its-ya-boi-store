import Stripe from 'stripe';
import fs from 'fs';
import path from 'path';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function getProducts() {
    try {
        const products = await stripe.products.list({active:true});

        for(let i = 0; i < products.data.length; i++){
            const price = await stripe.prices.list({
                                    product: products.data[i].id,
                                    active: true,
                                    limit: 1,
                                });
            products.data[i]['price'] = price.data[0];
        }
        console.log(process.cwd())
        const publicPath = path.join(process.cwd(), 'public');
        const dataDir = path.join(publicPath, 'data');
        if (!fs.existsSync(dataDir)) {
          fs.mkdirSync(dataDir);
        }
        const productsDataFile = path.join(dataDir, 'products.json');
        console.log(productsDataFile)
        fs.writeFileSync(productsDataFile, JSON.stringify(products.data));
    
        return products.data;
    }
    catch (error) {
        console.error(error);
        return []; // Return null or an empty array to indicate that an error occurred
    }
}
  
