import styled from "styled-components";
import {Colors} from "../../../../constants/colors";
import {sizes} from "../../../../constants/sizes";

export const PriceSliderStyle = styled.div`
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
  
  @media (${sizes.maxLg}) {
    flex-wrap: wrap;
      
    & .horizontal-slider {
      order: 2;
      width: 100%;
      max-width: 100%;
    }
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
  
  @media (${sizes.maxLg}) {
    width: 127.5px;
    margin-top: 20px;
  }  
  @media (${sizes.maxSm}) {
    width: 103.5px;
  }
`
