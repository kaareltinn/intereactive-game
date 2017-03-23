import NumberGame from '../src/js/NumberGame'

describe('NumberGame', () => {
  describe('#constructor()', () => {
    let newGame = new NumberGame

    describe('creates new instance of the game', () => {
      it('with random integer between 1 and 9', () => {
        expect(newGame.targetNumber).to.be.within(0, 9)
      })

      it('with isGuessed false', () => {
        expect(newGame.isGuessed).to.be.false
      })

      it('with empty history', () => {
        expect(newGame.history).to.be.empty
      })
    })
  })

  describe('#makeGuess()', () => {
    let numberGame = new NumberGame
    beforeEach(() => {
      numberGame.targetNumber = 5
      numberGame.history = []
      numberGame.isGuessed = false
    })

    context('when guess is wrong', () => {
      it('should not set isGuessed to true', () => {
        numberGame.makeGuess(6)
        expect(numberGame.isGuessed).to.be.false
      })

      it('should push guess to history', () => {
        numberGame.makeGuess(6)
        expect(numberGame.history.length).to.eql(1)
      })
    })

    context('when guess is correct', () => {
      it('should set isGuessed to true', () => {
        numberGame.makeGuess(5)
        expect(numberGame.isGuessed).to.be.true
      })

      it('should push guess to history', () => {
        numberGame.makeGuess(5)
        expect(numberGame.history.length).to.eql(1)
      })
    })

    it('saves guesses with messages to history', () => {
      numberGame.makeGuess(1)
      numberGame.makeGuess(9)
      numberGame.makeGuess(5)

      expect(numberGame.history).to.eql([
        {guess: 1, message: 'was lower than target'},
        {guess: 9, message: 'was greater than target'},
        {guess: 5, message: 'was correct'}
      ])
    })
  })
})
