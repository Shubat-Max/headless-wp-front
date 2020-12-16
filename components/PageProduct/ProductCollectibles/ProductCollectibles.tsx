import * as React from "react"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../../../redux/store"
import {ProductCollectiblesButton, SCProductCollectibles} from "./ProductCollectibles.sc"
import {AModal} from "../../../constants/actions";

const ProductCollectibles = () => {

  const {count} = useSelector((state: RootState) => state.product.entity.collection)

  if (!count) return null

  const dispatch = useDispatch()

  return (
    <SCProductCollectibles>
      <ProductCollectiblesButton
        onClick={() => {
          dispatch({
            type: AModal.OPEN,
            payload: {target: 'modalCollectibles'}
          })
        }}
      >
        Товары из коллекции ({count ? count : NaN})
      </ProductCollectiblesButton>
    </SCProductCollectibles>
  )
}


export default ProductCollectibles