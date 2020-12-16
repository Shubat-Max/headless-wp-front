import * as React from "react"
import AccordeonHead from "../Accordeon/AccordeonHead";
import {useState} from "react";
import {AccordeonBlock, AccordeonBody} from "./AccordeonCollection.sc";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {ACatalog} from "../../../constants/actions";
import {AccordeonBlockCheckbox, RadioItem } from "../Accordeon/Accordeon.sc";

const  AccordeonCollection = () => {
  const [active, setActive] = useState(true)
  const dispatch = useDispatch()
  const initialCollection = useSelector((state:RootState) => state.catalog.initialFilter.collection)
  const filtredCollection = useSelector((state:RootState) => state.catalog.filtredFilter.collection)
  const activeCollection = useSelector((state:RootState) => state.catalog.activeFilter.collection)
  const lastClickedCategory = useSelector((state:RootState) => state.catalog.lastClickedCategory)
  console.log(lastClickedCategory)
  // const activeAttribute = activeFilterAttr.find(attr => attr.taxonomy_slug === filterItem.taxonomy_slug)
  function isIssetCategory(value, lastClickedCategory, filtredCollection ) {
    let isset : boolean
    if (lastClickedCategory.name === 'collection') {
      isset = lastClickedCategory.data.includes(value)
    } else {
      isset = filtredCollection.includes(value)
    }
    return !isset
  }

  return (
          <AccordeonBlock>
              <AccordeonHead title='Коллекции' active={active} setActive={setActive} />

                <AccordeonBody active={active}>
                  <article>
                    {initialCollection.map( item => {
                      return <RadioItem
                              isset={isIssetCategory(item, lastClickedCategory, filtredCollection)}
                              key={item}
                              onClick={() => dispatch({
                                type: ACatalog.CHANGE_ACTIVE_FILTER_COLLECTION,
                                payload: {
                                  value: item,
                                }
                              }) }
                              active={activeCollection.includes(item)}
                      >
                        <AccordeonBlockCheckbox/>
                        {item}
                      </RadioItem>
                    })}


                  </article>
                </AccordeonBody>
          </AccordeonBlock>
  )
}



export default AccordeonCollection