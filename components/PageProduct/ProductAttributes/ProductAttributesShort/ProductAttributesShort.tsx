import * as React from "react"
import {Anchor, ShortProductAttributes} from "./ProductAttributesShort.sc"
import {getOffset, scrollTo} from "../../../../utils"
import {useSelector} from "react-redux"
import {RootState} from "../../../../redux/store"
import ProductAttribute from "../ProductAttribute"


const ProductAttributesShort = ({scrollToRef = null}: { scrollToRef: React.MutableRefObject<any> }) => {

  const attributes = useSelector((state: RootState) => state.product.entity.static_attributes)

  return (
    <ShortProductAttributes>
      {attributes.slice(0, 4).map((attr, i) =>
        <ProductAttribute key={i} name={attr.taxonomy_name} value={attr.term_name}/>
      )}

      {scrollToRef ?
        <div>
          <Anchor
            onClick={() => {
              let t = scrollToRef.current;
              scrollTo(document.documentElement, getOffset(t).top - (window.innerHeight / 3) + (t.clientHeight / 2), 300)
            }}
          >Все характеристики</Anchor>
        </div>
        : null
      }
    </ShortProductAttributes>
  );
};


export default ProductAttributesShort