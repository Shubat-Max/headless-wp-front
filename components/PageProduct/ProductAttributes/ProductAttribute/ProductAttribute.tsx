import * as React from "react"
import {
  AttributeName,
  AttributeNameWrp,
  AttributeRow,
  AttributeValue
} from "./ProductAttribute.sc"

const ProductAttribute = ({name, value}) => {
  if (!(name && value) ) return null

  return (
    <AttributeRow>
      <AttributeNameWrp>
        <AttributeName>{name}</AttributeName>
      </AttributeNameWrp>
      <AttributeValue>{value}</AttributeValue>
    </AttributeRow>
  )
}

export default ProductAttribute