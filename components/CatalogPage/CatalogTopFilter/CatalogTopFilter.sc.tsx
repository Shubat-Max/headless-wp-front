import styled from "styled-components";

export const PriceSlider = styled.div`
  width: 500px;
  
  & .horizontal-slider {
    width: 100%;
    max-width: 500px;
    height: 50px;
    border: 1px solid grey;
  }
  
  & .example-track.example-track-1 {
    background: rgb(255, 0, 0);
  }
  
  & .horizontal-slider .example-track {
    top: 20px;
    height: 10px;
  }
  
  & .horizontal-slider .example-thumb {
    top: 1px;
    width: 50px;
    height: 48px;
    line-height: 38px;
  }
  
  & .example-thumb {
    font-size: 0.9em;
    text-align: center;
    background-color: black;
    color: white;
    cursor: pointer;
    border: 5px solid gray;
    box-sizing: border-box;
  }
`

export const FilterItem = styled.li<{active: boolean; isEmpty?: boolean}>`
  color: ${props => props.active ? 'red' : props.isEmpty ? 'grey' : null};
  pointer-events: ${props => props.isEmpty ? 'none' : 'auto'};
  user-select: none;
`