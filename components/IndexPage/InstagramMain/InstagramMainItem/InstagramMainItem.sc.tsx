import styled from "styled-components";

export const InstagramMainImg = styled.div`
  width: 100%;
  padding-bottom: 100%;
  cursor: pointer;
  position:relative;
  margin-bottom: 30px;
 
  
  & img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
`

export const InstagramMainSearch = styled.div`
  width: 18px;
  top: 30px;
  left: 30px;
  position: relative;
  z-index: 2;
  filter: drop-shadow(3px 3px 0px rgba(53, 50, 56, 0.05));
  
`
