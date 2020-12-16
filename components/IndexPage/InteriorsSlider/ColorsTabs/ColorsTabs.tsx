import * as React from 'react';
import {CategoryTabsContainer, Color} from "./ColorsTabs.sc";

const ColorsTabs = ({colors, activeColor, changeColor}) => {
  return (
    <CategoryTabsContainer>
      {colors.map( color => {
        return <Color
          active={color === activeColor }
          key={color}
          color={ color}
          name={color}
          onClick={() => changeColor(color === activeColor ? null : color)}
        >
        </Color>})}
    </CategoryTabsContainer>
  );
};



export default ColorsTabs;