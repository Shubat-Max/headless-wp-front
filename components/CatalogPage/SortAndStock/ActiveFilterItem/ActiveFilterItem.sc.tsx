import styled from "styled-components";
import {Colors} from "../../../../constants/colors";

export const ActiveFilterItemStyle = styled.div`
  background: ${Colors.PRIMARY};
  padding: 6px 10px;
  border-radius: 20px;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.1s;
  margin-right: 5px;
  font:normal normal 400 14px/100% 'Open Sans',sans-serif;
  margin-bottom: 5px;
  border: 2px solid ${Colors.PRIMARY};
  
  &:hover {
    background: ${Colors.PRIMARY_DARK};
  }
`

export const ActiveFilterItemClose =styled.span`
  width: 14px;
  height: 14px;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: 10px;
  cursor: pointer;
`