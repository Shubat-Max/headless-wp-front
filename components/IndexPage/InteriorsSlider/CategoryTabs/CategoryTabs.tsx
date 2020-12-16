import * as React from 'react';
import {CategoryTabsContainer, CategoryTabsItem} from "./CategoryTabs.sc";

const CategoryTabs = ({categories, activeCategory, changeCategory}) => {
  const [left, setLeft] = React.useState(0)
  const [width, setWidth] = React.useState(0)
  const tabContent = [];

  function setPosition(item) {
    setLeft(item.offsetLeft)
    setWidth(item.offsetWidth)
  }
  return (
          <CategoryTabsContainer
                  left={left}
                  width={width}
          >
            {categories.sort(function (a,b) {return a.order - b.order}).map((cat, i) => {

              return <CategoryTabsItem
                      ref={ref => { tabContent[i] = ref;
                        cat.slug === activeCategory.slug && ref && tabContent.length ? setPosition(ref) : null
                      }}
                      key={i}
                      active={cat.slug === activeCategory.slug}
                      onClick={() => {
                        changeCategory(cat)
                        setPosition(tabContent[i])
                      }}

              >
                {cat.title}
              </CategoryTabsItem>
            })}
          </CategoryTabsContainer>
  )
}


export default CategoryTabs;