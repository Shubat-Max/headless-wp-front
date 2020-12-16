import styled from "styled-components";
import {Colors} from "../../../constants/colors";

export const ThumbWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border-radius: 7px;
  margin: 2px;
  border: 2px solid transparent;
`
export const ThumbOuter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  background: #fff;
  border-radius: 3px;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const Thumb = styled.img`
  width: 100%;
  margin: 2px;
  border-radius: 3px;
  -webkit-user-drag: none;
  user-select: none;
`
export const ThumbSlide = styled.div`
  width: 48px;
  margin-right: 2px;
  padding-bottom: 48px;
  position: relative;
  
  &.is-selected ${ThumbWrapper} {
    border-color: #e3e3e3;
  }
`
export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 100%;
    border-radius: 3px;
  }
`
export const GallerySlide = styled.div`
  width: 100%;
  margin-right: 10px;
  padding-bottom: 100%;
 
`
export const ThumbsWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  width: calc(100% - 20px);
`
export const GalleryWrapper = styled.div`
  padding: 10px;
  border: 1px solid ${Colors.DIVIDER};
  border-radius: 3px;
  position: relative;
`