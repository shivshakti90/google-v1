import Head from 'next/head'
import Header from './components/header.js'
import Body from './components/body.js'
import Footer from './components/footer.js'
export default function Home() {
  return (
    <>
      <Head>
        <title>Google-v1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Body */}
      <Body />
      {/* Footer */}
      <Footer />
    </>
  )
}
