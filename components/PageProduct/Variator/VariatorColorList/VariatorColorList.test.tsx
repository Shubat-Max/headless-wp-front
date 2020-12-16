import * as React from "react"
import {mount, shallow} from "enzyme"
import VariatorColorList from "./VariatorColorList";
import {SCVariatorColorList} from "./VariatorColorList.sc";
import * as redux from "react-redux";
import VariatorColorItem from "../VariatorColorItem";
import VariatorListName from "../VariatorListName";

const spy = jest.spyOn(redux, 'useSelector')
const dispatch = jest.spyOn(redux, 'useDispatch')
let parameters = {
  taxonomy_name: "Цвет",
  taxonomy_slug: "pa_color",
  taxonomy_options: [
    {term_slug: "bezhevyj", term_name: "Бежевый"},
    {term_slug: "zheltyj", term_name: "Желтый"},
    {term_slug: "zelenyj", term_name: "Зеленый"},
    {term_slug: "oranzhevyj", term_name: "Оранжевый"},
    {term_slug: "rozovyj", term_name: "Розовый"},
    {term_slug: "seryj", term_name: "Серый"},
    {term_slug: "sinij", term_name: "Синий"}]
}

describe('component', () => {
  describe('when product missing required value', () => {
    it('should NOT render <SCVariatorColorList>', () => {
      const component = mount(<VariatorColorList parameters={undefined}/>);
      expect(component.find(SCVariatorColorList).exists()).toBeFalsy()
    })
  })

  describe('when required value is exist', () => {
    beforeEach(() => {
      spy.mockReturnValue(jest.fn())
      dispatch.mockReturnValue(jest.fn());
    })

    it('should render <SCVariatorColorList>', () => {
      const component = shallow(<VariatorColorList parameters={parameters}/>);
      expect(component.find(SCVariatorColorList).exists()).toBeTruthy()
    })
    it('should render <VariatorColorItem>', () => {
      const component = shallow(<VariatorColorList parameters={parameters}/>);
      expect(component.find(VariatorColorItem).exists()).toBeTruthy()
    })
    it('should render <VariatorListName>', () => {
      const component = shallow(<VariatorColorList parameters={parameters}/>);
      expect(component.find(VariatorListName).exists()).toBeTruthy()
    })
  })
})