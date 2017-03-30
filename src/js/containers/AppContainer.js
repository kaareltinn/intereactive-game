import React from 'react'
import R from 'ramda'
import NumberGameContainer from './NumberGameContainer'
import WordGameContainer from './WordGameContainer'

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      games: []
    }
  }

  _createNumberGame() {
    const key = this.state.length
    this.setState(
      {
        games: R.concat(this.state.games, [<NumberGameContainer key={key}/>])
      }
    )
  }

  _createWordGame() {
    const key = this.state.length
    this.setState(
      {
        games: R.concat(this.state.games, [<WordGameContainer key={key}/>])
      }
    )
  }

  render() {
    return(
      <div>
        <button id="create-number-game" onClick={this._createNumberGame.bind(this)}>
          Create Number game
        </button>
        <button id="create-word-game" onClick={this._createWordGame.bind(this)}>
          Create Word game
        </button>
        <div className="games-container">
          {this.state.games}
        </div>
      </div>
    )
  }
}

export default AppContainer
