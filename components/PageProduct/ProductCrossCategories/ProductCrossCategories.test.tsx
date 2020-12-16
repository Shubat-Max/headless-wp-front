import * as redux from "react-redux";
import {mount} from "enzyme";
import * as React from "react";
import {CategoryLink, SCProductCrossCategories} from "./ProductCrossCategories.sc";
import ProductCrossCategories from "./ProductCrossCategories";
import {Container} from "../../Grid";

const mock = [{category_id: "6263",
  category_name: "Кровати",
  category_slug: "beds",
  image: "http://130.193.62.187/wp-content/uploads/2020/11/cat-bed.jpg"}]
const spy = jest.spyOn(redux, 'useSelector')



describe('component', () => {
  describe('when crossCategories is empty', () => {
    beforeEach(() => {
      spy.mockReturnValue(null)
    })
    it('should not render <SCProductCrossCategories>', function () {
      const component = mount(<ProductCrossCategories/>);
      expect(component.find(SCProductCrossCategories).exists()).toBeFalsy()
    });
    it('should render <Container>', function () {
      const component = mount(<ProductCrossCategories/>);
      expect(component.find(Container).text()).toBe('Рекомендуемые категории отсутствуют')
    });
  })

  describe('when crossCategories is not empty', () => {
    beforeEach(() => {
      spy.mockReturnValue(mock)
    })

    /* TODO уточнить как именно здесь сделать*/
    it ('should render <CategoryLink> 4 times', function () {
      const component = mount(<ProductCrossCategories/>);
      expect(component.find(CategoryLink).length).toBe(1)
    })

    it('should render <SCProductCrossCategories>', function () {
      const component = mount(<ProductCrossCategories/>);
      expect(component.find(SCProductCrossCategories).exists()).toBeTruthy()
    });
    it('should not render <Container>', function () {
      const component = mount(<ProductCrossCategories/>);
      expect(component.find(Container).exists()).toBeFalsy()
    });
  })
})