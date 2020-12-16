import styled, {keyframes} from "styled-components";
import {Colors} from "../../../constants/colors";
import BaseAnimation from "../../BaseAnimation";

export const RetryAction = styled.div`
  display: inline-block;
  color: #0086a8;
  border-bottom: 1px dashed #0086a8;
  line-height: 1.5em;
  cursor: pointer;
`
export const RetryNotification = styled.div`
  color: ${Colors.PRIMARY_TEXT};
`
export const Retry = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Loader = styled.div`
  flex: 1;
  background: transparent url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDg2YTgiIHN0cm9rZS13aWR0aD0iNyIgcj0iNDYiIHN0cm9rZS1kYXNoYXJyYXk9IjIxNi43Njk4OTMwOTc2OTU3MyA3NC4yNTY2MzEwMzI1NjUyNCI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvY2lyY2xlPgo8IS0tIFtsZGlvXSBnZW5lcmF0ZWQgYnkgaHR0cHM6Ly9sb2FkaW5nLmlvLyAtLT48L3N2Zz4=") center/40px no-repeat;
`
export const TransparentCover = styled.div<{ active }>`
  position: fixed;
  z-index: 19999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0);
  display: ${p => p.active ? 'block' : 'none'};
`
export const Progress = styled.div<{ scroll }>`
  position:  absolute;
  background:  linear-gradient(
    to right,
    rgba(250, 224, 66, .8) ${props => props.scroll},
    transparent  0);
  width:  100%;
  height:  4px;
  z-index:  3;
`
export const FadeInAnimation = keyframes`  
  0% { right: -560px; }
  100% { right: 0; }
`
export const FadeOutAnimation = keyframes`  
  0% { right: 0; }
  100% { right: -560px; }
`
export const InitialAnimation = keyframes`  
  0% { right: -560px; }
  100% { right: -560px; }
`
export const ModalWindow = styled(BaseAnimation)`
  position: fixed;
  z-index: 20000;
  right: ${p => p.active ? '0' : '-560px'};
  top: 0;
  min-height: 100%;
  height: 100%;
  width: 500px;
  max-width: calc(100% - 60px);
  border-left: 1px solid ${Colors.DIVIDER};
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  background: #fff;
  animation-name: ${props => !props.touched ? InitialAnimation : props.active ? FadeInAnimation : FadeOutAnimation};
`
export const ModalClose = styled.div`
  position: absolute;
  top: 15px;
  left: -45px;
  height: 30px;
  width: 30px;
  border: 1px solid #e3e3e3;
  box-shadow: 3px 3px 0 rgba(53, 50, 56, 0.05);
  border-radius: 3px;
  cursor: pointer;
  background: #fff url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNTUyMjEgNS4wMDA5OUw5Ljg4NTM1IDAuNjY3ODM2QzEwLjAzNzkgMC41MTUyNzcgMTAuMDM3OSAwLjI2NzkzNCA5Ljg4NTM1IDAuMTE1Mzk1QzkuNzMyNzkgLTAuMDM3MTQzNSA5LjQ4NTQ1IC0wLjAzNzE2MyA5LjMzMjkxIDAuMTE1Mzk1TDQuOTk5NzUgNC40NDg1NUwwLjY2NjYxNSAwLjExNTM5NUMwLjUxNDA1NyAtMC4wMzcxNjMgMC4yNjY3MTMgLTAuMDM3MTYzIDAuMTE0MTc1IDAuMTE1Mzk1Qy0wLjAzODM2NDIgMC4yNjc5NTQgLTAuMDM4MzgzNyAwLjUxNTI5NyAwLjExNDE3NSAwLjY2NzgzNkw0LjQ0NzMxIDUuMDAwOTdMMC4xMTQxNzUgOS4zMzQxM0MtMC4wMzgzODM3IDkuNDg2NjkgLTAuMDM4MzgzNyA5LjczNDAzIDAuMTE0MTc1IDkuODg2NTdDMC4xOTA0NDQgOS45NjI4NCAwLjI5MDQyNCAxMC4wMDEgMC4zOTA0MDUgMTAuMDAxQzAuNDkwMzg1IDEwLjAwMSAwLjU5MDM0NiA5Ljk2Mjg0IDAuNjY2NjM1IDkuODg2NTdMNC45OTk3NSA1LjU1MzQzTDkuMzMyODkgOS44ODY1N0M5LjQwOTE2IDkuOTYyODQgOS41MDkxNCAxMC4wMDEgOS42MDkxMiAxMC4wMDFDOS43MDkxIDEwLjAwMSA5LjgwOTA2IDkuOTYyODQgOS44ODUzNSA5Ljg4NjU3QzEwLjAzNzkgOS43MzQwMSAxMC4wMzc5IDkuNDg2NjcgOS44ODUzNSA5LjMzNDEzTDUuNTUyMjEgNS4wMDA5OVoiIGZpbGw9IiMzNTMyMzgiLz4KPC9zdmc+Cg==") center/10px no-repeat;
  
  &:hover {
    background-color: ${Colors.INTERACTIVE_HOVER};
  }
`
export const ModalHead = styled.div`
  flex: 0 0 60px;
  border-bottom: 1px solid ${Colors.DIVIDER};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`
