import React from 'react'
import NumberList from './NumberList'
import GuessForm from '../GuessForm'

const NumberGame = ({game, guessNumber}) => {
  return (
    <div className="game-container">
      <p>Guess a number between 0 and 9.</p>
      <GuessForm
        type="number"
        isGuessed={game.isGuessed}
        onSubmit={guessNumber}
        gameId={game.id}
      />
      <NumberList
        guesses={game.history}
        targetNumber={game.targetNumber}
      />
    </div>
  )
}

NumberGame.propTypes = {
  game: React.PropTypes.object.isRequired,
  guessNumber: React.PropTypes.func.isRequired
}

export default NumberGame
