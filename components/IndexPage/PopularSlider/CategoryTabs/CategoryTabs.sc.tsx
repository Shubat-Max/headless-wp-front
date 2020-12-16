import styled from "styled-components";
import {Colors} from "../../../../constants/colors";

export const CategoryTabsContainer = styled.div<{ left: number, width: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid ${Colors.DIVIDER};
  margin-bottom: 30px;
  position: relative;
  user-select: none;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    height: 1px;
    width: ${props => props.width}px;
    background-color: ${Colors.PRIMARY};
    left: ${props => props.left}px;
    transition:  all 0.1s;
  }
`
export const CategoryTabsItem = styled.div<{ active: boolean }>`
  color: ${props => props.active ? Colors.PRIMARY : Colors.SECONDARY_TEXT};
  margin-right: 20px;
  cursor: pointer;
  font: normal normal 400 18px/1.5em 'Open-Sans', sans-serif;
  letter-spacing: 0.5px;
  
  &:hover {
    color: ${Colors.PRIMARY};
  }
  &:last-of-type {
    margin-right: 0;
  }
}
`