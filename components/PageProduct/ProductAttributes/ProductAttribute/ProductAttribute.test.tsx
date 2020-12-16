import * as React from "react"
import * as redux from 'react-redux'
import {mount} from "enzyme"
import {AttributeName, AttributeRow, AttributeValue} from "./ProductAttribute.sc";
import ProductAttribute from "./ProductAttribute";

const mock = {name: 'Ширина подлокотника', value: '17 см'}
const spy = jest.spyOn(redux, 'useSelector')

describe('component', () => {
  describe('when attribute missing required values', () => {
    beforeEach(() => {
      spy.mockReturnValue({name: undefined, value: undefined})
    })

    it('should NOT render <AttributeRow>', () => {
      const component = mount(<ProductAttribute name={undefined} value={undefined}/>);
      expect(component.find(AttributeRow).exists()).toBeFalsy()
    })
  })

  describe('when attribute missing one of required values', () => {
    beforeEach(() => {
      spy.mockReturnValue({name: undefined, value: mock.value})
    })

    it('should NOT render <AttributeRow>', () => {
      const component = mount(<ProductAttribute name={undefined} value={mock.value}/>);
      expect(component.find(AttributeRow).exists()).toBeFalsy()
    })
  })

  describe('when attribute missing all required values', () => {
    beforeEach(() => {
      spy.mockReturnValue(mock)
    })

    it('should render <AttributeRow>', () => {
      const component = mount(<ProductAttribute name={mock.name} value={mock.value}/>);
      expect(component.find(AttributeRow).exists()).toBeTruthy()
    })

    it('should render correct attribute name', () => {
      const component = mount(<ProductAttribute name={mock.name} value={mock.value}/>);
      expect(component.find(AttributeName).text()).toBe(mock.name)
    })

    it('should render correct attribute value', () => {
      const component = mount(<ProductAttribute name={mock.name} value={mock.value}/>);
      expect(component.find(AttributeValue).text()).toBe(mock.value)
    })
  })
})
