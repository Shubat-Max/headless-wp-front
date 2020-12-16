import * as React from "react"
import {ActiveFilterItemClose, ActiveFilterItemStyle} from "./ActiveFilterItem.sc";


const ActiveFilterItem = ({value, close}) => {
  return (
    <ActiveFilterItemStyle>
      {value}
      <ActiveFilterItemClose onClick={() => close()}>
        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.54971 3.00483L5.886 0.668482C6.03804 0.516512 6.03804 0.270798 5.886 0.118828C5.73403 -0.0331421 5.48832 -0.0331421 5.33635 0.118828L2.99998 2.45518L0.663689 0.118828C0.511647 -0.0331421 0.266002 -0.0331421 0.114031 0.118828C-0.0380105 0.270798 -0.0380105 0.516512 0.114031 0.668482L2.45032 3.00483L0.114031 5.34119C-0.0380105 5.49316 -0.0380105 5.73887 0.114031 5.89084C0.189768 5.96665 0.289349 6.00473 0.38886 6.00473C0.488371 6.00473 0.587881 5.96665 0.663689 5.89084L2.99998 3.55449L5.33635 5.89084C5.41215 5.96665 5.51166 6.00473 5.61117 6.00473C5.71068 6.00473 5.8102 5.96665 5.886 5.89084C6.03804 5.73887 6.03804 5.49316 5.886 5.34119L3.54971 3.00483Z" fill="#0086A8"/>
        </svg>
      </ActiveFilterItemClose>
    </ActiveFilterItemStyle>
  )
}



export default ActiveFilterItem