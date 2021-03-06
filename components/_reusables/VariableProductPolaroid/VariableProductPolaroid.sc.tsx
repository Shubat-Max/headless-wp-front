import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {sizes} from "../../../constants/sizes";

export const VariationsItem = styled.div<{ active: boolean }>`
  display: inline-block;
  border: 2px solid #e3e3e3;
  background: #fff;
  color: #353238;
  padding: 3px 10px;
  border-radius: 20px;
  cursor: pointer;
  margin-right: 5px;
  user-select: none;
  line-height: 1em;
  font: normal normal 400 14px/1em 'Open-Sans', sans-serif;
  
  /* If option is active */
  ${ props => (props?.active ? `border-color: #0086A8; background: #0086A8; color: #fff;`: ``)}
  
  &:hover {
    border-color: #0086A8;
  }
`;

export const VariationsBlock = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5px;
  display: none;
`

export const VariationsColorBlock = styled(VariationsBlock)`
  display: flex;
`

export const ColorLength = styled.div`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  background-color: #FFF;
  cursor: pointer;
  margin-right: 5px;
  position: relative;
  border: 2px solid ${Colors.DIVIDER};
  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const PopularSliderItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  font: normal normal 400 14px/1.5em 'Open Sans', sans-serif;
  padding-bottom: 33px;
`

export const PopularSliderItemName = styled.div`
 @media (${sizes.maxSm}) {
    text-align: center;
    height: 42px;
  }
`

export const VariableItemName  = styled.div`
  @media (${sizes.maxSm}) {
    text-align: center;
    height: 42px;
  }
`


export const VariableItemTitle = styled.div`
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

export const Variations = styled.div`
  position: absolute;
  top: calc(100% - 48px );
  min-height: 49px;
  width: calc(100% + 2px);
  z-index: 3;
  border-radius: 3px;
  transition: height 0.1s;
  padding-bottom: 15px;
`

export const VariationsItemName = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  color: ${Colors.SECONDARY_TEXT};
  font: normal normal 400 10px/1.5em 'Open-Sans', sans-serif;
  margin-top: 10px;
  margin-bottom: 5px;
`

export const VariableItem = styled.div`
  width: 100%;
  padding: 15px;
  border: 1px solid ${Colors.DIVIDER};
  border-radius: 3px;
  position: relative;
  
  
  @media (min-width: 1024px) {
    &:hover {
    background-color: ${Colors.CATALOG_ITEM_HOVER};
  }
  
  &:hover ${FabricInformation} {
    display: block;
  }
  
  &:hover ${ImgBlock} {
      filter: drop-shadow(3px 3px 0px rgba(53, 50, 56, 0.05));
  }
  
  &:hover ${VariationsBlock} {
    display: flex;
  }
  
  &:hover ${Variations} {
    background-color: ${Colors.CATALOG_ITEM_HOVER};
    border-right: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    border-left: 1px solid #e3e3e3;
  }
  
}

  
  
  
`
