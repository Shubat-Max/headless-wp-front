import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {sizes} from "../../../constants/sizes";

export const SortAndStockBlock = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  align-items: center;
  justify-content: space-between;

`

export const ActiveFilterBLock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 25px;
`

export const ActiveFilterClose = styled.div`
  background: #fff;
  padding: 6px 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.1s;
  border: 2px solid ${Colors.DIVIDER};
  cursor: pointer;
  font:normal normal 400 14px/100% 'Open Sans',sans-serif;
  margin-bottom: 5px;


  
  &:hover {
    border: 2px solid ${Colors.PRIMARY};
  }
`

export const CallFilterMobile = styled.div<{active : boolean}>`
  display: none;
  width: 46px;
  height: 30px;
  border: 2px solid ${ props => props.active ? Colors.PRIMARY : Colors.DIVIDER};
  background-color: ${ props => props.active ? Colors.PRIMARY : '#fff'};
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  transition: all 0.1s;
  
  & svg {
    fill: ${ props => props.active ? '#fff' : Colors.PRIMARY_TEXT};
  }
  
  @media (${sizes.maxLg}) {
    display: flex;
  }
`