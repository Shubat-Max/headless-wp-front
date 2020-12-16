import * as React from "react"
import * as redux from 'react-redux'
import {mount} from "enzyme"
import ProductAttributesFull from "./ProductAttributesFull";
import {FullProductAttributes} from "./ProductAttributesFull.sc";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import ProductAttribute from "../ProductAttribute";

const mock = [{
  taxonomy_name: "Ширина подлокотника",
  taxonomy_slug: "pa_armrest-width",
  term_name: "17 см",
  term_slug: "17-sm",
},{
  taxonomy_name: "Ширина подлокотника",
  taxonomy_slug: "pa_armrest-width",
  term_name: "17 см",
  term_slug: "17-sm",
}]
const spy = jest.spyOn(redux, 'useSelector')

describe('component', () => {
  describe('when attributes is empty', () => {
    beforeEach(() => {
      spy.mockReturnValue([])
    })

    it('should NOT render <FullProductAttributes>', () => {
      const component = mount(<ProductAttributesFull/>);
      expect(component.find(FullProductAttributes).exists()).toBeFalsy()
    })
  })

  describe('when attributes not empty ', () => {
    beforeEach(() => {
      spy.mockReturnValue(mock)
    })

    it('should render <ProductAttribute>', () => {
      const component = mount(<ProductAttributesFull/>);
      expect(component.find(ProductAttribute).exists()).toBeTruthy()
    })
  })
})
