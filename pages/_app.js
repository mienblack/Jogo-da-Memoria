import '../src/style.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jogo da Memória</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
