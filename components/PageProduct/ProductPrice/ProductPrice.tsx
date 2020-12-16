import * as React from "react"
import {useSelector} from "react-redux"
import {RootState} from "../../../redux/store"
import {formatPrice} from "../../../utils"
import {BasePrice, FabricDetails, FabricNotification, Price} from "./ProductPrice.sc"


const ProductPrice = () => {

  const {price, fabric}: {
    price: number;
    fabric?: {
      category: {
        material: string;
        name: number;
        rate: number;
      };
      collection: string;
      image: string;
      name: string;
      slug: string;
    }
  } = useSelector((state: RootState) => ({
    price: state.product.variation.price,
    fabric: state.product.fabric
  }))

  if (!price) return null;

  const basePrice = price
  let scaledPrice = price
  let rate = 1
  let name = 1
  if (fabric) {
    if (fabric?.category) {
      rate = fabric?.category?.rate
      name = fabric?.category?.name
    }
    // scaledPrice = basePrice * rate
    scaledPrice = price * ((100 + rate) / 100)
  }

  return (
    <div>
      <Price>{formatPrice(scaledPrice)}</Price>
      {
        fabric !== undefined ?
          <FabricDetails>
            <FabricNotification>В ткани {name}-й категории</FabricNotification>
            <BasePrice>Базовая цена: {formatPrice(basePrice)}</BasePrice>
          </FabricDetails>
          : null
      }
    </div>
  )
}


export default ProductPrice