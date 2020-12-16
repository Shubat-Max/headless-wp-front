import * as React from "react"
import Flickity from "react-flickity-component"
import {useSelector} from "react-redux"
import {RootState} from "../../../redux/store"
import CategoryTabs from "./CategoryTabs"
import SimpleProductPolaroid from "../../_reusables/SimpleProductPolaroid";
import {PopularSliderCard, PopularSliderContainer} from "./PopularSlider.sc";

const flickityOptions = {
  prevNextButtons: true,
  pageDots: false,
  cellAlign: 'left',
  groupCells: true,
  contain: true,
}

const PopularSlider = () => {
  // TODO: Use index as default value for state
  const [activeCategory, setActiveCategory] = React.useState( {
    slug: 'popular',
    title: 'Популярные',
    order: -5,
  })

  const {slides, categories} = useSelector((state: RootState) => ({
    slides: state.indexPage.popularSlider.filter(s => s.categories.filter(category => category.slug === activeCategory.slug).length > 0),
    categories: state.indexPage.popularSlider.reduce((acc : Array<any>, slide: { categories}) => {
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
          return !found
        } )
      ]
    }, [])
  }))

  return (
    <PopularSliderContainer>
      <CategoryTabs categories={categories} activeCategory={activeCategory.slug} changeCategory={setActiveCategory}/>

      <Flickity
        className={''}
        options={flickityOptions}
        disableImagesLoaded={false}
      >
        {slides.map((data, i) =>
          <PopularSliderCard key={i}>
            <SimpleProductPolaroid
              data={data}
              options={{
                innerIndent: 15,
              }}
            />
          </PopularSliderCard>
        )}

      </Flickity>
    </PopularSliderContainer>
  )
}

export default PopularSlider