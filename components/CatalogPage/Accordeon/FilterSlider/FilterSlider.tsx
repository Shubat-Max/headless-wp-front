import * as React from "react"
import {FilterSliderInput, FilterSliderStyle} from "../Accordeon.sc";
import ReactSlider from "react-slider";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {ACatalog} from "../../../../constants/actions";
import {useState} from "react";


const  FilterSlider = ({filterItem}) => {
  const dispatch = useDispatch()
  const filtredFilterAttr = useSelector((state:RootState) => state.catalog.filtredFilter.attributeFilter)
  const filtredFilter = filtredFilterAttr.find(attr => attr.taxonomy_slug === filterItem.taxonomy_slug)

  let defaultMinValue = filtredFilter.values.length  ? filtredFilter.values[0].term_slug : 0
  let defaultMaxValue = filtredFilter.values.length  ? filtredFilter.values[filtredFilter.values.length - 1].term_slug : 0

  // const [sliderRange, setSlideRange] = useState([defaultMinValue, defaultMaxValue])

  return (
    <FilterSliderStyle>
      <FilterSliderInput readOnly value={defaultMinValue}  />
      <ReactSlider
              // смотреть доку https://zillow.github.io/react-slider/#reactslider
              step={5}
              className="horizontal-slider"
              thumbClassName="thumb"
              trackClassName="example-track"
              max={filterItem.values[filterItem.values.length - 1].term_slug}
              min={filterItem.values[0].term_slug}
              value={[defaultMinValue, defaultMaxValue]}
              onChange={state => {defaultMinValue = state[0]; defaultMaxValue = state[1]}}
              onAfterChange={state => dispatch({
                type: ACatalog.CHANGE_ACTIVE_FILTER_ATTRIBUTES_RANGE,
                payload: {
                  value: state,
                  slug: filterItem.taxonomy_slug,
                }
              })}
              pearling
      />
      <FilterSliderInput readOnly value={defaultMaxValue} />
    </FilterSliderStyle>

  )
}



export default FilterSlider