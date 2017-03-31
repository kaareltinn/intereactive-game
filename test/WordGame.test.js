import WordGame from '../src/js/WordGame'

describe('WordGame', () => {
  describe('#constructor', () => {
    let wordGame = new WordGame

    describe('creates new instance of the game', () => {
      it('picks random string from given array', () => {
        expect(['paper', 'grill', 'basil', 'hinge', 'ruler']).to.include(wordGame.targetWord)
      })

      it('with isGuessed false', () => {
        expect(wordGame.isGuessed).to.be.false
      })

      it('with empty history', () => {
        expect(wordGame.history).to.be.empty
      })
    })
  })

  describe('#makeGuess', () => {
    let wordGame = new WordGame
    beforeEach(() => {
      wordGame.targetWord = 'basil'
      wordGame.isGuessed = false
      wordGame.history = []
    })

    context('when making incorrect guess', () => {
      it('does not set isGuessed true', () => {
        wordGame.makeGuess('ruler')
        expect(wordGame.isGuessed).to.be.false
      })

      it('saves guess to history', () => {
        wordGame.makeGuess('ruler')
        expect(wordGame.history).to.eql(['ruler'])
      })
    })

    context('when making correct guess', () => {
      it('sets isGuessed to true', () => {
        wordGame.makeGuess('basil')
        expect(wordGame.isGuessed).to.be.true
      })

      it('saves guess to history', () => {
        wordGame.makeGuess('basil')
        expect(wordGame.history).to.eql(['basil'])
      })
    })
  })
})
