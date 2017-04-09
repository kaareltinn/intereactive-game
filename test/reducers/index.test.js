import {
  addNumberGame,
  addWordGame,
  guessNumber,
  guessWord
} from '../../src/js/actions'
import reducer, {
  buildNumberGame,
  buildWordGame,
} from '../../src/js/reducers'

describe('GamesReducer', () => {
  it('has no games initially', () => {
    expect(reducer(undefined, {})).to.eql({games: []})
  })

  describe('ADD_NUMBER_GAME', () => {
    const state = reducer(undefined, addNumberGame())

    it('adds new number game', () => {
      expect(state.games.length).to.eql(1)
    })

    it('adds correct type of game', () => {
      expect(state.games[0]).to.have.ownProperty('targetNumber')
    })

    it('generates random number between 0 and 9', () => {
      expect(state.games[0].targetNumber).to.be.within(0, 9)
    })

    context('when another number game is added', () => {
      const newState = reducer(state, addNumberGame())

      it('adds new number game', () => {
        expect(newState.games.length).to.eql(2)
      })

      it('increases game id by one', () => {
        expect(newState.games[0].id).to.eql(0)
        expect(newState.games[1].id).to.eql(1)
      })
    })
  })

  describe('ADD_WORD_GAME', () => {
    const state = reducer(undefined, addWordGame())

    it('adds new word game', () => {
      expect(state.games.length).to.eql(1)
    })

    it('adds correct type of game', () => {
      expect(state.games[0]).to.have.ownProperty('targetWord')
    })

    it('generates random number between 0 and 9', () => {
      expect(state.games[0].targetWord).to.be.oneOf(['paper', 'grill', 'basil', 'hinge', 'ruler'])
    })

    context('when another word game is added', () => {
      const newState = reducer(state, addWordGame())

      it('adds new word game', () => {
        expect(newState.games.length).to.eql(2)
      })

      it('increases game id by one', () => {
        expect(newState.games[0].id).to.eql(2) // This is sketchy.
        expect(newState.games[1].id).to.eql(3)
      })
    })
  })

  describe('GUESS_NUMBER', () => {
    const initialState = {
      games: [
        buildNumberGame(0, 5)
      ]
    }

    context('when guess is lower than target', () => {
      const state = reducer(initialState, guessNumber(0, 4))

      it('does not set isGuessed to true', () => {
        expect(state.games[0].isGuessed).not.to.be.true
      })

      it('updates history correctly', () => {
        expect(state.games[0].history).to.eql([{guess: 4, message: 'was lower than target'}])
      })

      context('when guess is greate than target', () => {
        const newState = reducer(state, guessNumber(0, 6))

        it('does not set isGuessed to true', () => {
          expect(newState.games[0].isGuessed).not.to.be.true
        })

        it('updates history correctly', () => {
          expect(newState.games[0].history).to.eql(
            [
              {guess: 4, message: 'was lower than target'},
              {guess: 6, message: 'was greater than target'}
            ]
          )
        })

        context('when guess is correct', () => {
          const anotherNewState = reducer(newState, guessNumber(0, 5))

          it('sets isGuessed to true', () => {
            expect(anotherNewState.games[0].isGuessed).to.be.true
          })

          it('updates history correctly', () => {
            expect(anotherNewState.games[0].history).to.eql(
              [
                {guess: 4, message: 'was lower than target'},
                {guess: 6, message: 'was greater than target'},
                {guess: 5, message: 'was correct'}
              ]
            )
          })
        })
      })
    })
  })

  describe('GUESS_WORD', () => {
    const initialState = {
      games: [
        buildWordGame(0, 'basil')
      ]
    }

    context('when guess is incorrect', () => {
      const state = reducer(initialState, guessWord(0, 'ruler'))

      it('does not set isGuessed to true', () => {
        expect(state.games[0].isGuessed).not.to.be.true
      })

      it('updates history correctly', () => {
        expect(state.games[0].history).to.eql(['ruler'])
      })

      context('when guess is correct', () => {
        const newState = reducer(state, guessWord(0, 'basil'))

        it('sets isGuessed true', () => {
          expect(newState.games[0].isGuessed).to.be.true
        })

        it('updates history correctly', () => {
          expect(newState.games[0].history).to.eql(['ruler', 'basil'])
        })
      })
    })
  })

  describe('buildNumberGame', () => {
    const numberGame = buildNumberGame(0, 5)

    it('builds initial number game', () => {
      expect(numberGame).to.eql(
        {
          id: 0,
          targetNumber: 5,
          isGuessed: false,
          history: []
        }
      )
    })
  })

  describe('buildWordGame', () => {
    const wordGame = buildWordGame(0, 'basil')

    it('builds initial word game', () => {
      expect(wordGame).to.eql(
        {
          id: 0,
          targetWord: 'basil',
          isGuessed: false,
          history: []
        }
      )
    })
  })
})
