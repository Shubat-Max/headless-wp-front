import * as React from "react"
import {Col, Container, Row} from "../components/Grid"
import styled from "styled-components"
import {Colors} from "../constants/colors"
import Head from "next/head"
import Layout from "../components/Layout"
import Flickity from "react-flickity-component";
import ReactFlickity from "../components/_reusables/ReactFlickity";

const DeliveryRoute = () => {

  const mock = [
    "http://130.193.62.187/wp-content/uploads/2020/11/raf_01.jpeg",
    "http://130.193.62.187/wp-content/uploads/2020/11/raf_03-1.jpg",
    "http://130.193.62.187/wp-content/uploads/2020/11/Raf-234-см-Virginia-Dusty-Rose-2.jpg",
    "http://130.193.62.187/wp-content/uploads/2020/11/Raf-зеленый-Premier-20-1.jpg"
  ];


  const carouselRef = React.useRef(null);
  const carouselForwardRef = React.useRef(null);
  const carouselBackwardRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [maxIndex, setMaxIndex] = React.useState(0)


  const flickityOptions = {
    pageDots: false,
    prevNextButtons: false,
    initialIndex: currentIndex,
    cellAlign: 'left',
    contain: true,
    groupCells: true
  }


  React.useEffect(() => {
    let flkty = carouselRef.current
    let forward = carouselForwardRef.current
    let backward = carouselBackwardRef.current
    let current_index = 0

    flkty.on('dragMove', () => {
      current_index = flkty.selectedIndex;
    })

    flkty.on('dragEnd', () => {
      if (flkty.selectedIndex !== current_index) {
        setCurrentIndex(flkty.selectedIndex)
      }
    })

    flkty.on('ready', () => {
      setMaxIndex(flkty.slides.length)
    })

    function incrementIndex() {
      if (currentIndex < maxIndex - 1) {
        setCurrentIndex(c => +c + 1)
        flkty.next()
      }
    }

    function decrementIndex() {
      if (currentIndex > 0) {
        setCurrentIndex(c => +c - 1)
        flkty.previous()
      }
    }

    forward.addEventListener('click', incrementIndex)

    backward.addEventListener('click', decrementIndex)

    return () => {
      forward.removeEventListener('click', incrementIndex);
      backward.removeEventListener('click', decrementIndex);
    }
  }, [carouselRef, carouselForwardRef, carouselBackwardRef, currentIndex])


  return (
    <>
      <Head>
        <title>Условия доставки</title>
      </Head>

      <Layout>
        <Container>
          <Row>
            <Col xs={12} style={{marginTop: '40px'}}>
              <Window>

                <Flickity
                  className={"test-slider"}
                  elementType={"div"}
                  options={flickityOptions}
                  disableImagesLoaded={false}
                  reloadOnUpdate={false}
                  static={false}
                  flickityRef={ref => {
                    if (carouselRef) carouselRef.current = ref
                  }}
                >
                  {
                    mock.map((m, i) => (
                      <Block key={i} className="test-slide">
                        <ImageOutie>
                          <img src={m}/>
                        </ImageOutie>
                      </Block>
                    ))
                  }

                </Flickity>
                <Controls>
                  <Forward ref={carouselForwardRef}>{'>'}</Forward>
                  <Backward ref={carouselBackwardRef}>{'<'}</Backward>
                </Controls>
              </Window>
              <div>{currentIndex + 1}/{maxIndex}</div>
            </Col>

            <Col xs={12} style={{marginTop: '40px'}}>
              <ReactFlickity
                settings={{
                  prevNextButtons: true,
                  pageDots: true,
                  pageCounter: true,
                  className: 'flickity-test-slider',
                  elementType: 'div',
                  options: {
                    cellAlign: 'left',
                    contain: true
                  },
                  disableImagesLoaded: false,
                  reloadOnUpdate: false,
                  static: false
                }}
              >
                {mock.map((m, i) =>
                  <Block>
                    <ImageOutie>
                      <a href={m} data-fancybox={'test'}>
                        <img src={m} alt="" />
                      </a>
                    </ImageOutie>
                  </Block>
                )}
              </ReactFlickity>
            </Col>

          </Row>
        </Container>
      </Layout>
    </>
  );
};


const ControlButton = styled.div`
  position: absolute;
  z-index: 500;
  top: 50%;
  transform: translateY(-50%);
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #e3e3e3;
  cursor: pointer;
`
const Backward = styled(ControlButton)`
  left: -15px;
`
const Forward = styled(ControlButton)`
  right: -15px;
`
const Controls = styled.div`
  top: 0;
  left: 0;
  right: 0;
`
const ImageOutie = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 3px;
  overflow: hidden;
  
  & > img {
    width: 100%;
  }
`
const Block = styled.div`
  width: calc( calc(100% - 15px) / 2);
  padding-bottom: calc( calc(100% - 15px) / 2);
  margin-right: 15px;
  position: relative;
`
const Window = styled.div`
  width: 400px;
  position: relative;
`
const DatImage = styled.img`
  -webkit-user-drag: none;
  user-select: none;
  width: 100%;
`
// const CardInner = styled.div`
//   width: 100%;
//   //padding-bottom: 100%;
//   margin-right: 20px;
//   overflow: hidden;
//   position: relative;
//
//   & > img {
//     display: none;
//   }
// `
const Card = styled.div`
  display: block;
  width: 350px;
  height: 350px;
  position: relative;
  overflow: hidden;
  //width: calc( calc( 100% - 45px) / 4);
  //margin-right: 15px;
  
  //& img {
  //  width: 100%;
  //}
  //
  //& > div {
  //  width: 100%;
  //  height: 100%;
  //  position: relative;
  //}
  //
  //& > div > div:nth-of-type(2) {
  //  width: 100%;
  //  height: 100%;
  //  position:relative;
  //}
  //
  //& > div > div:nth-of-type(2) > div {
  //  width: 100%;
  //  height: 100%;
  //}
  


  
  &:last-of-type {
    margin-right: 0;
  }
  
  &:focus {
    outline: none;
  }
`
const PageHead = styled.div`
  font: normal normal 600 24px/1.5em 'Lato', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
`
const PageBody = styled.div`
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
`
const Breadcrumbs = styled(Container)`
  margin-top: 40px;
  margin-bottom: 40px;
`
const BackwardLink = styled.span`
  color: ${Colors.PRIMARY_TEXT};
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  cursor: pointer;
  
  &:hover {
    color: ${Colors.PRIMARY}
  }
`;

export default DeliveryRoute;