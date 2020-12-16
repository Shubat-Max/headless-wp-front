import * as React from "react"
import {mount, shallow} from "enzyme"
import VariatorList from "./VariatorList";
import {SCVariatorList} from "./VariatorList.sc";
import VariatorListName from "../VariatorListName";
import VariatorItem from "../VariatorItem";

const parameters = {
  taxonomy_name: "Габаритная ширина",
  taxonomy_options: [
    {term_slug: "200-sm", term_name: "200 см"},
    {term_slug: "210-sm", term_name: "210 см"},
    {term_slug: "230-sm", term_name: "230 см"}
  ],
  taxonomy_slug: "pa_overall-width",
}

describe('component', () => {
  describe('when VariatorList missing required values', () => {

    it('should NOT render <SCVariatorList>', () => {
      const component = mount(<VariatorList parameters={null}/>);
      expect(component.find(SCVariatorList).exists()).toBeFalsy()
    })
  })

  describe('when VariatorList have required values', () => {

    it('should render <SCVariatorList>', () => {
      const component = shallow(<VariatorList parameters={parameters}/>);
      expect(component.find(SCVariatorList).exists()).toBeTruthy()
    })

    it('should render <VariatorListName>', () => {
      const component = shallow(<VariatorList parameters={parameters}/>);
      expect(component.find(VariatorListName).exists()).toBeTruthy()
    })

    it('should render <VariatorItem>', () => {
      const component = shallow(<VariatorList parameters={parameters}/>);
      expect(component.find(VariatorItem).exists()).toBeTruthy()
    })

    it('should render <VariatorItem> the right number of times ', () => {
      const component = shallow(<VariatorList parameters={parameters}/>);
      expect(component.find(VariatorItem).length).toBe(3)
    })
  })
})