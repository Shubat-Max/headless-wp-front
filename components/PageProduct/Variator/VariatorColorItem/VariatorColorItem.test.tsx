import * as React from "react"
import * as redux from 'react-redux'
import {mount} from "enzyme"
import VariatorColorItem from "./VariatorColorItem";
import { Color } from "./VariatorColorItem.sc";


const selection = [
  {taxonomy_slug: "pa_overall-width", taxonomy_name: "Габаритная ширина", term_slug: "200-sm", term_name: "200 см"},
  {taxonomy_slug: "pa_legs-height", taxonomy_name: "Высота опор", term_slug: "13-sm", term_name: "13 см"},
  {taxonomy_slug: "pa_color", taxonomy_name: "Цвет", term_slug: "rozovyj", term_name: "Розовый"}
  ]
const spy = jest.spyOn(redux, 'useSelector')
const dispatch = jest.spyOn(redux, 'useDispatch')




describe('component', () => {
  describe('when product missing required values', () => {

    it('should NOT render <Color>', () => {
      const component = mount(<VariatorColorItem taxonomy={undefined} term={undefined}/>);
      expect(component.find(Color).exists()).toBeFalsy()
    })
  })

  describe('when product have required values', () => {
    beforeEach(() => {
      spy.mockReturnValue(selection)
      dispatch.mockReturnValue(jest.fn());
    })

    it('should render <Color>', () => {
      const component = mount(<VariatorColorItem taxonomy={"pa_color"} term={{term_slug: "oranzhevyj", term_name: "Оранжевый"}}/>);
      expect(component.find(Color).exists()).toBeTruthy()
    })
  })
})