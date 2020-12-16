import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {Col} from "../../Grid";
import {sizes} from "../../../constants/sizes";

export const FilterSliderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  & .horizontal-slider {
    width: 200px;
    max-width: 200px;
    height: 50px;
  }
  
  & .horizontal-slider .example-track {
    top: calc(50% - 1px);
    height: 2px;
    background: ${Colors.DIVIDER};
  }
  
   & .example-track.example-track-1 {
    background-color: ${Colors.PRIMARY};
  }
  
  & .horizontal-slider .thumb {
    top: calc( 50% - 7px);
    width: 15px;
    height: 15px;
    line-height: 15px;
    border-radius: 50%;
    background: #fff;
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

export const FilterSliderInput = styled.input`
  background: #FFFFFF;
  border: 2px solid #E3E3E3;
  box-sizing: border-box;
  border-radius: 3px;
  width: 60px;
  height: 30px;
  outline: none;
  
  @media (${sizes.maxLg}) {
    width: 127.5px;
    margin-top: 20px;
  }  
  @media (${sizes.maxSm}) {
    width: 103.5px;
  }
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

export const AccordeonBlock = styled.div`
  border-bottom: 1px solid ${Colors.DIVIDER};
  padding-bottom: 20px;
  margin-bottom: 20px;
  

    
`

export const AccordeonBlockCheckbox = styled.div`
  width: 16px;
  height: 16px;
  
  box-sizing: border-box;
  border-radius: 3px;

  margin-right: 10px;
  background-position: center;
  background-repeat: no-repeat  ;
`

export const Color = styled.div<{ color: string; name: string; active: boolean;  isset:boolean}>`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  background-color: ${props => (Colors[props.color.toUpperCase()])};
  cursor: pointer;
  display: inline-block;
  margin-right: 5px;
  position: relative;

  pointer-events: ${props => props.isset ? 'none' : 'auto'};
  opacity: ${props => props.isset ? 0.3 : 1};
  user-select: none;
  
  &::before {
    content: '${props => props?.name ?? 'Ошибка'}';
    position: absolute;
    bottom: calc(100% + 5px);
    left: 50%;
    opacity: 0;
    pointer-events: none;
    line-height: 1em;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, .65);
    padding: 3px 5px;
    color: ${Colors.LIGHT_TEXT};
    border-radius: 3px;
    max-width: 200px;
    font: normal normal 400 12px/1em 'Open-Sans', sans-serif;
    white-space: nowrap;
    z-index: 2;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 2;
    background: ${props => {
  return props.active ?
          'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgOSA3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNOC44Njg3NCAwLjE5Mzc0MkM4LjcxNzM3IDAuMDcyMTAxNCA4LjQ5NjA4IDAuMDk2MjM2MiA4LjM3NDQ4IDAuMjQ3NTg0TDMuNjk2NjIgNi4wNjk0MUMzLjYzMzEzIDYuMTM3MzEgMy41NDczMSA2LjE3NjY1IDMuNDU0MDkgNi4xODAzOUMzLjM1ODE0IDYuMTg0MjYgMy4yNjcyNiA2LjE0OTk4IDMuMTk4ODEgNi4wODQ5M0wwLjU5NDkyNSAzLjU4ODk5QzAuNDU0NzM5IDMuNDU0NjQgMC4yMzIyMTcgMy40NTkzNyAwLjA5Nzg1MDMgMy41OTk1MkMtMC4wMzY0OTkzIDMuNzM5NjkgLTAuMDMxNzg4NCAzLjk2MjIzIDAuMTA4MzggNC4wOTY2TDIuNzEzMyA2LjU5MzUzQzIuOTExMjMgNi43ODE2NyAzLjE2NzM0IDYuODgzODMgMy40Mzg3MSA2Ljg4MzgzQzMuNDUzMjIgNi44ODM4MyAzLjQ2NzgxIDYuODgzNTQgMy40ODIzOCA2Ljg4Mjk0QzMuNzY5ODEgNi44NzEzOSA0LjAzMzgyIDYuNzQ2OTkgNC4yMjU3MiA2LjUzMjY4QzQuMjI5ODkgNi41MjgwMiA0LjIzMzkzIDYuNTIzMjQgNC4yMzc4NyA2LjUxODM3TDguOTIyNTggMC42ODgwMDRDOS4wNDQxOCAwLjUzNjYzOCA5LjAyMDA5IDAuMzE1MzY1IDguODY4NzQgMC4xOTM3NDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K") center/10px no-repeat'
          : '';
}}
  }
`;

export const PriceFilter = styled.div``



export const RadioItem = styled.div<{active: boolean, isset: boolean}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  font: normal normal 400 14px/20px 'Open-Sans', sans-serif;
  color: ${props => props.active ? 'red' : props.isset ? 'grey' : null};
  pointer-events: ${props => props.isset ? 'none' : 'auto'};
  user-select: none;
  
  & ${AccordeonBlockCheckbox} {
    background-image:  ${props => props.active
        ? 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05Ljg1MzU2IDAuNDc0NTE5QzkuNjU4MzEgMC4yNzkyNDYgOS4zNDE3NSAwLjI3OTI0NiA5LjE0NjQ1IDAuNDc0NTE5TDMuMTU2MTQgNi40NjQ4OUwwLjg1MzU2NCA0LjE2MjMxQzAuNjU4MzExIDMuOTY3MDQgMC4zNDE3NDggMy45NjcwNiAwLjE0NjQ1NSA0LjE2MjMxQy0wLjA0ODgxODQgNC4zNTc1NiAtMC4wNDg4MTg0IDQuNjc0MTMgMC4xNDY0NTUgNC44Njk0TDIuODAyNTkgNy41MjU0OUMyLjk5Nzc4IDcuNzIwNzUgMy4zMTQ1OCA3LjcyMDYxIDMuNTA5NyA3LjUyNTQ5TDkuODUzNTYgMS4xODE2M0MxMC4wNDg4IDAuOTg2Mzc0IDEwLjA0ODggMC42Njk3OTIgOS44NTM1NiAwLjQ3NDUxOVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=")'
        : '#fff'};
    background-color: ${props => props.active ? Colors.PRIMARY : '#fff'};
    border: ${props => props.active ? 'none' : `2px solid ${Colors.DIVIDER}` } ;
  }
`

export const AccordeonBody = styled.div<{active:boolean}>`

    
  & article {
    padding-top: ${props => props.active ? ' 20px' : '0'};
    height:auto;
    max-height: ${props => props.active ? '2000px' : '0'};
     transition: max-height 0.2s, padding-top 0.3s;
       overflow: hidden;
  }
`