// this script builds the list of products that show up 
// on the site, and should also download the images
// and save them in the public folder.
// it only runs at build time on our serverless deployment.
import Stripe from 'stripe';
import fs from 'fs';
import path from 'path';
import mime from 'mime-types';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function getProducts() {
    try {
        // set up directory for writing public files:
        const publicPath = path.join(process.cwd(), 'public');
        if (!fs.existsSync(publicPath)) {
            fs.mkdirSync(publicPath);
        }
        const dataDir = path.join(publicPath, 'data');
        if (!fs.existsSync(dataDir)) {
          fs.mkdirSync(dataDir);
        }
        const imageDir = path.join(publicPath, 'images');
        if (!fs.existsSync(imageDir)) {
          fs.mkdirSync(imageDir);
        }

        // get a list of all the active products
        const products = await stripe.products.list({active:true});

        // for each product, get a list of the first active price and
        // attach that data to the product object.
        for(let i = 0; i < products.data.length; i++){
            const price = await stripe.prices.list({
                                    product: products.data[i].id,
                                    active: true,
                                    limit: 1,
                                });
            products.data[i]['price'] = price.data[0];

            // get the image, create a buffer and save it in the image folder
            const imageResponse = await fetch(products.data[i].images[0]);
            const contentType = imageResponse.headers.get('Content-Type');
            let extension = mime.extension(contentType);
            // set the file name based on the product id.
            let fileName = products.data[i].id;
            if (extension) {
                // can't stand '.jpeg' 
                extension = (extension=="jpeg") ? "jpg": extension;
                fileName += `.${extension}`;
            }
            const imageFilePath = path.join(imageDir, fileName);
            const arrayBuffer = await imageResponse.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            fs.createWriteStream(imageFilePath).write(buffer);

            products.data[i]['local_image'] = fileName;
        }
        // Write a json file of the product data
        const productsDataFile = path.join(dataDir, 'products.json');
        fs.writeFileSync(productsDataFile, JSON.stringify(products.data));

        return products.data;
    }
    catch (error) {
        console.error(error);
        return []; // Return null or an empty array to indicate that an error occurred
    }
}
  
