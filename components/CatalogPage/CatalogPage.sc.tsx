import styled from "styled-components";
import {Col} from "../Grid";
import {Colors} from "../../constants/colors";
import {sizes} from "../../constants/sizes";

export const Heading = styled(Col)`
  font: normal normal 600 36px/1em 'Lato',sans-serif;
  margin-bottom: 40px;
  color: ${Colors.PRIMARY_TEXT};
`
export const CatalogCol = styled(Col)`
  margin-bottom: 30px;
  
  @media (${sizes.maxMd}) {
    &:nth-of-type(2n + 1) {
      padding-right: 7px;
    }    
    
    &:nth-of-type(2n ) {
      padding-left: 7px;
    }
  }
`

export const CatalogItems = styled.div`
  flex-grow: 1;
`

export const CatalogBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
`