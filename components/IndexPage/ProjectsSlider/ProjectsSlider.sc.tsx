import styled from "styled-components";
import {Colors} from "../../../constants/colors";

export const ProjectsSlideTitle = styled.div`
  position: absolute;
  bottom: 10px;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  -ms-transform-origin: left center;
  transform-origin: left center;
  font:normal normal 400 18px/100% 'Open Sans',sans-serif;
  text-shadow: 3px 3px 0px rgba(53, 50, 56, 0.05);
`

export const ProjectsSlideCategory = styled.span`
  position: relative;
  text-shadow: 3px 3px 0 rgba(53, 50, 56, 0.05);
  font:normal normal 400 18px/150% 'Lato',sans-serif;
`

export const ProjectsSlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

export const ProjectsSlide = styled.div`
  color: #FFF;
  width: 100%;
  height: 500px;
  background: rgba(53, 50, 56, 0.5);
  position: relative;
  padding: 30px;
`

export const FlickityContainer = styled.div`
  padding-bottom: 60px;
  border-bottom: 1px solid ${Colors.DIVIDER};

  & .flickity-prev-next-button {
    height: 31px;
    width: 31px;
    background: #fff;
    opacity: 1;
    border: 1px solid ${Colors.DIVIDER};
  }
  & .flickity-prev-next-button:disabled {
    opacity: 0;
  }
  & .flickity-prev-next-button.next {
    right: -15px !important;
    background: #fff url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01LjI4NjgxIDQuMzM3MTNMMC42NjE0NjUgMC4xMDM3ODhDMC41MDk5MjEgLTAuMDM0ODMxNSAwLjI2NDU2OCAtMC4wMzQ1OTg1IDAuMTEzMjc4IDAuMTA0NTA1Qy0wLjAzNzg5NTMgMC4yNDM1OSAtMC4wMzc1MDQ3IDAuNDY4ODk4IDAuMTE0MDU5IDAuNjA3NjI1TDQuNDY0MDkgNC41ODkwMUwwLjExMzkwMyA4LjU3MDM3Qy0wLjAzNzY0MTQgOC43MDkxMSAtMC4wMzgwMzIxIDguOTM0MjggMC4xMTMxMjEgOS4wNzMzOEMwLjE4ODk2MiA5LjE0MzExIDAuMjg4MzE4IDkuMTc3OTggMC4zODc2NzQgOS4xNzc5OEMwLjQ4Njc3NiA5LjE3Nzk4IDAuNTg1NzQyIDkuMTQzMzUgMC42NjE0NDYgOS4wNzQxTDUuMjg2ODEgNC44NDA4NkM1LjM1OTggNC43NzQyMSA1LjQwMDc2IDQuNjgzNTEgNS40MDA3NiA0LjU4OTAxQzUuNDAwNzYgNC40OTQ1IDUuMzU5NjggNC40MDM5MSA1LjI4NjgxIDQuMzM3MTNaIiBmaWxsPSIjMzUzMjM4Ii8+Cjwvc3ZnPgo=") center center/9px 9px no-repeat;
    box-shadow: -3px 3px 0 rgba(53, 50, 56, 0.05);
  }
  & .flickity-prev-next-button.previous {
    left: -15px !important;
    background: #fff url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjcxMzIzNCA0Ljg0MDZMNS4zMzg1NCA5LjA3Mzk1QzUuNDkwMDggOS4yMTI1NyA1LjczNTQzIDkuMjEyMzMgNS44ODY3MiA5LjA3MzIzQzYuMDM3ODkgOC45MzQxNCA2LjAzNzUgOC43MDg4NCA1Ljg4NTk0IDguNTcwMTFMMS41MzU5NSA0LjU4ODczTDUuODg2MSAwLjYwNzM2NkM2LjAzNzY0IDAuNDY4NjIgNi4wMzgwMyAwLjI0MzQ1NiA1Ljg4Njg4IDAuMTA0MzUzQzUuODExMDQgMC4wMzQ2MjIyIDUuNzExNjggLTAuMDAwMjQ0MTQxIDUuNjEyMzMgLTAuMDAwMjQ0MTQxQzUuNTEzMjMgLTAuMDAwMjQ0MTQxIDUuNDE0MjYgMC4wMzQzODg1IDUuMzM4NTYgMC4xMDM2MzZMMC43MTMyMzQgNC4zMzY4N0MwLjY0MDI0NiA0LjQwMzUyIDAuNTk5Mjg5IDQuNDk0MjIgMC41OTkyODkgNC41ODg3M0MwLjU5OTI4OSA0LjY4MzIzIDAuNjQwMzYzIDQuNzczODMgMC43MTMyMzQgNC44NDA2WiIgZmlsbD0iIzM1MzIzOCIvPgo8L3N2Zz4K") center center/9px 9px no-repeat;
    box-shadow: 3px 3px 0 rgba(53, 50, 56, 0.05);
  }
  & .flickity-prev-next-button .flickity-button-icon {
    display: none;
  }
`

export const ProjectsSliderWrapper = styled.div`
  border-radius: 3px;
  width: calc(calc(100% - 90px) / 4);
  height: 500px;
  margin-right: 30px;
  overflow: hidden;
  position: relative;
  
  & a {
    display: block;
   
  }
`

export const ProjectsSliderTitle = styled.h2`
  font:normal normal 600 24px/100% 'Lato',sans-serif;
  position: relative;
  margin-bottom: 30px;
  margin-top: 0;
  
  & a {
    color: ${Colors.PRIMARY}
  }
  
  & span {
    color: ${Colors.TABS};
    font:normal normal 400 14px/100% 'Open Sans',sans-serif;
    vertical-align: top;
    margin-left: 10px;
  }
`

