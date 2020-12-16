import React from 'react';
import Flickity from "react-flickity-component";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {
  GallerySlide,
  GalleryWrapper,
  ImageWrapper,
  Thumb,
  ThumbOuter, ThumbSlide,
  ThumbsWrapper,
  ThumbWrapper
} from "./ProductGallery.sc";


const ProductGallery = () => {

  const {general_image, gallery, name, subtitle} = useSelector((state: RootState) => {
    const {general_image, gallery} = state.product.variation
    const {name, subtitle} = state.product.entity

    return {general_image, gallery, name, subtitle}
  })
  const images = [general_image, ...gallery];

  const [active, setActive] = React.useState(0)
  let refGallery = null, refThumbs = null;

  React.useEffect(() => {
    refGallery ? refGallery.on('settle', (index) => {
      setActive(index)
    }) : null

    refThumbs ? refThumbs.on('staticClick', (e, p, c, index) => {
      if (index !== undefined) {
        setActive(index)
      }
    }) : null
  }, [images])


  const flickityOptions = {
    prevNextButtons: false,
    pageDots: false,
    initialIndex: active,
    selectedAttraction: 0.2,
    friction: 0.8
  }
  const flickityThumbOptions = {
    prevNextButtons: false,
    pageDots: false,
    asNavFor: '.product-gallery',
    initialIndex: active,
    contain: true,
    draggable: false,
  }


  return (
    <GalleryWrapper>
      <Flickity
        className={'product-gallery'}
        elementType={'div'}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        flickityRef={r => {
          refGallery = r
        }}
      >
        {images.map((image, index) =>
          <GallerySlide key={index}>
            <ImageWrapper>
              <img loading="lazy"
                   src={image}
                   alt={`${name} - ${subtitle.toLowerCase()}`}
                   title={`${name} - ${subtitle.toLowerCase()}`}
              />
            </ImageWrapper>
          </GallerySlide>
        )}
      </Flickity>

      <ThumbsWrapper>
        <Flickity
          className={'product-thumbs'}
          elementType={'div'}
          options={flickityThumbOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          flickityRef={r => {
            refThumbs = r
          }}
        >
          {images.map((image, index) =>
            <ThumbSlide key={index}>
              <ThumbWrapper>
                <ThumbOuter>
                  <Thumb
                    loading="lazy"
                    src={image}
                    alt={`${name} - ${subtitle.toLowerCase()}`}
                  />
                </ThumbOuter>
              </ThumbWrapper>
            </ThumbSlide>
          )}
        </Flickity>
      </ThumbsWrapper>

    </GalleryWrapper>
  );
};





export default ProductGallery;