import React from 'react';
import {useDispatch} from "react-redux";
import Head from "next/head";
import DefaultErrorPage from "next/error"
import {IProduct} from "../../types/IProduct";
import {AProduct} from "../../constants/actions";
import {mockProduct} from "../../__mocks__/solidVProduct";
import ProductPage from "../../components/PageProduct";
import FabricSelector from "../../components/_modals/FabricSelector";
import CollectibleSelector from "../../components/_modals/CollectibleSelector";
import Layout from "../../components/Layout";



const ProductRoute = ({response}: { response: { status: string; code: number; product: IProduct } }) => {

  const {code} = response;
  if (code !== 200) return <DefaultErrorPage statusCode={code}/>

  const dispatch = useDispatch();
  const product = response.product[0];
  // const product = response.product;

  console.log(product);

  dispatch({
    type: AProduct.INIT,
    payload: {
      product
    }
  })

  return (
    <>
      <Head>
        <title>{product.name} | SKDesign</title>
      </Head>

      <Layout>
        <ProductPage />
      </Layout>
    </>
  );
};


ProductRoute.getInitialProps = async (ctx) => {
  const product = await fetchProduct( ctx.query.slug );
  // const product = await getProduct();
  return {response: product ? {status: 'OK', code: 200, product} : {status: 'SERVER ERROR', code: 500, product: {}}}
}
const fetchProduct = async (slug) => {
  let response = await fetch(`http://130.193.62.187/wp-json/rest/v1/products/${slug}`)
  // let response = await fetch(`http://130.193.62.149:8080/wp-json/rest/v3/product/${slug}`)
  try {
    response = await response.json();
  } catch (err) {
    return null
  }
  return response
};
// const getProduct = async () => mockProduct;


export default ProductRoute;