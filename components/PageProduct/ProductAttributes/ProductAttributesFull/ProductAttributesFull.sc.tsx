import styled from "styled-components"
import {Colors} from "../../../../constants/colors";


export const FullProductAttributes = styled.div`
  margin-top: 40px;
  
  @media (max-width: 768px){
    margin-top: 30px;
    margin-bottom: 30px;
  }
`
export const Heading = styled.div`
  font: normal normal 600 24px/1em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
  margin-bottom: 20px;
`