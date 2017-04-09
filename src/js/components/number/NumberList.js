import React from 'react'
import NumberItem from './NumberItem'

const NumberList = (props) => {
  const guesses = props.guesses.map((guess, key) => {
    return (
      <NumberItem
        guess={guess.guess}
        message={guess.message}
        targetNumber={props.targetNumber}
        key={key}
      />
    )
  })
  return (
    <div className="guess-list">
      {guesses}
    </div>
  )
}

NumberList.propTypes = {
  guesses: React.PropTypes.arrayOf(React.PropTypes.shape({
    guess: React.PropTypes.number,
    message: React.PropTypes.string,
    targetNumber: React.PropTypes.number
  })).isRequired,
  targetNumber: React.PropTypes.number.isRequired,
};

export default NumberList
