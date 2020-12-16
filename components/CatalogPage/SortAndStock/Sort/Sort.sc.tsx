import styled from "styled-components";
import {Colors} from "../../../../constants/colors";
import {sizes} from "../../../../constants/sizes";

export const SortBlock = styled.div<{active : boolean, isMobile :boolean}>`
  border: 2px solid ${props => props.active ? Colors.PRIMARY  : Colors.DIVIDER};
  border-radius: 3px;
  padding: 6px 15px;
  position: relative;
  min-width: 180px;
  outline: ${Colors.PRIMARY};
  background: #fff; 
  cursor: pointer;
  display: ${props => props.isMobile ? 'none'  : 'flex'};
  align-items: center;
  justify-content: space-between; 
  user-select: none;
  font:normal normal 400 14px/100% 'Open Sans',sans-serif;
  
  @media (${sizes.maxLg}) {
    display: ${props => props.isMobile ? 'flex'  : 'none'};
    margin: 20px 0;
  }
`

export const SortMobile = styled.div`
   border-bottom: 1px solid ${Colors.DIVIDER};
   margin-bottom: 20px;
`

export const SortSelect = styled.ul<{active : boolean}>`
  display: ${props => props.active ? 'block'  : 'none'}; ;
  position:absolute;
  top: calc( 100% + 5px);
  left: -1px;
  width: fit-content; 
  margin: 0;
  padding-inline-start: 0;
  min-width: calc( 100% + 2px );
  list-style-type: none;
  border-radius: 3px;
  z-index: 3;
  background: #fff;
  border: 2px solid ${Colors.DIVIDER};
  padding: 5px 0;
  box-shadow: 3px 3px 0px rgba(53, 50, 56, 0.05);
`

export const SortArrow = styled.span<{active : boolean}>`
  display: flex; 
  width: 10px;
  align-items: center;
  transform:  ${props => props.active ? 'rotate(0)'  : 'rotate(180deg)'};
  transition: all 0.1s;
  margin-left: 15px;
  
`

export const SortItem = styled.li<{active : boolean}>`
  min-width: calc( 100% + 2px );
  padding: 5px 15px;
  border-bottom: 2px solid ${Colors.DIVIDER};
    font: normal normal 400 14px/20px 'Open-Sans', sans-serif;
  

  &:last-of-type {
    border-bottom: none;
  }
`