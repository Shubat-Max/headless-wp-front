import styled from "styled-components"
import {Colors} from "../../../../constants/colors"


export const Anchor = styled.a`
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY};
  border-bottom: 1px dashed ${Colors.PRIMARY};
  cursor: pointer;
  user-select: none;
`
export const ShortProductAttributes = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${Colors.DIVIDER};
  
  @media (max-width: 768px){
    display: none;
  }
`