import * as React from "react"
import * as redux from 'react-redux'
import {mount} from "enzyme"
import ProductStock from "./ProductStock";
import {StockList} from "./ProductStock.sc";
import renderer from 'react-test-renderer';

const spy = jest.spyOn(redux, 'useSelector')

describe('component', () => {
  describe('when product entity not avialable', () => {
    beforeEach(() => {
      spy.mockReturnValue(undefined)
    })

    it('should NOT render <StockList>', () => {
      const component = mount(<ProductStock/>);
      expect(component.find(StockList).exists()).toBeFalsy()
    })
  })
})