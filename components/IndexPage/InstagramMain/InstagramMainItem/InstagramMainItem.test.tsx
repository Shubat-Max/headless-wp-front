import * as React from "react"
import * as redux from 'react-redux'
import {mount} from "enzyme"

const spy = jest.spyOn(redux, 'useSelector')



describe('component', () => {
  describe('when missing required values', () => {
    beforeEach(() => {
      spy.mockReturnValue({})
    })

  })
})
