import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function getProducts() {
    const products = await stripe.products.list({active:true});

    for(let i = 0; i < products.data.length; i++){
        const price = await stripe.prices.list({
                                product: products.data[i].id,
                                active: true,
                                limit: 1,
                            });
        products.data[i]['price'] = price.data[0];
    }
    return products.data;
}
  
