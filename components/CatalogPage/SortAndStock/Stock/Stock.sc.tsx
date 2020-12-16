import styled from "styled-components";
import {Colors} from "../../../../constants/colors";

export const ToggleSelect = styled.div<{active : boolean}>`
  width: 56px;
  height: 30px;
  background: ${props => props.active ? Colors.PRIMARY  : Colors.DIVIDER}; ;
  border-radius: 24px;
  margin-right: 10px;
  position: relative;
  transition: all 0.1s;

  
  &:before {
    position: absolute;
    content: '';
    width: 22px;
    height: 22px;
    left: ${props => props.active ? 'calc(100% - 26px)'  : '4px'};
    top: 4px;
    border-radius: 50%;
    background: #fff;
    transition: left 0.1s;
  }
`

export const StockBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`