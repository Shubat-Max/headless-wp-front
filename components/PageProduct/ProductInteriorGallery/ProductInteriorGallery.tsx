import * as React from "react"
import styled from "styled-components"
import {useSelector} from "react-redux"
import {RootState} from "../../../redux/store"
import {Col, Container, Row} from "../../Grid"
import {Colors} from "../../../constants/colors"
import ReactFlickity from "../../_reusables/ReactFlickity"
import ReactFlickityEnhanced from "../../_reusables/ReactFlickityEnchanced";


const ProductInteriorGallery = () => {

  const {images, name, subtitle} = useSelector((state: RootState) => {
    const {name, subtitle} = state.product.entity;
    return {images: state.product.entity.interior_gallery, name, subtitle}
  })

  const [activeFullscreen, setActiveFullscreen] = React.useState(false)
  const [fullscreenIndex, setFullscreenIndex] = React.useState(0)

  if (!images.length) return null;

  return (
      <SeamlessContainer fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <FlickityContainer>
              <Heading>Наша мебель в интерьере</Heading>
                <ReactFlickityEnhanced
                  settings={{
                    prevNextButtons: true,
                    pageDots: false,
                    pageCounter: false,
                    options: {
                      initialIndex: fullscreenIndex
                    }
                  }}
                  active={activeFullscreen}
                  setActive={(state) => {
                    setActiveFullscreen(state)
                  }}
                >
                  { images.map((m,i) => <FullscreenSlide key={i}><img src={m} alt=""/></FullscreenSlide>)}
                </ReactFlickityEnhanced>

                <ReactFlickity
                  settings={{
                    prevNextButtons: true,
                    pageDots: true,
                    pageCounter: true,
                    options: {
                      cellAlign: 'left',
                      contain: true,
                    },
                    onStaticClick: (e, c, ce, ci) => {
                      if( ci !== null && ci !== undefined ){
                        setFullscreenIndex(ci)
                        setActiveFullscreen(true)
                      }
                    }
                  }}
                >
                  {images.map((image, index) =>
                    <SlideWrapper key={index}>
                      <Slide>
                        <SlideImageWrapper>
                            <img
                              loading="lazy"
                              src={image}
                              alt={`${name} - ${subtitle.toLowerCase()}`}
                              title={`${name} - ${subtitle.toLowerCase()}`}
                            />
                        </SlideImageWrapper>
                      </Slide>
                    </SlideWrapper>
                  )}
                </ReactFlickity>
            </FlickityContainer>
          </Col>
        </Row>
      </SeamlessContainer>
  );
};

export const FullscreenSlide = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  
  & img {
    max-width: calc(100% - 30px);
  }
`
export const Heading = styled.div`
  font: normal normal 600 24px/1em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
  margin-bottom: 20px;
`
const FlickityContainer = styled(Container)`
  & .react-flickity_dots-wrapper {
    display: none;
  }
  & .flickity-viewport {
    overflow: visible !important;
    position: relative;
  }
  @media (max-width: 768px){
    & {
      margin-bottom: 20px;
    }
    & .react-flickity_dots-wrapper {
      bottom: -35px;
      display: flex;
    }
    & .react-flickity_backward, & .react-flickity_forward {
      display: none;
    }
  }
`
const SeamlessContainer = styled(Container)`
  margin: 40px 0 0 0 !important;
  padding: 0 !important;
  
  @media (max-width: 768px){
    margin: 30px 0 0 0 !important;
  }
`
const SlideWrapper = styled.div`
  border-radius: 3px;
  width: calc(calc(100% - 150px) / 6);
  margin-right: 30px;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 1024px){
    margin-right: 15px;
    width: calc(calc(100% - 45px) / 4);
  }
  
  @media (max-width: 768px){
    margin-right: 15px;
    width: calc(calc(100% - 15px) / 2);
  }
`
const Slide = styled.div`
  padding-bottom: 100%;
`
const SlideImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & a {
    line-height: 0;
  }
  
  & img {
    width: 100%;
  }
`


export default ProductInteriorGallery;