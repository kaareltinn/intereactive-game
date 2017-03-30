import React from 'react'
import {shallow} from 'enzyme'

import WordGameContainer from '../../src/js/containers/WordGameContainer'
import WordList from '../../src/js/components/WordList'
import WordForm from '../../src/js/components/WordForm'

describe('WordGameContainer', () => {
  it('renders empty WordList', () => {
    const container = shallow(<WordGameContainer />)
    const targetWord = container.state('wordGame').targetWord

    expect(
      container
    ).to.contain(
      <WordList guesses={[]} targetWord={targetWord} />
    )
  })

  context('when incorrect guess made', () => {
    it('adds incorrect guess to GuessList', () => {
      const app = shallow(<WordGameContainer />)
      const targetWord = app.state('wordGame').targetWord
      let form = app.find(WordForm)

      form.simulate('change', {target: {value: 'foo'}})
      app.props().onKeyPress({which: 13, target: {value: 'foo'}})

      expect(
        app
      ).to.contain(
        <WordList
          guesses={[
            'foo'
          ]}
          targetWord={targetWord}
        />
      )
    })
  })

  context('when correct guess made', () => {
    it('adds correct guess to GuessList', () => {
      const app = shallow(<WordGameContainer />)
      const targetWord = app.state('wordGame').targetWord
      let form = app.find(WordForm)

      form.simulate('change', {target: {value: targetWord}})
      app.props().onKeyPress({which: 13, target: {value: targetWord}})

      expect(
        app
      ).to.contain(
        <WordList
          guesses={[
            targetWord
          ]}
          targetWord={targetWord}
        />
      )
    })
  })
})
