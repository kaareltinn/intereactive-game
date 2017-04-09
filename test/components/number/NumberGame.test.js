import React from 'react'
import {shallow} from 'enzyme'

import NumberGame from '../../../src/js/components/number/NumberGame'
import GuessForm from '../../../src/js/components/GuessForm'
import NumberList from '../../../src/js/components/number/NumberList'

describe('NumberGame', () => {
  const game = {
    id: 0,
    isGuessed: false,
    targetNumber: 5,
    history: []
  }

  it('renders GuessForm and NumberList as descendants', () => {
    const numberGame = shallow(<NumberGame game={game} guessNumber={sinon.spy()}/>)

    expect(numberGame).to.contain.descendants(GuessForm, NumberList)
  })
})
