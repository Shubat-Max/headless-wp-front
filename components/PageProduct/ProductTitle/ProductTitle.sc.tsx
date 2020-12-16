import styled from "styled-components"
import {Colors} from "../../../constants/colors"

export const Title = styled.div`
  margin-bottom: 40px;
  
  @media (max-width: 768px){
    margin-bottom: 30px;
  }
`
export const Name = styled.div`
  color: ${Colors.PRIMARY_TEXT};
  font: normal normal 600 36px/1em 'Lato', sans-serif;
  display: flex;
  align-items: center;
`
export const Subtitle = styled.div`
  margin-top: 10px;
  color: ${Colors.SECONDARY_TEXT};
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
`

export const AdminEditButton = styled.a`
  display: inline-block;
  font-size: 18px;
  line-height: 1em;
  color: #e3e3e3;
  padding: 5px 10px;
  border: 1px solid #e3e3e3;
  border-radius: 3px;
  margin-left: 20px;
`