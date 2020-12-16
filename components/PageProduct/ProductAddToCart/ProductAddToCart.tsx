import * as React from "react"
import {AddToCartButton} from "./ProductAddToCart.sc"
import {useDispatch} from "react-redux";
import {ACart} from "../../../constants/actions";


const ProductAddToCart = () => {

  const dispatch = useDispatch();

  return (
    <AddToCartButton
      onClick={() => {
        dispatch({
          type: ACart.ADD,
          payload: {

          }
        })
      }}
    >
      Добавить в корзину
    </AddToCartButton>
  )
}


export default ProductAddToCart