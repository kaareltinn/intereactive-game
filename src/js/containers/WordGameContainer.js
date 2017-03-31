import React from 'react'
import WordGame from '../WordGame'
import WordList from '../components/WordList'
import WordForm from '../components/WordForm'

class WordGameContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentGuess: '',
      wordGame: new WordGame
    }
  }

  handleKeyPress(e) {
    if (e.which === 13) {
      this.setState(
        {
          currentGuess: '',
          numberGame: this.state.wordGame.makeGuess(e.target.value)
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
        <p>Guess a 5 letter word</p>
        <WordForm
          type={'text'}
          isGuessed={this.state.wordGame.isGuessed}
          handleChange={this.handleChange.bind(this)}
          currentGuess={this.state.currentGuess}
        />
        <WordList guesses={this.state.wordGame.history} targetWord={this.state.wordGame.targetWord}/>
      </div>
    )
  }
}

export default WordGameContainer
