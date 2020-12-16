import * as React from "react"
import * as redux from 'react-redux'
import {mount, shallow} from "enzyme"
import ProductAttributesFull from "./ProductAttributesFull";
import ProductAttributes from "./ProductAttributes";
import ProductAttributesShort from "./ProductAttributesShort";

const spy = jest.spyOn(redux, 'useSelector')

describe('component', () => {
  describe('when have not props', () => {

    it('should render <ProductAttributesFull>', () => {
      const component = shallow(<ProductAttributes/>);
      expect(component.find(ProductAttributesFull).exists()).toBeTruthy()
    })
    it('should not render <ProductAttributesShort>', () => {
      const component = shallow(<ProductAttributes/>);
      expect(component.find(ProductAttributesShort).exists()).toBeFalsy()
    })
  })

  describe('when is short', () => {
    it('should render <ProductAttributesFull>', () => {
      const component = shallow(<ProductAttributes short={true}/>);
      expect(component.find(ProductAttributesFull).exists()).toBeFalsy()
    })
    it('should not render <ProductAttributesShort>', () => {
      const component = shallow(<ProductAttributes short={true}/>);
      expect(component.find(ProductAttributesShort).exists()).toBeTruthy()
    })
  })
})