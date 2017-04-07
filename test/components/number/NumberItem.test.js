import React from 'react'
import {shallow} from 'enzyme'

import NumberItem from '../../../src/js/components/number/NumberItem'

describe('NumberItem', () => {
  context('when guess and targetNumber are equal', () => {
    const numberItem = shallow(
      <NumberItem
        guess={1}
        targetNumber={1}
        message={'was correct'}
      />
    )

    it('renders with className="correct"', () => {
      expect(numberItem).to.have.className('correct')
    })
  })

  context('when guess and targetNumber are not equal', () => {
    const numberItem = shallow(
      <NumberItem
        guess={1}
        targetNumber={2}
        message={'was lower than target'}
      />
    )

    it('renders with className="incorrect"', () => {
      expect(numberItem).to.have.className('incorrect')
    })
  })
})
