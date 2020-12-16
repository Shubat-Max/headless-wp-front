import * as React from "react"
import Link from "next/link"
import {Col, Container, Row} from "../Grid"
import ProductTitle from "./ProductTitle"
import ProductGallery from "./ProductGallery"
import Variator from "./Variator"
import ProductAttributes from "./ProductAttributes"
import ProductPrice from "./ProductPrice"
import ProductAddToCart from "./ProductAddToCart"
import ProductStock from "./ProductStock"
import ProductCollectibles from "./ProductCollectibles"
import ProductHints from "./ProductHints"
import ProductSets from "./ProductSets"
import ProductInteriorGallery from "./ProductInteriorGallery"
import ProductComparison from "./ProductComparison"
import ProductFit from "./ProductFit"
import ProductCrossCategories from "./ProductCrossCategories"
import styled from "styled-components"
import {Colors} from "../../constants/colors"
import CollectibleSelector from "../_modals/CollectibleSelector"
import FabricSelector from "../_modals/FabricSelector"
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const ProductPage = () => {

  const fullAttributesRef = React.useRef(null)
  const { backwards: {slug, dative} } = useSelector((state:RootState) => state.product.entity.links)

  return (
    <ProductCard>

      <Breadcrumbs>
        {
          slug && dative ? <Link href={`/product-category/${slug}`}><a><BackwardIcon /><BackwardLink>Назад к {dative}</BackwardLink></a></Link> : null
        }
      </Breadcrumbs>

      <Container>
        <Row>
          <Col xs={12}>
            <ProductTitle/>
          </Col>
        </Row>
      </Container>


      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={4} xl={4} order={{xs: 1, sm: 1}}>
            <ProductGallery/>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4} order={{xs: 3, sm: 3, md: 2}}>
            <Variator/>
            <ProductAttributes
              short={true}
              scrollToRef={fullAttributesRef}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4} order={{xs: 2, sm: 2, md: 3}}>
            <ProductPrice/>
            <ProductAddToCart/>
            <ProductStock/>
            <ProductCollectibles/>
            <ProductHints/>
          </Col>
        </Row>
      </Container>

      <MobileSeparator />

      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <ProductSets/>
          </Col>
        </Row>
      </Container>

      <ProductInteriorGallery/>

      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div ref={fullAttributesRef}>
              <ProductAttributes />
            </div>
          </Col>
        </Row>
      </Container>

      <MobileSeparator />

      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <ProductComparison/>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <ProductFit/>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <ProductCrossCategories/>
          </Col>
        </Row>
      </Container>

      <div style={{marginBottom: '40px'}}/>

      <CollectibleSelector/>
      <FabricSelector/>
    </ProductCard>
  );
};



const MobileSeparator = styled.div`
  display: none;
  
  @media (max-width: 768px){
    display: block;
    height: 15px;
    background: ${Colors.INTERACTIVE_HOVER};
    border-top: 1px solid ${Colors.DIVIDER};
    border-bottom: 1px solid ${Colors.DIVIDER};
  }
`
const ProductCard = styled.div`
  overflow: hidden;
  width: 100vw;
`
const Breadcrumbs = styled(Container)`
  margin-top: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`
const BackwardIcon = styled.div`
  display: inline-block;
  height: 9px;
  width: 5px;
  background: transparent url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjExMzk0NSA1LjY2Mjg2TDQuNzM5MjQgOS44OTYyMUM0Ljg5MDc4IDEwLjAzNDggNS4xMzYxMyAxMC4wMzQ2IDUuMjg3NDIgOS44OTU1QzUuNDM4NTkgOS43NTY0MSA1LjQzODIgOS41MzExIDUuMjg2NjQgOS4zOTIzN0wwLjkzNjY1NiA1LjQxMDk4TDUuMjg2NzkgMS40Mjk2MUM1LjQzODM0IDEuMjkwODYgNS40Mzg3MyAxLjA2NTcgNS4yODc1OCAwLjkyNjU5NkM1LjIxMTc0IDAuODU2ODY1IDUuMTEyMzggMC44MjE5OTkgNS4wMTMwMyAwLjgyMTk5OUM0LjkxMzkyIDAuODIxOTk5IDQuODE0OTYgMC44NTY2MzEgNC43MzkyNiAwLjkyNTg3OUwwLjExMzk0NSA1LjE1OTEzQzAuMDQwOTU3IDUuMjI1NzcgMCA1LjMxNjQ4IDAgNS40MTA5OEMwIDUuNTA1NDkgMC4wNDEwNzQzIDUuNTk2MDggMC4xMTM5NDUgNS42NjI4NloiIGZpbGw9IiMzNTMyMzgiLz4KPC9zdmc+Cg==") center/5px no-repeat;
  margin-right: 10px;
`
const BackwardLink = styled.span`
  color: ${Colors.PRIMARY_TEXT};
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  cursor: pointer;
  
  &:hover {
    color: ${Colors.PRIMARY}
  }
`;

export default ProductPage;