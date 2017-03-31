import React from 'react'
import R from 'ramda'

const WordItem = (props) => {
  const guessList = props.guess.split('')
  const targetList = props.targetWord.split('')

  const word = R.zip(guessList, targetList).map(([guessed, target], key) => {
    if (guessed === target) {
      return <span className="correct" key={key}>{guessed}</span>
    } else {
      return <span className="incorrect" key={key}>{guessed}</span>
    }
  })

  return (
    <div>
      {word}
    </div>
  )
}

WordItem.propTypes = {
  guess: React.PropTypes.string.isRequired,
  targetWord: React.PropTypes.string.isRequired
};

export default WordItem
