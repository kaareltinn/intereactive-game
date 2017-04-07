import React from 'react'
import Button from './Button'

const Buttons = (props) => {
  return (
    <div>
      <Button
        text="Create number game"
        onClick={props.addNumberGame}
      />
      <Button
        text="Create word game"
        onClick={props.addWordGame}
      />
    </div>
  )
}

Buttons.propTypes = {
  addNumberGame: React.PropTypes.func.isRequired,
  addWordGame: React.PropTypes.func.isRequired
}

export default Buttons
