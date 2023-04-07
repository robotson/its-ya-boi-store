import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Confirmation() {
    const [message, setMessage] = useState('');
    const router = useRouter();

    useEffect(() => {
        // Clear cart from local storage
        localStorage.removeItem('cart');

        const successMessage = `Your order was successfully processed.
        You should recieve an email receipt for your purchase from Stripe, 
        and an additional email from \"it's ya boi webstore\" (lance@robotson.media)
        with your tracking number when your order ships.`;

        // Conditionally set success message
        if (typeof document !== 'undefined' && document.referrer.includes('checkout.stripe.com')) {
            setMessage(successMessage);
        } else if (typeof document !== 'undefined' && !document.referrer.includes('checkout.stripe.com')) {
            setMessage('');
            router.push("https://iyb-store.demo.codes");
        } else {
            setMessage('');
        }
    }, []);

    return <div>
        <h1>{message}</h1>
    </div>;
}

export default Confirmation;