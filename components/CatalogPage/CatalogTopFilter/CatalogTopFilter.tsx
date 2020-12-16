import * as React from "react"
import {Col, Row} from "../../Grid";
import ReactSlider from "react-slider";;
import {useState} from "react";

import CategoryTabs from "./CategoryTabs";
import Slider from "./Slider";
import Flickity from "react-flickity-component";
import {FilterSliderItem, FilterSliderItemImg, FilterSliderItemImgBlock, FlickityContainer} from "./Slider/Slider.sc";
import Link from "next/link";




const CatalogTopFilter = ({subcategories}) => {
  // const [lastClickedCategory, setLastClickedCategory] = useState({name: '', values: []})
  // const [activeCategory, setActiveCategory] = React.useState('collection')
  // const [activeAttribute, setActiveAttribute] = React.useState('')

  // React.useEffect(() => {
  //   setActiveFilter({
  //     ...activeFilter,
  //     tabFilter: activeFilter.tabFilter.map( cat => {
  //       if (cat.taxonomy_slug === activeCategory) {
  //         cat.term_slug = activeAttribute
  //       }
  //       return cat
  //     })
  //   })
  // }, [activeAttribute])

  // function changeActiveFilterAttributes(activeFilter,taxonomy_slug, value) {
  //   const newActiveFilter = {
  //     ...activeFilter,
  //     // проходимся по массиву активных атрибутов
  //     attributes: activeFilter.attributes.map(attr => {
  //       // если совпадает с нашим атрибутом
  //       if (attr.taxonomy_slug === taxonomy_slug) {
  //         // меняем значение активного атрибута, если это активное значение
  //         attr.term_slug = value
  //                 // если оно уже имеется в активных, удалеям его иначе добавляем
  //                 ? attr.term_slug.includes(value)
  //                   ? attr.term_slug.filter(val => val !== value)
  //                   : [...attr.term_slug, value]
  //                 // сброс значений
  //                 : []
  //       }
  //       return attr
  //     })
  //   }
  //
  //   setActiveFilter(newActiveFilter)
  //
  //   // если категория атрибута не совпадает с последней отфильтрованной категорией
  //   if (lastClickedCategory.name !== taxonomy_slug) {
  //     if (value) {
  //       // устанавливаем новую последнюю отфильтрованую категорию снынешими активными значениями
  //       setLastClickedCategory({
  //         name:taxonomy_slug,
  //         values: filters.attributes.find(attr => attr.taxonomy_slug === taxonomy_slug).values
  //       })
  //       // сбрасываем  последнюю отфильтрованую категорию
  //     } else {
  //       setLastClickedCategory( {name: '', values: []} )
  //     }
  //   }
  // }

  // function isIssetCategory(filters, filter, value ) {
  //   let isset = false
  //   // проходимя по атрибутам
  //   filters.attributes.map(attr => {
  //     // находим нужную категорию атрибутов
  //     if (attr.taxonomy_slug === filter.taxonomy_slug) {
  //       // если эта категория была последней отфильтрованной
  //       isset = lastClickedCategory.name === filter.taxonomy_slug
  //               // сравниваем с массивом значений из последней отфильтрованной
  //               ? lastClickedCategory.values.find(item => item.term_slug === value)
  //               // иначе сравниваем с нынешним значением фильтра
  //               : attr.values.find( val => val.term_slug === value)
  //     }
  //     return attr
  //   })
  //   // если такое значение существует не прячем его
  //   return !isset
  // }
  const flickityOptions = {
    prevNextButtons: true,
    pageDots: false,
    cellAlign: 'left',
    groupCells: true,
    contain: true,
  }

  return <Row>
    <Col xs={12} >
      {/*<CategoryTabs categories={initialFilter}  activeCategory={activeCategory} changeCategory={setActiveCategory}/>*/}
      {/*<Slider  slides={initialFilter.find(attr => attr.taxonomy_slug === activeCategory).values} />*/}
      <FlickityContainer>
        <Flickity
                className={''}
                options={flickityOptions}
                disableImagesLoaded={false}
        >
          {subcategories.map(subcategory => {
            return <div key={subcategory.slug}>
              <Link href={`/product-category/${subcategory.slug}`}><a>
                <FilterSliderItem>
                  <FilterSliderItemImgBlock>
                    <FilterSliderItemImg src={subcategory.img} />
                  </FilterSliderItemImgBlock>
                  <div>{subcategory.name}</div>
                </FilterSliderItem>
              </a></Link>
            </div>
          })}
        </Flickity>
      </FlickityContainer>
    </Col>
  </Row>
}



export default CatalogTopFilter