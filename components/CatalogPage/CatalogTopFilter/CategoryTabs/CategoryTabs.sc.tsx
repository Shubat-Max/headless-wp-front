import styled from "styled-components";
import {Colors} from "../../../../constants/colors";

export const CategoryTabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 30px;
  position: relative;
  user-select: none;

`
export const CategoryTabsItem = styled.div<{ active: boolean }>`
  color: ${props => props.active ? Colors.PRIMARY : Colors.SECONDARY_TEXT};
  margin-right: 20px;
  cursor: pointer;
  font: normal normal 400 18px/1.5em 'Open-Sans', sans-serif;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  position: relative;
 
  &::after {
    display: ${props => props.active ? 'block' : 'none'};
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    
    height: 1px;
    background-color:${Colors.PRIMARY};
  }
  
  &:hover {
    color: ${Colors.PRIMARY};
  }
  &:last-of-type {
    margin-right: 0;
  }
}
`