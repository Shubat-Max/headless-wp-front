import * as React from "react"
import {CategoryTabsContainer, CategoryTabsItem} from "./CategoryTabs.sc"

const CategoryTabs = ({categories, activeCategory, changeCategory}) => {
  return (
    <CategoryTabsContainer>
      {categories.map((cat, i) => {
        return <CategoryTabsItem
          key={i}
          active={cat.taxonomy_slug === activeCategory}
          onClick={() => {
            changeCategory(cat.taxonomy_slug)
          }}
        >
          {cat.taxonomy_name}
        </CategoryTabsItem>
      })}
    </CategoryTabsContainer>
  )
}


export default CategoryTabs