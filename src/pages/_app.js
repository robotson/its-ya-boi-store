import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import createEmotionCache from "@/util/createEmotionCache";
import { lightTheme } from "@/styles/theme/lightTheme";
import Layout from "@/components/layout";
import { CartProvider } from "@/contexts/CartContext";
import Head from 'next/head'

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (
    <>
        <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
            <CartProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </CartProvider>
        </ThemeProvider>
        </CacheProvider>
    </>
  );
}

export default MyApp;