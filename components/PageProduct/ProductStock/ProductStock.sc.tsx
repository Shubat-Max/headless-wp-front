import styled from "styled-components";
import {Colors} from "../../../constants/colors";

export const StockItem = styled.div`
  background: #FAFAFA;
  border-radius: 3px;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-top: 10px;
`
export const StockItemAttributes = styled.div`
  flex: 1;
`
export const StockItemAttribute = styled.div`
  font: normal normal 400 12px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
  margin-top: 5px;
  
  &:first-of-type {
    margin: 0;
  }
`
export const StockItemShow = styled.div`
  flex: 0 0;
  border: 2px solid #C4C4C4;
  padding: 6px 13px;
  border-radius: 3px;
  font: normal normal 400 14px/1em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
  cursor: pointer;
  
  &:hover {
    border-color: ${Colors.PRIMARY}
  }
`


export const StockList = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid ${Colors.DIVIDER};
`
export const Head = styled.div<any>`
  display:flex;
  align-items: center;
  cursor: pointer;
`
export const HeadDot = styled.div<{color}>`
  flex: 0 0 6px;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background: ${ props => props.color ? props.color : '#e3e3e3'};
  margin-right: 10px;
`
export const HeadTitle = styled.div`
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
  flex: 1;
`
export const HeadArrow = styled.div<{active}>`
  flex: 0 0 10px;
  width: 10px;
  height: 10px;
  background: transparent url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05Ljg4NTg4IDAuNTg1ODk0QzkuNzMzNDggMC40MzMxNzkgOS40ODYxNyAwLjQzMjk0NCA5LjMzMzQ0IDAuNTg1MzI3TDUuMjc2MjEgNC42MzQxNEM1LjEyMzg5IDQuNzg2NDQgNC44NzYwOSA0Ljc4NjQyIDQuNzIzNSA0LjYzMzg0TDAuNjY2NTYzIDAuNTg1MzI3QzAuNTEzODQ4IDAuNDMyOTI1IDAuMjY2NTQzIDAuNDMzMTc5IDAuMTE0MTIxIDAuNTg1ODk0Qy0wLjAzODI2MTUgMC43Mzg2MDkgLTAuMDM4MDA3NiAwLjk4NTkzMyAwLjExNDY4OCAxLjEzODMyTDQuMTcxMzUgNS4xODY1NkM0LjM5OTg4IDUuNDE1MDUgNC42OTk5OCA1LjUyOTI3IDUuMDAwMTIgNS41MjkyN0M1LjMwMDA4IDUuNTI5MjcgNS42MDAxIDUuNDE1MDkgNS44MjgzNCA1LjE4NjgzTDkuODg1MzEgMS4xMzgzMkMxMC4wMzggMC45ODU5MzMgMTAuMDM4MyAwLjczODYwOSA5Ljg4NTg4IDAuNTg1ODk0WiIgZmlsbD0iIzM1MzIzOCIvPgo8L3N2Zz4K") center/10px no-repeat;
  transform: rotateZ( ${ props => props.active ? '-180deg' : '0deg'} );
  transition: .1s;
`
export const List = styled.div<{active}>`
  height: ${props => props.active ? 'auto': '0px'};
  overflow: hidden;
`
export const Tab = styled.div`
  margin-bottom: 10px;
  
  &:last-of-type {
    margin-bottom: 0;
  }
`