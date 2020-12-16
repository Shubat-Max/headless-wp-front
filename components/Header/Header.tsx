import * as React from "react"
import {Col, Container, Row} from "../Grid"
import styled from "styled-components"
import Link from "next/link";
import {Colors} from "../../constants/colors";


const Header = () => {
  return (
    <>
      <HeaderBlock fluid>
        <Row>
          <Col xs={12}>
            <Navigation>
              <Link href="/">Главная</Link>
              <Link href="/product-category/beds">Каталог</Link>
              <Link href="/product/raf-triple">Raf Triple</Link>
              <Link href="/warranty">Гарантии</Link>
              <Link href="/delivery">Доставка</Link>
              <Link href="/payment">Оплата</Link>
              <Link href="/cart">Корзина</Link>
              <Link href="/test1">Flickity</Link>
              <Link href="/test2">LightBox</Link>
            </Navigation>
          </Col>
        </Row>
      </HeaderBlock>
    </>
  )
}


const Navigation = styled.div`
  & > div + a {
    margin-top: 20px;
  }
  
  & > a {
    display: inline-block;
    border-radius: 3px;
    border: 1px solid #e3e3e3;
    padding: 10px 20px;
    cursor: pointer;
    margin-right: 15px;
  }
  
  & > a:hover {
    border-color: ${Colors.PRIMARY};
  }

  max-width: 1440px;
`
export const HeaderBlock = styled(Container)`
  border-bottom: 1px solid #e3e3e3;
  padding-top: 30px;
  padding-bottom: 30px;
  //margin-bottom: 30px;
  background: #fafafa;
`


export default Header