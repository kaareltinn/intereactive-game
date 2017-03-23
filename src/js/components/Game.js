import React from 'react'
import NumberGame from '../NumberGame'
import GuessList from './GuessList'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentGuess: '',
      numberGame: new NumberGame
    }
  }

  handleKeyPress(e) {
    if (e.which === 13) {
      this.setState(
        {
          currentGuess: '',
          numberGame: this.state.numberGame.makeGuess(parseInt(e.target.value))
        }
      )
    }
  }

  handleChange(e) {
    this.setState({currentGuess: e.target.value})
  }

  render() {
    return (
      <div className="container" onKeyPress={this.handleKeyPress.bind(this)}>
        <h1>Game Lobby</h1>
        <p>Guess a number from 0 to 9</p>
        <input type="number"
          disabled={this.state.numberGame.isGuessed}
          value={this.state.currentGuess}
          onChange={this.handleChange.bind(this)}
        />
        <GuessList guesses={this.state.numberGame.history} targetNumber={this.state.numberGame.targetNumber}/>
      </div>
    )
  }
}

export default Game

