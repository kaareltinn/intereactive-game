import React from 'react'
import {shallow} from 'enzyme'

import AppContainer from '../../src/js/containers/AppContainer'
import NumberGameContainer from '../../src/js/containers/NumberGameContainer'

describe('AppContainer', () => {
  it('initially renders "Create Number game" button', () => {
    const app = shallow(<AppContainer />)

    expect(app.find('#create-number-game')).to.have.html(
      '<button id="create-number-game">Create Number game</button>'
    )
  })

  it('creates new number game when button clicked', () => {
    const app = shallow(<AppContainer />)

    app.find('#create-number-game').simulate('click')

    expect(app).to.contain(<NumberGameContainer />)
  })
})
