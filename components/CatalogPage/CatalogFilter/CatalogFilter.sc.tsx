import styled from "styled-components";
import {Col} from "../../Grid";
import {sizes} from "../../../constants/sizes";
import {Colors} from "../../../constants/colors";


export const FilterItem = styled.li<{active: boolean; isEmpty?: boolean}>`
  color: ${props => props.active ? 'red' : props.isEmpty ? 'grey' : null};
  pointer-events: ${props => props.isEmpty ? 'none' : 'auto'};
  user-select: none;
`

export const FilterBlock = styled.div<{active : boolean}>`
  min-width: 340px;
  height: 500px;
  max-width: 340px;
  margin-right: 30px;
      
  @media (max-width: 1085px) {
    display: flex;
    visibility: ${props => props.active ? 'visible' : 'hidden'}; 
    justify-content: flex-end;
    position: fixed;
    max-width: 100%;
    min-width: 100%;
    overflow-y: scroll;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background: ${props => props.active ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0)'} ;
    z-index: 100;
    transition: background 0.2s;
  }
`

export const MobileBlock = styled.div<{openFilter : boolean}>`
  @media (max-width: 1085px) {
       transition: all 0.2s;
      position: fixed;
      //right: 0;
      right: ${props => props.openFilter ? '0' : '-300px'};
      height: 100%  ;
      overflow-y: scroll;
      min-width: 295px;
      max-width: 295px;
      background-color: #fff;
      padding: 30px 15px;
  }  
  
  @media (${sizes.maxSm}) {
      min-width: 250px;
      max-width: 250px;
  }
`

export const MoBileButton = styled.div<{openFilter : boolean}>`
  display: none;
  
  @media(${sizes.maxLg}) {
    display: flex;
    align-items: center;
    flex-direction: column;
    position:fixed;
    right: 310px;
    bottom: ${props => props.openFilter ? '30px' : '-100px'};
    width: 50px;
    transition: bottom 0.2s;
  }
  
  @media (${sizes.maxSm}) {
    right: 260px;
  }
`

export const MobileClose = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${Colors.DIVIDER};
  box-shadow: 3px 3px 0 rgba(53, 50, 56, 0.05);
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNTUyNDYgNS4wMDAwMkw5Ljg4NTU5IDAuNjY2ODU5QzEwLjAzODIgMC41MTQzMDEgMTAuMDM4MiAwLjI2Njk1OCA5Ljg4NTU5IDAuMTE0NDE5QzkuNzMzMDMgLTAuMDM4MTIwMSA5LjQ4NTY5IC0wLjAzODEzOTYgOS4zMzMxNSAwLjExNDQxOUw1IDQuNDQ3NThMMC42NjY4NTkgMC4xMTQ0MTlDMC41MTQzMDEgLTAuMDM4MTM5NiAwLjI2Njk1OCAtMC4wMzgxMzk2IDAuMTE0NDE5IDAuMTE0NDE5Qy0wLjAzODEyMDEgMC4yNjY5NzcgLTAuMDM4MTM5NiAwLjUxNDMyIDAuMTE0NDE5IDAuNjY2ODU5TDQuNDQ3NTYgNUwwLjExNDQxOSA5LjMzMzE1Qy0wLjAzODEzOTYgOS40ODU3MSAtMC4wMzgxMzk2IDkuNzMzMDUgMC4xMTQ0MTkgOS44ODU1OUMwLjE5MDY4OCA5Ljk2MTg2IDAuMjkwNjY4IDkuOTk5OTkgMC4zOTA2NDkgOS45OTk5OUMwLjQ5MDYyOSA5Ljk5OTk5IDAuNTkwNTkgOS45NjE4NiAwLjY2Njg3OSA5Ljg4NTU5TDUgNS41NTI0Nkw5LjMzMzEzIDkuODg1NTlDOS40MDk0IDkuOTYxODYgOS41MDkzOCA5Ljk5OTk5IDkuNjA5MzYgOS45OTk5OUM5LjcwOTM0IDkuOTk5OTkgOS44MDkzIDkuOTYxODYgOS44ODU1OSA5Ljg4NTU5QzEwLjAzODIgOS43MzMwNCAxMC4wMzgyIDkuNDg1NjkgOS44ODU1OSA5LjMzMzE1TDUuNTUyNDYgNS4wMDAwMloiIGZpbGw9IiMzNTMyMzgiLz4KPC9zdmc+Cg==");
  background-position: center;
  background-repeat: no-repeat;
  background-color: #fff;
`

export const MobilaAccept = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${Colors.APPLY_GREEN};
  background-color: ${Colors.APPLY_GREEN};
  box-shadow: 3px 3px 0 rgba(53, 50, 56, 0.05);
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05Ljg1NDA1IDAuMzI2MzVDOS42ODU4NyAwLjE5MTE5MyA5LjQzOTk5IDAuMjE4MDEgOS4zMDQ4NyAwLjM4NjE3NEw0LjEwNzI1IDYuODU0ODhDNC4wMzY3MSA2LjkzMDMzIDMuOTQxMzYgNi45NzQwNCAzLjgzNzc4IDYuOTc4MkMzLjczMTE2IDYuOTgyNSAzLjYzMDE4IDYuOTQ0NDEgMy41NTQxMyA2Ljg3MjEyTDAuNjYwOTI2IDQuMDk4ODZDMC41MDUxNjQgMy45NDk1OCAwLjI1NzkxOCAzLjk1NDgzIDAuMTA4NjIxIDQuMTEwNTZDLTAuMDQwNjU2NSA0LjI2NjMgLTAuMDM1NDIyMSA0LjUxMzU3IDAuMTIwMzIgNC42NjI4NkwzLjAxNDY4IDcuNDM3MjRDMy4yMzQ2IDcuNjQ2MjkgMy41MTkxNyA3Ljc1OTggMy44MjA2OSA3Ljc1OThDMy44MzY4IDcuNzU5OCAzLjg1MzAyIDcuNzU5NDcgMy44NjkyMSA3Ljc1ODgxQzQuMTg4NTggNy43NDU5NyA0LjQ4MTkyIDcuNjA3NzUgNC42OTUxNCA3LjM2OTYzQzQuNjk5NzcgNy4zNjQ0NSA0LjcwNDI3IDcuMzU5MTQgNC43MDg2NCA3LjM1MzczTDkuOTEzODcgMC44NzU1MzFDMTAuMDQ5IDAuNzA3MzQ3IDEwLjAyMjIgMC40NjE0ODcgOS44NTQwNSAwLjMyNjM1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 15px;
`

export const PriceFilter = styled.div``