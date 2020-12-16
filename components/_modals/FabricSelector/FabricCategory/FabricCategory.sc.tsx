import styled from "styled-components";
import {Colors} from "../../../../constants/colors";

export const SCFabricCategory = styled.div`
  border-bottom: 1px solid #e3e3e3;
  
  &:last-of-type {
  border: none;
  }
`
export const CategoryHead = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.DIVIDER};
  padding: 10px 15px;
  position: sticky;
  top: 0;
  z-index: 2;
  background: #fff;
`;
export const CategoryLabel = styled.div`
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.SECONDARY_TEXT};
`;
export const CategoryPrice = styled.div`
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
`;