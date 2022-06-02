import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Reddit</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
    </div>
  )
}

export default Home
