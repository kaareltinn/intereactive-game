import React from 'react'

const WordForm = (props) => {
  if (props.isGuessed) {
    return (
      <div>
        You won!
      </div>
    )
  } else {
    return (
      <input
        type={props.type}
        value={props.currentGuess}
        onChange={props.handleChange}
      />
    )
  }
}

WordForm.propTypes = {
  type: React.PropTypes.string.isRequired,
  isGuessed: React.PropTypes.bool.isRequired,
  currentGuess: React.PropTypes.string.isRequired,
  handleChange: React.PropTypes.func.isRequired
};

export default WordForm
