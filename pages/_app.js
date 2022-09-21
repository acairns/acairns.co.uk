import Head from 'next/head'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.png" />

      <meta property="og:title" content="Andrew Cairns" />
      <meta property="og:description" content="My name is Andrew Cairns and I'm a Software Engineer living in Scotland. This is where I share my thoughts regarding software development." />
      <meta property="og:image" content="https://acairns.co.uk/andrewcairns_400x400.jpeg" />
      <meta property="og:site_name" content="Andrew Cairns" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@andrewcairns" />
      <meta name="twitter:creator" content="@andrewcairns" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
