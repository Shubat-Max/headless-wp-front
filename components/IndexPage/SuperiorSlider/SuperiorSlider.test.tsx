import * as React from "react"
import * as redux from 'react-redux'
import {mount} from "enzyme"
import SuperiorSlider from "./SuperiorSlider";
import {SuperiorSlide, SuperiorSlideImg, SuperiorSliderContainer} from "./SuperiorSlider.sc";


const mock = {
    title: 'Стильные кровати',
    href: 'https://skdesign.ru/product/divan-krovat-mendini-wg-trexmestnyj/',
    img: 'https://skdesign.ru/wp-content/uploads/2020/03/Parc_Contour_Ban_renew.jpg',
    imgMobile: 'https://skdesign.ru/wp-content/uploads/2020/03/Parc_Contour_Ban_renew.jpg',
  };
const spy = jest.spyOn(redux, 'useSelector')



describe('component', () => {
  describe('when banners is empty', () => {
    beforeEach(() => {
      spy.mockReturnValue({})
    })

    it('should NOT render <SuperiorSliderContainer>', () => {
      const component = mount(<SuperiorSlider/>);
      expect(component.find(SuperiorSliderContainer).exists()).toBeFalsy()
    })
  })

  describe('when banners have 1 and more items', () => {
    beforeEach(() => {
      spy.mockReturnValue(mock)
    })

    it('should render <SuperiorSlide>', () => {
      const component = mount(<SuperiorSlider/>);
      expect(component.find(SuperiorSlide).exists()).toBeTruthy()
    })

    it('should render <SuperiorSlideImg>', () => {
      const component = mount(<SuperiorSlider/>);
      expect(component.find(SuperiorSlideImg).exists()).toBeTruthy()
    })
  })
})