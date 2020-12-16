import * as React from "react"
import ReactSlider from "react-slider";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {ACatalog} from "../../../../constants/actions";
import {PriceInput, PriceSliderStyle} from "./PriceSlider.sc";
import {useState} from "react";

const  PriceSlider = () => {
  const dispatch = useDispatch()
  let activePriceRange = useSelector((state:RootState) => state.catalog.activeFilter.priceRange)
  const initialPriceRange = useSelector((state:RootState) => state.catalog.initialFilter.priceRange)
  const [sliderRange, setSlideRange] = useState(activePriceRange)

  function refactorPrice(price) {
    price = price.toString()
    let a = price.substring(0 , price.length - 3)
    let b = price.substring(price.length - 3)
    return a + ' ' + b
  }

  return (
    <PriceSliderStyle>
      <PriceInput>{refactorPrice(sliderRange[0] )} </PriceInput>
      <ReactSlider
              // смотреть доку https://zillow.github.io/react-slider/#reactslider
              step={500}
              className="horizontal-slider"
              thumbClassName="thumb"
              trackClassName="example-track"
              value={activePriceRange}
              min={Math.floor(initialPriceRange[0] / 500) * 500 }
              max={Math.ceil(initialPriceRange[1] / 500) * 500}
              onChange={state => setSlideRange(state)}
              onAfterChange={state => { dispatch({
                type: ACatalog.CHANGE_PRICE,
                payload: {
                  priceRange: state
                }
              }) }}
              pearling
      />
      <PriceInput>{refactorPrice(sliderRange[1] )}</PriceInput>
    </PriceSliderStyle>
  )
}



export default PriceSlider