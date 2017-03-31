import React from 'react'
import {shallow} from 'enzyme'

import GuessItem from '../../src/js/components/GuessItem'

describe('GuessItem', () => {
  context('when guess and targetNumber are equal', () => {
    const guessItem = shallow(
      <GuessItem
        guess={1}
        targetNumber={1}
        message={'was correct'}
      />
    )

    it('renders with className="correct"', () => {
      expect(guessItem).to.have.className('correct')
    })
  })

  context('when guess and targetNumber are not equal', () => {
    const guessItem = shallow(
      <GuessItem
        guess={1}
        targetNumber={2}
        message={'was lower than target'}
      />
    )

    it('renders with className="incorrect"', () => {
      expect(guessItem).to.have.className('incorrect')
    })
  })
})
