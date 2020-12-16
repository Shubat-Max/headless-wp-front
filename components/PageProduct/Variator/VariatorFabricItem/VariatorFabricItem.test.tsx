import * as React from "react"
import * as redux from 'react-redux'
import {mount} from "enzyme"
import VariatorFabricItem from "./VariatorFabricItem";
import {FabricAction, FabricName, SCVariatorFabricItem} from "./VariatorFabricItem.sc";
import VariatorListName from "../VariatorListName";


const fabric = {
  category: {name: 2, rate: 1.1, material: "Велюр"},
  collection: "Velutto",
  image: "http://130.193.62.187/wp-content/uploads/2020/10/velutto11-2.jpg",
  name: "11",
  slug: "11-4"}
const spy = jest.spyOn(redux, 'useSelector')
const dispatch = jest.spyOn(redux, 'useDispatch')

describe('component', () => {
  describe('when fabric is empty', () => {
    beforeEach(() => {
      spy.mockReturnValue(null)
      dispatch.mockReturnValue(jest.fn())
    })

    it('should NOT render <SCVariatorFabricItem>', () => {
      const component = mount(<VariatorFabricItem/>);
      expect(component.find(SCVariatorFabricItem).exists()).toBeTruthy()
    })

    it ('should render <FabricName> with empty string', () => {
      const component = mount(<VariatorFabricItem/>);
      expect(component.find(FabricName).text()).toBe('')
    })
    it ('should render <FabricAction>', () => {
      const component = mount(<VariatorFabricItem/>);
      expect(component.find(FabricAction).text()).toBe('Выбрать ткань')
    })
  })
  describe('when fabric is have', () => {
    beforeEach(() => {
      spy.mockReturnValue(fabric)
      dispatch.mockReturnValue(jest.fn());
    })

    it('should  render <SCVariatorFabricItem>', () => {
      const component = mount(<VariatorFabricItem/>);
      expect(component.find(SCVariatorFabricItem).exists()).toBeTruthy()
    })

    it('should  render <VariatorListName>', () => {
      const component = mount(<VariatorFabricItem/>);
      expect(component.find(VariatorListName).exists()).toBeTruthy()
    })

    it ('should render <FabricName>', () => {
      const component = mount(<VariatorFabricItem/>);
      expect(component.find(FabricName).exists()).toBeTruthy()
    })

    it ('should render <FabricName>', () => {
      const component = mount(<VariatorFabricItem/>);
      expect(component.find(FabricName).text()).toBe('Velutto 11')
    })


    it ('should render <FabricAction>', () => {
      const component = mount(<VariatorFabricItem/>);
      expect(component.find(FabricAction).text()).toBe('Изменить')
    })
  })
})