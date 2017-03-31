class WordGame {
  constructor() {
    this.targetWord = WordGame.pickWord()
    this.isGuessed = false
    this.history = []
  }

  static pickWord() {
    const words = ['paper', 'grill', 'basil', 'hinge', 'ruler']
    return words[Math.floor(Math.random() * words.length)]
  }

  makeGuess(guess) {
    if (guess == this.targetWord) this.isGuessed = true
    this.history.push(guess)
  }
}

export default WordGame
