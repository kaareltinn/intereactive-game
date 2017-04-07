import React, {Component} from 'react'

class GuessForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentGuess: ''
    }
    this.onChange = this._handleChange.bind(this)
    this.onKeyPress = this._handleEnterPress.bind(this)
  }

  _handleChange(e) {
    this.setState({
      currentGuess: e.target.value
    })
  }

  _handleEnterPress(e) {
    if (e.which === 13) {
      if (this.props.type === 'number') {
        this.props.onSubmit(this.props.gameId, parseInt(this.state.currentGuess))
      } else if (this.props.type === 'text') {
        this.props.onSubmit(this.props.gameId, this.state.currentGuess)
      }
      this.setState({
        currentGuess: ''
      })
    }
  }

  render() {
    if (this.props.isGuessed) {
      return (
        <div>
          You won!
        </div>
      )
    } else {
      return (
        <input
          type={this.props.type}
          value={this.state.currentGuess}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />
      )
    }
  }
}

GuessForm.propTypes = {
  type: React.PropTypes.string.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  gameId: React.PropTypes.number.isRequired,
  isGuessed: React.PropTypes.bool.isRequired
}

export default GuessForm


