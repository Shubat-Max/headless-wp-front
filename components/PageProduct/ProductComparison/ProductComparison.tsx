import * as React from "react"
import {Heading, SCProductComparison, Body} from "./ProductComparison.sc"
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import styled from "styled-components";
import {formatPrice, formatSubtitle} from "../../../utils";
import {Colors} from "../../../constants/colors";
import Link from "next/link";
import Flickity from "react-flickity-component";
import ReactFlickity from "../../_reusables/ReactFlickity";


const flickityOptions = {
  prevNextButtons: false,
  pageDots: true,
  groupCells: false,
  cellAlign: 'left',
  contain: true,
}


const ProductComparison = () => {

  const {comparison} = useSelector((state: RootState) => ({
    comparison: state.product.entity.comparison
  }))

  if (!comparison.length) return null

  return (
    <SCProductComparison>
      <Heading>Сравните с другими</Heading>
      <Body>
        <ReactFlickity
          settings={{
            className: 'product-comparison',
            elementType: 'div',
            disableImagesLoaded: false,
            prevNextButtons: false,
            pageDots: true,
            pageCounter: true,
            options: {
              cellAlign: 'left',
              contain: true,
            }
          }}
        >
          {
            comparison.map((comparableItem, i) => {
              const {image, name, subtitle, slug, price, comparison} = comparableItem

              const attributes = comparison

              return (
                <Stage key={i}>
                  {
                    i === 0 ?
                      <Card>
                        <ImageOuter>
                          <ImageInner>
                            <Image src={image}/>
                          </ImageInner>
                        </ImageOuter>

                        <Title>{name}</Title>
                        <Subtitle>{subtitle ? formatSubtitle(subtitle) : null}</Subtitle>

                        <Prices>
                          <Price>{formatPrice(price)}</Price>
                        </Prices>
                      </Card>
                          :
                      <Link href={`/product/${slug}`} passHref>
                        <a>
                          <Card>
                            <ImageOuter>
                              <ImageInner>
                                <Image src={image}/>
                              </ImageInner>
                            </ImageOuter>

                            <Title>{name}</Title>
                            <Subtitle>{subtitle ? formatSubtitle(subtitle) : null}</Subtitle>

                            <Prices>
                              <Price>{formatPrice(price)}</Price>
                            </Prices>
                          </Card>
                        </a>
                      </Link>
                  }

                  <ComparableAttributes>
                    {
                      attributes ? attributes.map((comparableAttribute, j) => {

                        const {taxonomy_name, term_name} = comparableAttribute;

                        return (
                          <ComparableAttribute key={`${i}-${j}`} order={j}>
                            <TaxName>{taxonomy_name}</TaxName>
                            <TermName>{term_name}</TermName>
                          </ComparableAttribute>
                        )
                      }) : null
                    }
                  </ComparableAttributes>
                </Stage>
              )
            })
          }
        </ReactFlickity>
      </Body>
    </SCProductComparison>
  )
}


const TermName = styled.div`
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
  text-align: center;
`
const TaxName = styled.div`
  font: normal normal 400 10px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.SECONDARY_TEXT};
  text-align: center;
  text-transform: uppercase;
`
const ComparableAttribute = styled.div<{ order }>`
  border-top: 1px solid ${Colors.DIVIDER};
  background: ${p => p.order % 2 ? '#fff' : '#FAFAFA'};
  padding: 10px 15px;
`
const ComparableAttributes = styled.div``
const Price = styled.div`
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
`
const Prices = styled.div`
  margin-top: 5px;
  text-align: center;
`
const Subtitle = styled.div`
  margin-top: 5px;
  max-height: 3em;
  height: 3em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.SECONDARY_TEXT};
`
const Title = styled.div`
  margin-top: 15px;
  text-align: center;
  white-space: nowrap;
  max-height: 1.5em;
  height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.PRIMARY_TEXT};
`
const Image = styled.img`
  width: 100%;
  user-select: none;
  -webkit-user-drag: none;
`
const ImageInner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 3px;
`
const ImageOuter = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
`
const Card = styled.div`
  padding: 15px;
`
const Stage = styled.div`
  width: calc( calc(100% - 120px) / 5 );
  display: inline-block;
  border: 1px solid ${Colors.DIVIDER};
  margin-right: 30px;
  border-radius: 3px;
  position: relative;
  
  &:last-of-type {
    margin-right: 0;
  }
  
  @media (max-width: 768px){
    width: calc(100% - 30px);
    margin-right: 15px;
  }
`


export default ProductComparison