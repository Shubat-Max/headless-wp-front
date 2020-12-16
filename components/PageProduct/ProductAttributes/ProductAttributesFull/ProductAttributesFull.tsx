import * as React from "react"
import {FullProductAttributes, Heading} from "./ProductAttributesFull.sc"
import {Col, Row} from "../../../Grid"
import {useSelector} from "react-redux"
import {RootState} from "../../../../redux/store"
import ProductAttribute from "../ProductAttribute"


const ProductAttributesFull = ({columns = 2}) => {

  const attributes = useSelector((state: RootState) => state.product.entity.static_attributes)

  if (!attributes.length) return null;

  let attributeBlocks = {};
  let rowsPerBlock = Math.ceil(attributes.length / columns)
  for (let i = 0; i < columns; i++) {
    attributeBlocks[i] = attributes.slice(rowsPerBlock * i, rowsPerBlock * (i + 1));
  }

  return (
    <FullProductAttributes>
      <Heading>Характеристики</Heading>
      <Row>
        {Object.keys(attributeBlocks).map((key, i) =>
          <Col xs={12} sm={12} md={12 / columns} lg={12 / columns} xl={12 / columns} key={i}>
            {attributeBlocks[key].map((attr, j) =>
              <ProductAttribute key={`${i}-${j}`} name={attr.taxonomy_name} value={attr.term_name}/>
            )}
          </Col>
        )}
      </Row>
    </FullProductAttributes>
  );
};


export default ProductAttributesFull