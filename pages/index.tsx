import * as React from "react"
import Head from "next/head"
import IndexPage from "../components/IndexPage"
import Layout from "../components/Layout";


const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>SK Design - интернет-магазин современной дизайнерской мебели</title>
      </Head>

      <Layout>
        <IndexPage />
      </Layout>
    </>
  )
}


export default Home