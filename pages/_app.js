import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="##7050e2"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  )

}

export default MyApp


