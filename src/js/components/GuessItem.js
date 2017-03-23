import React from 'react'

const GuessItem = (props) => {
  return (
    <div className={props.guess == props.targetNumber ? 'correct' : 'incorrect'}>
      <p className="guess-item">{props.guess}: {props.message}</p>
    </div>
  )
}

GuessItem.propTypes = {
  guess: React.PropTypes.number.isRequired,
  message: React.PropTypes.string.isRequired,
  targetNumber: React.PropTypes.number.isRequired,
};

export default GuessItem
