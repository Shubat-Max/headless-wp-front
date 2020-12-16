import styled from "styled-components";
import {Colors} from "../../../constants/colors";

export const InstagramMainTextBlockHtml = styled.div`
  margin-top: 96px;
`

export const  InstagramMainRow = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid ${Colors.DIVIDER};
`

export const InstagramMainTextBlockText = styled.div`
    margin-top: 30px;
`

export const InstagramMainTextBlockIcon = styled.img`
  margin-top: 23px;
  margin-bottom: 30px;
`


export const InstagramMainTextBlockAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  
  & img {
    border-radius: 50%;
    width: 31px;
    height: 31px;
  }
  
  & div {
    margin-left: 10px;
    color: ${Colors.PRIMARY_TEXT};
  }
`

export const InstagramMainTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font:normal normal 400 14px/1.5em 'Open Sans',sans-serif;
  color: ${Colors.SECONDARY_TEXT};
  position: relative;
  
  & a {
    color: ${Colors.PRIMARY};
    font:normal normal 400 18px/1em 'Lato',sans-serif;
  }
  
  & span {
    font:normal normal 600 108px/108px 'Open Sans',sans-serif;
    position: absolute;
    top: 19px;
  }
`

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
