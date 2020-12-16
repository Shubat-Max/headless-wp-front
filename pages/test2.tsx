import * as React from "react"
import Pay from "../components/Pay"
import Head from "next/head";
import Layout from "../components/Layout";


const PayRoute = () => {
  return (
    <>
      <Head>
        <title>Способы оплаты</title>
      </Head>

      <Layout>
        <Pay />
      </Layout>
    </>
  )
}


export default PayRoute;