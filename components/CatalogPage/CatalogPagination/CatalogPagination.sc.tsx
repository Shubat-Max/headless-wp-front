import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {sizes} from "../../../constants/sizes";

export const ReactCatalogPagination = styled.div<{pageInfo : string}>`
  width: 100%;

  & .pagination {
    display: flex;
    flex-direction: row;
    padding-left: 0;
    user-select: none;
  }
  
  & li {
      display: block;
      margin-right: 5px;
      background: #FFF;
      border: 2px solid ${Colors.DIVIDER};
      border-radius: 3px;
  }
  
  & li:hover {
    background: ${Colors.PRIMARY};
    border: 2px solid ${Colors.PRIMARY};
  }
  & li:hover a svg {
    fill: #fff;
  }
  & li:hover a {
    color: #fff;
  }
  
  & li a {
    border-bottom: none;
    outline: none;
    display: block;
    padding: 13px 20px;
    margin-top: 0;
    color: ${Colors.PRIMARY_TEXT};
    font:normal normal 600 14px/100% 'Open Sans',sans-serif;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
  }
  
  & .previous {
    transform: rotate(180deg);}

  
  & .break-me {
    pointer-events: none;
  }
  
  & .active {
    background: ${Colors.PRIMARY};
    border: 2px solid ${Colors.PRIMARY};
    border-radius: 3px; 
  }
  
  & .active a {
     color: #fff;
  }
    
    
  @media (max-width: 570px) {
      position: fixed;
      bottom: 50px;
      width: 280px;
      height: 50px;
     
      background: #5FD975;
      border-radius: 50px;
      z-index: 50;
      right: calc((100vw - 540px) / 2);
      
      & .pagination {
       margin: 0;
       width: 100%;
       display: flex;
       justify-content: space-between;
       height: 50px;
      }
      
      & li {
        display: none;
      }
      
      & .previous {
        display: flex;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDkgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjkwMjIzOCA5LjMyNTM2TDcuMzc5ODYgMTUuODE2NUM3LjYyMzc0IDE2LjA2MDggOC4wMTk0NiAxNi4wNjEyIDguMjYzNzQgMTUuODE3NEM4LjUwODA4IDE1LjU3MzYgOC41MDg0OSAxNS4xNzc5IDguMjY0NjggMTQuOTMzNUwxLjc4NjU4IDguNDQxOTNDMS41NDI4OSA4LjE5ODI0IDEuNTQyODkgNy44MDE3NCAxLjc4NzA1IDcuNTU3NThMOC4yNjQ2OCAxLjA2NjQ2QzguNTA4NDkgMC44MjIxMTMgOC41MDgwOCAwLjQyNjM5NCA4LjI2Mzc0IDAuMTgyNTgxQzguMTQxNzcgMC4wNjA4MzExIDcuOTgxOTkgLTEuMTQ0NDFlLTA1IDcuODIyMjcgLTEuMTQ0NDFlLTA1QzcuNjYyMTEgLTEuMTQ0NDFlLTA1IDcuNTAxOTYgMC4wNjExNzQ0IDcuMzc5ODYgMC4xODM1MThMMC45MDI3MDcgNi42NzQxOEMwLjE3MTY0NCA3LjQwNTI0IDAuMTcxNjQ0IDguNTk0NzcgMC45MDIyMzggOS4zMjUzNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");
        background-position: center;
        background-repeat: no-repeat;
        transform: rotate(0);
        background-color: initial;
        fill: #fff;
        border: none;
        border-radius: 50%;
      } 
      
      & svg {
        display: none;
      }
      
      & .next {
         display: flex;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDkgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjkwMjIzOCA5LjMyNTM2TDcuMzc5ODYgMTUuODE2NUM3LjYyMzc0IDE2LjA2MDggOC4wMTk0NiAxNi4wNjEyIDguMjYzNzQgMTUuODE3NEM4LjUwODA4IDE1LjU3MzYgOC41MDg0OSAxNS4xNzc5IDguMjY0NjggMTQuOTMzNUwxLjc4NjU4IDguNDQxOTNDMS41NDI4OSA4LjE5ODI0IDEuNTQyODkgNy44MDE3NCAxLjc4NzA1IDcuNTU3NThMOC4yNjQ2OCAxLjA2NjQ2QzguNTA4NDkgMC44MjIxMTMgOC41MDgwOCAwLjQyNjM5NCA4LjI2Mzc0IDAuMTgyNTgxQzguMTQxNzcgMC4wNjA4MzExIDcuOTgxOTkgLTEuMTQ0NDFlLTA1IDcuODIyMjcgLTEuMTQ0NDFlLTA1QzcuNjYyMTEgLTEuMTQ0NDFlLTA1IDcuNTAxOTYgMC4wNjExNzQ0IDcuMzc5ODYgMC4xODM1MThMMC45MDI3MDcgNi42NzQxOEMwLjE3MTY0NCA3LjQwNTI0IDAuMTcxNjQ0IDguNTk0NzcgMC45MDIyMzggOS4zMjUzNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");
        background-position: center;
        background-repeat: no-repeat;
        background-color: initial;
        fill: #fff;
          transform: rotate(180deg);
        border: none;
        border-radius: 50%;
        margin-left: auto;
      }
      
      &:after {
        content: '${props => props.pageInfo}';
        position: absolute;
        top: 50%;
        left: 50%;
        color: #fff;
        transform: translate(-50%, -50%);
      }
      & li:hover {
        background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDkgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjkwMjIzOCA5LjMyNTM2TDcuMzc5ODYgMTUuODE2NUM3LjYyMzc0IDE2LjA2MDggOC4wMTk0NiAxNi4wNjEyIDguMjYzNzQgMTUuODE3NEM4LjUwODA4IDE1LjU3MzYgOC41MDg0OSAxNS4xNzc5IDguMjY0NjggMTQuOTMzNUwxLjc4NjU4IDguNDQxOTNDMS41NDI4OSA4LjE5ODI0IDEuNTQyODkgNy44MDE3NCAxLjc4NzA1IDcuNTU3NThMOC4yNjQ2OCAxLjA2NjQ2QzguNTA4NDkgMC44MjIxMTMgOC41MDgwOCAwLjQyNjM5NCA4LjI2Mzc0IDAuMTgyNTgxQzguMTQxNzcgMC4wNjA4MzExIDcuOTgxOTkgLTEuMTQ0NDFlLTA1IDcuODIyMjcgLTEuMTQ0NDFlLTA1QzcuNjYyMTEgLTEuMTQ0NDFlLTA1IDcuNTAxOTYgMC4wNjExNzQ0IDcuMzc5ODYgMC4xODM1MThMMC45MDI3MDcgNi42NzQxOEMwLjE3MTY0NCA3LjQwNTI0IDAuMTcxNjQ0IDguNTk0NzcgMC45MDIyMzggOS4zMjUzNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=") center no-repeat;
        border: none;
      }
  }
  
  @media (max-width: 570px) {
    right: 15px;
  }
  
  @media (${sizes.maxSm}) {
       width: 230px;
  }
`

export const CatalogPaginationLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`