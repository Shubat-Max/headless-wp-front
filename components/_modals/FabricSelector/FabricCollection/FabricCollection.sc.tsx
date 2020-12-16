import styled from "styled-components"
import {Colors} from "../../../../constants/colors"

export const Collection = styled.div`
  padding: 15px 0;
`
export const CollectionHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 5px;
`
export const CollectionTitle = styled.div``
export const CollectionLabel = styled.div`
  color: ${Colors.PRIMARY_TEXT};
  font: normal normal 600 18px/1em 'Lato', sans-serif;
`
export const CollectionType = styled.div`
  color: ${Colors.SECONDARY_TEXT};
  font: normal normal 400 14px/1em 'Open-Sans', sans-serif;
  margin-top: 5px;
`
export const CollectionDescriptionSwitch = styled.div`
  color: ${Colors.PRIMARY};
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  cursor: pointer;
  user-select: none;
`
export const CollectionDescription = styled.div<{active}>`
  transition: 1s;
  overflow: hidden;
  height: ${ props => props.active ? 'auto' : '0px'};
`
export const CollectionDescriptionText = styled.div`
  margin: 15px 15px 9px;
  padding: 20px 15px;
  background: rgba(0, 134, 168, 0.05);
  color: ${Colors.PRIMARY_TEXT};
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  border-radius: 3px;
`