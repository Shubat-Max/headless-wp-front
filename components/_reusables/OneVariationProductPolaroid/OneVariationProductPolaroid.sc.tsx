import styled from "styled-components";
import {Colors} from "../../../constants/colors";

export const VariationsBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5px;
`
// export const PopularSliderItemDesc = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 15px;
//   font: normal normal 400 14px/1.5em 'Open Sans', sans-serif;
//   height: 135px;
// `
export const PopularSliderItemTitle = styled.div`
  text-align: center;
  color: ${Colors.SECONDARY_TEXT};
  margin: 5px 0;
  height: 3em;
  overflow: hidden;
`

export const FabricInformation = styled.span`
  display: none;
  position: absolute;
  top: 10px;
  left: 10px;
  max-width: calc( 100% - 20px );
  font: normal normal 400 11px/1em 'Open-Sans',sans-serif;
  color: ${Colors.SECONDARY_TEXT};
  z-index: 1;
  background: ${Colors.CATALOG_ITEM_HOVER};
  padding: 5px;  
  border-radius: 3px;
`

export const VariableItem = styled.div`
  width: 100%;
  padding: 15px;
  border: 1px solid ${Colors.DIVIDER};
  border-radius: 3px;
  
  &:hover {
    background-color: ${Colors.CATALOG_ITEM_HOVER};
  }
  
  &:hover ${FabricInformation} {
    display: block;
  }
`

export const Color = styled.div<{ color: string; name: string; active: boolean;  }>`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  background-color: ${props => (Colors[props.color.toUpperCase()])};
  cursor: pointer;
  display: inline-block;
  margin-right: 5px;
  position: relative;
  
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

export const ImgBlock = styled.a`
  display: block;
  width: 100%;
  padding-bottom: 100%;
  position:relative;
  border: none !important;
  background: #fff;
  border-radius: 3px;
`

export const VariableItemImg = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 3px;
  object-fit: contain;
  cursor: pointer;
`
