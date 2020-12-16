import * as React from "react"
import ProductAttributesShort from "./ProductAttributesShort"
import ProductAttributesFull from "./ProductAttributesFull"


const ProductAttributes = ({short = false, scrollToRef = null, columns = 2,}: { short?: any; scrollToRef?: any; columns?: any; }) =>
  <div>
    {short ?
      <ProductAttributesShort scrollToRef={scrollToRef}/> :
      <ProductAttributesFull columns={columns}/>
    }
  </div>


export default ProductAttributes