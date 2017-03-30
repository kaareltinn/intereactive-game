import React from 'react'
import {shallow} from 'enzyme'

import GuessList from '../../src/js/components/GuessList'
import GuessItem from '../../src/js/components/GuessItem'

describe('GuessList', () => {
  context('when no guesses', () => {
    const guessList = shallow(
      <GuessList
        guesses={[]}
      />
    )

    it('renders without descendants', () => {
      expect(guessList).to.not.contain.descendants(GuessItem)
    })
  })
})
