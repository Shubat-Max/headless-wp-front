import * as React from "react"
import * as redux from 'react-redux'
import {mount} from "enzyme"
import {Name, Subtitle, Title} from "./ProductTitle.sc"
import ProductTitle from "./ProductTitle"

const mock = {name: 'Raf', subtitle: 'Диван, трехместный, без механизма'}
const spy = jest.spyOn(redux, 'useSelector')



describe('component', () => {
  describe('when product missing required values', () => {
    beforeEach(() => {
      spy.mockReturnValue({})
    })

    it('should NOT render <Title>', () => {
      const component = mount(<ProductTitle/>);
      expect(component.find(Title).exists()).toBeFalsy()
    })
  })

  describe('when product has name only', () => {
    beforeEach(() => {
      spy.mockReturnValue({name: mock.name})
    })

    it('should render <Name>', () => {
      const component = mount(<ProductTitle/>);
      expect(component.find(Name).exists()).toBeTruthy()
    })

    it('should render correct product name', () => {
      const component = mount(<ProductTitle/>);
      expect(component.find(Name).text()).toBe(mock.name)
    })

    it('should NOT render <Subtitle>', () => {
      const component = mount(<ProductTitle/>);
      expect(component.find(Subtitle).exists()).toBeFalsy()
    })
  })

  describe('when product has name and title', () => {
    beforeEach(() => {
      spy.mockReturnValue(mock)
    })

    it('should render <Title>', () => {
      const component = mount(<ProductTitle/>);
      expect(component.find(Title).exists()).toBeTruthy()
    })

    it('should render <Name>', () => {
      const component = mount(<ProductTitle/>);
      expect(component.find(Name).exists()).toBeTruthy()
    })

    it('should render correct product name', () => {
      const component = mount(<ProductTitle/>);
      expect(component.find(Name).text()).toBe(mock.name)
    })

    it('should render <Subtitle>', () => {
      const component = mount(<ProductTitle/>);
      expect(component.find(Subtitle).exists()).toBeTruthy()
    })

    it('should render correct subtitle', () => {
      const component = mount(<ProductTitle/>);
      expect(component.find(Subtitle).text()).toBe(mock.subtitle)
    })
  })
})
