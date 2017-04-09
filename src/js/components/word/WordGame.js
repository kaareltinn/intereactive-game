import React from 'react'
import WordList from './WordList'
import GuessForm from '../GuessForm'

const WordGame = ({game, guessWord}) => {
  return (
    <div className="game-container">
      <p>Guess 5 letter word.</p>
      <GuessForm
        type="text"
        isGuessed={game.isGuessed}
        onSubmit={guessWord}
        gameId={game.id}
      />
      <WordList
        guesses={game.history}
        targetWord={game.targetWord}
      />
    </div>
  )
}

WordGame.propTypes = {
  game: React.PropTypes.object.isRequired,
  guessWord: React.PropTypes.func.isRequired
}

export default WordGame
