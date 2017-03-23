class NumberGame {
  constructor() {
    this.targetNumber = Math.floor(Math.random() * (9 - 0 + 1)) + 0 // min = 0, max = 9 (both inclusive)
    this.isGuessed = false
    this.history = []
  }

  makeGuess(guess) {
    if (guess === this.targetNumber) {
      this.history.push(
        {guess: guess, message: 'was correct'}
      )
      this.isGuessed = true
    } else if (this.targetNumber > guess) {
      this.history.push(
        {guess: guess, message: 'was lower than target'}
      )
    } else if (this.targetNumber < guess) {
      this.history.push(
        {guess: guess, message: 'was greater than target'}
      )
    }
    return this
  }
}

export default NumberGame
