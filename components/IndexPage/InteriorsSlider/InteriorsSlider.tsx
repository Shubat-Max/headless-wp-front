import * as React from 'react';
import Flickity from "react-flickity-component";
import Link from "next/link";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import CategoryTabs from "./CategoryTabs";
import ColorsTabs from "./ColorsTabs";

import {
  FlickityContainer,
  InteriorsSliderContainer, InteriorsSliderItem,
  InteriorsSliderItemImg,
  InteriorsSliderItemText,
  InteriorsSliderTitle, SeamlessContainer
} from "./InteriorsSlider.sc";
import {Col, Row} from "../../Grid";


const InteriorsSlider = () => {
  // TODO: Use index as default value for categories
  const [activeCategory, setActiveCategory] = React.useState(
  {
    slug: 'new',
    title: 'Новые',
    order: -10,
  })
  // TODO: Use index as default value for colors
  const [activeColor, setActiveColor] = React.useState(null)

  const {items, colorTags, categoryTags} = useSelector((state: RootState) => ({
    items: state.indexPage.interiorsSlider.filter(slide => slide.categories.filter(category => category.slug === activeCategory.slug).length > 0 && (activeColor ? slide.color === activeColor : true)),

    colorTags: state.indexPage.interiorsSlider.reduce((acc, {categories, color}) => {
      ( categories.filter(cat => cat.slug === activeCategory.slug).length > 0 && !acc.includes(color) ) ? acc = [...acc, color] : null
      return acc;
    }, []),

    categoryTags: state.indexPage.interiorsSlider.reduce((acc : Array<any>, slide: { categories, color}) => {
      return [
        ...acc,
        ...slide.categories.filter(category => {
          let found = false;
          for (let i = 0; i < acc.length; i++) {
            if (acc[i].slug === category.slug) {
              found = true;
              break;
            }
          }
          return !found && (activeColor ? slide.color === activeColor : true)
        } )
      ]
    }, []),
  }));

  const flickityOptions = {
    prevNextButtons: true,
    pageDots: false,
    cellAlign: 'left',
    groupCells: true,
    contain: true,
  }

  return (
    <InteriorsSliderContainer>
      <InteriorsSliderTitle>Идеи для интерьеров<span>{items.length}</span></InteriorsSliderTitle>
      <ColorsTabs colors={colorTags} activeColor={activeColor} changeColor={setActiveColor}/>
      <CategoryTabs categories={categoryTags} activeCategory={activeCategory} changeCategory={setActiveCategory}/>
      <SeamlessContainer fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <FlickityContainer>
              <Flickity
                className={''}
                options={flickityOptions}
                disableImagesLoaded={false}
              >
                {items.map((item, index) =>
                  <InteriorsSliderItem key={index}>
                    <InteriorsSliderItemImg src={item.image} alt='Интерьер'/>
                    <Link href={'/product/' + item.slug} passHref>
                      <a>
                        <InteriorsSliderItemText>Перейти в интерьер</InteriorsSliderItemText>
                      </a>
                    </Link>
                  </InteriorsSliderItem>
                )}
              </Flickity>
            </FlickityContainer>
          </Col>
        </Row>
      </SeamlessContainer>
    </InteriorsSliderContainer>
  );
};



export default InteriorsSlider