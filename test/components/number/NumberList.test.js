import React from 'react'
import {shallow} from 'enzyme'

import NumberList from '../../../src/js/components/number/NumberList'
import NumberItem from '../../../src/js/components/number/NumberItem'

describe('NumberList', () => {
  context('when no guesses', () => {
    const numberList = shallow(
      <NumberList
        guesses={[]}
      />
    )

    it('renders without descendants', () => {
      expect(numberList).to.not.contain.descendants(NumberItem)
    })
  })
})
