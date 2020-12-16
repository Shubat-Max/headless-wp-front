import * as React from "react"
import * as redux from 'react-redux'
import {mount} from "enzyme"
import {useSelector} from "react-redux";
import ProductCollectibles from "./ProductCollectibles";
import {SCProductCollectibles} from "./ProductCollectibles.sc";

const mock = []
const spy = jest.spyOn(redux, 'useSelector')

describe('component', () => {
  describe('when collectiblesAmount is undefined', () => {
    beforeEach(() => {
      spy.mockReturnValue(undefined)
    })

    it('should NOT render <SCProductCollectibles>', () => {
      const component = mount(<ProductCollectibles/>);
      expect(component.find(SCProductCollectibles).exists()).toBeFalsy()
    })
  })
})
