import React from 'react'
import {shallow} from 'enzyme'

import Games from '../../src/js/components/Games'
import NumberGame from '../../src/js/components/number/NumberGame'
import WordGame from '../../src/js/components/word/WordGame'

describe('Games', () => {
  context('when no games', () => {
    const games = []

    it('renders no games', () => {
      const wrapper = shallow(<Games games={games} />)
      expect(wrapper).not.to.contain.descendants(NumberGame, WordGame)
    })
  })

  context('when games present', () => {
    const games = [
      {
        id: 0,
        isGuessed: false,
        targetNumber: 5,
        history: []
      },
      {
        id: 1,
        isGuessed: false,
        targetWord: 'basil',
        history: []
      }
    ]

    it('renders with games', () => {
      const wrapper = shallow(
        <Games
          games={games}
          guessNumber={sinon.spy()}
          guessWord={sinon.spy()}
        />
      )
      expect(wrapper).to.contain.descendants(NumberGame, WordGame)
    })
  })
})

