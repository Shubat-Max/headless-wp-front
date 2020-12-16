import React from 'react';
import styled from "styled-components";
import {Colors} from "../../../../constants/colors";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {formatPrice} from "../../../../utils";

const ProductSetBaseCard = () => {

  const { name, subtitle } = useSelector((state:RootState) => state.product.entity )
  const { price, general_image, fabric } = useSelector((state:RootState) => state.product.variation )
  const basePrice = fabric ? price * fabric.category.rate : price;

  let subname = subtitle
  if(Array.isArray(subtitle)){
    let categories = subtitle.join(', ');
    subname = categories.charAt(0).toUpperCase() + categories.slice(1);
  }

  return (
    <ProductBase>
      <ProductImageWrapper>
        <ProductImage src={general_image} />
      </ProductImageWrapper>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductSubtitle>{subname}</ProductSubtitle>
        <ProductPrices>
          <ProductBasePrice>{formatPrice(basePrice)}</ProductBasePrice>
          <ProductSetPrice>{formatPrice(basePrice)}</ProductSetPrice>
        </ProductPrices>
      </ProductInfo>
    </ProductBase>
  );
};

const ProductBase = styled.div`
  background: #fff;
  flex: 0 0 295px;
  width: 295px;
  border-radius: 3px;
  padding: 13px 15px;
  border: 1px solid ${Colors.PRIMARY};
  display: flex;
`
const ProductImageWrapper = styled.div`
  flex: 0 0 75px;
  width: 75px;
  height: 75px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ProductImage = styled.img`
  width: 100%;
  user-select: none;
  -webkit-user-drag: none;
`
const ProductInfo = styled.div`
  margin-left: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
`
const ProductName = styled.div`
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
  max-height: 1.5em;
  height: 1.5em;
`
const ProductSubtitle = styled.div`
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.SECONDARY_TEXT};
  max-height: 3em;
  height: 3em;
`
const ProductPrices = styled.div`
  margin-top: 5px;
`
const ProductBasePrice = styled.span`
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
`
const ProductSetPrice = styled.span`
  font: normal normal 400 12px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.SECONDARY_TEXT};
  text-decoration: line-through;
  margin-left: 5px;
`

export default ProductSetBaseCard;