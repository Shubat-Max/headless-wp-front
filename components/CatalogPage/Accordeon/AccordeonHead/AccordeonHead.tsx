import * as React from "react"
import {AccordeonBlock, AccordeonToggle} from "./AccordeonHead.sc";




const  AccordeonHead= ({title, active, setActive}) => {
  return (
    <AccordeonBlock>
      <span>{title}</span>
      <AccordeonToggle
              active={active}
              onClick={() => setActive(!active)}
      >
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.82835 5.18659L9.8853 1.13807C10.038 0.985652 10.0383 0.738328 9.88587 0.585652C9.73349 0.432937 9.48616 0.432683 9.33345 0.585066L5.2762 4.63387C5.1239 4.78618 4.87609 4.78618 4.72349 4.63358L0.666535 0.585066C0.513821 0.432683 0.266496 0.432937 0.114113 0.585652C0.0380192 0.661883 -7.62939e-06 0.761746 -7.62939e-06 0.86157C-7.62939e-06 0.961668 0.0382338 1.06177 0.114699 1.13807L4.17136 5.1863C4.62827 5.64321 5.37173 5.64321 5.82835 5.18659Z" fill="#353238"/>
        </svg>
      </AccordeonToggle>
    </AccordeonBlock>
  )
}



export default AccordeonHead