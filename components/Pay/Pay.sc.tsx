import styled from "styled-components";
import {Colors} from "../../constants/colors";
import {Container} from "../Grid";

export const PageHead = styled.div`
  font: normal normal 600 24px/1.5em 'Lato', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
`
export const PageBody = styled.div`
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
`
export const Breadcrumbs = styled(Container)`
  margin-top: 40px;
  margin-bottom: 40px;
`
export const BackwardLink = styled.span`
  color: ${Colors.PRIMARY_TEXT};
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  cursor: pointer;
  
  &:hover {
    color: ${Colors.PRIMARY}
  }
`;