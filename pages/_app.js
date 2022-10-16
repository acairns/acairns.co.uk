import Head from 'next/head'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
    return <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="/favicon.png" />

            <title>Andrew Cairns</title>

            <meta key="og:site_name" property="og:site_name" content="Andrew Cairns" />
            <meta key="og:type" property="og:type" content="website" />
            <meta key="og:image" property="og:image" content="https://acairns.co.uk/andrewcairns_400x400.jpeg" />

            <meta key="twitter:card" name="twitter:card" content="summary" />
            <meta key="twitter:site" name="twitter:site" content="@andrewcairns" />
            <meta key="twitter:creator" name="twitter:creator" content="@andrewcairns" />
        </Head>
        <Component {...pageProps} />
    </>;
}

export default MyApp;
