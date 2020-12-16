import styled from "styled-components";
import {Colors} from "../../../../constants/colors";

export const ProductBase = styled.div`
  background: #fff;
  padding: 15px;
  width: calc(calc(100% - 40px) / 2.5);
  margin-right: 20px;
  border-radius: 3px;
  border: 1px solid ${Colors.DIVIDER};
  display: flex;
  align-items: center;
  
  &.is-selected {
    border: 1px solid ${Colors.PRIMARY};
  }
`
export const ProductImageWrapper = styled.div`
  flex: 0 0 75px;
  width: 75px;
  height: 75px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ProductImage = styled.img`
  width: 100%;
  user-select: none;
  -webkit-user-drag: none;
`
export const ProductInfo = styled.div`
  margin-left: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
  flex: 1;
`
export const ProductName = styled.div`
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
`
export const ProductSubtitle = styled.div`
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.SECONDARY_TEXT};
`
export const ProductPrices = styled.div`
  margin-top: 5px;
`
export const ProductBasePrice = styled.span`
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
`
export const ProductSetPrice = styled.span`
  font: normal normal 400 12px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.SECONDARY_TEXT};
  text-decoration: line-through;
  margin-left: 5px;
`
export const ProductSelect = styled.div`
  flex: 0 0;
  padding: 7px 8px;
  border-radius: 3px;
  border: 2px solid ${Colors.DIVIDER};
  font: normal normal 400 12px/1em 'Open-Sans', sans-serif;
  
  &:hover {
    border-color: ${Colors.PRIMARY}
  }
`