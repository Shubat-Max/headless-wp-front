import * as React from "react"
import {useState} from "react";
import {StockBlock, ToggleSelect} from "./Stock.sc";




const Stock = () => {
  const [active, setActive] = useState(true)
  return (
    <StockBlock>
      <ToggleSelect
              active={active}
              onClick={() => setActive(!active)}
      />
      В наличии
    </StockBlock>

  )
}



export default Stock