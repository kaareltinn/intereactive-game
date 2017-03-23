import React from 'react'
import GuessItem from './GuessItem'

const GuessList = (props) => {
  const guesses = props.guesses.map((guess, key) => {
    return (
      <GuessItem
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

GuessList.propTypes = {
  guesses: React.PropTypes.arrayOf(React.PropTypes.shape({
    guess: React.PropTypes.number,
    message: React.PropTypes.string,
    targetNumber: React.PropTypes.number
  })).isRequired,
  targetNumber: React.PropTypes.number.isRequired,
};

export default GuessList
