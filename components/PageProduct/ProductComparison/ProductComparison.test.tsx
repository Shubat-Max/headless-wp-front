import * as React from "react"
import * as redux from 'react-redux'
import {mount} from "enzyme"

import {useSelector} from "react-redux";
import ProductComparison from "./ProductComparison";
import {ComparableAttribute, Price, SCProductComparison, Subtitle, TaxName, TermName} from "./ProductComparison.sc";
import {formatPrice, formatSubtitle} from "../../../utils";


const mock = [{
  default_variation: 164816,
  gabarity: "200 x 96 x 91 см",
  image: "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_166_1_0002.jpg",
  name: "Raf",
  price: "56800",
  product_id: 164811,
  slug: "raf-triple",
  subtitle: "Диван, трехместный, без механизма",
  comparison: [
    {taxonomy_name: "Высота опор", term_name: "13 см"},
    {taxonomy_name: "Глубина сиденья", term_name: "56 см"},
    {taxonomy_name: "Раскладной механизм", term_name: "Без механизма"},
    {term_name: "200 x 96 x 91 см", taxonomy_name: "Габариты (ш*г*в)"}
  ]
}]
const spy = jest.spyOn(redux, 'useSelector')

describe('component', () => {
  describe('when comparison is empty', () => {
    beforeEach(() => {
      spy.mockReturnValue({comparison: []})
    })

    it('should NOT render <SCProductComparison>', () => {
      const component = mount(<ProductComparison/>);
      expect(component.find(SCProductComparison).exists()).toBeFalsy()
    })
  })

  describe('when comparison have one and more items, but havenot comparison', () => {
    beforeEach(() => {
      spy.mockReturnValue({comparison: [{
          default_variation: 164816,
          gabarity: "200 x 96 x 91 см",
          image: "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_166_1_0002.jpg",
          name: "Raf",
          price: "56800",
          product_id: 164811,
          slug: "raf-triple",
          subtitle: "Диван, трехместный, без механизма"}] })
    })

    it('should render <Subtitle>', () => {
      const component = mount(<ProductComparison/>);
      expect(component.find(Subtitle).exists()).toBeTruthy()
    })

    it('should render correct subtitle', () => {
      const component = mount(<ProductComparison/>);
      expect(component.find(Subtitle).text()).toBe(formatSubtitle(mock[0].subtitle) )
    })

    it('should render <Price>', () => {
      const component = mount(<ProductComparison/>);
      expect(component.find(Price).exists()).toBeTruthy()
    })

    it('should render correct formated price', () => {
      const component = mount(<ProductComparison/>);
      expect(component.find(Price).text()).toBe(formatPrice(mock[0].price) )
    })
    it('should not render <ComparableAttribute>', function () {
      const component = mount(<ProductComparison/>);
      expect(component.find(ComparableAttribute).exists()).toBeFalsy()
    });
  })

  describe('when comparison have one and more items, but havenot comparison', () => {
    beforeEach(() => {
      spy.mockReturnValue({comparison: mock })
    })

    it('should render <Subtitle>', () => {
      const component = mount(<ProductComparison/>);
      expect(component.find(Subtitle).exists()).toBeTruthy()
    })

    it('should render correct subtitle', () => {
      const component = mount(<ProductComparison/>);
      expect(component.find(Subtitle).text()).toBe(formatSubtitle(mock[0].subtitle) )
    })

    it('should render <Price>', () => {
      const component = mount(<ProductComparison/>);
      expect(component.find(Price).exists()).toBeTruthy()
    })

    it('should render correct formated price', () => {
      const component = mount(<ProductComparison/>);
      expect(component.find(Price).text()).toBe(formatPrice(mock[0].price) )
    })
    it('should render <ComparableAttribute>', function () {
      const component = mount(<ProductComparison/>);
      expect(component.find(ComparableAttribute).exists()).toBeTruthy()
    });
    it('should render correct <TaxName>', function () {
      const component = mount(<ProductComparison/>);
      expect(component.find(TaxName).first().text()).toBe(mock[0].comparison[0].taxonomy_name)
    });
    it('should render correct <TermName>', function () {
      const component = mount(<ProductComparison/>);
      expect(component.find(TermName).first().text()).toBe(mock[0].comparison[0].term_name)
    });
  })
})
