import * as React from "react"
import Flickity from "react-flickity-component"
import Link from "next/link"

import {useSelector} from "react-redux"
import {RootState} from "../../../redux/store"
import {SuperiorSlide, SuperiorSlideImg, SuperiorSliderContainer, SuperiorSlideWrapper} from "./SuperiorSlider.sc";


const flickityOptions = {
  prevNextButtons: true,
  pageDots: false,
  wrapAround: true,
  autoPlay: true,
  cellAlign: 'left',
  contain: true,
  groupCells: true,
}


const SuperiorSlider = () => {

  /* TODO: Rename storage */
  const banners = useSelector((state: RootState) => state.indexPage.superiorSlider)

  if (!banners) return null;

  return (
    <SuperiorSliderContainer>
      <Flickity
        className={''}
        elementType={'div'}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
      >
        {banners.map(({img, href, title}, i) =>
          <SuperiorSlideWrapper key={i}>
            <Link  href={href} passHref>
              <a>
                <SuperiorSlide>
                  <SuperiorSlideImg src={img} alt={title} title={title}/>
                </SuperiorSlide>
              </a>
            </Link>
          </SuperiorSlideWrapper>
        )}
      </Flickity>
    </SuperiorSliderContainer>
  )
}

export default SuperiorSlider;