import * as React from "react"
import {Col} from "../../../Grid";
import {
  InstagramMainImg,
  InstagramMainSearch
} from "./InstagramMainItem.sc";


const InstagramMainItem = ({url}) => {
  const [data, setData] = React.useState(null)

  React.useEffect ( () => {
    fetch(url + '?__a=1').then(res => res.json()).then(data => setData(data.graphql.shortcode_media))
  }, [])

  return data ? <Col md={2} >
    <InstagramMainImg >
      <InstagramMainSearch >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)" filter="url(#filter0_d)">
            <path d="M6.60568 0C2.96341 0 0 2.96341 0 6.60568C0 10.2482 2.96341 13.2114 6.60568 13.2114C10.2482 13.2114 13.2114 10.2482 13.2114 6.60568C13.2114 2.96341 10.2482 0 6.60568 0ZM6.60568 11.9919C3.63577 11.9919 1.21951 9.57562 1.21951 6.60571C1.21951 3.6358 3.63577 1.21951 6.60568 1.21951C9.57559 1.21951 11.9919 3.63577 11.9919 6.60568C11.9919 9.57559 9.57559 11.9919 6.60568 11.9919Z" fill="white"/>
            <path d="M14.8214 13.9592L11.3254 10.4632C11.0872 10.225 10.7014 10.225 10.4632 10.4632C10.225 10.7012 10.225 11.0874 10.4632 11.3254L13.9592 14.8214C14.0783 14.9405 14.2342 15 14.3903 15C14.5462 15 14.7023 14.9405 14.8214 14.8214C15.0596 14.5834 15.0596 14.1972 14.8214 13.9592Z" fill="white"/>
          </g>
          <defs>
            <filter id="filter0_d" x="0" y="0" width="18" height="18" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dx="3" dy="3"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.207843 0 0 0 0 0.196078 0 0 0 0 0.219608 0 0 0 0.05 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <clipPath id="clip0">
              <rect width="15" height="15" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </InstagramMainSearch>
      <img draggable="false" src={data.display_url} alt="search"/>
    </InstagramMainImg>
  </Col>
  : <Col md={2} >
      <InstagramMainImg />
    </Col>
};

export default InstagramMainItem;