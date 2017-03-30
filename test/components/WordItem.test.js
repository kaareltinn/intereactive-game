import React from 'react'
import {shallow} from 'enzyme'

import WordItem from '../../src/js/components/WordItem'

describe('WordItem', () => {
  context('when guessed word does not match at all', () => {
    const guessed = 'ruler'
    const targetWord = 'basil'

    const wordItem = shallow(<WordItem guess={guessed} targetWord={targetWord} />)

    it('does not contain any correct letter', () => {
      expect(wordItem).to.not.contain.html('<span class="correct"></span')
    })
  })

  context('when guessed word match at a little', () => {
    const guessed = 'bosal'
    const targetWord = 'basil'

    const wordItem = shallow(<WordItem guess={guessed} targetWord={targetWord} />)

    it('does not contain any correct letter', () => {
      expect(wordItem).to.contain.html('<span class="correct">b</span')
      expect(wordItem).to.contain.html('<span class="incorrect">o</span')
    })
  })

  context('when guessed word match fully', () => {
    const guessed = 'basil'
    const targetWord = 'basil'

    const wordItem = shallow(<WordItem guess={guessed} targetWord={targetWord} />)

    it('does not contain any correct letter', () => {
      expect(wordItem).to.contain.html('<span class="correct">b</span')
      expect(wordItem).to.not.contain.html('<span class="incorrect">o</span')
    })
  })
})
