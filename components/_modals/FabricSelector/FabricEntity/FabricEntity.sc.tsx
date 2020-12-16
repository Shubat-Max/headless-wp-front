import styled from "styled-components"
import {Colors} from "../../../../constants/colors"

export const SCFabricEntity = styled.div`
  display: inline-block;
  width: calc(calc( 100% - 60px) / 3);
  margin-left: 15px;
  margin-top: 11px;
  font-size: 0;
`
export const Fabric = styled.div<{active}>`
  width: 100%;
  padding-bottom: 100%;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  background: #fff;
  

  &::after {
    content: ${props => props.active ? '""' : 'none' };
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${Colors.PRIMARY};
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.5) url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAyNSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjYzNTEgMC4zMTU0NjJDMjQuMjE0NyAtMC4wMjI0Mjg4IDIzLjYgMC4wNDQ2MTI0IDIzLjI2MjIgMC40NjUwMjNMMTAuMjY4MSAxNi42MzY4QzEwLjA5MTggMTYuODI1NCA5Ljg1MzM5IDE2LjkzNDcgOS41OTQ0NSAxNi45NDUxQzkuMzI3OSAxNi45NTU4IDkuMDc1NDYgMTYuODYwNiA4Ljg4NTMyIDE2LjY3OTlMMS42NTIzMSA5Ljc0NjcxQzEuMjYyOTEgOS4zNzM1MiAwLjY0NDc5NCA5LjM4NjY1IDAuMjcxNTUyIDkuNzc1OTZDLTAuMTAxNjQxIDEwLjE2NTMgLTAuMDg4NTU1MyAxMC43ODM1IDAuMzAwOCAxMS4xNTY3TDcuNTM2NjkgMTguMDkyN0M4LjA4NjQ5IDE4LjYxNTMgOC43OTc5MiAxOC44OTkxIDkuNTUxNzMgMTguODk5MUM5LjU5MjAxIDE4Ljg5OTEgOS42MzI1NCAxOC44OTgyIDkuNjczMDIgMTguODk2NkMxMC40NzE1IDE4Ljg2NDUgMTEuMjA0OCAxOC41MTg5IDExLjczNzkgMTcuOTIzNkMxMS43NDk0IDE3LjkxMDcgMTEuNzYwNyAxNy44OTc0IDExLjc3MTYgMTcuODgzOUwyNC43ODQ3IDEuNjg4NDFDMjUuMTIyNSAxLjI2Nzk1IDI1LjA1NTUgMC42NTMzMDQgMjQuNjM1MSAwLjMxNTQ2MloiIGZpbGw9IiMwMDg2QTgiLz4KPC9zdmc+Cg==") center/18px no-repeat;
  }
`
export const FabricTitle = styled.div`
  background: rgba(255, 255, 255, 0.75);
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 6px 10px;
  font: normal normal 400 12px/1.5em 'Open-Sans', sans-serif;
  border-radius: 3px;
  max-width: calc(100% - 20px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const FabricImage = styled.img`
  position: absolute;
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  border-radius: 3px;
  -webkit-user-drag: none;
`