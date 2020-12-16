import * as React from "react"
import * as redux from 'react-redux'
import {mount} from "enzyme"
import VariatorItem from "./VariatorItem";
import {Item} from "./VariatorItem.sc";

const mock = [
  {taxonomy_slug: "pa_overall-width", taxonomy_name: "Габаритная ширина", term_slug: "200-sm", term_name: "200 см"},
  {taxonomy_slug: "pa_legs-height", taxonomy_name: "Высота опор", term_slug: "13-sm", term_name: "13 см"},
  {taxonomy_slug: "pa_color", taxonomy_name: "Цвет", term_slug: "rozovyj", term_name: "Розовый"}
  ]
const spy = jest.spyOn(redux, 'useSelector')
const dispatch = jest.spyOn(redux, 'useDispatch')

describe('component', () => {
  describe('when product missing required values', () => {

    it('should NOT render <Item>', () => {
      const component = mount(<VariatorItem attribute={undefined} taxonomy={undefined}/>);
      expect(component.find(Item).exists()).toBeFalsy()
    })
  })

  describe('when product have required values, but missing stateSelector', () => {
    beforeEach(() => {
      spy.mockReturnValue(null)
      dispatch.mockReturnValue(jest.fn());
    })

    it('should render <Item>', () => {
      const component = mount(<VariatorItem attribute={{term_name: "8 см",term_slug: "8-sm"}} taxonomy={"pa_legs-height"}/>);
      expect(component.find(Item).text()).toBe("8 см")
    })

  })
})