export const ScrollView = styled.div`
  flex: 1;
  overflow: hidden scroll;
  scrollbar-color: transparent transparent;
  
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  
  &::-webkit-scrollbar-track-piece  {
    background-color: transparent;
}
`
export const ModalTitle = styled.div`
  color: ${Colors.PRIMARY_TEXT};
  font: normal normal 600 24px/1em 'Lato', sans-serif;
`
export const FabricFilterSwitch = styled.div`
  cursor: pointer;
  color: ${Colors.PRIMARY_TEXT};
  font: normal normal 400 14px/1em 'Open-Sans', sans-serif;
  position: relative;
  user-select: none;
`

export const FilterFadeIn = keyframes`  
  0% { 
    height: 0;
    overflow: hidden;
  }
  100% { 
    height: 266px;
    overflow: visible;
  }
`
export const FilterFadeOut = keyframes`  
  0% {
    height: 266px;
    overflow: visible;
  }
  100% {
    height: 0;
    overflow: hidden;
  }
`
export const InitialFilterAnimation = keyframes`  
  0% {
    height: 0;
    overflow: hidden;
  }
  100% {
    height: 0;
    overflow: hidden;
  }
`
export const ModalFilter = styled(BaseAnimation)<{ active }>`
  border-bottom: ${p => p.active ? '1px' : '0px'} solid ${Colors.DIVIDER};
  height: 0;
  animation-name: ${props => !props.touched ? InitialFilterAnimation : props.active ? FilterFadeIn : FilterFadeOut};
`;
export const DropdownArrow = styled.div<{ active }>`
  display: inline-block;
  width: 10px;
  height: 14px;
  margin-left: 10px;
  transition: .1s;
  background: transparent url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00LjcyNTYxIDAuMTE0MTI4TDAuMTEzMDg0IDQuNzM5NDJDLTAuMDM3OTUxNCA0Ljg5MDk2IC0wLjAzNzY5NzUgNS4xMzYzMSAwLjExMzg2NSA1LjI4NzZDMC4yNjU0MDkgNS40Mzg3NyAwLjUxMDg5OCA1LjQzODM4IDAuNjYyMDUgNS4yODY4Mkw1LjAwMDA1IDAuOTM2ODRMOS4zMzgwMyA1LjI4Njk4QzkuNDg5MiA1LjQzODUyIDkuNzM0NTMgNS40Mzg5MSA5Ljg4NjEgNS4yODc3NkM5Ljk2MjA3IDUuMjExOTIgMTAuMDAwMSA1LjExMjU2IDEwLjAwMDEgNS4wMTMyMUMxMC4wMDAxIDQuOTE0MTEgOS45NjIzMyA0LjgxNTE0IDkuODg2ODggNC43Mzk0NEw1LjI3NDQ2IDAuMTE0MTI4QzUuMjAxODUgMC4wNDExNDAxIDUuMTAzMDIgMC4wMDAxODMxMDUgNS4wMDAwNSAwLjAwMDE4MzEwNUM0Ljg5NzA4IDAuMDAwMTgzMTA1IDQuNzk4MzcgMC4wNDEyNTc0IDQuNzI1NjEgMC4xMTQxMjhaIiBmaWxsPSIjMzUzMjM4Ii8+Cjwvc3ZnPgo=") center/10px no-repeat;
  ${props => props.active ? 'transform: rotateZ(0);' : 'transform: rotateZ(180deg);'}
`