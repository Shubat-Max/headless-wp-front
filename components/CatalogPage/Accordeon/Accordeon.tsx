import * as React from "react"
import AccordeonHead from "../Accordeon/AccordeonHead";
import {useState} from "react";
import {AccordeonBlock, AccordeonBlockCheckbox, AccordeonBody, Color, RadioItem} from "./Accordeon.sc";
import FilterSlider from "./FilterSlider";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {ACatalog} from "../../../constants/actions";

const  Accordeon = ({filterItem}) => {
  const [active, setActive] = useState(true)
  const dispatch = useDispatch()
  const filtredFilterAttr = useSelector((state:RootState) => state.catalog.filtredFilter.attributeFilter)
  const activeFilterAttr = useSelector((state:RootState) => state.catalog.activeFilter.attributeFilter)
  const lastClickedCategory = useSelector((state:RootState) => state.catalog.lastClickedCategory)

  const activeAttribute = activeFilterAttr.find(attr => attr.taxonomy_slug === filterItem.taxonomy_slug)

  function isIssetCategory(initialFilter, filtredFilterAttr, value ) {
    let isset : boolean
    if (initialFilter.taxonomy_slug === lastClickedCategory.name) {

      isset = lastClickedCategory.data.find(a => a.term_slug === value.term_slug)
    } else {
      isset = filtredFilterAttr
          .find(attr => attr.taxonomy_slug === initialFilter.taxonomy_slug).values
          .find( filtredValue => filtredValue.term_slug === value.term_slug )
    }
    // проходимя по атрибутам
    // filters.attributes.map(attr => {
    //   // находим нужную категорию атрибутов
    //   if (attr.taxonomy_slug === filter.taxonomy_slug) {
    //     // если эта категория была последней отфильтрованной
    //     isset = lastClickedCategory.name === filter.taxonomy_slug
    //             // сравниваем с массивом значений из последней отфильтрованной
    //             ? lastClickedCategory.values.find(item => item.term_slug === value)
    //             // иначе сравниваем с нынешним значением фильтра
    //             : attr.values.find( val => val.term_slug === value)
    //   }
    //   return attr
    // }) // если такое значение существует не прячем его
    return !isset
  }

  return (
          <AccordeonBlock>
            <AccordeonHead title={filterItem.taxonomy_name} active={active} setActive={setActive} />

              <AccordeonBody active={active}>
                <article>
                {{
                  'checkbox': filterItem.values.map( (val) => {
                            if (filterItem.taxonomy_slug === 'pa_color') {
                              return    <Color
                                      color={val.term_slug}
                                      key={val.term_slug}
                                      name={val.term_name}
                                      onClick={() => dispatch({
                                        type: ACatalog.CHANGE_ACTIVE_FILTER_ATTRIBUTES,
                                        payload: {
                                          value: val,
                                          slug: filterItem.taxonomy_slug,
                                        }
                                      })}
                                      active={activeAttribute.term_slug.includes(val.term_slug)}
                                      isset={isIssetCategory(filterItem, filtredFilterAttr,  val)}
                              />
                            }
                            return (
                                    <RadioItem
                                            isset={isIssetCategory(filterItem, filtredFilterAttr,  val)}
                                            key={val.term_slug}
                                            onClick={() => dispatch({
                                              type: ACatalog.CHANGE_ACTIVE_FILTER_ATTRIBUTES,
                                              payload: {
                                                value: val,
                                                slug: filterItem.taxonomy_slug,
                                              }
                                            }) }
                                            active={activeAttribute.term_slug.includes(val.term_slug)}
                                    >
                                      <AccordeonBlockCheckbox/>
                                      {val.term_name}
                                    </RadioItem>
                            )
                          }

                  ),
                  'range':
                          <FilterSlider
                                  filterItem={filterItem}
                          />
                } [activeAttribute.type]}
                </article>
              </AccordeonBody>
          </AccordeonBlock>
  )
}



export default Accordeon