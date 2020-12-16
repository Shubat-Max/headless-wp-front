import * as React from "react"
import {mount} from "enzyme"
import SimpleProductPolaroid from "./SimpleProductPolaroid";
import {
  PolaroidCard,
  SnapshotPrice,
  SnapshotRegularPrice,
  SnapshotSubtitle,
  SnapshotTitle
} from "./SimpleProductPolaroid.sc";
import {formatPrice, formatSubtitle} from "../../../utils";

const data = {image: "https://skdesign.ru/wp-content/uploads/2020/04/Mendini1-263x263.jpg",
name: "Scott",
pid: "109728",
price: 17200,
slug: "divan-rio-dvuhmestniy",
subtitle:["диван", "двухместный"],
tags:["ПОПУЛЯРНЫЕ ТОВАРЫ", "НОВИНКИ", "КРОВАТИ"]}


describe('component', () => {
  describe('when missing required values', () => {

    it('should NOT render <PolaroidCard>', () => {
      const component = mount(<SimpleProductPolaroid data={null}/>);
      expect(component.find(PolaroidCard).exists()).toBeFalsy()
    })
  })

  describe('when have only data, missing options', () => {
    it('should render <PolaroidCard>', () => {
      const component = mount(<SimpleProductPolaroid data={data}/>);
      expect(component.find(PolaroidCard).exists()).toBeTruthy()
    })

    it('should render <PolaroidCard>', () => {
      const component = mount(<SimpleProductPolaroid data={data}/>);
      expect(component.find(SnapshotTitle).text()).toBe(data.name)
    })
    it('should render <PolaroidCard>', () => {
      const component = mount(<SimpleProductPolaroid data={data}/>);
      expect(component.find(SnapshotSubtitle).exists()).toBe(formatSubtitle(data.subtitle))
    })

    it('should render <PolaroidCard>', () => {
      const component = mount(<SimpleProductPolaroid data={data}/>);
      expect(component.find(SnapshotPrice).text()).toBe(formatPrice(data.price))
    })

    describe('when regularPrice is empty', () => {
      it('should render <PolaroidCard>', () => {
        const component = mount(<SimpleProductPolaroid data={data}/>);
        expect(component.find(SnapshotRegularPrice).exists()).toBeFalsy()
      })
    })

    describe('when regularPrice is have', () => {
      it('should render <PolaroidCard>', () => {
        const component = mount(<SimpleProductPolaroid data={{...data, regularPrice:  20000}}/>);
        expect(component.find(SnapshotRegularPrice).text()).toBe(formatPrice(20000))
      })
    })
  })

  describe('when have only data and options', () => {
    it('should render <PolaroidCard>', () => {
      const component = mount(<SimpleProductPolaroid data={data}/>);
      expect(component.find(PolaroidCard).exists()).toBeTruthy()
    })

    it('should render <PolaroidCard>', () => {
      const component = mount(<SimpleProductPolaroid data={data}/>);
      expect(component.find(SnapshotTitle).text()).toBe(data.name)
    })
    it('should render <PolaroidCard>', () => {
      const component = mount(<SimpleProductPolaroid data={data}/>);
      expect(component.find(SnapshotSubtitle).text()).toBe(formatSubtitle(data.subtitle))
    })

    it('should render <PolaroidCard>', () => {
      const component = mount(<SimpleProductPolaroid data={data}/>);
      expect(component.find(SnapshotPrice).text()).toBe(formatPrice(data.price))
    })

    it('should render <PolaroidCard>', () => {
      const component = mount(<SimpleProductPolaroid data={data}/>);
      expect(component.find(SnapshotPrice).text()).toBe(formatPrice(data.price))
    })
  })
})
