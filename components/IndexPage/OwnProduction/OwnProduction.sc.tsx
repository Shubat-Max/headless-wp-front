import styled from "styled-components";
import {Colors} from "../../../constants/colors";


export const OwnProductionBlock = styled.div`
  border-top: 1px solid ${Colors.DIVIDER};
  border-bottom: 1px solid ${Colors.DIVIDER};
  width: calc(100% + 1000px);
  margin-left: -500px;
  padding: 30px 0;
`

export const OwnProductionBlockContent = styled.div`
  margin-left: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const OwnProductionTitle = styled.h2`
  font: normal normal 600 24px/150% 'Lato',sans-serif;
  margin: 0 0 5px 0;
`

export const OwnProductionText = styled.p`
  font:normal normal 400 14px/150% 'Lato',sans-serif;
  color: ${Colors.SECONDARY_TEXT};
  margin: 0;
`

export const OwnProductionButton = styled.button`
  cursor: pointer;
  background: #FFFFFF;
  border: 2px solid #E3E3E3;
  border-radius: 3px;
  padding: 15px 25px;
  margin-right: 500px;
  
  &:hover {
    text-decoration: underline;
  }
`
