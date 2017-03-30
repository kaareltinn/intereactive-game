import React from 'react'
import NumberGame from '../NumberGame'
import GuessList from '../components/GuessList'
import WordForm from '../components/WordForm'

class NumberGameContainer extends React.Component {
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
      <div className="game-container" onKeyPress={this.handleKeyPress.bind(this)}>
        <p>Guess a number from 0 to 9</p>
        <WordForm
          type={'number'}
          isGuessed={this.state.numberGame.isGuessed}
          currentGuess={this.state.currentGuess}
          handleChange={this.handleChange.bind(this)}
        />
        <GuessList
          guesses={this.state.numberGame.history}
          targetNumber={this.state.numberGame.targetNumber}
        />
      </div>
    )
  }
}

export default NumberGameContainer

