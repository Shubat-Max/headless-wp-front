import styled from "styled-components";
import {Colors} from "../../../constants/colors";

export const PriceSlider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  & .horizontal-slider {
    width: 200px;
    max-width: 200px;
    height: 50px;
  }
  
  & .example-track.example-track-1 {
    background-color: ${Colors.PRIMARY};
  }
  
  & .horizontal-slider .example-track {
    top: calc(50% - 1px);
    height: 2px;
  }
  
  & .horizontal-slider .thumb {
    top: calc( 50% - 7px);
    width: 15px;
    height: 15px;
    line-height: 15px;
    border-radius: 50%;
    background: #fff;
}
  }
  
  & .thumb {
    font-size: 0.9em;
    text-align: center;
    background-color: black;
    color: white;
    cursor: pointer;
    border: 2px solid ${Colors.PRIMARY};
    box-sizing: border-box;
    outline: none;
  }    
`

export const PriceInput = styled.div`
  background: #FFFFFF;
  border: 2px solid #E3E3E3;
  box-sizing: border-box;
  border-radius: 3px;
  width: 60px;
  height: 30px;
  outline: none;
  display:flex;
  align-items: center;
  justify-content: center;
  font: normal normal 400 12px/1.5em 'Open Sans',sans-serif;
`

export const RadioItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;  
  align-items: center;
  margin-top: 10px;
  font: normal normal 400 14px/20px 'Open-Sans', sans-serif;
`

export const ButtonRadio = styled.span<{active: boolean}>`
  display: block;
  border: 2px solid ${props => props.active ? Colors.PRIMARY : Colors.DIVIDER};
  width: 16px;
  height: 16px;
  border-radius: 50%;  
  margin-right: 10px;
  position: relative;
 
  &:after {
    display: ${props => props.active ? 'block' : 'none'};
    content: '';
    position:absolute;
    top: calc(50% - 4px);
    left: calc(50% - 4px);
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: ${Colors.PRIMARY};
  }
`

export const AccordeonPriceBlock = styled.div`
  border-bottom: 1px solid ${Colors.DIVIDER};
  padding-bottom: 20px;
  margin-bottom: 20px;
`

export const PriceFilter = styled.div``

export const AccordeonBody = styled.div``