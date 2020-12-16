import * as React from "react"
import {CategoryTabsContainer, CategoryTabsItem} from "./CategoryTabs.sc"


const CategoryTabs = ({categories, activeCategory, changeCategory}) => {
  const [left, setLeft] = React.useState(0)
  const [width, setWidth] = React.useState()

  return (
    <CategoryTabsContainer
      left={left}
      width={width}
    >
      {categories.sort(function (a,b) {return a.order - b.order}).map((cat, i) => {
        const ref = React.useRef(null);

        if (cat.slug === activeCategory && !width && ref.current) {
          setWidth(ref.current.offsetWidth)
        }

        return <CategoryTabsItem
          ref={ref}
          key={i}
          active={cat.slug === activeCategory}
          onClick={() => {
            changeCategory(cat)
            setLeft(ref.current.offsetLeft)
            setWidth(ref.current.offsetWidth)
          }}
        >
          {cat.title}
        </CategoryTabsItem>
      })}
    </CategoryTabsContainer>
  )
}


export default CategoryTabs