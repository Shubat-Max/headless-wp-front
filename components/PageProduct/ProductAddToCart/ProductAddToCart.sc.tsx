import styled from "styled-components";
import {Colors} from "../../../constants/colors";

export const AddToCartButton = styled.div`
  background: ${Colors.PRIMARY};
  border-radius: 3px;
  font: normal normal 600 14px/1.5em 'Open-Sans', sans-serif;
  color: #fff;
  padding: 15px 0 14px 0;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px){
    position: fixed;
    z-index: 9999;
    bottom: 15px;
    left: 15px;
    right: 15px;
    width: calc(100% - 30px);
    margin: 0;
    background: #5FD975;
    padding: 15px 0;
    box-shadow: 3px 3px 0 rgba(53, 50, 56, 0.05);
  }
`;