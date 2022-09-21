import Head from 'next/head'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
