import styled from "styled-components"
import {Colors} from "../../../constants/colors"

export const SCProductCollectibles = styled.div`
  margin-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${Colors.DIVIDER};
  
  @media (max-width: 768px){
    margin-top: 30px;
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: none;
  }
`
export const ProductCollectiblesButton = styled.div`
  border: 2px solid ${Colors.DIVIDER};
  border-radius: 3px;
  padding: 13px;
  text-align: center;
  font: normal normal 600 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
  background: #fff;
  cursor: pointer;
  user-select: none;
  position: relative;
  
  &:hover {
    border-color: ${Colors.PRIMARY}
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 15px;
    height: 100%;
    width: 10px;
    background: transparent url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDkgMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjg3ODQ3NSAwLjE3MTE4MkMwLjY0OTQwMiAwLjM5OTc4NSAwLjY0OTA1MSAwLjc3MDc0MSAwLjg3NzYyNSAwLjk5OTg0NEw2Ljk1MDg0IDcuMDg1NjhDNy4xNzkyOSA3LjMxNDE3IDcuMTc5MjcgNy42ODU4NiA2Ljk1MDQgNy45MTQ3NkwwLjg3NzYyNSAxNC4wMDAyQzAuNjQ5MDIxIDE0LjIyOTIgMC42NDk0MDIgMTQuNjAwMiAwLjg3ODQ3NSAxNC44Mjg4QzEuMTA3NTUgMTUuMDU3NCAxLjQ3ODUzIDE1LjA1NyAxLjcwNzExIDE0LjgyOEw3Ljc3OTQ3IDguNzQyOThDOC4xMjIyMSA4LjQwMDE4IDguMjkzNTQgNy45NTAwMyA4LjI5MzU0IDcuNDk5ODJDOC4yOTM1NCA3LjA0OTg4IDguMTIyMjcgNi41OTk4NSA3Ljc3OTg4IDYuMjU3NDlMMS43MDcxMSAwLjE3MjAzMUMxLjQ3ODUzIC0wLjA1NzAxMTYgMS4xMDc1NSAtMC4wNTczOTMxIDAuODc4NDc1IDAuMTcxMTgyWiIgZmlsbD0iIzM1MzIzOCIvPgo8L3N2Zz4K") center/8px no-repeat;
  }
`