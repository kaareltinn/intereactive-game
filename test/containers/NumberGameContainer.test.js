import React from 'react'
import {shallow} from 'enzyme'

import NumberGameContainer from '../../src/js/containers/NumberGameContainer'
import GuessList from '../../src/js/components/GuessList'
import WordForm from '../../src/js/components/WordForm'

describe('NumberGameContainer', () => {
  it('initially renders empty GuessList', () => {
    const app = shallow(<NumberGameContainer />)
    const targetNumber = app.state('numberGame').targetNumber
    expect(
      app
    ).to.contain(
      <GuessList guesses={[]} targetNumber={targetNumber}/>
    )
  })

  context('when incorrect guess made', () => {
    it('adds incorrect guess to GuessList', () => {
      const app = shallow(<NumberGameContainer />)
      const targetNumber = app.state('numberGame').targetNumber
      let form = app.find(WordForm)

      form.simulate('change', {target: {value: targetNumber + 1}})
      app.props().onKeyPress({which: 13, target: {value: targetNumber + 1}})

      expect(
        app
      ).to.contain(
        <GuessList
          guesses={[
            {guess: targetNumber + 1, message: 'was greater than target'}
          ]}
          targetNumber={targetNumber}
        />
      )
    })
  })

  context('when correct guess made', () => {
    it('adds correct guess to GuessList', () => {
      const app = shallow(<NumberGameContainer />)
      const targetNumber = app.state('numberGame').targetNumber
      let form = app.find(WordForm)

      form.simulate('change', {target: {value: targetNumber}})
      app.props().onKeyPress({which: 13, target: {value: targetNumber}})

      expect(
        app
      ).to.contain(
        <GuessList
          guesses={[
            {guess: targetNumber, message: 'was correct'}
          ]}
          targetNumber={targetNumber}
        />
      )
    })
  })
})
