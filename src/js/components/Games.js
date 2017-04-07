import React from 'react'
import NumberGame from './number/NumberGame'
import WordGame from './word/WordGame'

const Games = (props) => {
  const games = props.games.map((game) => {
    if (game.hasOwnProperty('targetNumber'))
      return (<NumberGame game={game} guessNumber={props.guessNumber} key={game.id}/>)
    else return (<WordGame game={game} guessWord={props.guessWord} key={game.id} />)
  })
  return (
    <div className="games-container">
      {games}
    </div>
  )
}

Games.propTypes = {
  games: React.PropTypes.array.isRequired,
  guessNumber: React.PropTypes.func.isRequired,
  guessWord: React.PropTypes.func.isRequired
}

export default Games
