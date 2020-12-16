import * as React from "react"
import {useState} from "react";
import AccordeonHead from "../Accordeon/AccordeonHead";
import {AccordeonBody, ButtonRadio, RadioItem} from "./AccordeonPrice.sc";
import {AccordeonBlock} from "../Accordeon/Accordeon.sc";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {ACatalog} from "../../../constants/actions";
import PriceSlider from "./PriceSlider";

const   AccordeonPrice = () => {
  const [active, setActive] = useState(true)
  const dispatch = useDispatch()
  const activePriceRange = useSelector((state:RootState) => state.catalog.activeFilter.priceRange)
  const initialPriceRange = useSelector((state:RootState) => state.catalog.initialFilter.priceRange)

  function round(price) { return  Math.round(price / 5000) * 5000}

  let priceRadioStep = Math.round((round(initialPriceRange[1]) - round(initialPriceRange[0])) / 5000 ) * 1000

  function getPricewithStep(step : number) {
    return round(initialPriceRange[0]) + priceRadioStep * step
  }

  return (
    <AccordeonBlock>
      <AccordeonHead title='Цена' active={active} setActive={setActive} />
      <AccordeonBody>
        <PriceSlider />
        <div>
          <RadioItem>
            <ButtonRadio
                    onClick={() => dispatch({
                      type: ACatalog.CHANGE_PRICE,
                      payload: {
                        priceRange: [initialPriceRange[0], initialPriceRange[1]]
                      }
                    })}
                    active={activePriceRange[0] === initialPriceRange[0] && activePriceRange[1] === initialPriceRange[1]}
            />
                    Все цены
          </RadioItem>
          <RadioItem>
            <ButtonRadio
                    onClick={() => dispatch({
                      type: ACatalog.CHANGE_PRICE,
                      payload: {
                        priceRange: [initialPriceRange[0], getPricewithStep(1)]
                      }
                    })}
                    active={activePriceRange[0] === initialPriceRange[0] && activePriceRange[1] === getPricewithStep(1)}
            />
            Менее {getPricewithStep(1)} ₽
          </RadioItem>
          <RadioItem>
            <ButtonRadio
                    onClick={() => dispatch({
                      type: ACatalog.CHANGE_PRICE,
                      payload: {
                        priceRange: [getPricewithStep(1), getPricewithStep(2)]
                      }
                    })}
                    active={activePriceRange[0] === getPricewithStep(1) && activePriceRange[1] === getPricewithStep(2)}
            />
            {getPricewithStep(1)} - {getPricewithStep(2)} ₽
          </RadioItem>
          <RadioItem>
            <ButtonRadio
                    onClick={() => dispatch({
                      type: ACatalog.CHANGE_PRICE,
                      payload: {
                        priceRange: [getPricewithStep(2), getPricewithStep(3)]
                      }
                    })}
                    active={activePriceRange[0] === getPricewithStep(2) && activePriceRange[1] === getPricewithStep(3)}
            />
            {getPricewithStep(2)} - {getPricewithStep(3)} ₽
          </RadioItem>
          <RadioItem>
            <ButtonRadio
                    onClick={() => dispatch({
                      type: ACatalog.CHANGE_PRICE,
                      payload: {
                        priceRange: [getPricewithStep(3), getPricewithStep(4)]
                      }
                    })}
                    active={activePriceRange[0] === getPricewithStep(3) && activePriceRange[1] === getPricewithStep(4)}
            />
            {getPricewithStep(3)} - {getPricewithStep(4)} ₽
          </RadioItem>
          <RadioItem>
            <ButtonRadio
                    onClick={() => dispatch({
                      type: ACatalog.CHANGE_PRICE,
                      payload: {
                        priceRange: [getPricewithStep(4), initialPriceRange[1]]
                      }
                    })}
                    active={activePriceRange[0] === getPricewithStep(4) && activePriceRange[1] === initialPriceRange[1]}
            />

            {getPricewithStep(4)} ₽ и более
          </RadioItem>
        </div>
      </AccordeonBody>
    </AccordeonBlock>
  )
}



export default AccordeonPrice