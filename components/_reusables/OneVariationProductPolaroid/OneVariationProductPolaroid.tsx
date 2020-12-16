import * as React from "react"
import {useState} from "react"
import Link from "next/link";
import {
  Color, FabricInformation,
  ImgBlock,
  PopularSliderItemTitle,
  VariableItem,
  VariableItemImg,
  VariationsBlock
} from "./OneVariationProductPolaroid.sc";
import {formatPrice, formatSubtitle} from "../../../utils";
import {PopularSliderItemDesc, PopularSliderItemName} from "../VariableProductPolaroid/VariableProductPolaroid.sc";

const OneVariationProductPolaroid = ({item}) => {

  return (
    <VariableItem key={item.id}>
      <Link href={`/product/${item.slug}`}>
        <ImgBlock>
          { (  item.variations[item.default_variation_id]?.fabric && item.variations[item.default_variation_id].fabric.category.rate > 1) &&
            <FabricInformation>
              С учетом ткани {  item.variations[item.default_variation_id].fabric.category.name} категории,
              +{Math.round((  item.variations[item.default_variation_id].fabric.category.rate - 1) * 100)}%
            </FabricInformation>
          }

          <VariableItemImg
                  src={  item.variations[item.default_variation_id]?.general_image}
                  alt={item.title}
          />
        </ImgBlock>
      </Link>
      <PopularSliderItemDesc>
        <PopularSliderItemName>{item.name}</PopularSliderItemName>
        <PopularSliderItemTitle>{formatSubtitle(item.subtitle)}</PopularSliderItemTitle>
        <div>{formatPrice(  item.variations[item.default_variation_id].price *
                (   item.variations[item.default_variation_id]?.fabric ? ( item.variations[item.default_variation_id].fabric.category.rate + 100) / 100 : 1) ) }</div>
      </PopularSliderItemDesc>
    </VariableItem>
  );
};



export default OneVariationProductPolaroid