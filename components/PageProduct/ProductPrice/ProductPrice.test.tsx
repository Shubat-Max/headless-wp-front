import * as React from "react"
import * as redux from 'react-redux'
import {mount, shallow} from "enzyme"
import {Price, FabricNotification, BasePrice, FabricDetails} from "./ProductPrice.sc"
import ProductPrice from "./ProductPrice"
import {formatPrice} from "../../../utils";


const mock = {
  price: 2222,
  fabric: {
    category: {
      material: 'Велюр',
      name: 2,
      rate: 10,
    },
    collection: 'Velutto',
    image: 'http://130.193.62.187/wp-content/uploads/2020/10/velutto11-2.jpg',
    name: '11',
    slug: '11-4'
  }
}
const spy = jest.spyOn(redux, 'useSelector')


describe('component', () => {
  describe('when product missing price', () => {
    beforeEach(() => {
      spy.mockReturnValue({})
    })

    it('should NOT render <Price>', () => {
      const component = mount(<ProductPrice/>)
      expect(component.find(Price).exists()).toBeFalsy()
    })
  })

  describe('when product has price only', () => {
    beforeEach(() => {
      spy.mockReturnValue({price: mock.price})
    })

    it('should render <Price>', () => {
      const component = mount(<ProductPrice/>);
      expect(component.find(Price).exists()).toBeTruthy()
    })

    it('should render correct formatted price', () => {
      const component = mount(<ProductPrice/>);
      expect(component.find(Price).text()).toBe(formatPrice(mock.price))
    })

    it('should NOT render <FabricDetails>', () => {
      const component = mount(<ProductPrice/>);
      expect(component.find(FabricDetails).exists()).toBeFalsy()
    })
  })

  describe('when product has price and fabric', () => {
    beforeEach(() => {
      spy.mockReturnValue(mock)
    })

    it('should render <Price>', () => {
      const component = mount(<ProductPrice/>);
      expect(component.find(Price).exists()).toBeTruthy()
    })

    it('should render correct formatted price multiplied by fabric rate', () => {
      const component = mount(<ProductPrice/>);
      expect(component.find(Price).text()).toBe(formatPrice(mock.price * mock.fabric.category.rate))
    })

    it('should render <FabricDetails>', () => {
      const component = mount(<ProductPrice/>);
      expect(component.find(FabricDetails).exists()).toBeTruthy()
    })

    it('should render <FabricNotification>', () => {
      const component = mount(<ProductPrice/>);
      expect(component.find(FabricNotification).exists()).toBeTruthy()
    })

    it('should render correct fabric category notice', () => {
      const component = mount(<ProductPrice/>);
      expect(component.find(FabricNotification).text()).toBe(`В ткани ${mock.fabric.category.name}-й категории`)
    })

    it('should render <BasePrice>', () => {
      const component = mount(<ProductPrice/>);
      expect(component.find(BasePrice).exists()).toBeTruthy()
    })

    it('should render correct formatted base price', () => {
      const component = mount(<ProductPrice/>);
      expect(component.find(BasePrice).text()).toBe(`Базовая цена: ${formatPrice(mock.price)}`)
    })
  })
})