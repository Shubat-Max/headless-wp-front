import * as React from "react"
import {useSelector} from "react-redux"
import {RootState} from "../../../redux/store"
import Link from "next/link"
import {
  Heading, SCProductCrossCategories, Body,
  CategoryLink, Category, CategoryImage, CategoryTitle
} from "./ProductCrossCategories.sc"
import Flickity from "react-flickity-component";
import ReactFlickity from "../../_reusables/ReactFlickity";


const flickityOptions = {
  prevNextButtons: true,
  pageDots: true,
  groupCells: true,
  cellAlign: 'left',
  contain: true,
}


const ProductCrossCategories = () => {

  const crossCategories = useSelector((state: RootState) => state.product.entity.recommended_categories)

  if (!crossCategories.length) return null

  return (
    <SCProductCrossCategories>
      <Heading>Смотрите, что есть ещё!</Heading>
      <Body>
        <ReactFlickity
          settings={{
            className: 'product-fit',
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
          {crossCategories.slice(0, 4).map((c, i) => {
            const {category_name, category_slug, image} = c;

            return <Link href={`/product-category/${category_slug}`} key={i} passHref>
              <CategoryLink>
                <Category>
                  <CategoryImage height="46px" width="92px"
                                 src={image ? image : 'https://us.123rf.com/450wm/mathier/mathier1905/mathier190500001/134557215-no-thumbnail-images-placeholder-for-forums-blogs-and-websites.jpg?ver=6'}
                                 alt={category_name}/>
                  <CategoryTitle>{category_name}</CategoryTitle>
                </Category>
              </CategoryLink>
            </Link>
            }
          )}
        </ReactFlickity>
      </Body>
    </SCProductCrossCategories>
  )
}


export default ProductCrossCategories