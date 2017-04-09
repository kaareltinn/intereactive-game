import React from 'react'
import {shallow} from 'enzyme'

import Button from '../../src/js/components/Button'

describe('Button', () =>{
  it('renders button with text', () => {
    const button = shallow(<Button text="Foo" onClick={sinon.spy()} />)
    expect(button).to.have.html(
      '<button>Foo</button>'
    )
  })
})
