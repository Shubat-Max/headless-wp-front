import styled from "styled-components"
import {Colors} from "../../../../constants/colors"


export const AttributeNameWrp = styled.div`
  flex: 1;
  margin-right: 10px;
  position: relative;
  
  &::before {
    z-index: -1;
    content: '';
    position: absolute;
    bottom: 1px;
    left: 0;
    width: 100%;
    border-bottom: 1px dashed ${Colors.DIVIDER};
  }
`
export const AttributeName = styled.span`
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.SECONDARY_TEXT};
  background: #fff;
  padding-right: 10px;
`
export const AttributeRow = styled.div`
  display:flex;
  margin-bottom: 10px;
`
export const AttributeValue = styled.div`
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
  text-align: right;
`