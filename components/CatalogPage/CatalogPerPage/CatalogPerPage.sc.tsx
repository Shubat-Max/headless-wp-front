import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {sizes} from "../../../constants/sizes";

export const PerPageBlock = styled.div<{active : boolean}>`
  border: 2px solid ${props => props.active ? Colors.PRIMARY  : Colors.DIVIDER};
  border-radius: 3px;
  padding: 6px 15px;
  position: relative;
  outline: ${Colors.PRIMARY};
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  user-select: none;
  margin-left: 10px;
  font:normal normal 400 14px/1em 'Open Sans',sans-serif;
    
  @media (${sizes.maxLg}) {
      padding: 5px 15px;
  }
`

export const PerPageSelect = styled.ul<{active : boolean}>`
  display: ${props => props.active ? 'block'  : 'none'}; ;
  position:absolute;
  bottom: calc( 100% + 5px);
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
  
    @media (${sizes.maxLg}) {
      bottom: auto;
      top: calc( 100% + 5px);
  }
`

export const PerPageMobile = styled.div`
   border-bottom: 1px solid ${Colors.DIVIDER};
   margin-bottom: 20px;
`

export const PerPageArrow = styled.span<{active : boolean}>`
  display: flex;
  width: 10px;
  align-items: center;
  transform:  ${props => props.active ? 'rotate(0)'  : 'rotate(180deg)'};
  transition: all 0.1s;
  margin-left: 15px;
`

export const PerPageItem = styled.li<{active : boolean}>`
  min-width: calc( 100% + 2px );
  padding: 5px 15px;
  border-bottom: 2px solid ${Colors.DIVIDER};

  &:last-of-type {
    border-bottom: none;
  }
`

export const PerPageLine = styled.div<{isMobile: boolean}>`
  flex-direction: row;
  align-items: center;
  display: ${props => props.isMobile ? 'none'  : 'flex'};
  
  @media (${sizes.maxLg}) {
    display: ${props => props.isMobile ? 'flex'  : 'none'};
    margin-bottom: 20px;
  }
`