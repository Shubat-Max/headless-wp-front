import React from 'react';
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import {Col, Container, Row} from "../components/Grid";

const CartRoute = () => {
  return (
    <>
      <Head>
        <title>Корзина</title>
      </Head>

      <Layout>
        <Container>
          <Row>
            <Col xs={12}>
              Корзина
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default CartRoute;