import React from 'react'
import {shallow} from 'enzyme'

import WordList from '../../src/js/components/WordList'
import WordItem from '../../src/js/components/WordItem'

describe('WordList', () => {
  context('when no guesses', () => {
    const wordList = shallow(
      <WordList
        guesses={[]}
      />
    )

    it('renders without descendatnts', () => {
      expect(wordList).to.not.contain.descendants(WordItem)
    })
  })

  context('when guess made', () => {
    const wordList = shallow(
      <WordList
        guesses={['basil']}
        targetWord={'basil'}
      />
    )

    it('renders with descendants', () => {
      expect(wordList).to.contain(
        <WordItem
          guess={'basil'}
          targetWord={'basil'}
        />
      )
    })
  })

  context('when several guesses made', () => {
    const wordList = shallow(
      <WordList
        guesses={['ruler', 'basil']}
        targetWord={'basil'}
      />
    )

    it('renders with descendants', () => {
      expect(wordList).to.contain(
        <WordItem
          guess={'basil'}
          targetWord={'basil'}
        />
      )
      expect(wordList).to.contain(
        <WordItem
          guess={'ruler'}
          targetWord={'basil'}
        />
      )
    })
  })
})
