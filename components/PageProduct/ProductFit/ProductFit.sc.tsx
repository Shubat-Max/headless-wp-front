import styled from "styled-components"
import {Colors} from "../../../constants/colors"


export const SCProductFit = styled.div`
  margin-top: 40px;
  
  @media (max-width: 768px){
    margin-top: 30px;
  }
`
export const Heading = styled.div`
  font: normal normal 600 24px/1em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
`
export const Body = styled.div`
  margin-top: 20px;
  & .flickity-viewport {
    overflow: visible !important;
    position: relative;
  }
  & .react-flickity_dots-wrapper {
    display: none;
  }
  // & .flickity-prev-next-button {
  //   height: 31px;
  //   width: 31px;
  //   background: #fff;
  //   opacity: 1;
  //   border: 1px solid ${Colors.DIVIDER};
  // }
  // & .flickity-prev-next-button:disabled {
  //   opacity: 0;
  // }
  // & .flickity-prev-next-button.next {
  //   right: -15px !important;
  //   background: #fff url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01LjI4NjgxIDQuMzM3MTNMMC42NjE0NjUgMC4xMDM3ODhDMC41MDk5MjEgLTAuMDM0ODMxNSAwLjI2NDU2OCAtMC4wMzQ1OTg1IDAuMTEzMjc4IDAuMTA0NTA1Qy0wLjAzNzg5NTMgMC4yNDM1OSAtMC4wMzc1MDQ3IDAuNDY4ODk4IDAuMTE0MDU5IDAuNjA3NjI1TDQuNDY0MDkgNC41ODkwMUwwLjExMzkwMyA4LjU3MDM3Qy0wLjAzNzY0MTQgOC43MDkxMSAtMC4wMzgwMzIxIDguOTM0MjggMC4xMTMxMjEgOS4wNzMzOEMwLjE4ODk2MiA5LjE0MzExIDAuMjg4MzE4IDkuMTc3OTggMC4zODc2NzQgOS4xNzc5OEMwLjQ4Njc3NiA5LjE3Nzk4IDAuNTg1NzQyIDkuMTQzMzUgMC42NjE0NDYgOS4wNzQxTDUuMjg2ODEgNC44NDA4NkM1LjM1OTggNC43NzQyMSA1LjQwMDc2IDQuNjgzNTEgNS40MDA3NiA0LjU4OTAxQzUuNDAwNzYgNC40OTQ1IDUuMzU5NjggNC40MDM5MSA1LjI4NjgxIDQuMzM3MTNaIiBmaWxsPSIjMzUzMjM4Ii8+Cjwvc3ZnPgo=") center center/9px 9px no-repeat;
  //   box-shadow: -3px 3px 0 rgba(53, 50, 56, 0.05);
  // }
  // & .flickity-prev-next-button.previous {
  //   left: -15px !important;
  //   background: #fff url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjcxMzIzNCA0Ljg0MDZMNS4zMzg1NCA5LjA3Mzk1QzUuNDkwMDggOS4yMTI1NyA1LjczNTQzIDkuMjEyMzMgNS44ODY3MiA5LjA3MzIzQzYuMDM3ODkgOC45MzQxNCA2LjAzNzUgOC43MDg4NCA1Ljg4NTk0IDguNTcwMTFMMS41MzU5NSA0LjU4ODczTDUuODg2MSAwLjYwNzM2NkM2LjAzNzY0IDAuNDY4NjIgNi4wMzgwMyAwLjI0MzQ1NiA1Ljg4Njg4IDAuMTA0MzUzQzUuODExMDQgMC4wMzQ2MjIyIDUuNzExNjggLTAuMDAwMjQ0MTQxIDUuNjEyMzMgLTAuMDAwMjQ0MTQxQzUuNTEzMjMgLTAuMDAwMjQ0MTQxIDUuNDE0MjYgMC4wMzQzODg1IDUuMzM4NTYgMC4xMDM2MzZMMC43MTMyMzQgNC4zMzY4N0MwLjY0MDI0NiA0LjQwMzUyIDAuNTk5Mjg5IDQuNDk0MjIgMC41OTkyODkgNC41ODg3M0MwLjU5OTI4OSA0LjY4MzIzIDAuNjQwMzYzIDQuNzczODMgMC43MTMyMzQgNC44NDA2WiIgZmlsbD0iIzM1MzIzOCIvPgo8L3N2Zz4K") center center/9px 9px no-repeat;
  //   box-shadow: 3px 3px 0 rgba(53, 50, 56, 0.05);
  // }
  // & .flickity-prev-next-button .flickity-button-icon {
  //   display: none;
  // }
  // & .flickity-page-dots {
  //   display: none;
  // }
  
  @media (max-width: 768px){
    & {
      margin-bottom: 40px;
    }
    & .react-flickity_dots-wrapper {
      bottom: -35px;
    }
    & .react-flickity_forward, & .react-flickity_backward {
      display: none;
    }
    & .react-flickity_dots-wrapper {
      display: flex;
    }
    // & {
    //   margin-bottom: 20px;
    // }
    // & .flickity-prev-next-button {
    //   display: none;
    // }
    // & .flickity-page-dots {
    //   display: flex;
    //   background: ${Colors.INTERACTIVE_HOVER};
    //   position: relative;
    //   top: 20px;
    //   left: 0;
    //   right: 0;
    // }
    // & .flickity-page-dots .dot {
    //   flex: 1;
    //   height: 3px;
    //   margin: 0;
    //   border-radius: 3px;
    //   background: transparent;
    // }
    // & .flickity-page-dots .dot.is-selected {
    //   background: ${Colors.PRIMARY};
    // }
  }
`
export const CardImageOuter = styled.div`
  padding-bottom: 100%;
  position: relative;
  border-radius: 3px;
`
export const Card = styled.div`
  display: inline-block;
  width: calc( calc(100% - 90px) / 4);
  margin-right: 30px;
  
  @media (max-width: 768px){
    width: calc(100% - 30px);
    margin-right: 15px;
  }
`