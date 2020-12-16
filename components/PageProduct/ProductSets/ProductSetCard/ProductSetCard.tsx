import * as React from 'react';
import {formatPrice} from "../../../../utils";
import {
  ProductBase,
  ProductImageWrapper,
  ProductImage,
  ProductBasePrice,
  ProductInfo,
  ProductSelect,
  ProductName,
  ProductSubtitle, ProductPrices, ProductSetPrice,
} from "./ProductSetCard.sc";

const ProductSetCard = ({name, subtitle, image, basePrice, price}) => {
  if(Array.isArray(subtitle)){
    let categories = subtitle.join(', ');
    subtitle = categories.charAt(0).toUpperCase() + categories.slice(1);
  }

  return (
    <ProductBase>
      <ProductImageWrapper>
        <ProductImage src={image} />
      </ProductImageWrapper>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductSubtitle>{subtitle}</ProductSubtitle>
        <ProductPrices>
          <ProductBasePrice>{formatPrice(basePrice)}</ProductBasePrice>
          <ProductSetPrice>{formatPrice(price)}</ProductSetPrice>
        </ProductPrices>
      </ProductInfo>
      <ProductSelect onClick={() => { console.log('@@SET/QUERY_PRODUCT') }}>Выбрать</ProductSelect>
    </ProductBase>
  );
};



export default ProductSetCard;