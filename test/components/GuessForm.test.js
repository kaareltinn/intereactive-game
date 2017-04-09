import React from 'react'
import {shallow} from 'enzyme'

import GuessForm from '../../src/js/components/GuessForm'

describe('GuessForm', () => {
  context('when isGuessed is true', () => {
    const guessForm = shallow(
      <GuessForm
        isGuessed={true}
      />
    )

    it('renders win message', () => {
      expect(guessForm).to.contain(
        <div>
          You won!
        </div>
      )
    })
  })

  context('when isGuessed is false', () => {
    const handleEnterPress = sinon.stub()

    const guessForm = shallow(
      <GuessForm
        type={'text'}
        isGuessed={false}
        onSubmit={handleEnterPress}
        gameId={1}
      />
    )

    it('renders input', () => {
      expect(guessForm.html()).to.equal(
        '<input type="text" value=""/>'
      )
    })

    it('triggers handleChange when enter', () => {
      guessForm.props().onKeyPress({which: 13})
      expect(handleEnterPress).to.be.calledWith(1, '')
    })
  })
})
