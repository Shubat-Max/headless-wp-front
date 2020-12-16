import React from "react"
import {useSelector} from "react-redux"
import {RootState} from "../../../../redux/store"
import FabricCollections from "../FabricCollections"
import {CategoryHead, CategoryLabel, CategoryPrice, SCFabricCategory} from "./FabricCategory.sc"
import {formatPrice} from "../../../../utils";


const FabricCategory = ({categoryData}) => {

  const {category, percent, collections} = categoryData
  const price = useSelector((state: RootState) => state.product.variation.price)
  const categoryPrice = percent ? (price + (price / 100 * percent)) : price

  if( !collections?.length ) return null;

  return (
    <SCFabricCategory>
      <CategoryHead>
        <CategoryLabel>{category} категория {percent ? `(+${percent}%)` : null}</CategoryLabel>
        <CategoryPrice>{formatPrice(categoryPrice)}</CategoryPrice>
      </CategoryHead>

      <FabricCollections
        collections={collections}
        category={category}
        scale={percent}
      />
    </SCFabricCategory>
  )
}

export default FabricCategory