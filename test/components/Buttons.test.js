import React from 'react'
import {shallow} from 'enzyme'

import Buttons from '../../src/js/components/Buttons'
import Button from '../../src/js/components/Button'

describe('Buttons', () => {
  it('renders two buttons', () => {
    const addNumberGame = sinon.spy()
    const addWordGame = sinon.spy()
    const buttons = shallow(
      <Buttons
        addNumberGame={addNumberGame}
        addWordGame={addWordGame}
      />
    )

    expect(buttons).to.contain(
      <Button
        text="Create number game"
        onClick={addNumberGame}
      />
    )
    expect(buttons).to.contain(
      <Button
        text="Create word game"
        onClick={addWordGame}
      />
    )
  })
})
