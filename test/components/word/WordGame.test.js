import React from 'react'
import {shallow} from 'enzyme'

import WordGame from '../../../src/js/components/word/WordGame'
import GuessForm from '../../../src/js/components/GuessForm'
import WordList from '../../../src/js/components/word/WordList'

describe('WordGame', () => {
  const game = {
    id: 0,
    isGuessed: false,
    targetWord: 'basil',
    history: []
  }

  it('renders GuessForm and WordList as descendants', () => {
    const wordGame = shallow(<WordGame game={game} guessWord={sinon.spy()}/>)

    expect(wordGame).to.contain.descendants(GuessForm, WordList)
  })
})
