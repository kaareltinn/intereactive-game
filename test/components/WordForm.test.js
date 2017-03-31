import React from 'react'
import {shallow} from 'enzyme'

import WordForm from '../../src/js/components/WordForm'

describe('WordForm', () => {
  context('when isGuessed is true', () => {
    const wordForm = shallow(
      <WordForm
        isGuessed={true}
      />
    )

    it('renders win message', () => {
      expect(wordForm).to.contain(
        <div>
          You won!
        </div>
      )
    })
  })

  context('when isGuessed is false', () => {
    const handleChange = sinon.spy()
    const wordForm = shallow(
      <WordForm
        type={'text'}
        isGuessed={false}
        currentGuess={''}
        handleChange={handleChange}
      />
    )

    it('renders input', () => {
      expect(wordForm).to.contain(
        <input type="text"
          value={''}
          onChange={handleChange}
        />
      )
    })

    it('triggers handleChange when typed', () => {
      wordForm.simulate('change', {target: {value: 'b'}})
      expect(handleChange.called).to.be.true
    })
  })
})
